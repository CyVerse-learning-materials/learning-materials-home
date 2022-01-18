> \<a href=\"<https://atmo.cyverse.org>\"
> target=\"blank\"\>Atmosphere\</a>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/atmman/Atmosphere+Manual+Table+of+Contents>\"
> target=\"blank\"\>Atmosphere Manual\</a>

> \<a
> href=\"<https://learning.cyverse.org/projects/atmosphere-guide/en/latest/>\"
> target=\"blank\"\>Atmosphere Guide\</a>

> \<a href=\"<https://bisque.cyverse.org/client_service/>\"
> target=\"blank\"\>BisQue\</a>

> \<a href=\"<https://wiki.cyverse.org/wiki/display/BIS>\"
> target=\"blank\"\>BisQue Manual\</a>

> \<a href=\"<https://user.cyverse.org/>\" target=\"\_blank\"\>CyVerse
> User Portal\</a>

> \<a href=\"<http://learning.cyverse.org>\" target=\"blank\"\>CyVerse
> Learning Center\</a>

> \<a href=\"<https://wiki.cyverse.org>\" target=\"blank\"\>CyVerse
> Wiki\</a>

> \<a href=\"<http://www.cyverse.org/data-store>\"
> target=\"\_blank\"\>Data Store\</a>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/DS/Data+Store+Table+of+Contents>\"
> target=\"blank\"\>Data Store Manual\</a>

> \<a
> href=\"<https://learning.cyverse.org/projects/data_store_guide/en/latest/>\"
> target=\"blank\"\>Data Store Guide\</a>

> \<a href=\"<https://de.cyverse.org/de/>\" target=\"blank\"\>Discovery
> Environment\</a>

> \<a
> href=\"<https://wiki.cyverse.org/wiki/display/DEmanual/Table+of+Contents>\"
> target=\"blank\"\>DE Manual\</a>

> \<a
> href=\"<http://learning.cyverse.org/projects/cyverse-discovery-environment-guide/>\"
> target=\"blank\"\>Discovery Environment Guide\</a>

> \<a href=\"<https://dnasubway.cyverse.org/>\" target=\"blank\"\>DNA
> Subway\</a>

> \<a
> href=\"<https://learning.cyverse.org/projects/dnasubway_guide/en/latest/>\"
> target=\"blank\"\>DNA Subway Manual\</a>

> \<a
> href=\"<https://learning.cyverse.org/projects/dnasubway_guide/en/latest/>\"
> target=\"blank\"\>DNA Subway Guide\</a>

> \<a href=\"<https://www.sciapps.org/>\" target=\"blank\"\>SciApps\</a>

> \<a
> href=\"<https://learning.cyverse.org/projects/sciapps_guide/en/latest/>\"
> target=\"blank\"\>SciApps Manual\</a>

> \<a
> href=\"<https://learning.cyverse.org/projects/sciapps_guide/en/latest/>\"
> target=\"blank\"\>SciApps Guide\</a>

> \<a href=\"<https://cyverse-de.github.io/api/>\"
> target=\"blank\"\>Terrain DE API Docs\</a>

> \<a href=\"<https://www.tacc.utexas.edu/tapis>\"
> target=\"blank\"\>Tapis TACC API\</a>

> \<a href=\"<http://ask.iplantcollaborative.org/questions>\"
> target=\"blank\"\>Ask CyVerse\</a>

> \<a href=\"<http://learning.cyverse.org/en/latest/>\"
> target=\"blank\"\>Agave Guide\</a>

> \<a href=\"<http://developer.agaveapi.co/#introduction>\"
> target=\"blank\"\>Agave API\</a>

> \<a href=\"<https://agaveapi.co>\" target=\"blank\"\>Agave Live
> Docs\</a>

> \<a href=\"<http://learning.cyverse.org/en/latest/>\"
> target=\"blank\"\>BisQue Guide\</a>

> \<a
> href=\"<https://github.com/CyVerse-learning-materials/Visual_Interactive_Computing_Environment>\"
> target=\"blank\"\>Github Repo Link\</a>

> \<a href=\"<https://hub.docker.com/u/jupyter>\"
> target=\"blank\"\>Project Jupyter Images\</a>

