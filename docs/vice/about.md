# Interactive Analysis on the Discovery Environment

**VICE** stands for Visual Interactive Computing Environment and is a part of CyVerse [Discovery Environment (DE)](https://de.cyverse.org).

**VICE** allows verified CyVerse users to launch customized containers of their favorite data science platforms.

## What is the big idea?

The DE supports executable applications which run as workflows on high performance or high throughput computing environments. **VICE** introduces Graphic User Interfaces (GUI) and common Integrated Development Environments (IDE) such as [Project Jupyter](http://jupyter.org/), [RStudio](https://www.rstudio.com/), & Remote Desktops to the DE.

## Getting VICE Access

[de]: assets/de/logos/deIcon.svg
[home]: assets/de/menu_items/homeIcon.svg
[data]: assets/de/menu_items/dataIcon.svg
[apps]: assets/de/menu_items/appsIcon.svg
[analysis]: assets/de/menu_items/analysisIcon.svg
[vice]: assets/de/logos/deviceIcon.png

To minimize inappropriate use, VICE is a restricted service, currently accessible from CyVerse US. You must request access to use.

1.  Visit the [User Portal](https://user.cyverse.org/services){target=_blank} and **Services**; look for [![][vice]{width=30}](https://user.cyverse.org/services){target=_blank} [DE VICE](https://user.cyverse.org/services){target=_blank} and select the **REQUST ACCESS** link.

??? tip "Ensure your request is approved"

    Ensure that your CyVerse account is associated with a valid email address from an organization ending with `.org`, an educational institution with `.edu`, or government `.gov`. 
    
    We do not grant access to commercial email addresses, e.g., `@gmail.com` `@yahoo.com` `@msn.com` etc.

## Launching a VICE application

??? tip "Featured Apps"

    [![][vice]{width=60}](https://de.cyverse.org/apps){target=_blank}

    CyVerse maintains featured apps from the [Rocker-Project](https://rocker-project/images){target=_blank}, [Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank}, and [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank}

    | quick launch | Base Images |
    | ------------ |-------------|
    | <a href="https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Verse-latest-blue?style=plastic&logo=rstudio"></a> | [Rocker-Project](https://rocker-project/images){target=_blank} |
    | <a href="https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Datascience-latest-orange?style=plastic&logo=jupyter"></a> |[Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank} |
    | <a href="https://de.cyverse.org/apps/de/091c830a-4be1-11ec-aad9-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/VS%20Code-latest-6C33AF?style=plastic&logo=visualstudiocode"></a> | [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank} |


    These containers are built from community maintianed container stacks, with a few additonal packages for use in CyVerse DE.

1. If necessary, log into the [![][de]{width=25}](https://de.cyverse.org){target=_blank} [Discovery Environment](https://de.cyverse.org){target=_blank}.

2. Click the [![][data]{width=25}](https://de.cyverse.org/data/){target=_blank} [Data Icon](https://de.cyverse.org/data){target=_blank} and navigate to your `results/` folder in the` tutorial_folder/`; click the (Add Folder button) and create a folder called `rocker_output/` inside your tutorial folder.

3.  Use this Quick Launch link <a href="https://de.cyverse.org/apps/de/48b6e7ae-8b64-11ec-92dc-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Verse-latest-blue?style=plastic&logo=rstudio"></a> or click on [![][apps]{width=20}](https://de.cyverse.org/apps){target=_blank} [Apps](https://de.cyverse.org/apps){target=_blank} to launch thev featured **Rocker RStudio Latest** App. You can also use the DE search bar to search for this application in the Apps category.

4. Launch the application and adjust the following:
    
    Under "Analysis Info", for **Output Folder** click **Browse** and navigate to and select a folder, then click **Next**;

    For "Parameters", under "Input Folder" click **Browse** and navigate to any folder you own or is shared, then click **Next**;
    
    You can modify the resources used by the container, more cores and more RAM and disk for larger analyses, else leave blank, then click **Next** and skip **Advanced Settings**;
   
    Click **Launch Analysis** to launch your application

5.  In the navigation, click on the (Analyses) view. Your application will be listed as "Submitted" for a few minutes (usually just a few, but more depending on both the size of the application software and any imported datasets).

6.  When the Status of the launch is Running, click on the (link out icon); a new tab where your VICE application will run should open in your browser.

??? tip "Launching VICE Apps"

    Even when the application has entered 'Running' status, you may still have to wait some additional time for input data to be transferred onto the resource with the new container. 
