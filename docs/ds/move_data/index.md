# Moving Data

There are several ways to move data between the CyVerse Data Store and other computers, whether your local machine or a remote one. These methods vary in speed, flexibility, and technical knowledge necessary to use them. You may find that different methods suit your needs for different projects at different times.

| Method	        | Access Point | Upload/Download | Installation/Setup Required | Account Required | Max File Size |
|-----------------------|--------------|-----------------|-----------------------------|------------------|---------------|
| Discovery Environment | Web          | Both            | No                          | Yes              | 2GB/file upload, no limit import |
| Data Commons          | Web          | Download        | No                          | No               | 2GB/file      |
| Cyberduck             | Desktop App  | Both            | Yes                         | Yes, or public data only | > 10GB |
| iCommands             | Command line | Both            | Yes                         | Yes, or public data only | > 10GB |

[de]: ../../assets/de/logos/deIcon.svg
[data]: ../../assets/de/menu_items/dataIcon.svg

This page summarizes each of the four methods of moving data to the Data Store:

  1. Using the [Discovery Environment](../../de/manage_data.md) interface (visit the [Distributing Data quickstart](../quick-data-share.md) for a rapid introduction to distributing data)
  2. Using the [CyberDuck](../cyberduck.md) browser
  3. Through the [Command Line and iCommands](../icommands.md)
  4. Through [WebDAV](../webdav.md)

## Using the Discovery Environment interface

1. Log into the [![de]{width="25"} Discovery Environment](https://de.cyverse.org){target=_blank}

2. Open the [![data]{width="25"} Data](https://de.cyverse.org/data){target=_blank} icon on the left

More details are available in the [Data Store](../../de/manage_data.md) documentation.

## Using the CyberDuck browser

Cyberduck is only available for Windows and Mac OS X

1. Install [CyberDuck](https://cyberduck.io){target=_blank}.

2. Set up [CyVerse iRODS profile for CyberDuck](../cyberduck.md).

More details are available in the [CyberDuck](../cyberduck.md) documentation.

## Using Command Line

1. [Download and install iCommands following the instructions for Linux , Mac, or Windows](https://cyverse.atlassian.net/wiki/spaces/DS/pages/241869823/Setting+Up+iCommands#SettingUpiCommands-linux){target=_blank}.

2. Set path for iCommands binaries:

   Mac OS X example: `export PATH="/Applications/icommands/:$PATH"`

     Linux example: `export PATH="/home/username/bin/:$PATH"`

     Run `iinit` and configure irods environment in your terminal

   Example `iinit`:

      ```
      user@yourcomputer (~) $ iinit
      One or more fields in your iRODS environment file (.irodsEnv) are
      missing; please enter them.
      Enter the host name (DNS) of the server to connect to:data.cyverse.org
      Enter the port number:1247
      Enter your irods user name:cyverse_username
      Enter your irods zone:iplant
      Those values will be added to your environment file (for use by
      other i-commands) if the login succeeds.

      Enter your current iRODS password:
      ```

   `ils` get list of files in current working directory in the Data Store

   `icd /iplant/home/username/<dir>` change working directory in the Data Store

   `iget ~/<filename>` will get files from the Data Store

    - `-r` # For recursive transfer of directories and their contents
    - `-P` # display the progress of the upload
    - `-f` # force the upload and overwrite
    - `-T` # Renew socket connection after 10 min (May help connections that are failing due to some connection/firewall settings)


   `iput <filename>` will put files from local machine to the Data Store

     - `-r` # For recursive transfer of directories and their contents
     - `-P` # display the progress of the upload
     - `-f` # force the upload and overwrite
     - `-T` # Renew socket connection after 10 min (May help connections that are failing due to some connection/firewall settings)

For more thorough documentation on using iCommands to move data, visit the [Command Line Transfer](../icommands.md) page.

## Using WebDAV 

Read more on setting up and moving data through WebDAV [here](../webdav.md).

### Mac OS X

1. Open Finder.

2. From the menu at the top of your screen, select “Go”.

3. In the dropdown menu, select “Connect to Server…”.

4. In the pop-up window called “Connect to Server”, type in https://data.cyverse.org/dav/iplant/home/<your CyVerse user name>`.

5. Another window will pop up. For “Connect As:” select “Registered User”. Type in your CyVerse user name for “Name:” and your CyVerse password for “Password”.

  If you logged in successfully, your Data Store account will be available through Finder. “data.cyverse.org” will be listed under “Locations” on the right-side menu in a Finder window.

### Linux 

1. Open File Manager.

2. At bottom left, select "+ Other Locations".
  
3. At bottom, there should be a "Connect to Server".
  
4. Enter: `davs://data.cyverse.org/dav/iplant/home/<username>` 
  
   You will be prompted to enter your Cyverse `username` and `password`. 

5. You should now be connected to your home folder in the Data Store.

## Summary
  
You now have the power to move data to, from, and within CyVerse. Use your power wisely!
