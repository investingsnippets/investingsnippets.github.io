---
title: Measures of Variability
description: Use average, median, mode and more, to understand basic investing.
date: 2020-11-01T11:00:00.000Z
topic: mathematics
author: chris
img: /static/standard-deviation.png
---

[Measures of location](/post/measures-of-location) cannot identify how well the typical value (average, mode, etc.) represents the data, like:

* How close are the prices to each other?
* What is the biggest difference between prices?
* On average, how far are the prices from each other?

Measures of variability (also called spread) fill this gap, and the most common are:

* Range, which is the largest value minus the smallest value
* Interquartile Range (IQR) which is the upper quartile (75th percentile), minus the lower quartile (25th percentile)
* Standard Deviation (SD)

In investing, Standard Deviation is one of the most common methods for determining the risk of an investment (also called volatility).

### Variance ($Var$ or $\sigma^2$) & Standard Deviation ($\sigma$)

Variance is the average squared difference from the mean or alternatively, how spread out the data are around their mean.  

$$
Var(x) = \sigma^2 = \sigma_x^2 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}
$$

> **Note**: We can divide by n or n-1. n is the total population of an event. n-1 a series of it. numpy is, by default, using n-1! The difference is negligible for long sequences, but not for short ones!

We see above that, for some reason, we squared the difference, instead of taking the absolute difference. We did that to avoid the same problem we have with the mean, where the sum can be zero because of negative values in the list. Imagine, for example, having the sequence `-10,1,2,3,4`. What is the mean value? 0! And, how spread are the data around the mean? 0 again. It doesn't really make any sense, right? We see that there is some spreading of the data around "something". This, "something" doesn't feel to be a 0. It feels like something close to the `1,2,3,4` values, which look like a group of values that are really close to each other. If we go back, and instead square the values we:

* remove the negative sign from the values
* we make the values that are far from the group, to stand out (the outliers are emphasized).
* we change the unit of measurement (it is now something much bigger)

To return back to the unit we started with, but meanwhile keep the notion of spreading, we use the RMS (Root Mean Square) of all the distances to the mean. We call that Standard Deviation (SD): 

$$
\sigma_x = \sqrt{Var(x)}
$$


## Standard Deviation in Investing

We will see later on, that the daily returns of an asset are normally distributed. Normal distributions have some very unique attributes. The most important are:

* The center of a normal distribution is located at its peak, and 50% of the data lies above the mean, while 50% lies below. The mean, median, and mode are all equal
* Approximately 68% of the data lies within 1 SD of the mean, Approximately 95% of the data lies within 2 SD of the mean, Approximately 99.7% of the data lies within 3 SD of the mean. This is known as the empirical rule.


![png](measures-of-variability-normal-distribution.png)

In a normal distribution, individual values fall within one standard deviation of the mean, above or below, 68% of the time. Values are within two standard deviations 95,45% of the time.

For example, in a stock with a mean price of $40 and a standard deviation of $5, it can be assumed with 95% certainty the next closing price remains between $30 and $50! (More on that in a later post)
