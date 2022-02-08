# **Cloud Shell Walkthrough**

## 1. Log into the Discovery Environment

Log into <https://de.cyverse.org>

If you have not yet created an account, go to the [User Portal](https://user.cyverse.org) and sign up.

## 2. Launch the App

The Cloud Shell icon is found in the left-side navigation bar in the Discovery Environment.

[![cloud_shell_1]][cloud_shell_1]

  [cloud_shell_1]: ../assets/de/cloud_shell_1.png

Click on the **Apps** grid icon

[Cloud Shell](https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch) is listed at the top of "Featured Apps".

[Instant Launches](https://de.cyverse.org/instantlaunches) start Apps immediately when clicked.

The conventional launch menu allows you to modify the App parameters. You can add input data, increase the amount of RAM or CPU cores, and change the analysis directory.

[![cloud_shell_2]][cloud_shell_2]

  [cloud_shell_2]: ../assets/de/cloud_shell_2.png

## 3. Open the Analysis

After you have started a VICE app, a new tab will automatically open in your browser and show the app's loading screen.

[![cloud_shell_3]][cloud_shell_3]

  [cloud_shell_3]: ../assets/de/cloud_shell_3.png
  
Once the app is ready, it will transition to the user interface (in this example, a Linux terminal).

[![cloud_shell_4]][cloud_shell_4]

  [cloud_shell_4]: ../assets/de/cloud_shell_4.png
  
You should see a "message of the day", information about the machine you're using, and your CyVerse username for when you initiate
an iCommands connection.

!!! Note
  
  Normal wait time for a featured VICE app to launch is less than 2 minutes. 
  If you're experiencing a significantly longer wait, consider terminating the Analysis and starting a new one.

## 4. Activate a `conda` environment

The Cloud Shell comes with multiple languages and package managers pre-installed. These include `go`, `python`, and `rust`.

Package managers include `conda` and `cargo`, in addition to linux `apt` and `apt-get`.

Your identity inside the container is `user` and you have limited `sudo` privileges to install new packages into the container.

These changes are not saved after the analyses ends, or when you start a new Cloud Shell Analysis later.

!!! Note
  
The Cloud Shell is running a terminal multiplexer called [tmux]() which keeps your session active even after you've
closed your browser tab.

[`tmux` key bindings](http://manpages.ubuntu.com/manpages/bionic/man1/tmux.1.html) are active

To activate conda:

``` conda init ```

and then:

``` conda activate base ```

If you receive a message about refreshing your screen, you can `exit` the Cloud Shell by typing "exit" and then clicking the refresh button on your browser tab.

## 5. Using `icommands`

To connect to the CyVerse Data Store, you can initiate an iRODS iCommands `iinit`.

You should now be connected to your `/iplant/home/username` home directory.

### ils

``` ils /iplant/home/username/ ```

To view the 'shared' directory, type:

``` ils /iplant/home/shared ```

### iget 

Download data into your Cloud Shell with [iCommands](https://docs.irods.org/master/icommands/user/) by running `iget`:

``` iget -KPbvrf /iplant/home/shared/cyverse_training/ ```

### iput

After you finish your analyses, you can save the outputs to Data Store.

Use `iput` to copy your new files back to your user space, or if you've left your new work in the `/home/user/work/data/outputs` folder, it will be copied back to your `/iplant/home/username/Analyses/` directory.

To find the outputs you generated (if any), use the same steps as before, but this time select the 'Go To Output Folder'.

## 6. Terminate your app

The Discovery Environment is a shared system. In fairness to the community, users should "Terminate" any apps that
are no longer actively running analyses.

In the Analyses window, select the app (by clicking the checkbox next to it), select "More Actions", and then "Terminate" to shut down the app.

Any new data in the `/home/user/work/data/output` directory will begin copying back to your folder at this time.

Any input data which you added when the app started using the conventional launch feature will *not* be copied.

!!! Warning

  VICE apps run for a pre-determined amount of time, typically between 4 and 48 hours. 
  If you have opted for email notifications from DE, you'll get a notification 1 day before and another 1 hour before the app gets terminated. 
  To extend the time, go to your analysis, then click the hour glass icon which automatically extends the app run time.
