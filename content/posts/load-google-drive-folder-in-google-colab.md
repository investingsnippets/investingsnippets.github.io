---
title: Load Google Drive folder in Google Colab
description: How to mount a Google Drive in Google Colab and load some stock data.  
date: 2020-12-07T05:00:00.000Z
topic: automation
tags: python
author: chris
img: /static/google-colab.png
---

There are several cases where:

* fetching stock prices is not possible through python libraries like `yahoofinancials` or other APIs
* you want to load the same data over and over again (for parallelization)
* you want to use you python modules without publishing them to a registry

In these cases I find it very handy to store my data (csv format) and my modules in google drive.

However, loading the data to Google Colab turned into pain since I had to manually upload the files each time I wanted to run a notebook.

To avoid this situation I mount google drive and:

1. add the folder with my python modules to the path
2. copy the data to the Colab data folder

```python
import warnings
warnings.simplefilter('ignore')

%config InlineBackend.figure_formats=["png"]

from google.colab import drive
drive.mount('/content/drive', force_remount=True)

import os
import sys
import glob
from shutil import copytree, copy

# This will add my python modules in the path
gdrive_base_path = '/content/drive/My Drive/my-python-modules'
sys.path.append(gdrive_base_path)

try:
  # copy the data we need
  copytree('/content/drive/My Drive/Colab Notebooks/data', '/content/data')
except Exception as e:
  pass

%reload_ext autoreload
%autoreload 2
%matplotlib inline

import matplotlib.pyplot as plt
import seaborn
import pandas as pd
import numpy as np
import scipy.stats as st
```

Since the folder that contain my python modules is now in the system path, I'm able to

```python
import my_module
```

and whenever I change my modules (add more functionality, improvements), it practically saves it to Google Drive, since it is a pure mount.

When it comes to loading data, then I simply:

```python
MSFT = pd.read_csv('data/msft_daily.csv', parse_dates=True, index_col=0, header=0)
```

> **Note**: Since `copytree` is used, uploading new data files to Google Colab, will not automatically save it to Google Drive!
