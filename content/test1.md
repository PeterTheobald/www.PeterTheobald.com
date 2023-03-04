---
title: Testing Hugo Not Using Markdown Images
date: 2023-03-04
thumbnail: forking00-bitcoin-fork-200.png
tags:
  - test
  - hugo
draft: false
description: Hugo isn't changing Markdown images into img tags
---
Hugo isn't changing Markdown images into HTML img tags.
This page is for testing that.
Here is a mardown image:

![photo of Electrum wallet](/images/forking01 original btc wallet 895.png)

and here is a raw HTML image:

<img src="/images/forking01 original btc wallet 895.png">


and here is an image with no spaces in the filename.
First as a markdown tag:
![The Matrix](/images/matrix.jpg)
and now as a raw HTML img tag:
<img src="/images/matrix.jpg">

