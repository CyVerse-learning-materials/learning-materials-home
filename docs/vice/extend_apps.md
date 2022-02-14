# Guidelines for adding interactive tools in DE

## Prerequisites

Adding VICE Tools in DE is different from non-interactive Tools. VICE applications like Jupyter and RStudio run on an open port for enabling their web UI.

1.  Ensure that the listen port for the web UI has a sane default and is set in the Dockerfile.
2.  The working directory is set
3.  All commonly needed dependencies are installed in the container image - you will not have [root]{.title-ref} privileges later
4.  The default user set
5.  Disable any additional authentication (CyVerse provides CAS authentication and authorization).
6.  URLs will work sanely behind a reverse proxy. If they don't, you may need to add nginx to the container.=

## Community images as your base image

If you need to set the configurations at all (see above), you'll need to create a new Dockerfile that uses the community-provided image as a base. Your new Dockerfile should deal with custom configurations and dependency installations.

-  Jupyter Lab (<https://hub.docker.com/r/cyversevice/jupyterlab-base>)
-   RStudio Verse (<https://hub.docker.com/r/cyversevice/rstudio-verse>)
-   Shiny Verse (<https://hub.docker.com/r/cyversevice/shiny-verse>)

See some examples of VICE apps that uses community images as base image
in the Dockerfile

-   MMTF
    (<https://github.com/sbl-sdsc/mmtf-genomics/blob/master/vice/Dockerfile>)
-   Rstudio-Bioconductor
    (<https://github.com/cyverse/docker-builds/blob/master/rstudio-bioconductor/Dockerfile>)
-   Patmatch
    (<https://github.com/fomightez/patmatch-binder/tree/master/vice>)

## Test your Docker image

Since the images are built based using Dockerfile, make sure you test the Dockerfile before providing it to us. Dockerfile must have Entrypoint. If you cannot provide us the Dockerfile, you can request integration of the app by doing a tool request. 

# **Building DE tools and apps**

Once you build your Docker image (following the guidelines), the next step is building the Tool.

For this you'll need a Docker image name, any port numbers `PORT`, User ID `UID`, working directory `WORKDIR`, and `ENTRYPOINT`.

## Docker images

The Docker image of your tool is mandatory and it should be available on public registries such as [Dockerhub](https://hub.docker.com) or [quay.io](http://quay.io). Alternatively you can provide us the Dockerfile and we will build the Docker image for you. If there is no Dockerfile for the tool that you are interested in, then tell us what tool you are interesting in making us as VICE app.

## Add Tool in DE

The final step in building the VICE tool is to fill up the "Add Tool" form in DE.

Brifely here are the following steps.

-   Log in CyVerse [Discovery Environment](https://de.cyverse.org/de/)
-   Click on the Apps window and click Manage Tools button on the far right hand side of the window
-   Click on Tools button and then finally Add Tools button

You'll see a Add Tool form like this

-   `Tool name` is the name of the tool. This will appear in the DE's tool listing dialog. This is mandatory field. Eg. "jupyterlab-circos"
-   `description` is a brief description of the tool. This will appear in the DE's tool listing dialog. Eg. "Circos is a software package for visualizing data and information that was created by Martin Krzywinski"
-   `version` is the version of the tool. This will appear in the DE's tool listing dialog. This is mandatory field. Eg. "1.0"
-   `Image name` is the name of the image specifier minus the image tag. The image must exist on Dockerhub or quay.io. This is mandatory field. E.g "fomightez/circos-vice"
-   `Tag` is the image tag. If you don't specify the tag, the DE will look for the "latest" tag which is the default tag.
-   `Docker Hub URL` is the url of the image on the Dockerhub. E.g <https://hub.docker.com/r/fomightez/circos-vice>
-   `Type` is the type of Tool. For VICE apps, chose "interactive".
-   `OSG Image Path` is path of the image on the OSG. You can skip this for interactive tools.
-   `Entrypoint` is the Entrypoint for your tool. Entrypoint should be present in the Docker image and if not, you should specify it here.
-   `Working Directory` this is the working directory of the tool and must be filled in with the value you gathered above. E.g /home/jovyan/vice
-   `UID` is a number and must be filled in with the value you gathered from above. E.g 1000
-   `Max CPU Cores` is the number of cores for your tool. Eg. 16
-   `Memory Limit` is the memory for your tool. Eg. 64 GB
-   `Min Disk Space` is the minimum disk space. Eg. 200 GB
-   `Container Ports` must be a list of maps with only a single entry. The key in that entry must be container_port and should be filled in with the number value you gathered above.

::: warning
::: title
Warning
:::

It is strongly recommended you do not set the [bind to host]{.title-ref} as [true]{.title-ref} for your added ports when creating a new App\*\*
:::

## Creating VICE app for your tool

To create a new app, follow the instructions in [here](https://wiki.cyverse.org/wiki/display/DEmanual/Designing+the+Interface)

::: important
::: title
Important
:::

For VICE apps, be sure to check the box "Do not pass this argument to the command line" for each option you add (for VICE, this is usually just input files and folders.
:::


# VICE apps in DE

Featured VICE apps have default port options based on the app: JupyterLab apps use port 8888, RStudio apps use port 80, and Shiny apps use port 3838.

::: tip
::: title
Tip
:::

Go to <https://cyverse.run> to see public VICE apps or apps that you've integrated or had shared with your user name.
:::

To see a list of Geospatial VICE Apps: <https://github.com/cyverse-gis/dockerfiles>

