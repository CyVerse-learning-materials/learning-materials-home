# Transferring Data with iCommands and Command Line

iCommands is a collection of tools developed by the iRODS project. [iRODS](https://irods.org){target=_blank} is the technology that supports the CyVerse Data Store. Using iCommands is the most flexible way to interact with the Data Store. 

This section will cover the basics of iCommands installation and use.

**Things to remember about iCommands:**

    - This is a *command line* tool, operated in a terminal.
    - There is no support for Windows OS and PowerShell so we recommend using 
    [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install).

------------------------------------------------------------------------

## iCommands Installation for Linux

On a Linux OS you can use a package manager to install iCommands in the terminal. Instructions for configuring the iRODS repositories in Linux can be be found on the [iRODS Packages](https://packages.irods.org/) webpage.


**CentOS:**

Configure the repository and use `yum` to install the iCommands package `irods-icommands`.

``` bash
sudo rpm --import https://packages.irods.org/irods-signing-key.asc
wget -qO - https://packages.irods.org/renci-irods.yum.repo \
  | sudo tee /etc/yum.repos.d/renci-irods.yum.repo
sudo yum install irods-icommands
```

If that does not work, you can install an older version of iCommands, 4.1.12, from RENCI's website.

``` base
sudo yum install \
  https://files.renci.org/pub/irods/releases/4.1.12/centos7/irods-icommands-4.1.12-centos7-x86_64.rpm
```

**Ubuntu 18.04:**

Configure the repository and use `apt` to install the iCommands package `irods-icommands`.

``` bash
wget -qO - https://packages.irods.org/irods-signing-key.asc \
  | sudo apt-key add -
echo "deb [arch=amd64] https://packages.irods.org/apt/ $(lsb_release -sc) main" \
  | sudo tee /etc/apt/sources.list.d/renci-irods.list
sudo apt-get update
sudo apt install irods-icommands
```

**Ubuntu 20.04:**

Configure the repository and use `apt` to install the iCommands package `irods-icommands`.

``` bash
wget -qO - https://packages.irods.org/irods-signing-key.asc \
  | sudo apt-key add -
echo "deb [arch=amd64] https://packages.irods.org/apt/ focal main" \
  | sudo tee /etc/apt/sources.list.d/renci-irods.list
sudo apt update
sudo apt install irods-icommands
```

**Arm64/Aarch64:**

A CyVerse community user compiled i-commands for Raspberry Pi (and tested in NVIDIA Jetsons):
<https://github.com/jmscslgroup/libpanda/blob/master/scripts/irods-icommands-debs.tgz>

``` bash
wget https://github.com/jmscslgroup/libpanda/raw/master/scripts/irods-icommands-debs.tgz
tar zxvf irods-icommands-debs.tgz
cd irods-icommands-debs/
./install.sh
```

------------------------------------------------------------------------

## iCommands Installation for Mac OS X

iRODS doesn't currently support Mac OS X, but CyVerse has built an installer for it.

1.  Download the CyVerse-specific [Mac OS iCommands Download](https://cyverse.atlassian.net/wiki/download/attachments/241869823/cyverse-icommands-4.1.9.pkg?version=3&modificationDate=1472820029000&cacheVersion=1&api=v2).

2. Open the file by locating it in your Finder; right-click to run the installer. You may get a security warning noting the file is from an "unidentified developer." You may bypass this warning by going to 'System Preferences', selecting the 'Security & Privacy' menu, and clicking the 'Open Anyway' button to proceed.

3. Follow the prompts to begin the installation. You will need to know the administrator password to install new software on your computer.

!!! Note

    Newer Mac OS X now ships with `zsh` as its default shell rather than `bash`. 
    
    The installer will attempt to write some environmental variables to the `.bashrc` file which for `zsh` is called the `.zshrc`.

    By default, this installation will place iCommands in your system `PATH` so you should be ready to run iCommands immediately at the terminal. 
    
    If this does not happen (i.e., you get an error when trying to run `iinit`), you can add the iCommands path by editing your `.zshrc` file:

    ``` bash
    # add iCommands Path
    export PATH="/Applications/icommands/:$PATH"
    export IRODS_PLUGINS_HOME=/Applications/icommands/plugins/
    ```

    and then in terminal source the file `source ~/.zshrc`.

------------------------------------------------------------------------

## iCommands First-time Configuration

!!! Note

    If using iCommands in an HPC environment, which already has iCommands installed, run the `module load irods` command to get access to iRODS
    iCommands.
    
    Once iCommands is installed and in the system `PATH`, these instructions apply at a terminal in Mac OS X and Linux systems.

1.  Open a terminal
2.  Type `iinit` command to start the configuration
    process. When prompted, enter the values shown below as comments
    in the example code block.
    CyVerse Data Store configuration:

CyVerse Data Store configuration:

  | host name | port # | username | zone | password |
  |:---------:|:------:|:--------:|:----:|:--------:|
  | data.cyverse.org | 1247| CyVerse UserID | iplant | CyVerse Password |

!!! Note

    You can reconfigure iCommands for other iRODS zones by changing your environment file.

3.  Verify that your iCommands installation works and is properly configured using the `ils` command to list the contents of your Data Store home directory.

    ``` bash
    ils
       /iplant/home/your_home_directory:
    file1
    file2
    file3
    C- /iplant/home/your_home_directory/analyses
    C- /iplant/home/your_home_directory/another_folder
    ```

------------------------------------------------------------------------

## Anonymous Access to the CyVerse Data Store

You can access public data in the CyVerse Data Store with iCommands using:

-   Username: anonymous
-   Password: <leave blank>

## Upload Files/Folders from Local Computer to Data Store

!!! Warning

    When uploading your data to the Data Store, you should not upload files/folders with names containing spaces (e.g., `experiment one.fastq`) or special characters (e.g., \~ \`\` ! @ \# \$ % \^ & \* ( ) + = { } \[ \] \| : ; " ' < \> , ? / and \\). 
    
    The Apps on the Discovery Environment and most command line applications will typically not tolerate these characters. 
    
    For long file/folder names, we recommend the use of underscores (e.g., experiment_one.fastq) instead of spaces.

See the [full iCommands iput documentation](https://docs.irods.org/master/icommands/user/#iput) for more information.

1.  Upload a directory using the `iput` command. Remember, the -r flag is used to recursively upload a directory, so omit the -r flag if you are uploading a single file.

``` bash
iput -rPT /local_directory /iplant/home/cyverse_username/destination_folder
# This command will output the progress as it uploads your local directory
```

There are several optional arguments that the upload iCommand `iput` can
take:

``` bash
iput -r # for recursive transfer of directories and their contents

iput -P # to display the progress of the upload

iput -f # to force the upload and overwrite

iput -T # to renew socket connection after 10 mins (this may help connections
        # that are failing due to some connection/firewall settings)
```

------------------------------------------------------------------------

## Download Files/Folders from Data Store to Local Computer

See the [full iCommands iget documentation](https://docs.irods.org/master/icommands/user/#iget) for more information.

1.  Download a file using the `iget` command. Remember, the `-r` flag is used to recursively upload a directory, so omit the -r flag if you are uploading a single file.

``` bash
iget -PT /iplant/home/cyverse_username/target_file /local_destination
# This command will output the progress as it downloads to your local machine
```

!!! Tip "Using optional arguments"

    There are several optional arguments that the upload iCommand `iget` can take:

``` bash
iget -r # for recursive transfer of directories and their contents

iget -P # to display the progress of the upload

iget -f # to force the upload and overwrite

iget -T # to renew socket connection after 10 mins (this may help connections
        # that are failing due to some connection/firewall settings)
```

------------------------------------------------------------------------

## NetCDF iCommands

For the Linux distributions, there are three extra iCommands that support common NetCDF operations:

-   `inc` performs data operations on a list of NetCDF files
-   `incarch` archives an open-ended time series data
-   `incattr` performs operation on attributes of NetCDF files

Each of these commands accepts the `-h` command line option. When a command is called with this option, it displays the command's help documentation. Please see this help documentation for more information.

**Installation**

1.  Install iRODS Runtime. Before the NetCDF iCommands can be installed, the current version of the iRODS run-time library needs
    to be installed. Please install the appropriate version (e.g., `irods-runtime-X-X-XX`). The distribution-specific packages can be found on [RENCI's iRODs website](https://files.renci.org/pub/irods/releases/).
    
2.  Install NetCDF API. Once the run-time library is installed, the iRODS NetCDF API library needs to be installed. Please use the
    appropriate link to download the installation package and install it. The package installer will likely warn that iRODS user
    and/or group don't exist, and that it will be using root instead. These warnings are harmless, since the package contents should be  installed with root ownership.

    - CentOS7 NetCDF API
    - Ubuntu 14+ NetCDF API 

------------------------------------------------------------------------

## Additional Frequently Used iCommands

In addition to the commands above, there are several frequently used
iCommands, most of which follow the Linux paradigm:

-   **ipwd**: Print current directory
-   **imkdir**: Create a directory
-   **icd**: Change directory
-   **irsync**: Sync local directory with iRODS directory