\_ [Learning Center Home](http://learning.cyverse.org/)

# **JupyterLab**

## 1. Search for JupyterLab

Log into [CyVerse DE](https://de.cyverse.org/de/)

Use the search bar to specify \'Apps\' or type keywords
[Jupyter]{.title-ref} or [JupyterLab Datascience]{.title-ref}

## 2. Launch analysis

Instant Launches will start the App immediately.

Clicking on **Apps** find the JupyterLab you\'re interested in and then
click on the blue run button.

By default the Analysis Name is the name of the App, and the Output
Folder is where any work done in the container will be written to
`/iplant/home/username/analyses/analysis_name/` directory **AFTER** the
interactive analysis is completed.

::: note
::: title
Note
:::

Deleting a running Analysis will stop it from writing outputs to your
data store `analyses/` directory.
:::

::: note
::: title
Note
:::

The input files and/or folders can be selected under the \'Parameters\'
tab.
:::

::: tip
::: title
Tip
:::

If you have an existing Jupyter workbook, you can import it into the app
using input files and/or folder in the Parameters .
:::

## 3. Navigate to JupyterLab url

After you start the VICE App, you will be taken to a loading screen.

Once the app is ready, it will transition to the Jupyter Lab interface

::: important
::: title
Important
:::

Normal wait times for a featured VICE App are less than 2 minutes. If
you\'re experiencing a significantly longer wait, consider terminating
the app and re-starting.
:::

**The Jupyter Lab Interface:** Jupyter Lab provides flexible building
blocks for interactive, exploratory computing. While Jupyter Lab has
many features found in traditional integrated development environments
(IDEs), it remains focused on interactive, exploratory computing. The
Jupyter Lab interface consists of a main work area containing tabs of
documents and activities, a collapsible left sidebar, and a menu bar.
The left sidebar contains a file browser, the list of running kernels
and terminals, the command palette, the notebook cell tools inspector,
and the tabs list.

More information about the Jupyter Lab can be found
[here](https://jupyterlab.readthedocs.io/en/stable/user/interface.html).

## 4. Create Jupyter notebook

Jupyter notebooks (`.ipynb`) combine code with narrative text
(Markdown), equations (LaTeX), images and interactive visualizations.

To create a notebook, click the `+` button, this opens the new Launcher
tab.

The JupyterLab Datascience containers have three pre-installed kernels:
Python3, Julia, and R.

[Official Jupyter
Notebooks](https://jupyterlab.readthedocs.io/en/stable/user/notebook.html)

::: tip
::: title
Tip
:::

To open the classic Notebook view from JupyterLab, select "Launch
Classic Notebook" from the Help Menu.
:::

## 5. Adding data to your analysis

To connect to the CyVerse DataStore, click the little CyVerse orb in the
left side of the Lab.

You should now be connected to your `/iplant/home/username` home
directory. Navigate to the \'shared\' directory by clicking one order
higher on the `/home` directory, you should now see your username and
the `/shared` path.

Navigate to
`/shared/cyverse_training/platform_guides/discovery_environment/jupyterlab`
and open the [Penguins](https://github.com/JohnMount/Penguins) sample
dataset

::: note
::: title
Note
:::

There are plenty other cool stuff that you can do in Jupyter Lab such as
using
[consoles](https://jupyterlab.readthedocs.io/en/stable/user/code_console.html),
using
[terminal](https://jupyterlab.readthedocs.io/en/stable/user/terminal.html)
and using [text
editor](https://jupyterlab.readthedocs.io/en/stable/user/file_editor.html).
:::

## 6. Write your own code

Once you open a new notebook, you can start writing your code, put
markdown text, generate plots, save plots etc.

## 6. Complete and Save Outputs

After finishing your analysis, you can save outputs to Data Store by
clicking the Analysis window, then select the VICE analysis that you are
running and select [Terminate]{.title-ref} under the \"Analyses\"
button.

After you had done this, you can find the outputs that you generated (if
any) using the same steps as before, but this time selecting \'Go To
Output Folder\'.

::: warning
::: title
Warning
:::

VICE apps only run for a pre-determined amount of time, typically
between 4 and 48 hours. If you have opted for email notifications from
DE, then you\'ll get a notification 1 day before and 1 hour before the
app gets terminated. If you want to extend the time, you need to login
to <https://de.cyverse.org>, find your analysis and then click the hour
glass which automatically extends the app run time.
:::

**Fix or improve this documentation**

-   On Github:
-   Send feedback: [Tutorials\@CyVerse.org](Tutorials@CyVerse.org)
