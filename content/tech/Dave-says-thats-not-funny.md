---
date: "2017-05-24"
draft: false
title: "Dave Says Thats Not Funny"
thumbnail: "dave-says-thats-not-funny.png"
categories: [tech]
tags: [ "javascript", "programming", "jquery"]
scripts: [ "dave-says-thats-not-funny.js"]
---
Dave doesn't think any of my jokes are funny. I keep trying but he always says the same thing, "That's not funny". So like all repetitive processes, I automated it. This page scrapes jokes from [Reddit/r/Jokes](http://www.reddit.com/r/Jokes) and presents them here as texts to Dave.

<!--more-->

I put a 'Load more jokes...' button at the bottom so you could see the true hopelessness of trying to tell jokes to Dave. I had an infinite scroll, but that got in the way of the Disqus forum at the bottom. The scraping is done in real time with all client-side JQuery so these jokes will be different every day, except for the first joke which is always there just to annoy Dave. [Here is the Javascript code](/js/dave-says-thats-not-funny.js) behind this.

*Don't blame me if any of these jokes are in poor taste. I didn't write the jokes, I'm pulling them from Reddit. It's very likely I have never even seen today's jokes.*

*edit: I filter out NSFW jokes now. Even so, many of them are pretty harsh...*

<div id="joke-container">
<div id="insert-joke-here">
<input type=button value="Load more jokes..." onclick="loadMoreJokes()"</div>
</div>
<br>