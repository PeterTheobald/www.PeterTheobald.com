---
date: "2015-04-30"
draft: false
title: "Tricky forensic hard drive acquisition of an iMac"
thumbnail: "imac.png"
categories: [tech]
tags: [ "mac", "forensics", "ftk"]
---
Recently I had to do a forensic acquisition of an iMac hard drive, and it presented many obstacles.

<!--more-->

The three basic ways to do an acquisition are:

1) Remove the hard drive and use high speed dedicated imaging hardware such as a Logicube, or from a forensic workstation through a write-blocker.

2) Boot the computer using a forensically sound Linux distro, such as Helix, and acquire the internal hard drive using a software tool such as dcfldd or LinEn to an external hard drive or over the network to a server set up for this purpose.

3) Boot the Mac into 'Target Disk Mode' (this only works on Macs) which exposes the internal hard drive on the Firewire port. Connect a forensic system to that firewire port through a write-blocker.

The iMac is notoriously difficult to disassemble because it uses a unibody enclosure, fitting all of the computer components inside the LCD monitor. Some models even have a tissue thin EMI foil wrapped around the edge of the LCD frame that would be difficult to remove and reattach without tearing. I always turn to iFixit.com to learn how to disassemble any computer or electronic device.

Because of this I would prefer not to use method #1, as removing the hard drive from this iMac would be time consuming and have the potential of damaging the system. I haven't damaged a computer yet, and I don't want this to be the first.

So I chose method #2, booting from a forensically sound Linux distro.

When booting a Mac into a forensic CD, never power up with the 'C' key to boot from the CD. If the system doesn't like your CD, for example if it is a version of Linux that won't boot on that particular system, it will bypass the CD and go right into booting from the hard drive. You will have just scribbled timestamps on the hard drive and your image wouldn't be forensically sound anymore. Instead power up with the 'OPTION' key to list what devices are bootable. Then you can choose the CD and if it won't boot it doesn't try to boot from the hard drive.

Also don't try booting with a wireless keyboard because if the battery has just run out the system won't see your 'OPTION' key and will boot into the hard drive: Scribble, scribble, not forensically sound anymore. Keep an extra wired apple keyboard around for this.

I started with Helix 2009R1 but it wouldn't boot properly. I next tried Helix 2008R1, Helix 1.9a, Helix 1.8, Backtrack (with no-mounting boot codes), DEFT 5.1, even an older Macquisition boot CD. No luck. All of them either wouldn't boot at all on the iMac or had a problem with the video. Apparently the new iMacs with the Intel Core i5 have a setting in the firmware that cause Linux to send all video to the mini display port instead of the LCD. My choice is now to either attach an external display to the mini display port or find a Forensic Linux CD that will work on this iMac.

Luckily I tried just one more, SystemRescueCD, and it worked. Be sure to add 'noswap' to the boot line so it doesn't try to mount any swap partitions it finds. I booted with the 'safest' choice, a VGA only video mode and it came up.

Now for the next challenge. A quick 'fdisk -l' shows that the system has a 2 Terabyte drive. Two Terabytes is the largest drive manufactured at this time. I prefer using DCFLDD, but I can't fit a 2 Terabyte image file plus overhead (file system, directories, etc) onto a 2 Terabyte drive. There are a few solutions to this. I could send the image over the network to a server. I could use a direct connect USB RAID appliance to get more than 2 TB of storage. But I had just read that Access Data has released a Linux command-line version of the excellent FTK Imager. I downloaded it and brought it over to the iMac on a USB thumb drive. I was able to image the internal drive using FTK Imager saving to Encase's E01 format with compression to an external 2TB drive so that the image files took up considerably less than 2TB.

I was so pleased with FTK Imager for Linux that I have replaced DCFLDD with FTK Imager for Linux from now on. It's an easy tool to use, it captures the drive serial numbers, the date and time, it gives good feedback, it's easier to use, and it saves to E01 format with compression.

