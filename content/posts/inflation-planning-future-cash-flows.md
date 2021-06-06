---
title: Inflation - Planning Forward!
description: How to plan for future cash flows taking into account inflation, taxes and fees.
date: 2021-05-23T11:00:00.000Z
topic: investing
tags: python
author: chris
img: /static/inflation.jpeg
colab: https://drive.google.com/file/d/13aiLUQUIXhfjfnO_20U4Dap0tsfRiF-B/view?usp=sharing
---

Inflation is the reason behind the erosion of the value of money over time. 1\$ today is more valuable that 1\$ after 5 years given a positive Inflation rate. I will not get into the details of what inflation is since there is lots of literature around that.

In this article I will showcase how to plan the financing of future expenses by including inflation, taxes on earnings and annual fees.

Let's see that with an example. Let's assume that a person decides a job break for 3 years. Estimates his/her monthly expenses to be 300\$. What is the initial amount of money the person needs to have to be able to fulfill their goal?

The quick response to that is $3 * 12 * 300 = 10800$\$! but that is not actually true due to the inflation. Let's (for the sake of the example) say that the inflation is 2% per year. That means that 1\$ today will be valued at $1*\frac{1}{1 + .02}=0.9804$\$ in one year from now.

So, for the first year, the person will pay 3600\$ but the actual cost of 3600\$ today is $3600*(1+.02)^1 =3672$\$. That means that there are $3672-3600=72$\$ that are missing and should be added to the initial amount. The second year the person will need to pay 3600 again, but the value today is $3600*(1+.02)^2=3745.44$\$. The third year, the situation is the same and the calculated value for the 3600\$ would today be $3600*(1+.02)^3=3820.348$\$.

> Note: the notation $(1+i)^n$ where i is the annual inflation rate and n is the periods in years, is something we discussed in the [Geometric Progression and the Compounding of the Returns](/post/geometric-progression-and-compounding-of-returns) article. Think of inflation as compounding with negative rate.

So far, the deficit for the first year is 72, for the second year is 145 and for the third year is 220. A total of 437\$ needs to be added to our initial thought of 10800!

The example above can easily be extended to loan payments, house rent or even pension forecasting.

Let's get into code and replicate the scenario above.


```python
%%capture
import pandas as pd
import numpy as np
import ipywidgets as widgets
from IPython.display import display
%matplotlib inline
```

```python
monthly_liabilities = 300
years = 3
annual_liabilities = 12 * monthly_liabilities
inflation_rate = 0.02
liabilities = pd.Series(data=[annual_liabilities for i in range(years)], index=[i+1 for i in range(years)])

def liabilities_inflated(liabilities, inflation_rate):
  years = liabilities.index
  inflation_over_years = pd.Series(data=(1+inflation_rate)**years, index=years)
  return liabilities * inflation_over_years

inflated_liabilities = liabilities_inflated(liabilities, inflation_rate)
print(f"Liabilities per year: {list(liabilities.values)}, \
        \nInflated liabilities: {list(inflated_liabilities.values)}, \
        \nTotal amount needed today: {inflated_liabilities.sum():.2f}, \
        \nNo inflation case: {liabilities.sum():.2f}")
```

    Liabilities per year: [3600, 3600, 3600],         
    Inflated liabilities: [3672.0, 3745.44, 3820.3488000000007],         
    Total amount needed today: 11237.79,         
    No inflation case: 10800.00


## Balancing inflation through investing

Inflation is eroding the value of money when they stand still! However, a balanced situation can be achieved if the money is invested to something that yields a return equal (or even better, more) than the inflation rate. There are several options to that, from 0 risk saving accounts that pay an interest, to a type of bond that increases the risk a bit and gives a better return (or even inflation-adjusted bonds), to more risky assets like equity funds that might yield an even better return.

In any case, we should take into account the taxes on profits and the administration fees each investment scenario requires.

Let's go back to our example and say that we found a savings account that pays 2% annually in interest without fees and taxes. That would mean that we could invest 10800 to this account today and each year pay out the bill.

