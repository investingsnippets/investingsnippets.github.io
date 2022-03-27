---
title:  pyinvestingsnippets + plotly = AWESOME
description: An amazing Dash + Plotly + Pyinvestingsnippets stock/portfolio benchmarking tool.
date: 2022-02-12T11:00:00.000Z
topic: automation
tags: python
author: chris
img: /static/magic-lamp.png
---

The last several months I have been extending [pyinvestingsnippets](https://pyinvestingsnippets.readthedocs.io/en/latest/). Some of the changes include:

* Renamed extensions to fit common financial jargon
* Added support for dataframes
* Added support for plotly
* Included fantastic matplotlib and plotly [examples](https://github.com/investingsnippets/pyinvestingsnippets/tree/master/examples)

<!-- [![pyinvestingsnippets + plotly = AWESOME](https://img.youtube.com/vi/IDzR-N9nfDg/0.jpg)](https://youtu.be/IDzR-N9nfDg "pyinvestingsnippets + plotly = AWESOME") -->

<p align="center"><iframe width="420" height="315" 
src="https://www.youtube.com/embed/IDzR-N9nfDg">
</iframe></p>

## Run the examples

To run the examples, clone [`v3.0.0`](https://github.com/investingsnippets/pyinvestingsnippets/tree/v3.0.0) and follow the `README.md` guidelines.

Currently the examples generate asset prices based on the random walk hypothesis (Brownian Motion)! This is great for a "look and feel" of the tool. If you want to try the examples with your own symbols then change the [ASSET_TICKERS & BENCHMARK_TICKERS](https://github.com/investingsnippets/pyinvestingsnippets/blob/v3.0.0/examples/plotly_report_dataframe.py#L25) and replace the [random price generator](https://github.com/investingsnippets/pyinvestingsnippets/blob/v3.0.0/examples/plotly_report_dataframe.py#L87) with the `yahoo` finance price [DataReader](https://github.com/investingsnippets/pyinvestingsnippets/blob/v3.0.0/examples/plotly_report_dataframe.py#L86).  

## Future Plans

The journey doesn't stop here! I'm planning to extend [pyinvestingsnippets](https://pyinvestingsnippets.readthedocs.io/en/latest/) even more by introducing:

* more portfolio benchmarking metrics
* support of inflation & risk free rates
* etc. 

What would you like so see more? Send me your thoughts...
