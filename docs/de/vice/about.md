# Interactive Analysis in the Discovery Environment

**VICE** stands for Visual Interactive Computing Environment and is a part of CyVerse's [Discovery Environment (DE)](https://de.cyverse.org). 

CyVerse maintains featured apps from the [Rocker-Project](https://rocker-project/images){target=_blank}, [Project Jupyter](https://jupyter-docker-stacks.readthedocs.io/en/latest/index.html){target=_blank}, and [Visual Studio Code](https://code.visualstudio.com/docs/remote/create-dev-container){target=_blank}.

Our Docker images are built from community-maintained image registries (i.e., [DockerHub](https://hub.docker.com/){target=_blank}, [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry){target=_blank}, [NVIDIA GPU Container Registry](https://catalog.ngc.nvidia.com/){target=_blank}, [BioContainers](https://biocontainers.pro/){target=_blank}, with a few additonal packages for use in CyVerse DE.

There are a few common categories of featured interactive applications:

**Linux Shell**

<a href="https://de.cyverse.org/instantlaunch/268f5f76-874c-11ef-a273-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Cloud-Shell-white?style=plastic&logo=gnometerminal"></a>

- To add this badge to your own `README.MD`:
	```html
	<a href="https://de.cyverse.org/instantlaunch/268f5f76-874c-11ef-a273-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/BASH-terminal-white?style=plastic&logo=gnometerminal"></a>
	```

**Integrated Development Environments (IDE)**

[:simple-rstudioide: Rocker RStudio](https://rocker-project.org/){target=_blank}
  
<a href="https://de.cyverse.org/instantlaunch/65baab58-7b4c-11ef-b6d1-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/RStudio-latest-blue?style=plastic&logo=r"></a>

- To add this badge to your own `README.MD`:
	```html
	<a href="https://de.cyverse.org/instantlaunch/65baab58-7b4c-11ef-b6d1-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/RStudio-latest-blue?style=plastic&logo=r"></a>
	```

[:simple-jupyter: Project Jupyter Lab](https://quay.io/organization/jupyter){target=_blank}

<a href="https://de.cyverse.org/instantlaunch/2dd0d31e-7b4e-11ef-a0db-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Datascience-latest-orange?style=plastic&logo=jupyter"></a>

- To add this badge to your own `README.MD`:
	```html
	<a href="https://de.cyverse.org/instantlaunch/2dd0d31e-7b4e-11ef-a0db-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Datascience-latest-orange?style=plastic&logo=jupyter"></a>
 	```

[:material-microsoft-visual-studio-code: Visual Studio Code Server](https://code.visualstudio.com/docs/remote/vscode-server){target=_blank}

<a href="https://de.cyverse.org/instantlaunch/f8fb49e2-b1be-11ef-b3fa-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/VSCode-latest-6C33AF?style=plastic&logo=visualstudiocode"></a>

- To add this badge to your own `README.MD`:
	```html
	<a href="https://de.cyverse.org/instantlaunch/f8fb49e2-b1be-11ef-b3fa-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/VSCode-latest-6C33AF?style=plastic&logo=visualstudiocode"></a>
	```
  
**Virtual Desktop Environments**

[KASM Desktops](https://hub.docker.com/r/kasmweb/desktop){target=_blank}

<a href="https://de.cyverse.org/instantlaunch/4cd631f0-7b4e-11ef-a0db-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Ubuntu-22.04-green?style=plastic&logo=Ubuntu"></a>

- To add this badge to your own `README.MD`:
	```html
	<a href="https://de.cyverse.org/instantlaunch/4cd631f0-7b4e-11ef-a0db-008cfa5ae621" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Ubuntu-22.04-green?style=plastic&logo=Ubuntu"></a>
 	```

**Web Server Applications**
   
- StreamlitApps, ShinyApps, WebGL, HTML5, etc. 

CyVerse hosts the container recipes (Dockerfiles) of its featured apps on GitHub: <https://github.com/cyverse-vice/>. These images are maintained by CyVerse staff.

??? Tip "Getting VICE Access"

	Since VICE (the Visual Interactive Computing Environment) is a target for cryptocurrency miners, we require an additional verification.
	
	To get access to VICE, your CyVerse account must be associated with a valid email address from an organization, an educational institution, or a government; e.g., an email ending with `.org`, `.edu`, or `.gov`.  We do not grant VICE access to commercial email addresses, e.g., `@gmail.com`, `@yahoo.com`, `@msn.com`, etc.
	
	To request VICE access, visit the [User Portal](https://user.cyverse.org/services){target=_blank} and **Services**; look for [![][vice]{width=30}](https://user.cyverse.org/services){target=_blank} [DE VICE](https://user.cyverse.org/services){target=_blank} and select the **REQUEST ACCESS** link.
	
	You will be asked for a description of your intended VICE use: please give non-technical scientific details, and if you can, link an external resource (like a workshop or lab website) and funding agency.

-----------------------------------------------------------------------    

## Launching Applications

When you open the Apps Tab in the DE, there are several featured Applications immediately visible, these are all Interactive Apps.

These apps launch with their default number of cores, amount of RAM, and timeout, and without input data. 

??? Tip "Instant Launching Apps"
   
    [![][vice]{width=60}](https://de.cyverse.org/instantlaunches){target=_blank}

    Pre-configured apps with base settings can be launched with one click from the Instant Launch menu.

    These apps have 4-cores and 16 GB RAM pre-set limit.

1. Log into the [![][de]{width=25}](https://de.cyverse.org){target=_blank} [Discovery Environment](https://de.cyverse.org){target=_blank}.

2. Click on the [![][apps]{width=25}](https://de.cyverse.org/apps){target=_blank} [Apps](https://de.cyverse.org/apps){target=_blank}.

3. Select one of the Featured Apps.

4. Adjust the following:
    
    Under "Analysis Info", for **Output Folder** click **Browse** and navigate to and select your new `/analysis/` folder and re-name it, or leave it as the default name, then click **Next**;
    
    In **Advanced Settings** you can modify the resources used by the container (e.g., more cores, more RAM, or disk space for larger analyses) or leave the default settings, then click **Next**;
   
    Click **Launch Analysis** to launch your application.
    
    Your analysis should be available within one minute. If it takes more than five minutes, terminate the analysis and try again. 

5.  In the navigation bar, click on the [![][analyses]{width=30}](https://de.cyverse.org/analyses){target=_blank} [Analyses](https://de.cyverse.org/de/analyses){target=_blank} view.

    Your application will first appear as "Submitted" (this takes a minute or two; maybe more depending on both the size of the container and any additional imported data).

    When the Status of the launch is "Running", click on the running App under "Analyses"; a new tab will open in your browser.

??? Tip "Be patient, but not too patient with custom apps or large images"

    Featured images are cached on the resource nodes and should start in under 30 seconds. 

    However, newly updated images must be pulled from our container registry or from public registries.

    Data Science and Machine Learning images can be two to twenty gigabytes (Gb), and may take five to ten minutes to download and inflate the first time they are run. 
    
    Even when the application has entered 'Running' status, it may take additional time for input data to be transferred onto the resource with the new container. 

----------------------------------------------------------------------- 

## Accessing data from VICE apps

VICE apps have web access, so you can import data using methods like `curl` or querying external databases. 

You can also access your Data Store `/iplant/home/<username>` and `/iplant/home/shared/` directories directly from VICE apps via the CSI Driver. 

Your Data Store home folder is mounted via the path `~/data-store/home/<username>/`. You will also have access to public Projects and private Projects shared with your username in the Data Store via the path `~/data-store/home/shared/`. 

You will be able to read, write, and delete data from the Data Store from a VICE app, just as you would on a local filesystem. 

**Important: data mounted over the CSI Driver in `~/data-store/home/<username>/` have much slower I/O performance than data in the `~/` or `~/data-store/`.**

!!! Info "CSI Driver in VICE"

	VICE Apps takes advantage of the [Kubernetes Container Storage Interface (CSI) Driver](https://kubernetes-csi.github.io/docs/introduction.html){target=_blank}.

 	This feature brings your Data Store into the container with you every time you launch a new analysis.

  	Remember: these mounted data are being viewed over the network and when they are moved or modified their performance is much slower than the data physically located on the hard disk drives or SSD of the host where your Analysis container is running. 

   	In general the CSI driver can handle Notebooks and small data files without any noticeable differences. 

    	You will begin to see degredation in performance for operations requiring access to many files or very large files.

     	For these types of processes, we recommend making a copy of your data in your current working directory, and moving them back to the Data Store when you're finished.

      	Data can be moved over the CSI driver using normal UNIX commands like `cp` and or `mv` but be aware that any modifications you make will be recorded on the Data Store.

       	Files that you have `read-only` access to will not be modified on the Data Store.
	

??? Tip "Working with many files"
	
	Read/write speeds for single files are quite fast, but can slow down when accessing many files. 

	If you are working with many small files, it may be faster to keep your data in the Data Store in a compressed format (such as .tgz or .zip), then use `cp` to copy the data from `~/work/home/username/` to `~/work`. Working with many small files within the VICE app's container will be faster than accessing them directly from the Data Store.
	
	Speed benchmark for moving a folder with many CSV files:

	moving storms_by_year/ folder: 23.5s

	moving storms_by_year.zip: 0.07s

	unzipping: 0.063s

## Using Git and GitHub from VICE

Git and Github are essential tools for software version control. The following documentation show how to use Git and Github with the Cyverse Discovery Environment and specifically with Visual Interactive Computing Environement (VICE) apps (e.g, Jupyter Lab). The core VICE apps (RStudio, JupyterLab, and Cloud Shell) have the [`GitHub command line interface`][gh] installed. 


### The Problem

Your personal datastore directory (ie, `~/data-store/home/<cyverse_user_name>`) would seem like the most logical place to clone git repositories, work in them, then push changes back up to Github. Unforntunately, git repositories are not compatable with Integrated Rule Oriented Data System (IRODS) which is the underlying technology of the Cyverese Datastore. So to use git and github with Cyverse, we need a different solution. 

### The Solution

Instead of doing git commands from your personal datastore, we can do git from the home directories of JupyterLab or Cloudshell containers. When you first launch a JupyterLab terminal, you will probably be in the directory `~/` or `~/data-store`. From these directories, git commands work perfectly fine. To do git commands with Github, we need to have `.gitconfig` and `.ssh` files stored in our container. A problem with this is that Cyverse containers are ephemeral and disappear when the App is shutdown. That means every time a CyVerse Jupyter App is launched, users need to create git credentials and an ssh key for a GitHub handshake. Quite annoying! 

We can work around this issue by creating `.config` and `.ssh` files one time in the container and then store them in your personal Datastore directory. Each time you start a new JupyterLab container we need to copy the `.config` and `.ssh` files from your personal Datastore directory back to the container. 

#### Step 1: Set up the authentication handshake with Github

- Launch a VICE App with Jupyter (e.g., [JupyterLab Data Science](https://de.cyverse.org/apps/de/c2227314-1995-11ed-986c-008cfa5ae621))
- Once the App is running, open the App's terminal.
- `ssh`:
  1. Create your ssh key with `ssh-keygen`. Use whichever encryption you prefer.
  2. Copy your `ssh` folder to your own private CyVerse Data Store folder (`cp -r ~/.ssh/ ~/data-store/home/<username>/`)
  3. Copy your publish `ssh` key to GitHub (print key with `cat ~/.ssh/id_rsa.pub`, copy the key, go to https://github.com/settings/keys and add your key)
- `git` credentials:
  1. Create your `git` credentials with `git config --global user.name "<GitHub username>"` and `git config --global user.email "<GitHub email>"`
  2. Copy your `git`credentials to your own private CyVerse Data Store folder (`cp ~/.gitconfig ~/data-store/home/<username>/`)

You can now work on your cloned GitHub repositories and push changes.

#### Step 2: Reproducing the handshake

Likely, once done with work on the launched App, you will terminate it and therefore lose the `ssh` and `git` credentials.
Since we have copied the necessary files to our own private Data Store folders, we can reproduce this handshake by just copying these files to any newely launched App.

1. Copy the `ssh` files with `cp -r ~/data-store/home/<username>/.ssh ~/`
2. Copy the `git` credentials with `cp ~/data-store/home/<username>/.gitconfig ~/`

You should now be able to work on your cloned GitHub repositories and push changes without having to recreate the `ssh` key or your `git` credentials.

!!! Tip 
Remember that as you are working in a git repository in a Cyverse container, the container is ephemeral and will disappear when the App is shutdown. You will also lose any changes you made in the repository. PLEASE  REMEMBER TO PUSH CHANGES TO GITHUB OFTEN! Cyverse containers will self-destruct after the alloted time. 


!!! Tip "Working with Git repositories"

	For the time being, we recommend cloning repositories into `~/` or `~/data-store` rather than into `~/data-store/home/username`, because the large number of files in a Git repository can make transfers to the Data Store slow. We are working on optimizing the `git clone` process to address this issue.


## Instant Launches

From the Home tab in the DE, there are several apps that have an **Instant Launch** feature which allows you to start the app with a single click.

These apps launch with their default number of cores, amount of RAM, and timeout, and without input data. You can always import data using HTTPS protocols or iCommands after launch.

## Quick Launches

Quick launch buttons are directed URLs that allow you to share an app with pre-set configurations. After selecting an app, you will be taken to the app launcher where you can select input data sets, and then set size and time parameters. Any public app can have a quick launch URL generated for it.

To use one of the Featured Launches listed below in the table, copy the badge (button link) to add to wherever you collaborate (a webpage, project notes, documentation, etc.).

To create your own Saved Launch, start by launching the app you want to use. This will be a good time to Favorite the app. In the "Review & Launch" panel, click the "Create Saved Launch" button. You will be asked to name your Saved Launch and check the box when prompted if you would like it to be public. Remember which app you saved, you will find the link under Details of the app you saved.


[gh]: https://cli.github.com/
[gh-manual]: https://cli.github.com/manual/index

[de]: ../assets/de/logos/deIcon.svg
[home]: ../assets/de/menu_items/homeIcon.svg
[data]: ../assets/de/menu_items/dataIcon.svg
[apps]: ../assets/de/menu_items/appsIcon.svg
[analyses]: ../assets/de/menu_items/analysisIcon.svg
[vice]: ../assets/de/logos/deviceIcon.png