But what if there was a 10% tax on the profits from this interest? How much money would we need today to start with?

```python
investment_annual_return = 0.02
investment_profit_tax = 0.1
```

```python
def discount(t, r, earnings_tax):
  """
    Computes the amount needed today which when invested for t periods with
    an r return per period and earning_tax on the profits, will equal to 1$  
  """
  return (1 + r - r*earnings_tax)**-t 

def present_value(liabilities, return_annual, earnings_tax):
  """
    Given a list of liabilities, an annual return and tax rate on earnings,
    returns the amount of money needed today.
  """
  dates = liabilities.index
  discounts = discount(dates, return_annual, earnings_tax)
  return (discounts * liabilities).sum()
```

```python
present_value(inflated_liabilities, investment_annual_return, investment_profit_tax)
```
  10842.491757684631


Moving forward, lets say that instead of a savings account we invest in funds that have an annual return of 2%, a profit tax of 10% and an annual administration fee of 0.5% on the total invested amount.

What should the initial investment be?

```python
annual_fee = .005 # percentage of total amount per year
```

```python
def present_value_with_fees(liabilities, return_annual, earnings_tax, annual_fee):
  dates = liabilities.index
  discounts = discount(dates, return_annual, earnings_tax)
  liabilities_with_fees = [liabilities[len(dates) +1 - i] * (1-annual_fee)**-i for i in list(dates)[::-1]]
  return ((discounts * liabilities_with_fees).values).sum()
  
```

```python
present_value_with_fees(inflated_liabilities, investment_annual_return, investment_profit_tax, annual_fee)
```
  10951.755210394398

It becomes apparent that taxes and fees play an important role in calculating future cash flows.

## The Funding Ratio

The funding ratio is a percentage that shows how much our current assets can contribute to future cash flows. A 100% funding ratio means that the initial amount of assets will be just enough to fulfill our goals. A ratio below 100% means that we will need more assets to cover for the future flows and a ratio more than 100% means that we are overfunded and as such we have a surplus of money we can use to fund other goals.


```python
def funding_ratio(current_assets_value, liabilities, return_annual, earnings_tax, annual_fee):
  return 100*current_assets_value/present_value_with_fees(liabilities, return_annual, earnings_tax, annual_fee)

def show_funding_ratio(monthly_liabilities, years, inflation_rate, current_assets_value, return_annual, earnings_tax, annual_fee):
  annual_liabilities = 12 * monthly_liabilities
  liabilities = pd.Series(data=[annual_liabilities for i in range(years)], index=[i+1 for i in range(years)])
  inflated_liabilities = liabilities_inflated(liabilities, inflation_rate)
  fr = funding_ratio(current_assets_value, inflated_liabilities, return_annual, earnings_tax, annual_fee)
  print(f'{fr:.2f}')
```

```python
funding_ratio(10951.76, inflated_liabilities, investment_annual_return, investment_profit_tax, annual_fee)
```
  100.00004373368022


Below I have included a widget which helps me plan for my future goals. I will try to have it as an HTML widget at some point but for the ones who are interested try the [colab](https://drive.google.com/file/d/13aiLUQUIXhfjfnO_20U4Dap0tsfRiF-B/view?usp=sharing) representation of this article. 

```python
controls = widgets.interactive(show_funding_ratio,
                               monthly_liabilities = widgets.IntSlider(min=100, max=100000, step=100, value=300),
                               years = widgets.IntSlider(min=3, max=100, step=1, value=3),
                               inflation_rate = widgets.FloatSlider(min=0.01, max=0.3, step=.01, value=.02),
                               current_assets_value = widgets.IntSlider(min=10000, max=30000000, step=1000, value=10800),
                               return_annual = widgets.FloatSlider(min=0.01, max=0.2, step=.01, value=.08),
                               earnings_tax = widgets.FloatSlider(min=0.1, max=.5, step=.02, value=.3),
                               annual_fee = widgets.FloatSlider(min=0.01, max=.05, step=.01, value=.03))
display(controls)
```

Enjoy!