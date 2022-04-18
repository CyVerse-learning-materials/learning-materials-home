# Interactive Analysis in the Discovery Environment

**VICE** stands for Visual Interactive Computing Environment and is a part of CyVerse's [Discovery Environment (DE)](https://de.cyverse.org). The DE supports executable applications which run as workflows on high performance or high throughput computing environments. **VICE** allows for interactive software to run on the Discovery Environment. There are a few common categories of interactive applications:

1.  Integrated Development Environments (IDE)
	- RStudio:  [![][vlb]][vll]{target=_blank}
	- JupyterLab: [![][dslb]][dsll]{target=_blank}
2.  Interactive Apps (e.g., Shiny, WebGL, HTML5)
3.  Virtual Desktop Environments (e.g., Ubuntu Desktops w/ Apache Guacamole, VNC, Xpra)

CyVerse hosts the recipes of its featured apps on GitHub: <https://github.com/cyverse-vice/>. These images are built from other official projects and are maintained by CyVerse staff.

From the Home tab in the DE, there are several apps that have an **Instant Launch** feature which allows you to start the app with a single click.

These apps launch with their default number of cores, amount of RAM, and timeout, and without input data. You can always import data using HTTPS protocols or iCommands after launch.

## Getting VICE Access

Since VICE (the Visual Interactive Computing Environment) is a target for cryptocurrency miners, we require an additional verification.

To get access to VICE, your CyVerse account must be associated with a valid email address from an organization, an educational institution, or a government; e.g., an email ending with `.org`, `.edu`, or `.gov`.  We do not grant VICE access to commercial email addresses, e.g., `@gmail.com`, `@yahoo.com`, `@msn.com`, etc.

