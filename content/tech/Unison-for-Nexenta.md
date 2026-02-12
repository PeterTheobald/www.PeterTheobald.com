---
date: "2011-04-01"
draft: false
title: "Unison 2.40.61 binary for Nexenta Core Platform 3"
thumbnail: "Unison-logo.png"
categories: [tech]
tags: [ "unison", "zfs", "solaris", "ocaml"]
---
I have compiled a Unison 2.40.61 binary (file-syncronization tool) for Nexenta (Solaris/Linux hybrid OS with ZFS) and made it available for download here.
<!--more-->

Nexenta Core Platform 3 is a Solaris-like operating system that has an OpenSolaris (RIP) kernel and GNU/Linux user-land commands layered on top. This gives the user the best of both worlds: A kernel that runs the amazing ZFS filesystem, with the familiar Linux toolset.

Unison is a file synchronization tool that is unmatched in it's safety and efficiency. It is optimized to run well over slow network links, using the rsync protocol to detect and send only the changed parts of files. It handles changes to files on both ends, including deletes making it a true two-way sync tool. In this way it has more in common with Dropbox than a backup tool. It is multi-platform, running on Linux, Windows, Macs, and Solaris.

Using Unison to sync multiple computers to a central ZFS server makes a great combination. Add ZFS snapshots and RAIDZ or mirroring of the sync'ed files makes it a great backup server as well.

UNISON 2.40.61 ON NCP 3

I am using Nexenta Core Platform 3, and I found that the apt repository has a very obsolete version of Unison (2.27.57). I have compiled Unison 2.40.61 for Nexenta Core 3.

Nexenta has an OCaml interpreter, but does not have the OCaml native compiler. I had to compile it to interpreted byte-code. To install it, first install OCaml: "apt-get install ocaml", then download the Unison binary from the link below and copy it to "/usr/bin".

[Download the Unison 2.40.61 binary for Nexenta Core Platform 3 here](/downloads/unison-2.40.61-byte-code)

This binary was compiled to interpreted byte-code, not native-code so although I have only tested it on Nexenta Core Platform 3, it may run on any platform that has an OCaml interpreter. If you try it on another platform please let me know and I will list it here.
