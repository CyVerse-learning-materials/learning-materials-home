# Data Store Guide

[data]: ../assets/ds/datastore_plchldr.png

[![][data]{width=200}](https://cyverse.org/data-store){target=_blank}

## Goal

The Data Store is more than a place to save your files; it is a way to easily manage the 
lifecycle of your data from upload to analysis to publication. The Data Store crosscuts, and is accessible from, 
all CyVerse platforms. Data Store features are designed to help you follow a number of practices to 
ensure that the integrity and value of your data are maintained and to make your data more FAIR (Findable,
Accessible, Interoperable, and Reusable) with less effort. 

This guide will cover the minimum needed
to get you started. Please see the [Data Store Manual](https://cyverse.atlassian.net/wiki/spaces/DS/overview) for a more comprehensive look at Data Store capabilities.

------------------------------------------------------------------------

## Prerequisites

**Downloads, access, and services**

*This guide is written assuming you have a CyVerse account. In order to complete these tasks, you will need access to the
following services/software*:


| Prerequisite | Preparation/Notes | Link/Download |
| --- | --- | --- |
| CyVerse account <br> (optional) | CyVerse supports anonymous access to public datasets in the [CyVerse Data Commons](https://datacommons.cyverse.org/){target=_blank}. See the [Data Store Manual](https://cyverse.atlassian.net/wiki/spaces/DS/overview){target=_blank} for more info on `anonymous` access. |  [Get account](https://user.cyverse.org/){target=_blank} |
| Cyberduck  <br> (optional) |  Cyberduck is a 3rd party application with a graphical interface that allows you to easily upload and download data (available for Mac/PC). <br> You will also need to download our connection profile (bookmark). | - [Cyberduck Website](https://cyberduck.io/download/){target=_blank} <br> - [Cyberduck connection profile](cyberduck.md) |
|iCommands  <br> (optional) | iCommands is a set of command line binaries that can be used to interact with the Data Store. Download iCommands (available for Mac/Linux) if you want to use these functionalities. | - [iCommands](icommands.md) - iCommands (for Linux and Mac OS X; also see [iCommands CLI](https://irods.org/download/){target=_blank}) |
| Text editor  <br> (optional) | To edit a metadata template in `.csv` format, we recommend using a text editor (e.g., Atom, Sublime Text, Excel, LibreOffice, VS Code) | Free Software: <br> - [Atom](https://atom.io/){target=_blank} <br> - [Sublime text](https://www.sublimetext.com/){target=_blank} <br> - [Visual Studio Code](https://code.visualstudio.com/){target=_blank} |

!!! Warning

    Avoid naming files/folders with names containing spaces (e.g., experiment one.fastq) 
    or special characters (e.g., \~ \` ! @ \# \$ % \^ & \*
    ( ) + = { } \[ \] \| : ; \" \' \< \> , ? /) when uploading your data to the Data Store. The apps on the Discovery
    Environment and most command line apps typically will not tolerate these
    characters. For long file/folder names, we recommend you use underscore(s) (e.g.,
    experiment_one.fastq) instead of spaces.

------------------------------------------------------------------------

**Fix or improve this documentation**

-   Search for an answer: [CyVerse Learning Center](https://cyverse-learning-materials.github.io/learning-materials-home)
-   Ask us for help: click the Intercom icon ![Intercom](../assets/intercom.png){ width="25" } on the lower right-hand side of the page
-   Report an issue or submit a change: [Github Repo](https://github.com/CyVerse-learning-materials/data_store_guide)
-   Send feedback: [learning@CyVerse.org](learning@CyVerse.org)

------------------------------------------------------------------------
