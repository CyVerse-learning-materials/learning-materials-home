# Using Atmosphere

[atmo]: ../assets/atmosphere/atmosphere-icon.png
[help]: ../assets/de/menu_items/helpIcon.svg
[profile]: ../assets/de/icons/userIcon.svg

### Goal

[Atmosphere](http://www.cyverse.org/atmosphere){target=blank} is one of the most versatile components of the CyVerse CI. Anything that you would normally be able to do with your local laptop/desktop, you can do on a virtual machine in the Atmosphere cloud. This guide will cover the basics you need to get started using Atmosphere. For the full documentation, see the Atmosphere Manual on the CyVerse wiki.

### Prerequisites

*In order to complete this tutorial you will need access to the following services/software*

| Prerequisite | Preparation/Notes | Link/Download |
|--------------|-------------------|---------------|
| CyVerse account | You will need a CyVerse account to complete this exercise | [Register](https://user.cyverse.org/) |
| Atmosphere Access | Atmosphere access is by request only | Check or request access: [CyVerse User Portal](https://user.cyverse.org) |
| iCommands (Optional) | While you don’t have to have iCommands installed, the transferring data section of this guide assumes familiarity with iCommands. You may wish to complete the iCommands tutorial, and you may wish to install iCommands on a local machine if you want to transfer data from that machine to an Atmosphere instance | [iCommands Guide](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step2.html), [iCommands Download links](https://wiki.cyverse.org/wiki/display/DS/Setting+Up+iCommands) |
| Terminal or SSH client (Optional) | You can connect via Webshell to an Atmosphere instance from a web browser. Alternatively, you can connect via SSH from a Mac or Linux computer. If you are using Windows, we suggest a SSH client. | Windows compatible SSH client (Optional) [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) |
| VNC Viewing Client (Optional) | You can connect to a desktop-enabled Atmosphere instance from a web browser. Alternatively you can connect via a VNC viewing client such as Real VNC viewer. | Download [Real VNC Viewer for your OS](https://www.realvnc.com/download/viewer/) |

!!! Important
        To request access to Atmosphere, login to the [CyVerse User Portal](https://user.cyverse.org/services/mine). In the [Services Menu](https://user.cyverse.org/services/mine) under ‘MY SERVICES’ you should see Atmosphere listed as an option you can launch. If not, look under the [Available](https://user.cyverse.org/services/available) menu, and click the ‘REQUEST ACCESS’ link. You will receive an email requesting additional information. To qualify for an Atmosphere account, your CyVerse account must be associated with an institutional email address (e.g. .edu;.org;.gov).

## Logging in to Atmosphere

Atmosphere presents a variety of features, starting with the Atmosphere Dashboard you will see at login. While it may be slightly overwhelming, we will focus on the features a first-time user would likely interact with. Return to the Learning Center and Atmosphere Manual to learn more about the advanced features not covered here.

*Some things to remember about the platform*

- You must have access to Atmosphere to launch an instance. If you are not sure you have access, go back to the instructions at the beginning of this guide
- Atmosphere works on a very transparent allocation model. Every user has a defined amount of resources (CPUs, disk space, etc.) and time they can use these resources. We are always happy to work with users to increase these allocations, but ultimately there are limits. You can be a good community member by only using resources when you need them, and not leaving instances aimlessly running (the proverbial ‘leaving the lights on’).

### Logging on and viewing your resources

1. Login to Atmosphere at https://atmo.cyverse.org/ and click the ‘Login’ link on the upper right-hand side of the screen. Enter your CyVerse credential and sign in.

2. Upon login, you will be directed to the Atmosphere Dashboard. Much more about all the dashboard features is available in the Atmosphere Manual , but you can see the number of instances you have running, and percent of your allocation used. You can also see an history of instances launched.

??? Tip
        Your allocation (a measure of how many instances you have running, their size, and the amount of time they have been active) automatically refreshes monthly. If you run out of allocation, you can click the need_more ‘NEED MORE?’ button to request an increase. When you exceed your allocation, your instances are suspended. You will not lose saved data, but running processes will be stopped. See the Atmosphere section in the [CyVerse service-level agreement](http://www.cyverse.org/service-level-agreement#Atmo) for details and definitions related to our allocation policies.

## Creating a Project and Launching an Instance

Atmosphere makes it easy to launch an instance (virtual machine), but your work is more than just a computer - it is data and software. To that end, Atmosphere helps you organize your work into a project. A project contains one or more instances, and may contain several (or no) volumes (datasets) or images (“saved” instances).

*Definitions:*

- Instance: An instance is a running virtual machine. You request from
Atmosphere a CPUs, disk space, and memory, and you are temporarily allocated these physical resources to “build” your virtual computer (virtual machine).
- Image: An image is a file that contains an operating system, and any other
data that was saved at the time of imaging (creating the image file). If we saved everything on your computer to an image file, we could clone your computer onto a new device and you would not have to reinstall any software. Your files, system preferences, etc. would all be saved.
- Volume: Volume: A volume is a “virtual disk” that you can attach and detach to
your instance, like a thumb drive. Normally, when you start an instance, you need to transfer data onto it. While the data transfer may be quick, it usually takes time. A volume is nearly instantaneous. Although it is virtual you can keep a volume persistently in Atmosphere, and attach and detach as needed to any instance.

!!! Note
        For our purpose, the terms “instance” and “virtual machine” are used interchangeably in this guide.

### Creating a Project

1. Log in to [Atmosphere](https://atmo.cyverse.org/).
2. Click on the [Projects](https://atmo.cyverse.org/application/projects) menu at the top of the page; the click on the ‘CREATE NEW PROJECT’ button; give your project a name and description and click ‘CREATE’.

From the [Projects](https://atmo.cyverse.org/application/projects) page, you will see a listing of existing projects and the number of instance, images, volumes, and links associated with these projects.

### Launching an Instance

1. On the [Projects](https://atmo.cyverse.org/application/projects) page, click on an existing project to launch the instance as part of that project. If necessary, create a new project using the directions above.
2. From your project’s individual page, click on the NEW button and select ‘Instance’.
3. Search through the available instances in the ‘Launch an Instance/Select an Image’ window.

!!! Tip
        You can search the image catalogue at any time from the [Image Search](https://atmo.cyverse.org/application/images/search) page. Click on the ‘Images’ link at the top of the Atmosphere page. Most images have tags to help you identify the installed software. You can also click on an image listing to get additional details and descriptions. Since Most images are community-developed, the documentation is only as good as what is provided by the image owner.

5. Search the catalog for the CyVerse Training Workshop image.
6. To launch an instance now, click ‘LAUNCH INSTANCE’. Alternatively, you can name your image, or adjust other settings including the project, and instances size before clicking the launch button.

!!! Note
        If you are trying Atmosphere for the first time, we recommend using the default ‘tiny1’ instance size. Also note, that the largest instance sizes are limited and may not be available at any given time based on demand.

Once your instance is launched, your project page will display the status of all instances. Instances are typically available within 10-15 minutes. *You can only connect to an instance when the status displayed is ‘Active’.*

## Connecting to an Instance

Once your instance is in the ‘Active’ state, you can connect to the instance. All instances support connection at the command line via SSH. Many (but not all) instances may also have a graphical desktop. You can connect to these desktops via a VNC viewing client. We will cover both methods in this guide.

### Connect to Atmosphere Instance using SSH

#### Connecting using Mac or Linux Terminal

1. If necessary, login to Atmosphere and locate the instance you are connecting to in a given project.
2. Locate the IP address and copy this to your clipboard.
3. Open your computer’s terminal application.
4. Connect via SSH:
``` py
$ ssh your_cyverse_username@your.atmosphere.ip.address

! If connecting for the first time, you may be get a security prompt

The authenticity of host '128.196.64.200 (128.196.64.200)' can\'t be established.
ECDSA key fingerprint is SHA256:fzEJLqeljHgIwcGY0gUap2sRWLlGPQwUVimhEgkJYBs.
Are you sure you want to continue connecting (yes/no)?

! you may accept this prompt by typing yes
```
5. You will be prompted to enter your CyVerse password
!!! Tip
        Your cursor will not move or indicate you are typing as you enter your password. If you make a mistake, hit enter and you will be prompted again.

You should now be connected to your Atmosphere instance.

#### Connecting using Windows and PuTTY

1. If necessary, login to Atmosphere and locate the instance you are connecting to in a given project.
2. Locate the IP address and copy this to your clipboard.
3. Open ‘PuTTY.exe’ and paste the IP address into the ‘Host Name (or IP address s)’ field; click ‘Open’
!!! Note
        If this is your first time connecting, you may get a security prompt that the server’s host key is not cached in the registry. You may click ‘Yes’ to continue connecting.
4. When prompted, enter your CyVerse username for the request to ‘login as:’ and enter your CyVerse password to connect.
!!! Tip
        Your cursor will not move or indicate you are typing as you enter your password. If you make a mistake, hit enter and you will be prompted again.

### Connect to Atmosphere Instance using VNC viewer

!!! Note
        You can only connect to an Atmosphere instance that has a desktop installed and has a running VNC server. Usually this information is in the image description. If you are unsure, or having difficulty in connecting to and instance you believe should have a desktop, contact Atmosphere support. If you have not already done so, download [Real VNC Viewer](https://www.realvnc.com/download/viewer/).

1. If necessary, login to Atmosphere and locate the instance you are connecting to in a given project.
2. Locate the IP address and copy this to your clipboard.
3. Open VNC Viewer. Paste your IP address + “:1” in the ‘VNC Server’ field (e.g. 161.803.39.887:1) and click connect.

!!! Note
        When connecting for the first time to an instance, you will be prompted to save a signature

4. When prompted, ensure your username entered is your CyVerse username. Enter your CyVerse password and click Ok.

You should now be connected to your instance desktop.

## Transferring Data to and from an Instance

An Atmosphere instance only contains data that were included in the original image that was used to make that instance. You can transfer data to/from the CyVerse Data Store, an Atmosphere Volume, a sever, or your local machine. In this guide, we will only cover data transfer using iCommands. iCommands is installed on every Atmosphere instance.

Related Links
- [iCommands Guide](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step2.html)
- [iCommands Download](https://wiki.cyverse.org/wiki/display/DS/Setting+Up+iCommands)

### Transferring Data to/from an Instance using iCommands

You can execute to the instance’s icommand if you are connected via SSH/PuTTY or if you are connected to the desktop via VNC, open the instance’s terminal application.

1. At the instance’s terminal, start the iCommands configuration using the ‘iinit’ command and enter configure.
!!! Important
        This configuration is a one-time step on your first use with this instance.
        ``` py
        $ iinit

        ! As prompted, enter the following values:
        ! Host: data.cyverse.org
        ! Port: 1247
        ! User: your_cyverse_username
        ! Zone: iplant
        ! Password: your_cyverse_password

        If you make a mistake in your configuration you can edit ~/.irods/irods_environment.json on your instance.
2. Test your configuration by listing your Data Store contents with the “ils” command.
        ``` py
        $ ils
        ```
!!! Tip
        If you made a mistake during the configuration, you can edit your icommands configuration file.
3. To download a file from the Data Store to your instance, use “iget”
    ``` py
    $iget data_store_file
    ```
4. To upload file from your instance to the Data Store use “iput”
  ``` py
  $iget file_on_instance location_on_data_store
  ```

!!! Tip
        iCommands has a variety of options, to see progress of transfers, operate recursively, and more. See additional iCommands documentation on the CyVerse wiki.

## Terminating an Instance

Once you have finished with your Atmosphere instance you will need to terminate this instance. If you are not done with the instance and will use it again in a short amount of time, you can stop or suspend that instance. For more on these options, see the [Atmosphere manual](https://wiki.cyverse.org/wiki/display/atmman/Suspending%2C+Stopping%2C+Rebooting%2C+Resuming%2C+Starting%2C+Moving%2C+and+Deleting+Instances).

### Terminating an Instance

!!! Warning
        Once an instance is terminated, all data on that instance is unrecoverable. Ensure that any data you wish to save is transferred to a persistent location such as the CyVerse Data Store or an Atmosphere volume.

1. If necessary, login to Atmosphere and locate the instance you are terminating in a given project.
2. Click on the instance name to get to that instances page. You should see an “Actions” menu on the right-hand side of the page.
3. Click Delete to terminate the instance; read the warning, and click ‘YES, DELETE THIS INSTANCE’ when you are ready to proceed - remember all data still on this instance will be lost.

## Summary

This guide has taken you through the absolute basics needed to start using Atmosphere. There is a lot more to learn, and many more capabilities than described here. We encourage you to look through the full manual to learn more.
