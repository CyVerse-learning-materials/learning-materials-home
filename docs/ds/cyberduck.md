[Learning Center Home](http://learning.cyverse.org/)

# Drag-and-drop Data Transfer with Cyberduck

Cyberduck is a 3rd party software (available as freeware) tool that
allows you to drag-and-drop files between your local computer and the
Data Store. Cyberduck can also be used to rename files, and browse other
shared or public Data Store locations.

------------------------------------------------------------------------

## Download and first-time configuration of Cyberduck

> 1.  Download Cyberduck at the [Cyberduck Website](https://cyberduck.io/download/); follow the installation instructions
>     for your operating system.
>
> 2.  Download the [CyVerse connection profile](https://cyverse.atlassian.net/wiki/download/attachments/241869843/CyVerseDataStore.cyberduckprofile?version=1&modificationDate=1568640173000&cacheVersion=1&api=v2) Double-click on the downloaded file - this
>     should open the installed Cyberduck software.
>
> 3.  In the Cyberduck configuration window, enter your **CyVerse
>     username** in the field 'iPlant username'.
>
> 4.  Under 'Advanced Options' ensure 'Transfer Files' option is set
>     to **'Open Multiple Connections'**. Close this window - your
>     entries will be automatically saved.
>     ![cyberduck_config](assets/data_store/cyberduck_config.png)
>
> 5.  Double-click on the Data Store bookmark in the Cyberduck window.
>     Enter your CyVerse credentials.
>     ![cyberduck_bookmark](assets/data_store/cyberduck_bookmark.png)

You should now be connected to the CyVerse Data Store and viewing the
contents of your home directory.

!!! Tip

    At the top of your Cyberduck window you can see your location within the
    Data Store. From Cyberduck's 'Go' menu, you can select 'Go to
    folder' to navigate to any other Data Store location that is public or
    shared with you.
    ![cyberduck_window](assets/data_store/cyberduck_window.png)

------------------------------------------------------------------------

## Upload from local computer to Data Store using Cyberduck

!!! Warning

   When uploading your data to the Data Store you should not upload
   files/ folders with names containing spaces (e.g. experiment
   one.fastq) or name that contain special characters (e.g. \~ \` ! @ \#
   \$ % \^ & \* ( ) + = { } \[ \] \| : ; \" \' \< \> , ? /). The Apps on
   the Discovery Environment and most command line applications will
   typically not tolerate these characters. For long file/folder names
   the use of underscores (e.g. experiment_one.fastq) is the recommended
   practice.
> 
>
> 1.  Double-click on the Data Store bookmark to connect to the Data
>     Store
>
> 2.  Select file(s)/folder(s) from your local machine and drag them
>     into the Cyberduck window. (You may drag directly into an existing
>     folder or from the Cyberduck 'File' menu, create a new folder).
>
> 3.  A 'Transfers' window will appear. Monitor the upload to
>     completion.
>     ![cyberduck_transfers](assets/data_store/cyberduck_transfers.png)

------------------------------------------------------------------------

## Download from Data Store to local computer using Cyberduck

> 1.  Double-click on the Data Store Bookmark to connect to the Data
>     Store
> 2.  Select file(s)/folder(s) in the Data Store (Cyberduck window) and
>     drag them to a location on your local computer.
> 3.  A 'Transfers' window will appear. Monitor the download to
>     completion.

!!! Tip

    In the Cyberduck 'File' menu, there are several more functionalities.
    You can for example directly specify files and folders to move without
    dragging and dropping them. You can also 'synchronize' folders - only
    copying items that are missing in a folder rather than copying all
    contents.


------------------------------------------------------------------------

**Fix or improve this documentation**

-   Search for an answer: [CyVerse Learning Center](https://cyverse-learning-materials.github.io/learning-materials-home)
-   Ask us for help: click on the lower right-hand side of the page
-   Report an issue or submit a change: [Github Repo](https://github.com/CyVerse-learning-materials/data_store_guide)
-   Send feedback: [learning@CyVerse.org](learning@CyVerse.org)

------------------------------------------------------------------------

> [Learning Center Home](http://learning.cyverse.org/)
