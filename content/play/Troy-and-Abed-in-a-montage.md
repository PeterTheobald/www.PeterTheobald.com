---
date: "2017-03-14"
draft: false
title: "Troy and Abed in a Montage"
thumbnail: "Troy-and-Abed-in-a-montage.png"
categories: [play]
tags: [community, videos]
scripts: [ "/js/custom-scripts.js" ]
---
To try out the free video editor 'HitFilm' I made this montage of the fake show 'Troy and Abed in the Morning' from the show Community.

<!--more-->

First I found out which episodes have Troy and Abed clips. I found a website with Community scripts, downloaded the scripts and searched for related clips, like this:

```
wget -r -l1 http://www.springfieldspringfield.co.uk/episode_scripts.php?tv-show=community
grep -l -i 'troy and abed' *
grep -l -i 'troy and \w+ abed' *
```

This gave me a list of episodes with key phrases like 'Troy and Abed in the Morning', 'Evil Troy and Evil Abed', 'Troy and Abed in Stop Motion', 'Troy and Abed and Annie', etc... I already have all the Community episodes as a video source.

I usually use Lightworks, but this time I used HitFilm to edit together the clips. I found HitFilm easier to use and more powerful as it has a full 2D and 3D compositor included in it, although Lightworks still wins for power-user keyboard shortcuts for trimming and rolling clips. Watch the result here:

{{< youtube id="ZAXEbWoVdrg" >}}

