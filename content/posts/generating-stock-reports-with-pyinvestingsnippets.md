---
title: Pyinvestingsnippets
description: A python library to aid stock and portfolio analysis and reporting.
date: 2021-10-03T11:00:00.000Z
topic: automation
tags: python
author: chris
colab: https://colab.research.google.com/drive/1ffDTOO0xjlHWJR-XbyoRcoGiZvgN5L9-?usp=sharing
img: /static/python-module.jpeg
---

It's been a while since the last time! All this period, I was building a new python library :) This library extends pandas and implements most of the concepts we have discussed in earlier articles.

It is called `pyinvestingsnippets` and can be found [here](https://pyinvestingsnippets.readthedocs.io/en/latest/).

In practice, the library extends pandas series with attributes that perform stock analysis operations like:

* [Returns](https://www.investingsnippets.com/post/geometric-progression-and-compounding-of-returns)
* [Volatility](https://www.investingsnippets.com/post/measures-of-variability)
* [WealthIndex](https://www.investingsnippets.com/post/from-portfolio-wealth-index-to-index-fund)
* [Drawdown](https://www.investingsnippets.com/post/drawdown)
* [SRRI](https://www.esma.europa.eu/sites/default/files/library/2015/11/10_673.pdf)
* beta (I will write an article about that later on)

Bellow you can see how this library can be used to generate simple reports.

<details><summary>Package Installation</summary>
<p>

```python
%%capture
%pip install yahoofinancials
%pip install pyinvestingsnippets==1.0.0

import sys
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import seaborn as sns

import datetime

from yahoofinancials import YahooFinancials
import pandas as pd
import matplotlib.pyplot as plt
import dateutil.parser

import pyinvestingsnippets
```

</p>
</details>

<details><summary>Helper Functions</summary>
<p>

```python
def retrieve_stock_data(ticker, start, end):
    json = YahooFinancials(ticker).get_historical_price_data(start, end, "daily")
    columns=["adjclose"]  # ["open","close","adjclose"]
    df = pd.DataFrame(columns=columns)
    for row in json[ticker]["prices"]:
        d = dateutil.parser.isoparse(row["formatted_date"])
        df.loc[d] = [row["adjclose"]] # [row["open"], row["close"], row["adjclose"]]
    df.index.name = "date"
    df.columns = [ticker]
    return df
```

</p>
</details>

```python
# Let's first pick two assets to compare
ASSET_1 = 'AAPL'
ASSET_2 = 'SPY'

# We will work with the last 5 years of historical data
end_date = datetime.datetime.now()
start_date = end_date - datetime.timedelta(days=5 * 365)
end_date_frmt = end_date.strftime("%Y-%m-%d")
start_date_frmt = start_date.strftime("%Y-%m-%d")

# We fetch the historical prices from yahoofinance
asset1_prices = retrieve_stock_data(ASSET_1, start_date_frmt, end_date_frmt)
asset2_prices = retrieve_stock_data(ASSET_2, start_date_frmt, end_date_frmt)

# From the prices series we can now get the returns by using an extension
asset1_rets = asset1_prices[ASSET_1].prices.returns
asset2_rets = asset2_prices[ASSET_2].prices.returns

# We can get the wealth index from the returns
asset1_wi = asset1_rets.wealth_index
asset2_wi = asset2_rets.wealth_index

# and the drawdown from the wealth index
asset1_dd = asset1_wi.drawdown
asset1_dd_dur = asset1_dd.durations
asset2_dd = asset2_wi.drawdown
asset2_dd_dur = asset2_dd.durations

rolling_rets = pyinvestingsnippets.RollingReturns(asset1_rets.data, rolling_window=252)

# 3 month rolling annualized vol
rolling_vol = pyinvestingsnippets.RollingVolatility(asset1_rets.data, rolling_window=90, window=252)

# 30 days rolling beta
rolling_beta = pyinvestingsnippets.RollingBetaCovariance(asset2_rets.data, asset1_rets.data, 30)

# total beta
beta = pyinvestingsnippets.BetaCovariance(asset2_wi.monthly_returns.data, asset1_wi.monthly_returns.data)

# the downside risk as an ExponantiallyWeightedDownsideRisk
downside_risk = pyinvestingsnippets.ExponantiallyWeightedDownsideRisk(asset1_rets.data)

# the risk classes and the risk values for SRRI
asset1_srri_rc = asset1_prices[ASSET_1].prices.monthly_returns.srri.risk_class
asset1_srri_rv = asset1_prices[ASSET_1].prices.monthly_returns.srri.value
asset2_srri_rc = asset2_prices[ASSET_2].prices.monthly_returns.srri.risk_class
asset2_srri_rv = asset2_prices[ASSET_2].prices.monthly_returns.srri.value
```

The outcome as a plot looks like:

<details><summary>Generate a report with matplotlib</summary>
<p>

```python
fig = plt.figure(figsize=(14, 16), constrained_layout=True)
fig.suptitle("Report", weight='bold')
gs = gridspec.GridSpec(5, 6, figure=fig)

ax_equity = plt.subplot(gs[0, :])
ax_drawdown = plt.subplot(gs[1, :])
ax_monthly_returns = plt.subplot(gs[2, :3])
ax_yearly_returns = plt.subplot(gs[2, 3:])
ax_rolling_returns = plt.subplot(gs[3, :2])
ax_rolling_vol = plt.subplot(gs[3, 2:4])
ax_downside_risk = plt.subplot(gs[3, 4:])
ax_stats = plt.subplot(gs[4, :3])
ax_beta = plt.subplot(gs[4, 3:])

asset1_wi.plot(ax=ax_equity, color='blue', label=ASSET_1)
asset2_wi.plot(ax=ax_equity, color='grey', label=ASSET_2)

asset1_dd.plot(ax=ax_drawdown, color='blue')
asset2_dd.plot(ax=ax_drawdown, color='grey')

asset1_wi.monthly_returns.plot(ax=ax_monthly_returns, color='blue')
asset1_wi.annual_returns.plot(ax=ax_yearly_returns, color='blue')
rolling_beta.plot(ax=ax_beta, color='blue', label='cov')

rolling_rets.plot(ax=ax_rolling_returns, color='blue')
rolling_vol.plot(ax=ax_rolling_vol, color='blue')

downside_risk.plot(ax=ax_downside_risk, color='blue')

def _plot_stats(ax=None, **kwargs):
    if ax is None:
        ax = plt.gca()

    data = [
        ['Total Return', '{:.0%}'.format(asset1_wi.total_return), '{:.0%}'.format(asset2_wi.total_return)],
        ['CAGR', '{:.2%}'.format(asset1_wi.cagr), '{:.2%}'.format(asset2_wi.cagr)],
        ['Max Drawdown', '{:.2%}'.format(asset1_dd.max_drawdown), '{:.2%}'.format(asset2_dd.max_drawdown)],
        ['Avg Drawdown Duration', asset1_dd_dur.mean(), asset2_dd_dur.mean()],
        ['Max Drawdown Duration', asset1_dd_dur.max(), asset2_dd_dur.max()],
        ['SRRI', '{}/7 ({:.2%})'.format(asset1_srri_rc, asset1_srri_rv),
                 '{}/7 ({:.2%})'.format(asset2_srri_rc, asset2_srri_rv)],
        ['Beta', '{:.2}'.format(beta.beta), '1']
    ]
    column_labels=["Metric", f"{ASSET_1}", f"{ASSET_2}"]
    ax.axis('tight')
    ax.axis('off')
    table = ax.table(cellText=data, colLabels=column_labels, loc="center", edges='open')
    table.set_fontsize(10)
    table.scale(1.5, 1.5)

    ax.grid(False)
    ax.get_yaxis().set_visible(False)
    ax.get_xaxis().set_visible(False)
    ax.set_ylabel("Stats")
    ax.set_xlabel('')

    ax.axis([0, 10, 0, 10])

    return ax

_plot_stats(ax=ax_stats)

plt.show()
```

</p>
</details>
    
![png](generating-stock-reports-with-pyinvestingsnippets/generating-stock-reports-with-pyinvestingsnippets_5_0.png)

As a next step, I will extend this module to support even more metrics and portfolio functions.

As always, stay tuned!
