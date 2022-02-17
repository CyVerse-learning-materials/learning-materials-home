# Jupyter Lab in 6 Steps

## 1. Log into Discovery Environment

Log into <https://de.cyverse.org.

If you have not yet created an account, go to the [User Portal](https://user.cyverse.org) to sign up.

## 2. Launch the App

[![jupyter_1]][jupyter_1]

  [jupyter_1]: ../assets/de/jupyter_1.png

Click on the **Apps** grid icon.

[Jupyter Lab Datascience](https://de.cyverse.org/apps/de/cc77b788-bc45-11eb-9934-008cfa5ae621/launch) is in "Featured Apps".

[Instant Launches](https://de.cyverse.org/instantlaunches) start Apps immediately when clicked.

The conventional launch menu allows you to modify the App parameters. You can add input data, increase the amount of RAM or CPU cores, and change the analysis directory.

[![jupyter_2]][jupyter_2]

  [jupyter_2]: ../assets/de/jupyter_2.png

## 3. Open the Analysis

After you have started a VICE app, a new tab will automatically open in your browser and take you to the loading screen.

[![jupyter_3]][jupyter_3]

  [jupyter_3]: ../assets/de/jupyter_3.png

[![jupyter_4]][jupyter_4]

  [jupyter_4]: ../assets/de/jupyter_4.png

Once the app is ready, it will transition to the user interface. 

[![jupyter_5]][jupyter_5]

  [jupyter_5]: ../assets/de/jupyter_5.png

**The Jupyter Lab Interface:** 
While Jupyter Lab has many features found in traditional integrated development environments (IDEs), it remains focused on interactive, exploratory computing. 
The Jupyter Lab interface consists of a main work area containing tabs of documents and activities, a collapsible left sidebar, and a menu bar.
The left sidebar contains a file browser, the list of running kernels and terminals, the command palette, the notebook cell tools inspector, and the tabs list.

More information about the Jupyter Lab can be found [here](https://jupyterlab.readthedocs.io/en/stable/user/interface.html).

!!! Note
  
  Normal wait time for a featured VICE App to launch is less than 2 minutes. 
  If you're experiencing a significantly longer wait, consider terminating the Analysis and starting a new one.

## 4. Create a new `conda` environment

From Jupyter's Launch menu, select the black Terminal console icon.

This will take you to a command line shell.

Change directory, or download a sample `environment.yml` file:

```bash 
$ cd /home/jovyan/work/home/shared/cyverse_training/platform_guide/discovery_environment/jupyter/
$ conda create env -f environment.yml
```

or

```bash
$ curl https://data.cyverse.org/dav-anon/iplant/commons/community_released/cyverse_training/platform_guides/discovery_environment/jupyterlab/environment.yml
$ conda create env -f environment.yml
```

and then:

```bash
$ conda activate python39 
```

## 5. Create Jupyter notebook

Jupyter notebooks (`.ipynb`) combine code with narrative text (Markdown), equations (LaTeX), images and interactive visualizations.

To create a notebook, click the `+` button which opens the new Launcher tab.

The JupyterLab Datascience containers have three pre-installed kernels: Python3, Julia, and R.

[Official Jupyter Notebooks](https://jupyterlab.readthedocs.io/en/stable/user/notebook.html)

To open the classic Notebook view from JupyterLab, select "Launch Classic Notebook" from the Help Menu.

## 6. Terminate your app

The Discovery Environment is a shared system. In fairness to the community, users should "Terminate" any apps that
are no longer actively running analyses.

In the Analyses window, select the app (by clicking the checkbox next to it), select "More Actions", then "Terminate" to shut down the app.

[![jupyter_7]][jupyter_7]

  [jupyter_7]: ../assets/de/jupyter_7.png



Any new data in the `/home/jovyan/work/data/outputs` directory will begin copying back to your folder at this time.

Any input data which you added when the app started using the conventional launch feature will *not* be copied.

!!! Warning

  VICE apps run for a pre-determined amount of time, typically between 4 and 48 hours. 
  If you have opted for email notifications from DE, then you'll get a notification 1 day before and another 1 hour before the app gets terminated. 
  To extend the time, go to your analysis and click the hour glass icon which automatically extends the app run time.
