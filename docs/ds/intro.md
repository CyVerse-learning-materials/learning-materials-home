# Data Store Guide

![DataStore_Icon](../assets/ds/datastore-icon.png)

## Goal

The Data Store is more than a place to save your files. The Data
Store is a way to manage the life cycle of your data. From the moment
you collect data, to publication and beyond, there are a number of
practices you should follow to ensure the integrity and value of your
data are maintained. This includes making your data more FAIR (Findable,
Accessible, Interoperable, and Reusable). The Data Store helps you
achieve this with less effort. 

This guide will cover the minimum needed
to get you started. Please look through the [Data Store Manual](https://cyverse.atlassian.net/wiki/spaces/DS/overview) for a more comprehensive look at Data Store capabilities.

------------------------------------------------------------------------

## Prerequisites

**Downloads, access, and services**

*In order to complete this tutorial you will need access to the
following services/software*


| Prerequisite | Preparation/Notes | Link/Download |
| --- | --- | --- |
| CyVerse account (optional) | CyVerse supports anonymous data access to public data sets in the [CyVerse Data Commons](https://datacommons.cyverse.org/). <br> This guide is written with the assumption you are a CyVerse account holder. <br> See the [Data Store Manual](https://cyverse.atlassian.net/wiki/spaces/DS/overview) for more info on anonymous access. |  Register |
| Cyberduck (optional) |  Cyberduck is a 3rd party application with a graphical user interface that allows you to easily upload and download data (available for Mac /PC). <br> You will also need to download our connection profile (bookmark). | - [Cyberduck Website](https://cyberduck.io/download/) <br> - [Cyberduck connection profile](https://cyverse.atlassian.net/wiki/download/attachments/241869843/CyVerseDataStore.cyberduckprofile?version=1&modificationDate=1568640173000&cacheVersion=1&api=v2) |
|iCommands (optional) | iCommands are a set of command line binaries that can be used to interact with the Data Store. <br> Download iCommands (available for Mac/ Linux) if you want to use these functionalities. | - [iCommands (for Mac)](https://cyverse.atlassian.net/wiki/download/attachments/241869823/cyverse-icommands-4.1.9.pkg?version=3&modificationDate=1472820029000&cacheVersion=1&api=v2) <br> - [iCommands (for Linux; see iCommands CLI)](https://irods.org/download/) |
| Spreadsheet editor (optional) | To edit a metadata template in .csv format, we recommend using a spreadsheet editor such as Microsoft Excel or LibreOffice Calc. | Free [LibreOffice](https://www.libreoffice.org/) |

!!! Warning

    When uploading your data to the Data Store, avoid creating and naming
    files/folders with names containing spaces (e.g., experiment one.fastq)
    or special characters (e.g., \~ \` ! @ \# \$ % \^ & \*
    ( ) + = { } \[ \] \| : ; \" \' \< \> , ? /). The Apps on the Discovery
    Environment and most command line apps will typically not tolerate these
    characters. For long file/folder names, we recommend you use underscores in the file name (e.g.,
    experiment_one.fastq).

------------------------------------------------------------------------

**Fix or improve this documentation**

-   Search for an answer: [CyVerse Learning Center](https://cyverse-learning-materials.github.io/learning-materials-home)
-   Ask us for help: click the Intercom icon ![Intercom](../assets/intercom.png){ width="25" } on the lower right-hand side of the page
-   Report an issue or submit a change: [Github Repo](https://github.com/CyVerse-learning-materials/data_store_guide)
-   Send feedback: [learning@CyVerse.org](learning@CyVerse.org)

------------------------------------------------------------------------