To request VICE access, visit the [User Portal](https://user.cyverse.org/services){target=_blank} and **Services**; look for [![][vice]{width=30}](https://user.cyverse.org/services){target=_blank} [DE VICE](https://user.cyverse.org/services){target=_blank} and select the **REQUEST ACCESS** link.

You will be asked for a description of your intended VICE use: please give non-technical scientific details, and if you can, link an external resource (like a workshop or lab website) and funding agency.

-----------------------------------------------------------------------    

## Launching a VICE application

??? Tip "Quick Launch VICE Apps"
   
    [![][vice]{width=60}](https://de.cyverse.org/apps){target=_blank}

    CyVerse maintains featured apps from the [Rocker-Project](https://rocker-project/images){target=_blank}, [Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank}, and [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank}

    | Quick Launch | Base Images |
    | ------------ |-------------|
    | <a href="https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Verse-latest-blue?style=plastic&logo=rstudio"></a> | [Rocker-Project](https://rocker-project/images){target=_blank} |
    | <a href="https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Datascience-latest-orange?style=plastic&logo=jupyter"></a> |[Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank} |
    | <a href="https://de.cyverse.org/apps/de/091c830a-4be1-11ec-aad9-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/VS%20Code-latest-6C33AF?style=plastic&logo=visualstudiocode"></a> | [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank} |


    These containers are built from community-maintained container stacks, with a few additonal packages for use in CyVerse DE.

1. Log into the [![][de]{width=25}](https://de.cyverse.org){target=_blank} [Discovery Environment](https://de.cyverse.org){target=_blank}.

2. Click the [![][data]{width=25}](https://de.cyverse.org/data/){target=_blank} [Data Icon](https://de.cyverse.org/data){target=_blank} and navigate to your `/iplant/home/<your-username>` folder; click the (Add Folder button) and create a folder called `demo_rocker/` inside your work space.

3.  Use this Quick Launch link <a href="https://de.cyverse.org/apps/de/48b6e7ae-8b64-11ec-92dc-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Verse-latest-blue?style=plastic&logo=rstudio"></a> or click on [![][apps]{width=20}](https://de.cyverse.org/apps){target=_blank} [Apps](https://de.cyverse.org/apps){target=_blank} to launch the featured **Rocker RStudio Latest** App. You can also use the DE Search bar to search for this application in Apps.

4. Launch the application and adjust the following:
    
    Under "Analysis Info", for **Output Folder** click **Browse** and navigate to and select your new `/demo_rocker/` folder, or leave it as the default `analyses/` folder, then click **Next**;

    For "Parameters", under "Input Folder" click **Browse** and navigate to any folder you own or is shared with you, or leave it as the default (empty), then click **Next**;
    
    In **Advanced Settings** you can modify the resources used by the container (e.g., more cores, more RAM, or disk space for larger analyses) or leave the default settings, then click **Next**;
   
    Click **Launch Analysis** to launch your application.
    
    Your new Featured App should be available within one minute. 

5.  In the navigation bar, click on the [![][analyses]{width=30}](https://de.cyverse.org/analyses){target=_blank} [Analyses](https://de.cyverse.org/de/analyses){target=_blank} view. Your application will be listed as "Submitted" (this takes a minute or two; maybe more depending on both the size of the container and any additional imported data).

6.  When the Status of the launch is "Running", click on the running App under "Analyses"; a new tab will open in your browser.

??? Tip "Please be patient"

    Even when the application has entered 'Running' status, it may take additional time for input data to be transferred onto the resource with the new container. 

----------------------------------------------------------------------- 

## Accessing data from VICE apps

VICE apps have web access, so you can import data using methods like `curl` or querying external databases. You can also access your Data Store home and shared directories directly from a VICE app. Your home directory is found via the path `work/home/cyverse_username/`. You will also have access to any data shared with you in the Data Store via the path `work/home/shared/`. You will be able to read, write, and delete data from the Data Store from a VICE app, just as you would on a local filesystem. 


??? Tip "Working with many files"
	
	Read/write speeds for single files are quite fast, but can slow down when accessing many files. 

	If you are working with many small files, it may be faster to keep your data in the Data Store in a compressed format (such as .tgz or .zip), then use `cp` to copy the data from `~/work/home/username/` to `~/work`. Working with many small files within the VICE app's container will be faster than accessing them directly from the Data Store.
	
	Speed benchmark for moving a folder with many CSV files:

	moving storms_by_year/ folder: 23.5s

	moving storms_by_year.zip: 0.07s

	unzipping: 0.063s

## Using Git and GitHub from VICE

The core VICE apps (RStudio, JupyterLab, and Cloud Shell) also have the [`GitHub command line interface`][gh] installed. You can run `gh auth login` and follow the prompts to log in to your GitHub account, which will give you HTTPS access to push and pull from your GitHub repositories. You can read more about the GitHub CLI on their [manual page][gh-manual]. You will also need to run `git config user.email "your.email"; git config user.name "Your Name"` to configure Git to be able to make commits.

??? Tip "Working with Git repositories"

	For the time being, we recommend cloning repositories into `~/work` rather than into `~/work/home/username`, because the large number of files in a Git repository can make transfers to the Data Store slow. We are working on optimizing the `git clone` process to address this issue.


## Instant Launches

From the Home tab in the DE, there are several apps that have an **Instant Launch** feature which allows you to start the app with a single click.

These apps launch with their default number of cores, amount of RAM, and timeout, and without input data. You can always import data using HTTPS protocols or iCommands after launch.

## Quick Launches

Quick launch buttons are directed URLs that allow you to share an app with pre-set configurations. After selecting an app, you will be taken to the app launcher where you can select input data sets, and then set size and time parameters. Any public app can have a quick launch URL generated for it.

To use one of the Featured Launches listed below in the table, copy the badge (button link) to add to wherever you collaborate (a webpage, project notes, documentation, etc.).

To create your own Saved Launch, start by launching the app you want to use. This will be a good time to Favorite the app. In the "Review & Launch" panel, click the "Create Saved Launch" button. You will be asked to name your Saved Launch and check the box when prompted if you would like it to be public. Remember which app you saved, you will find the link under Details of the app you saved.


[gh]: https://cli.github.com/
[gh-manual]: https://cli.github.com/manual/index

[vll]: https://de.cyverse.org/apps/de/48b6e7ae-8b64-11ec-92dc-008cfa5ae621/launch

[dsll]: https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch

[vlb]: ../assets/de/app_badges/verse-latest-badge.svg
[dslb]: ../assets/de/app_badges/datascience-latest-badge.svg

[de]: ../assets/de/logos/deIcon.svg
[home]: ../assets/de/menu_items/homeIcon.svg
[data]: ../assets/de/menu_items/dataIcon.svg
[apps]: ../assets/de/menu_items/appsIcon.svg
[analyses]: ../assets/de/menu_items/analysisIcon.svg
[vice]: ../assets/de/logos/deviceIcon.png


