---
title: "Spring 2021"
description: "Spring 2021 meeting records"
lead: ""
draft: false
images: []
menu:
  wiki:
    parent: "meetings"
weight: 640
toc: true
---

(These meeting details are migrated from the old website.)

### Hashing and Ciphers

<small>Patrick Hwang • April 11, 2021</small>

Hi everyone,

Cybersecurity UW will be meeting this Wednesday, April 14th at 5:30 PM. We will be going over several different types of ciphers and hashes

See you soon!

### Fun with Networking API's & First Hacker Discussion!

<small>Patrick Hwang • March 24, 2021</small>

The next meeting will be on Wednesday 3/24 at 5:30 pm via the Microsoft Teams link below.
We will be experimenting with this [card-game API](https://www.deckofcardsapi.com) at and having our first Hacker Discussion

Google Description - "API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API." It is very important as most tech companies are switching

If you would like a GUI option for the API tutorial, consider installing Postman.

### Another Exploit in the Metasploit Framework.

<small>Patrick Hwang • March 7, 2021</small>

We will be using the virtual machines again from last meeting. If you have not already downloaded them, the instructions are attached below. We recommend that you download the VMs before the meeting since it may take a while to download. The following VMs are what we will be using to run our next exploit:

```text
Kali Linux 2020.4
Windows 7 Professional SP1 with RDP enabled
```

Note: There was a new Kali Linux release since last meeting. If you want to update, check the instructions towards the bottom of the email.

These VMs can be downloaded [here](https://uwmadison.box.com/v/CSEC-Virtual-Box-VMs)

These Virtual machines are large (Downloading Both VMs will use 10GB of Data [ 6GB for Windows and 4 GB for Kali ] ) and will take a little while to download, so please download them before the meeting.

In addition, we will be using Virtual Box, so if you have not installed Virtual Box on your computer, you can follow the guide we have written [here](https://uwmadison.app.box.com/v/CSEC-Install-Virtual-Box)

Once Virtual Box is installed, you can setup the Virtual Machines by following the setup guide here

Kali Linux update to 2021.1:
To update Kali Linux to 2021.1, you can look at the [link here](https://www.kali.org/docs/general-use/updating-kali/) from kali.org, but it is only two commands.
Open your terminal and enter the following:

```sh
kali@kali:~$ sudo apt update
kali@kali:~$ sudo apt full-upgrade -y
```

If prompted to enter your password, enter the default password kali or the password you have changed your system to.

After that, wait for your system to update. Be sure that you don't let your computer sleep or shutdown while installing. If you are prompted to change or restart services, press enter on the ok button and use the tab key to navigate the menu.
