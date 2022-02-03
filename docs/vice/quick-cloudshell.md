# **Cloud Shell Walkthrough**

## 1. Log into Discovery Environment

Log into <https://de.cyverse.org>

If you have not yet created an account, go to the [User Portal](https://user.cyverse.org) and sign up.

## 2. Launch the App

The Cloud Shell icon is pinned to the Discovery Environment table of contents on the left side.

[![!cloud_shell_1](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/cloud_shell_1.png "cloud_shell_1"){ width="400" }](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch)

Click on the **Apps** grid icon

[Cloud Shell](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch) is listed at the top of "Featured Apps"

[Instant Launches](https://de.cyverse.org/instantlaunches) start Apps immediately when clicked.

The conventional launch menu allows you to modify the App parameters. You can add input data, increase the amount of RAM or CPU cores, and change the analysis directory.

[![!cloud_shell_2](https://github.com/cyverse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/cloud_shell_2.png "cloud_shell_2"){ width="400" }](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch)

## 3. Open the Analysis

After you have started a VICE App, your browser will open a new tab and automatically be taken to the loading screen.

[![!cloud_shell_3](https://github.com/cyverse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/cloud_shell_3.png "cloud_shell_3"){ width="400" }](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch)

Once the app is ready, it will transition to the user interface (in this example, a Linux terminal)

[![!cloud_shell_4](https://github.com/cyverse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/cloud_shell_4.png "cloud_shell_4"){ width="400" }](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch)

There should be a "message of the day", some information about the machine you're using, and your CyVerse username for when you initiate
an iCommands connection.

!!! Note
  
  Normal wait times for a featured VICE App are less than 2 minutes. 
  If you're experiencing a significantly longer wait, consider terminating the Analysis and starting a new one.

## 4. Activate a `conda` environment

The Cloud Shell comes with multiple languages and package managers pre-installed. These include `go`, `python`, and `rust`.

Package managers include `conda` and `cargo` in addition to linux `apt` and `apt-get`

Your identity inside the container is `user` and you have limited `sudo` privileges to install new packages into the container.

These changes are not saved after the analyses ends, or when you start a new Cloud Shell Analyses later.

!!! Note
  
  The cloud shell is running a terminal multiplexer called [tmux]() which keeps your session active even after you\'ve
closed your browser tab.

[`tmux` key bindings](http://manpages.ubuntu.com/manpages/bionic/man1/tmux.1.html) are active

To activate conda:

``` conda init ```

and then

``` conda activate base ```

If you recieve a message about refreshing your screen, you can `exit` the cloud shell by typing "exit" and then hitting the refresh button on your browser tab.

## 5. Using `icommands`

To connect to the CyVerse DataStore, you can initiate an iRODS iCommands `iinit`

You should now be connected to your `/iplant/home/username` home directory.

### ils

``` ils /iplant/home/username/ ```

To view the \'shared\' directory try:

``` ils /iplant/home/shared ```

### iget 

Download data into your Cloud Shell with [iCommands](https://docs.irods.org/master/icommands/user/) by running `iget`

``` iget -KPbvrf /iplant/home/shared/cyverse_training/ ```

### iput

After finishing your analyses, you can save the outputs back to Data Store.

You can either use `iput` to copy your new files back to your user space, or if you've left your new work in the `/home/user/work/data/outputs` folder, it will be copied back to your `/iplant/home/username/Analyses/` directory.

You can find the outputs you generated (if any) using the same steps as before, but this time select the 'Go To Output Folder'.

## 6. Terminate your app

The Discovery Environment is a shared system. In fairness to the community, we ask uses to "Terminate" any apps they have started when
they are no longer running analyses.

In the Analyses window, select the app with the checkbox, then select "More Actions" and "Terminate" to shut the app down.

Any new data in the [/home/user/work]{.title-ref} directory will begin copying back to your folder at this time.

Any input data which you added when the app started using the conventional launch feature will not be copied.

!!! Warning

  VICE apps only run for a pre-determined amount of time, typically between 4 and 48 hours. 
  If you have opted for email notifications from DE, then you 'll get a notification 1 day before and 1 hour before the app gets terminated. 
  If you want to extend the time, find your analysis and then click the hour glass icon which automatically extends the app run time.
