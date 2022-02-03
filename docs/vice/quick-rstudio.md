# RStudio Verse

# 1. Log into Discovery Environment

Log into <https://de.cyverse.org>

If you have not yet created an account, go to the [User Portal](https://user.cyverse.org) and sign up.

## 2. Launch the App

![rstudio_1](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_1.png "rstudio_1"){ width="400" }

Click on the **Apps** grid icon

[RStudio Verse](https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch) is in "Featured Apps"

[Instant Launches](https://de.cyverse.org/instantlaunches) start Apps immediately when clicked.

The conventional launch menu allows you to modify the App parameters. You can add input data, increase the amount of RAM or CPU cores, and change the analysis directory.

[![!rstudio_2](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_2.png "rstudio_2"){ width="400" }](https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch)

## 3. Open the Analysis

After you have started a VICE App, your browser will open a new tab and automatically be taken to the loading screen.

![rstudio_3](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_3.png "rstudio_3"){ width="400" }

Once the app is ready, it will transition to the user interface 

![rstudio_4](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_4.png "rstudio_4"){ width="400" }

**RStudio Interface:** 
RStudio is a free, open source IDE (integrated development environment) for R. 
Its interface is organized so that the user can clearly view graphs, data table, R code and ouput at the same time. 
It also offers an Import-Wizard-like feature that allows users to import CSV, Excel, SAS (*.sas7bdat), SPSS (*.sav), and Stata (\*.dta) files into R without having to write the code to do so.

More information about the RStudio can be found [here](https://www.rstudio.com/products/rstudio/).

!!! Note
  
  Normal wait times for a featured VICE App are less than 2 minutes. 
  If you're experiencing a significantly longer wait, consider terminating the Analysis and starting a new one.

## 4. Create an RStudio Project

You can create RStudio projects using local data, or from Git.

![rstudio_5](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_5.png "rstudio_5"){ width="400" }

This example uses [Leaflet Maps](https://github.com/rstudio/leaflet) in RStudio

![rstudio_6](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_6.png "rstudio_6"){ width="400" }

You can then run R commands and install packages

![rstudio_7](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_7.png "rstudio_7"){ width="400" }

![rstudio_8](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/rstudio_8.png "rstudio_8"){ width="400" }

## 5. Using `icommands`

Open RStudio's Terminal.

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

Any new data in the `/home/rstudio/work/data/output` directory will begin copying back to your folder at this time.

Any input data which you added when the app started using the conventional launch feature will not be copied.

!!! Warning

  VICE apps only run for a pre-determined amount of time, typically between 4 and 48 hours. 
  If you have opted for email notifications from DE, then you 'll get a notification 1 day before and 1 hour before the app gets terminated. 
  If you want to extend the time, find your analysis and then click the hour glass icon which automatically extends the app run time.
