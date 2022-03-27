---
title:  Hosting Beancount on Google Colab
description: Access your Accounting books for free, wherever you are ;) 
date: 2022-03-26T11:00:00.000Z
topic: automation
tags: python
author: chris
img: /static/idea-lamp.png
---

Maybe you are in a similar situation like me, where you have deposit and savings accounts on several banks and investment accounts on several services! Keeping track of all that is painful and, unfortunately, there is no service yet that can connect everything together and properly present an aggregate view as well as a historical return of all the accounts together :(

To overcome this issue, I use [Beancount](https://github.com/beancount/beancount), an opensource `Double-Entry Accounting from Text Files` tool (python) that comes with several extensions and a nice web interface.

As always, I like to automate and keep my work in one place (on the cloud). I'm extensively using Google Colab and as a consequence, I had to bring all my accounting there too. :P

Beancount comes with a web server (called [fava](https://github.com/beancount/fava)) and Google Colab gives you a virtual machine running your python code. That means that we can use colab to start the web server, BUT we are not allowed to access it through our public browser, UNLESS we create a tunnel! That is possible with [ngrok](https://ngrok.com/) which `exposes local servers behind NATs and firewalls to the public internet over secure tunnels` :)

Here is the code I'm using...

```python
%%capture
!pip install beancount
!pip install fava
!pip install pyngrok
!pip install Jinja2 --upgrade  # Needed by fava. Restart runtime 

import os
import logging
from fava.cli import app
from pyngrok import ngrok, conf
from google.colab import drive

NGROK_TOKEN = "your token here"
LOCATION_OF_MAIN_BEANCOUNT_FILE = '/content/drive/My Drive/Colab Notebooks/beancount/base.beancount'

# Mounts the google drive to the virtual machine and gives access to storage
drive.mount('/content/drive', force_remount=True)

# disables logs for flask
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app.config.from_mapping(
    BASE_URL="http://localhost:5000",
    INCOGNITO=False,  # Set to True if you want to show your balance to someone but not reveal the actual numbers
    USE_NGROK=os.environ.get("USE_NGROK", "True") == "True" and os.environ.get("WERKZEUG_RUN_MAIN") != "true",
    BEANCOUNT_FILES=[
        LOCATION_OF_MAIN_BEANCOUNT_FILE
    ]
)

ngrok.set_auth_token(NGROK_TOKEN)
conf.get_default().monitor_thread = False
public_url = ngrok.connect(5000, bind_tls=True).public_url
print(" * ngrok tunnel \"{}\" -> \"http://127.0.0.1:{}\"".format(public_url, 5000))

app.config["BASE_URL"] = public_url
app.run()
```

Simple, but comes with some more steps:

1. Colab has an older version of Jinja2 preinstalled and when you update to latest one, you have to restart the runtime!
2. You need an NGROK authentication token (but that is free). Register at [ngrok](https://ngrok.com/). Set the `NGROK_TOKEN` variable in the script when you are done with registering.
3. You have to have your beancount files uploaded to google drive under `Colab Notebooks`, so they get mounted. Then you set the `LOCATION_OF_MAIN_BEANCOUNT_FILE` variable in the script.

That's it for now :) Enjoy!
