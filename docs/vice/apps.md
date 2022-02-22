# Applications

VICE apps are currently categorized as:

1.  Integrated Development Environments (IDE) (e.g., [![][vlb]][vll]{target=_blank} [![][dslb]][dsll]{target=_blank} )
2.  Interactive Apps (e.g., Shiny, WebGL, HTML5)
3.  Virtual Desktop Environments (e.g., Ubuntu Desktops w/ Apache Guacamole, VNC, Xpra)

## 1. What is JupyterLab?

[JupyterLab](https://jupyterlab.readthedocs.io/en/stable/index.html) is an interactive development environment (IDE) for working with notebooks, code and data.

JupyterLab enables you to use text editors, terminals, file viewers, and other custom components side-by-side with notebooks in a tabbed work area. JupyterLab provides a high level of integration between notebooks, documents, and activities:

-   Drag-and-drop to reorder notebook cells and copy them between notebooks
-   Run code blocks interactively from text files (.py, .R, .md, .tex, etc.)
-   Link a code console to a notebook kernel to explore code interactively without cluttering up the notebook with temporary scratch work
-   Edit popular file formats with live preview, such as Markdown, JSON, CSV, Vega, VegaLite, and more

### 1.1 What is a Jupyter Notebook?

The [Notebook](https://jupyter.readthedocs.io/en/latest/) (formerly IPython Notebook) is Project Jupyter's flagship project for creating reproducible computational narratives.

It enables users to create and share documents that combine live code with narrative text, mathematical equations, visualizations, interactive controls, and other rich output.

Notebook documents (or "notebooks") are documents produced by the Jupyter Notebook App, which contains both computer code (e.g., python, r, julia) and rich text elements (paragraph, equations, figures, comments, images, links, etc.).

### 1.2 JupyterLab VICE

The apps are based on official versions integrated into the CyVerse Discovery Environemnt (DE).

## 2. What is RStudio?

[RStudio](https://www.rstudio.com/) is a free and open source integrated development environment (IDE) for R, a programming language for statistical computing and graphics. Some of its features include:

-   Customizable workbench with all of the tools required to work with R in one place (console, source, plots, workspace, help, history, etc.)
-   Syntax highlighting editor with code completion
-   Execute code directly from the source editor (line, selection, or file)
-   Full support for authoring Sweave and TeX documents
-   Runs on all major platforms (Windows, Mac, and Linux) and can also be run as a server, enabling multiple users to access the RStudio IDE using a web browser

### 2.1 RStudio VICE

The apps are based on official Docker images from [The Rocker Project](https://www.rocker-project.org/).

## 3. What is Shiny?

[Shiny](https://shiny.rstudio.com/) is an open source R package that provides an elegant and powerful web framework for building web applications using R. Shiny helps you turn your analyses into interactive web applications without requiring HTML, CSS, or JavaScript knowledge. Some of its features include:

-   Build useful web applications with only a few lines of code--no JavaScript required
-   Shiny applications are automatically "live" in the same way that spreadsheets are live. Outputs change instantly as users modify inputs, without requiring you to reload your browser. Shiny user interfaces can be built entirely using R, or can be written directly in HTML, CSS, and JavaScript for more flexibility
-   Works in any R environment (Console R, Rgui for Windows or Mac, ESS, StatET, RStudio, etc.)
-   Attractive default UI theme based on Twitter Bootstrap
-   A highly customizable slider widget with built-in support for animation
-   Pre-built output widgets for displaying plots, tables, and printed output of R objects
-   Fast bidirectional communication between the web browser and R using the websockets package
-   Uses a reactive programming model that eliminates messy event handling code, so you can focus on the code that really matters
-   Develop and redistribute your own Shiny widgets that other developers can easily drop into their own applications

### 3.1 Shiny VICE

The apps are based on official Docker images from [The Rocker Project](https://www.rocker-project.org/).

Shiny VICE Apps require the contents of a Shiny App be added as an input folder prior to launching a VICE app - otherwise the default Shiny App demo will be the only contents in the container.

Customized Shiny Apps can be created and deployed using the Tool and App builder.

## 4. What is Ubuntu Desktop?

The Ubuntu Desktop has a full Guacamole installation and Ubuntu XFCE desktop. This allows users to have a simple all-in-one desktop through their web browser. Users can run any interactive or visualization tool that can run on the most recent linux distro solutions to support the inevitable array of linux applications that a user will want. Potential options include:

-   Separate image per application
-   Network fs (e.g., NFS, Ceph, etc.) containing all applications
-   Per-application network fs
-   On-demand installation of application via script/ansible

### 4.1 Ubuntu Desktop VICE

Linux Desktops using Apache Guacamole, and Xpra have been integrated into the DE.

# Featured Apps

CyVerse hosts the recipes of its featured apps on GitHub: <https://github.com/cyverse-vice/>

These images are built from other official projects and are maintained by CyVerse staff.

# Instant Launches

From the Home tab in the DE, there are several apps that have an **Instant Launch** feature which allows you to start the app with a single click.

These apps launch with their default number of cores, amount of RAM, and timeout, and without input data. You can always import data using HTTPS protocols or iCommands after launch.

# Quick Launches

Quick launch buttons are directed URLs that allow you to share an app with pre-set configurations. After selecting an app, you will be taken to the app launcher where you can select input data sets, and then set size and time parameters. Any public app can have a quick launch URL generated for it.

To use one of the Featured Launches listed below in the table, copy the badge (button link) to add to wherever you collaborate (a webpage, project notes, documentation, etc.).

To create your own Saved Launch, start by launching the app you want to use. This will be a good time to Favorite the app. In the "Review & Launch" panel, click the "Create Saved Launch" button. You will be asked to name your Saved Launch and check the box when prompted if you would like it to be public. Remember which app you saved, you will find the link under Details of the app you saved.

  App Name                                                                                 Dockerfile                                                          Saved Launch
  ---------------------------------------------------------------------------------------- ------------------------------------------------------------------- --------------
  [Rocker Project RStudio Verse](https://github.com/rocker-org/rocker-versioned2)          [GitHub](https://github.com/cyverse-vice/rstudio-verse/)            \_
  [Rocker Project RStudio Geospatial](https://github.com/rocker-org/rocker-versioned2)     [GitHub](https://github.com/cyverse-vice/rstudio-geospatial/)       \_
  [JupyterLab Datascience](https://hub.docker.com/r/cyversevice/jupyterlab-datascience/)   [GitHub](https://github.com/cyverse-vice/jupyterlab-datascience/)   \_
  [JupyterLab Geospatial](https://hub.docker.com/r/cyversevice/jupyterlab-datascience/)    [GitHub](https://github.com/cyverse-vice/jupyterlab-datascience/)   \_

You can design your own badge at [Shields.io](https://shields.io).

------------------------------------------------------------------------

# Sharing VICE apps with collaborators

You can share your running VICE workspace with colleagues (with a CyVerse account) who can see and edit your notebooks, logs, and outputs.

**To share your running workspace**

Click on the Analyses view.

![vice-share-1](../img/vice-share-1.png){width="750px"}

Select the running analysis and click *Share* from the top bar.

![vice-share-2](../img/vice-share-2.png){width="750px"}

From the sharing window, search for your collaborator(s) by CyVerse username, email, or group name.

![vice-share-3](../img/vice-share-3.png){width="750px"}

**Opening workspaces shared with you**

Click on the Analyses view.

![vice-share-1](../img/vice-share-1.png){width="750px"}

Select the running analysis and click *Go to analysis* (square arrow box on right).

![vice-share-6](../img/vice-share-6.png){width="750px"}

This will launch the shared analysis in a new window.

![vice-share-7](../img/vice-share-7.png){width="750px"}

------------------------------------------------------------------------

You can also share a VICE app without sharing a running instance of that app.

-   Apps that have been made public in the Discovery Environment can be shared with the [public app's URL](https://wiki.cyverse.org/wiki/display/DEmanual/Viewing+App+and+Tool+Information).
-   Unpublished apps (those in your private workspace that have not yet been made public) can be shared with specific users or teams. See [Sharing your App or Workflow and Editing the User Manual](https://wiki.cyverse.org/wiki/display/DEmanual/Sharing+your+App+or+Workflow+and+Editing+the+User+Manual#SharingyourApporWorkflowandEditingtheUserManual-Sharingandunsharinganunpublishedapporworkflowwithspecificusers).
-   A Quick Launch configuration can be created, and then the URL to the Quick Launch can be shared.

------------------------------------------------------------------------

**Creating and sharing Quick Launch configurations**

Quick Launches provide a way to set default parameter values for an analysis, which can make it much easier to launch similar jobs without having to select the parameter values that the jobs have in common for every new analysis.

To create a Quick Launch, open the app as if you are going to run it, fill in any default parameters for this Quick Launch, then click the **Create Quick Launch** button instead of the **Launch Analysis** button.

![quick-launch-create](../img/quick_launch/create_quick_launch.png){width="640px"}

You can then name the Quick Launch and make it public.

![quick-launch-dialog](../img/quick_launch/create_quick_launch_dialog.png){width="363px"}

To share the link for a public Quick Launch, or to copy its badge code for embedding in web pages or in repo markdown files, click the **Quick Launch** menu item from the app's 3-dot menu in the **Apps window**.

![quick-launch-use](../img/quick_launch/use_quick_launch.png){width="585px"}

Note that private Quick Launch configurations cannot be shared, and clicking on them from this listing simply opens the app launch dialog with its parameters pre-filled, according to the Quick Launch configuration.

If you don't need to save any default inputs or parameters, you can also use the app's public URL for sharing the VICE app, which acts the same as a Quick Launch, but it doesn't have any parameters pre-filled.

[vll]: https://de.cyverse.org/apps/de/3548f43a-bed1-11e9-af16-008cfa5ae621/launch?quick-launch-id=81b187d6-cc94-4c53-81b5-f09f31c9c8ba

[dsll]: https://de.cyverse.org/apps/de/07a2d5b2-76e2-11eb-be5f-008cfa5ae621/launch?quick-launch-id=60054c75-0e80-4169-8a9b-51cba04f756d

[vlb]: ../assets/de/app_badges/verse-latest-badge.svg
[dslb]: ../assets/de/app_badges/datascience-latest-badge.svg



