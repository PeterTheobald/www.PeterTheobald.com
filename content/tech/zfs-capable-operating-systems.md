---
date: "2010-11-16"
draft: false
title: "ZFS capable operating systems"
thumbnail: "open-zfs.png"
categories: [tech]
tags: [ "zfs", "solaris"]
css: [ "/css/custom-style.css"]
---
With today's announcement of Oracle Solaris Express 11 our choices for running a ZFS capable Operating System just got even more confusing. I wasn't able to find a list of the build numbers these Operating Systems are based on all in one place, so I'm going to keep a chart of the choices here, and if readers will contribute in the comments I will keep the chart updated. The build number gives you a good idea of how recent the ZFS feature set is. If any of these become true forks with divergent code and feature sets we won't be able to rely on a single build number to identify the features any longer.

Updated November 22, 2010 to include the KQ Infotech and Lawrence Livermore National Labs native ZFS on Linux:
<br><br>

|OS |build|comments|
|---|-----|--------|
|Oracle Solaris Express 11 2010.11|b151a|licensed for testing only, encrypted fs|
|OpenSolaris 2009.06|b111b||
|OpenSolaris (last dev)|b134||
|OpenIndiana|b147||
|Nexenta Core 3.0.1|b134+|Linux userland, CLI only|
|NexentaStor Community|b134+|12TB limit, web admin|
|NexentaStor Enterprise|b134 +|not free, web admin|
|FreeBSD 8.1|pool 15|no CIFS or iSCSI|
|Linux fuse 0.6.9|pool 23|low efficiency|
|KQ ZFS|b121? pool 26|Native Linux port|
|LLNL ZFS|b147 pool 28|Native Linux port|
|Belenix 0.8b1|b111||
|Schillix 0.7.2|b147||
|StormOS "hail"||based on Nexenta|
|Jaris||Japanese|
|Milax 0.5|b128a|small size|
|Korona 4.5.0|b134|KDE|
|EON NAS|b130|embedded NAS|

<br>

Please contribute info, links to distros, etc. and I will keep this page updated.   
(Update: I have added this table to the [ZFS Wikipedia article](https://en.wikipedia.org/wiki/ZFS#List_of_operating_systems_supporting_ZFS), where all future updates will go)