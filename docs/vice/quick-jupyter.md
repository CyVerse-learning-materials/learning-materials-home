# Jupyter Lab Datascience

# 1. Log into Discovery Environment

Log into <https://de.cyverse.org>

If you have not yet created an account, go to the [User Portal](https://user.cyverse.org) and sign up.

## 2. Launch the App

[![!jupyter_1](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/jupyter_1.png "jupyter_1"){ width="400" }](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch)

Click on the **Apps** grid icon

[Jupyter Lab Datascience](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch) is in "Featured Apps"

[Instant Launches](https://de.cyverse.org/instantlaunches) start Apps immediately when clicked.

The conventional launch menu allows you to modify the App parameters. You can add input data, increase the amount of RAM or CPU cores, and change the analysis directory.

[![!jupyter_2](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/jupyter_2.png "jupyter_2"){ width="400" }](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch)

## 3. Open the Analysis

After you have started a VICE App, your browser will open a new tab and automatically be taken to the loading screen.

[![!jupyter_3](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/jupyter_3.png "jupyter_3"){ width="400" }](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch)

[![!jupyter_4](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/jupyter_4.png "jupyter_4"){ width="400" }](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch)

Once the app is ready, it will transition to the user interface 

[![!jupyter_5](https://github.com/CyVerse-learning-materials/learning-materials-home/raw/mkdocs/assets/de/jupyter_5.png "jupyter_5"){ width="400" }](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch)

**The Jupyter Lab Interface:** 
While Jupyter Lab has many features found in traditional integrated development environments (IDEs), it remains focused on interactive, exploratory computing. 
The Jupyter Lab interface consists of a main work area containing tabs of documents and activities, a collapsible left sidebar, and a menu bar.
The left sidebar contains a file browser, the list of running kernels and terminals, the command palette, the notebook cell tools inspector, and the tabs list.

More information about the Jupyter Lab can be found [here](https://jupyterlab.readthedocs.io/en/stable/user/interface.html).

!!! Note
  
  Normal wait times for a featured VICE App are less than 2 minutes. 
  If you're experiencing a significantly longer wait, consider terminating the Analysis and starting a new one.

## 4. Activate a `conda` environment

To activate conda:

``` conda init ```

and then

``` conda activate base ```

If you recieve a message about refreshing your screen, you can `exit` the cloud shell by typing "exit" and then hitting the refresh button on your browser tab.

## 5. Create Jupyter notebook

Jupyter notebooks (`.ipynb`) combine code with narrative text (Markdown), equations (LaTeX), images and interactive visualizations.

To create a notebook, click the `+` button, this opens the new Launcher tab.

The JupyterLab Datascience containers have three pre-installed kernels: Python3, Julia, and R.

[Official Jupyter Notebooks](https://jupyterlab.readthedocs.io/en/stable/user/notebook.html)

To open the classic Notebook view from JupyterLab, select "Launch Classic Notebook" from the Help Menu.

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
