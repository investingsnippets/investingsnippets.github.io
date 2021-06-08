---
title: Global Market Insights after the Pandemic.
description: What are the projections after the Pandemic? Let's explore ...  
date: 2021-01-21T11:00:00.000Z
topic: investing
tags: python
author: chris
img: /static/after-covid-19.jpeg
colab: https://colab.research.google.com/drive/1nPyDupJHidnP5DLfAEKX3eYiY-MHCDmM?usp=sharing
---

2020 was a difficult year and most of the market segments diverged from the projections! With the new facts at hand, and the emerging needs after the pandemic, we should expect changes in the market.

Below is an attempt to get a feeling of the emerging sectors by analyzing some [Global Market Insights](https://www.gminsights.com/) reports.

And as always, let's automate ...

```python
!pip install requests beautifulsoup4
import requests
import re
from bs4 import BeautifulSoup
import string

class GlobalMarketInsights:
  __DEFAULT_BASE_URL = 'https://www.gminsights.com/industry-reports'
  
  @staticmethod
  def _escape(input):
    printable = string.ascii_letters + string.digits + string.punctuation + ' '
    return ''.join(c if c in printable else ' ' for c in input )

  def _description_matcher(self, descr):
    descr = GlobalMarketInsights._escape(descr.replace('\t', ' ').replace('\n', ' ').replace('\r', ' '))

    start_date = end_date = percentage = market_name = None

    r1 = re.search('^(.*) (?:Market|Aftermarket) .*$', descr, re.IGNORECASE)
    if r1:
      market_name = r1.group(1).strip()

    r2 = re.search('.* between (\d+) (?:and|to) (\d+)', descr)
    if r2:
      start_date = r2.group(1).strip()
      end_date = r2.group(2).strip()
    
    r3 = re.search('.* (?:from|of) (\d+) to (\d+)', descr)
    if r3:
      start_date = r3.group(1).strip()
      end_date = r3.group(2).strip()
    
    r4 = re.search('([-+]?\d*\.\d+|\d+)%', descr)
    if r4:
      percentage = r4.group(1)
    
    if None in (market_name, percentage, start_date, end_date):
      raise Exception(f"Couldn't parse: {descr}")
    else:
      return {
        "market": market_name,
        "percentage" : float(percentage),
        "start": int(start_date),
        "end": int(end_date)
      }

  def get(self, page=1):
    page = requests.get(f"{GlobalMarketInsights.__DEFAULT_BASE_URL}?page={page}")
    soup = BeautifulSoup(page.text, 'html.parser')
    single_rds = soup.find_all('div', class_='single_rd')
    reports = []
    for single_rd in single_rds:
      single_rd_children = single_rd.findChildren()
      for single_rd_child in single_rd_children:
        if single_rd_child.has_attr('class') and single_rd_child['class'][0] == 'rd_desc':
          description = single_rd_child.getText()
          try:
            reports.append(self._description_matcher(description))
          except Exception as e:
            # print(e)
            pass
          break
    return reports
  
  def fetch_all_reports(self):
    # get the total number of pages and start iterating
    page = requests.get(f"{GlobalMarketInsights.__DEFAULT_BASE_URL}?page=1")
    lun_q = 'Displaying \d+ records out of (\d+) on Page \d+ of (\d+)'
    r = re.search(lun_q, page.text)
    if r:
        number_of_records = r.group(1)
        number_of_pages = r.group(2)
    else:
      raise Exception('No pages or data!')
    
    all_reports = []
    for page in range(1, int(number_of_pages) + 1, 1):
      page_reports = self.get(page=page)
      all_reports += page_reports

    return int(number_of_records), all_reports
```

Scraping web pages is always challenging. In this case especially, the task was a bit tedious since the different report descriptions where not following a unique pattern.

```python
global_market_insights = GlobalMarketInsights()
number_of_records, all_reports = global_market_insights.fetch_all_reports()
print(f"Parsed {len(all_reports)} out of {number_of_records} report descriptions!")
```
    Parsed 1200 out of 1964 report descriptions!

Next, we add the reports to a dataframe for better presentation and easier data manipulation.

```python
import pandas as pd

gmi_reports_df = pd.DataFrame(all_reports) 
gmi_reports_df.head()
```

<div>
<table border="1">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>market</th>
      <th>percentage</th>
      <th>start</th>
      <th>end</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Food phosphate</td>
      <td>6.0</td>
      <td>2021</td>
      <td>2027</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Supply Chain Analytics</td>
      <td>16.0</td>
      <td>2021</td>
      <td>2027</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Cooking Coconut Milk</td>
      <td>8.5</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Steel Rebar</td>
      <td>4.0</td>
      <td>2021</td>
      <td>2027</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2,5-Dimethyl-2,4-Hexadiene</td>
      <td>2.5</td>
      <td>2021</td>
      <td>2027</td>
    </tr>
  </tbody>
</table>
</div>

So far, so good! Let's try to sort by percentage and see which sector is projected to perform more than 30% the following years.

```python
sector_projection_ascending = gmi_reports_df.sort_values('percentage', ascending=False)
sector_projection_ascending.loc[(sector_projection_ascending['percentage']>30) & (sector_projection_ascending['start']>=2020)]
```

<div>
<table border="1">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>market</th>
      <th>percentage</th>
      <th>start</th>
      <th>end</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>435</th>
      <td>SD-WAN</td>
      <td>60.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>575</th>
      <td>Cannabidiol (CBD)</td>
      <td>52.7</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>393</th>
      <td>(Light Fidelity) Li-Fi</td>
      <td>50.0</td>
      <td>2020</td>
      <td>2030</td>
    </tr>
    <tr>
      <th>40</th>
      <td>Healthcare Artificial Intelligence</td>
      <td>43.7</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>153</th>
      <td>Automotive Subscription Services</td>
      <td>40.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>964</th>
      <td>AI in Manufacturing</td>
      <td>40.0</td>
      <td>2020</td>
      <td>2025</td>
    </tr>
    <tr>
      <th>363</th>
      <td>Artificial Intelligence (AI) in BFSI</td>
      <td>40.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>50</th>
      <td>Robotic Process Automation</td>
      <td>40.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>207</th>
      <td>Fuel Cell Electric Vehicle</td>
      <td>38.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>637</th>
      <td>AI in Automotive</td>
      <td>35.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>503</th>
      <td>Artificial Intelligence Chipsets</td>
      <td>35.0</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>105</th>
      <td>Total Knee Replacement</td>
      <td>34.7</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>212</th>
      <td>Vaginal Rejuvenation</td>
      <td>33.7</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
    <tr>
      <th>342</th>
      <td>Carbon Wheels</td>
      <td>32.3</td>
      <td>2020</td>
      <td>2026</td>
    </tr>
  </tbody>
</table>
</div>

It is becoming pretty obvious that everything around Artificial Intelligence yields the best projections, and is an attractive area for investments :)
