---
date: "2011-06-01"
draft: false
title: "Upgrade your Inspiron 8600 to Windows 7 with this NVidia FX Go5200 video driver"
thumbnail: "Nvidia-logo.png"
categories: [tech]
tags: [ "windows"]
---
I have an old Dell Inspiron 8600 I wanted to upgrade to Windows 7. The problem was that there is no current video driver for the Inspiron's Nvidia Geforce FX Go5200 video chip. Even the driver Dell is offering for download for Windows XP is the wrong one and causes all sorts of problems. There simply is no driver for Windows 7.

So I searched on NVIDIA to see what drivers might be close. I found these two possible candidates:

- ForceWare 179.48 Win 7 driver for the Go7200
- ForceWare 96.85 Vista driver for the FX5200 (NOT the FX Go5200)

I tried both, and I was able to get the ForceWare 96.85 driver working. Here's how...

I downloaded the ForceWare 96.85 driver from NVIDIA.
[Link to driver](http://www.nvidia.com/object/winvista_x86_96.85_2.html)

The device manager showed me that my Go5200 codes are: VEN_10DE&DEV_0324&SUBSYS_019C1028.
When I tried to install the ForceWare 96.85 driver (by running setup.exe) I was told it couldn't find a matching driver. I looked in the nv_disp.inf file and I saw lists of various NVIDIA video devices, but my Go5200 was not in the list. I simply added it to the list matching the format of the other lines.
(Note: if the install deletes the files after failing you may have to run the install and leave it waiting for you to click 'OK' while you copy the folder to another working folder)

I added lines in two places:

Where it had:

```
%NVIDIA_NV34.DEV_0322.1% = nv_NV3x, PCI\VEN_10DE&DEV_0322
%NVIDIA_NV34.DEV_0323.1% = nv_NV3x, PCI\VEN_10DE&DEV_0323
%NVIDIA_NV34.DEV_0326.1% = nv_NV3x, PCI\VEN_10DE&DEV_0326
%NVIDIA_NV34.DEV_0327.1% = nv_NV3x, PCI\VEN_10DE&DEV_0327
```

I added a line for my Go5200:

```
%NVIDIA_NV34.DEV_0322.1% = nv_NV3x, PCI\VEN_10DE&DEV_0322
%NVIDIA_NV34.DEV_0323.1% = nv_NV3x, PCI\VEN_10DE&DEV_0323
%NVIDIA_NV34.DEV_0324.1% = nv_NV3x, PCI\VEN_10DE&DEV_0324&SUBSYS_019c1028
%NVIDIA_NV34.DEV_0326.1% = nv_NV3x, PCI\VEN_10DE&DEV_0326
%NVIDIA_NV34.DEV_0327.1% = nv_NV3x, PCI\VEN_10DE&DEV_0327
```

Actually I added two lines, because when I Googled for DEV_0324 I saw some references to a different SUBSYS. Just in case I added both:

```
%NVIDIA_NV34.DEV_0322.1% = nv_NV3x, PCI\VEN_10DE&DEV_0322
%NVIDIA_NV34.DEV_0323.1% = nv_NV3x, PCI\VEN_10DE&DEV_0323
%NVIDIA_NV34.DEV_0324.1% = nv_NV3x, PCI\VEN_10DE&DEV_0324&SUBSYS_019c1028
%NVIDIA_NV34.DEV_0324.1% = nv_NV3x, PCI\VEN_10DE&DEV_0324&SUBSYS_01961028
%NVIDIA_NV34.DEV_0326.1% = nv_NV3x, PCI\VEN_10DE&DEV_0326
%NVIDIA_NV34.DEV_0327.1% = nv_NV3x, PCI\VEN_10DE&DEV_0327
```

And in one other place I changed this:

```
NVIDIA_NV34.DEV_0323.1 = "NVIDIA GeForce FX 5200LE"
NVIDIA_NV34.DEV_0326.1 = "NVIDIA GeForce FX 5500"
```

To this:

```
NVIDIA_NV34.DEV_0323.1 = "NVIDIA GeForce FX 5200LE"
NVIDIA_NV34.DEV_0324.1 = "NVIDIA GeForce FX Go5200"
NVIDIA_NV34.DEV_0324.3 = "NVIDIA GeForce FX Go5200 "
NVIDIA_NV34.DEV_0326.1 = "NVIDIA GeForce FX 5500"
```

Then I installed my new driver (setup.exe). I found my video chip was recognized! I was able to set it's proper native resolution in Control Panel/Display, and my "Performance" measurement went from 1.0 to 2.0. Not high enough for all of the Aero visual effects, but now I can watch video without any choppiness.

------
Comments migrated from the old blog:

> Jerry June 10, 2011 at 8:16 PM  
> I am about to try this myself, thank you.

> Jerry June 10, 2011 at 8:56 PM  
> Wow. Thank you so much.

> BillyKool July 24, 2011 at 3:40 PM  
> Awesome Peter,  
> I'll point out a note. If you do not install this update you will not likely be allocating any system memory to video.
> With this update Win 7 allocated 255MB of my 1GB of memory and it made Aero Exp Index go from 1.0 to 2.4. Great!
> But, point being if you have only 512MB, you may not want to do this without increasing your RAM.
> But that said, I've been looking for this code patch for a while.  
> Thanks again Peter.

> addiRockART October 5, 2012 at 1:09 PM  
> so, I am having the same problem, BUT, even after editing said document, the installer says "windows vista not found." any ideas? can I get some help? :)

> Karel Kolbaba November 5, 2013 at 5:27 AM  
> super, thank you so much!!!

> Farhad Azhadi April 17, 2014 at 6:49 PM  
> Thank You SOOOO Much!!!!!!

> dieter collischon April 30, 2014 at 12:59 AM  
> This works fine for my old Inspiron. Thanks!

> Catherine Durstewitz March 20, 2016 at 11:04 AM  
> Thank you so much for taking the time to share this information Peter. We are trying to breathe life back into my Inspiron 8600 with Windows 7... Many thanks again!

> Unknown July 24, 2016 at 2:49 PM  
> Peter,  
> Thanks a ton! I too was able to breathe life back into my Inspiron running Win 7. Much thanks!
</small>
