# Extending VICE Tools and Apps

There are several ways to extend VICE:

| Options | Hypothetical use case | 
|---------|-----------------------|
| [Copy an Existing App](#copy-an-existing-app) | You want to create a Quick Launch Button which has a different set of input data, specific to a course you're teaching | 
| [Modify an Existing Tool](#modify-an-existing-tool) | You need to add new packages or libraries to an existing Featured App and Tool that requires building a new Docker Container |
| [Create a New Tool & App](#create-a-new-tool) | There are no existing App types which fit your needs. You need to develop your own Docker container and integrate it from start to finish. |

Depending on your specific needs, it may be easiest to copy an existing app or modify an existing Tool. If you cannot find any existing Apps which suit your use case, do not hesitate to contact us via Intercom to ask about the availability of your favorite development environment. 

??? tip "Definitions"

    **Tool** - the Discovery Environment refers to Docker container templates as "Tools". The tool builder allows you to set the environment, UID, entrypoint, working directory, and computational requirements of your Docker container.   
    
    **Apps** - Applications or "Apps" are the user interface that you build in the Discovery Environment to interact with our Tools. Apps are designed using a template builder. 
    
Types of Tool include: `executable`, `HPC`, `OSG` (OpenScienceGrid), or `interactive`. 
    
Apps may require input data, parameters, settings, and flags which the user selects each time they are run. `executable`, `HPC`, and `OSG` apps are run non-interactively until they complete. 
    
For `interactive` VICE apps, the App template may only include a set of input data files and folders, or nothing at all. VICE Apps use Kubernetes to orchestrate their launch.

Adding `interactive` Tools and Apps are different from `executable` Tools. VICE applications like Jupyter and RStudio run on open ports enabling their User Interface (UI) in the browser.

## Copy an Existing App

[de]: ../assets/de/logos/deIcon.svg
[home]: ../assets/de/menu_items/homeIcon.svg
[data]: ../assets/de/menu_items/dataIcon.svg
[apps]: ../assets/de/menu_items/appsIcon.svg
[analysis]: ../assets/de/menu_items/analysisIcon.svg

Navigating the [![][de]{width=25}](https://de.cyverse.org){target=_blank} [Discovery Environment](https://de.cyverse.org){target=_blank}:

![][apps]{width=20} **Apps** - Applications (including VICE interactive applications)

Under "Apps" you will see "Tools" and "Instant Launches" -- for this section, we are interested in "Tools"

![][analysis]{width=20} **Analyses** - Status and history of analysis jobs

Analyses will be where you can test your new App to ensure it is functioning properly.

1. If necessary, log into the [![][de]{width=25}](https://de.cyverse.org){target=_blank} [Discovery Environment](https://de.cyverse.org){target=_blank}

2. Click the [![][apps]{width=20}](https://de.cyverse.org/apps){target=_blank} [Apps](https://de.cyverse.org/apps){target=_blank} icon in the left table of contents. Or use the search bar to search the existing public Apps for what you're interested in. 

3. When you've found the app you want, click on the three vertical dots on the right side of the selection field and select "Copy App".

4. You will be taken to the App editor, where you can now give the `Copy of App Name` a new name. You can also change the App's Description and the Tool used by the App. 

6. Modify the Parameters as you see fit.

7. Save your new app. The app will be private, and is available under your ""Apps Under Development" tab in [![][apps]{width=20}](https://de.cyverse.org/apps){target=_blank} [Apps](https://de.cyverse.org/apps){target=_blank}

## Modify an Existing Tool

Copying an App does not change the underlying Tool (Docker Image). You may need to install some new system packages or software libraries that are too complex or take too long to compile on any of the public featured apps. 

If you find that one of the existing public Apps, e.g. our Featured Apps, are useful but are missing some key packages you can take the next step of building a new container from our featured images. 


??? question "Why use our Featured Images"

    Some of the managed features that CyVerse provides for you are not available on publicly maintained Docker images of popular data science development environments.
    
    For example, CyVerse adds a reverse proxy to allow RStudio to work behind our authenticated systems, and we install iRODS iCommands and other popular package managers and editors on all of our featured images. 
    
    By building a new container from our featured image set, you are assured that your new Docker image will work immediately in the Discovery Environment.

It is **strongly recommended** if you're using common IDE like RStudio, Jupyter Lab, VS Code, Remote Desktops, or web-based applications like Shiny, Flask, or Streamlit that you use one of our featured Docker images, or at least take a look at our public Dockerfiles on [GitHub](https://github.com/cyverse-vice) to ensure compatibility of your new Container with the Discovery Environment. 

### Select a Featured Base Image

Each of these featured Apps have a public GitHub repository where their Dockerfile is available. The containers are hosted on CyVerse Harbor public/private Docker container registry. 

| Name | Dockerfile |
|------|------------|
| <a href="https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Datascience-latest-orange?style=plastic&logo=jupyter"></a> |[JupyterLab Datascience](https://github.com/cyverse-vice/jupyterlab-datascience){target=_blank} |
| <a href="https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch?quick-launch-id=81b187d6-cc94-4c53-81b5-f09f31c9c8ba" target="_blank"><img src="https://img.shields.io/badge/Verse-latest-blue?style=plastic&logo=rstudio"></a>  | [RStudio Verse](https://github.com/cyverse-vice/rstudio-verse){target=_blank}|
| <a href="https://de.cyverse.org/apps/de/5f2f1824-57b3-11ec-8180-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/CloudShell-bash-red?style=plastic&logo=ubuntu"></a> | [CloudShell](https://github.com/cyverse-vice/cli){target=_blank}| 
| <a href="https://de.cyverse.org/apps/de/f3f8cc78-23d5-11ec-abcf-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/Xpra-Geospatial-orange?style=plastic&logo=X.Org"></a>  | [Xpra](https://github.com/cyverse-vice/xpra){target=_blank} |
| <a href="https://de.cyverse.org/apps/de/091c830a-4be1-11ec-aad9-008cfa5ae621/launch" target="_blank"><img src="https://img.shields.io/badge/VS%20Code-latest-6C33AF?style=plastic&logo=visualstudiocode"></a> | [VS Code](https://github.com/cyverse-vice/vscode){target=_blank} |

### Write your new Dockerfile

Create your own Dockerfile. We suggest using GitHub, and setting up a [GitHub Action](https://github.com/marketplace/actions/build-and-push-docker-images){target=_blank} for building your container and pushing it to a public Docker Registry. 

If you select a Featured App image, it will be pulled from our public [Harbor Registry](https://harbor.cyverse.org/harbor/projects/17/repositories/), which uses a different naming convention than Docker Hub containers. 

For example, for the Rocker Project's featured [RStudio Verse Latest](https://github.com/cyverse-vice/rstudio-verse) image, the `FROM` statement would be:

```{docker}
FROM harbor.cyverse.org/vice/rstudio/verse:latest
```

You can then follow with your own `ENV` and `RUN` commands to do your own package installations.

Build your container as you normally would:

```{bash}
$ docker build -t <dockerhub-username>/rstudio/verse:custom-latest .
```

??? question "What tag name should you use?"

    By default Docker gives the `latest` tag to containers without a `:` and trailing tagname.
    
    You can modify your tagname in any way you see fit, but names like `dev` and `latest` should only be used for development or activities that do not require rigorous reproducability. 
    
    It is a good practice to use versioned tag names when preparing for peer-reviewed scientific publication.

### Push your new image to a public container registry

After you have built your new image, you need to push it to a public Docker registry. We recommend [Dockerhub](https://hub.docker.com) or [quay.io](http://quay.io). The Discovery Environment can pull any public Docker image from any public/private registry. 

We currently do not allow private Docker images to be pulled, but you can contact us about special private container hosting in our Harbor registry if you have sensitive data or software needs.

Alternatively, you can provide us the `Dockerfile` of your requested image and we will build the Docker image for you. 

If there is no `Dockerfile` for the tool that you are interested in, contact us via Intercom and tell us what tool you are interesting in making us as VICE app.

## Create a new Tool

### Add Tool

1. If necessary, log into the [![][de]{width=25}](https://de.cyverse.org){target=_blank} [Discovery Environment](https://de.cyverse.org){target=_blank}.

2. Click the [![][apps]{width=20}](https://de.cyverse.org/apps){target=_blank} [Apps](https://de.cyverse.org/apps){target=_blank} and click on the "Manage Tools" wrench icon

3. You'll see a list of all of the tools in the DE. Click on the "More Actions" and select "Add Tool" 

**Add Tool**

-   `Tool name` is the name of the tool. This will appear in the DE's tool listing dialog. This is mandatory field. 
-   `description` is a brief description of the tool. This will appear in the DE's tool listing dialog. 
-   `version` is the version of the tool. This will appear in the DE's tool listing dialog. This is mandatory field.
-   `Type` is the type of Tool. For VICE apps, chose "interactive", for command line applications select "executable"

**Container Image**

-   `Image name` is the name of the image and its public registry. This is mandatory field.
-   `Tag` is the image tag. If you don't specify the tag, the DE will look for the `latest` tag which is the default tag.
-   `Docker Hub URL` is the url of the image on the Dockerhub.

-   `Entrypoint` is the Entrypoint for your tool. Entrypoint should be present in the Docker image and if not, you should specify it here.
-   `Working Directory` this is the working directory of the tool and must be filled in with the value you gathered above. e.g `/home/jovyan/work`
-   `UID` is a number and must be filled in with the value you gathered from above. Typically `root` is `0` and default users are `1000`

**Container Ports**

- `Ports` select the external port address that your graphic interface needs.

**Restrictions**

-   `Max CPU Cores` is the number of cores for your tool. Eg. 16
-   `Memory Limit` is the memory for your tool. Eg. 64 GB
-   `Min Disk Space` is the minimum disk space. Eg. 200 GB

#### Required settings

##### Set the `WORKDIR`

The container needs to have a set working directory, typically this is the home folder, e.g. `/home/jovyan` or `/home/rstudio` 

Set the `WORKDIR` in the Dockerfile, if there is no set `WORKDIR` you can set it in the Tool Builder

??? tip "Your Data in Your Container"

    We recommend that you set the working directory of your Tool to the `username` home path in a new folder called `work` eg. `/home/jovyan/work` or `/home/rstudio/work`.

    This is because the Discovery Environment's interactive apps use a [Kubernetes container storage interface (CSI)](https://github.com/cyverse/irods-csi-driver){target=_blank} driver that connects the CyVerse data store to your working directory in the running container. This new mount can clobber any pre-existing files in the the container's `WORKDIR` 

##### Set the `ENTRYPOINT`

The container must have an `ENTRYPOINT` set in the Dockerfile, else you must set it in the Tool 

3.  All commonly needed dependencies are installed in the container image - you will not have `root` privileges later
4.  The default user set
5.  Disable any additional authentication (CyVerse provides CAS authentication and authorization).
6.  URLs will work sanely behind a reverse proxy. If they don't, you may need to add nginx to the container.=

##### Set the `PORT`

Interactive Apps rely on open ports to send display information to the browser.

Ensure the listen port for the web UI has a sane default and is set in the Dockerfile, e.g. `PORT 8888` 

You must set the port in the Tool to the external port that the container is listening

??? tip "Understanding ports in Docker containers"

    For interactive containers like RStudio and JupyterLab a conventional `docker run` execution will have the port set as `-p 8888:8888` where the port number on the left side of the `:` is the external port, and on the right the internal port. For VICE apps you must only worry about the external port number.

??? tip "Using a reverse proxy"

    The Discovery Environment has its own authentication system, which requires us to use a reverse proxy for some containers. 
    
    Our [RStudio Server](https://github.com/cyverse-vice/rstudio-verse){target=_blank} uses `nginx` to enable reverse proxy and thus we have changed the external port to `80` instead of the Rocker-Project default `8787` port number.

??? tip "managing ports in your new Tool"

    Featured VICE apps have default port options based on the app: JupyterLab apps use port `8888`, RStudio apps use port `80`, and Shiny apps use port `3838`.

    It is strongly recommended you do not set the `bind to host` as `true` for your added ports when creating a new App

## Creating VICE app for your new tool

After your tool template has been saved, you can create an App for connecting your Tool to the Discovery Environment. You can [copy an existing app](#copy-an-existing-app) and select your tool if you like an existing App's layout. 

Or you can create a new app from a blank template.

??? tip "Input Data"

    For VICE apps, be sure to check the box "Do not pass this argument to the command line" for each option you add (for VICE, this is usually just input files and folders.
