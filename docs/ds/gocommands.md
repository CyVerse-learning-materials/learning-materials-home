# Transferring Data with :simple-go: GoCommands and Command Line

GoCommands is a command-line tool developed by CyVerse. Unlike iCommands, GoCommands is portable which does not require any installation and runs on any modern OSes, such as MacOS, Linux, and Windows.

GoCommands are the preferred and most effective method of transferring data within CyVerse, especially for large quantities of data. This is to not put strain on the connection, ensuring your data is transferred safely, and for the amount of flexibility and control that GoCommands offer.

This section will cover the basics of GoCommands.

??? Tip "Things to remember about GoCommands"

    * :simple-gnometerminal: This is a command line tool, operated in a terminal.
    * Windows users must use `PowerShell` or `Command Prompt`.
    * You must have a [CyVerse account](https://user.cyverse.org){target=_blank} or other iRODS Zone account to authenticate.

------------------------------------------------------------------------

## :material-download: Download :simple-go: GoCommands

Here are commands to download and uncompress the package file for a target system's OS and architecture.

**:simple-linux: Linux :simple-amd: AMD64**

``` bash
GOCMD_VER=$(curl -L -s https://raw.githubusercontent.com/cyverse/gocommands/main/VERSION.txt); \
curl -L -s https://github.com/cyverse/gocommands/releases/download/${GOCMD_VER}/gocmd-${GOCMD_VER}-linux-amd64.tar.gz | tar zxvf -
```

**:simple-linux: Linux :simple-arm: ARM64**

``` bash
GOCMD_VER=$(curl -L -s https://raw.githubusercontent.com/cyverse/gocommands/main/VERSION.txt); \
curl -L -s https://github.com/cyverse/gocommands/releases/download/${GOCMD_VER}/gocmd-${GOCMD_VER}-linux-arm64.tar.gz | tar zxvf -
```

**:simple-macos: MacOS :simple-amd: AMD64**

``` bash
GOCMD_VER=$(curl -L -s https://raw.githubusercontent.com/cyverse/gocommands/main/VERSION.txt); \
curl -L -s https://github.com/cyverse/gocommands/releases/download/${GOCMD_VER}/gocmd-${GOCMD_VER}-darwin-amd64.tar.gz | tar zxvf -
```

**:simple-macos: MacOS :simple-arm: ARM64 (M1/M2)**

``` bash
GOCMD_VER=$(curl -L -s https://raw.githubusercontent.com/cyverse/gocommands/main/VERSION.txt); \
curl -L -s https://github.com/cyverse/gocommands/releases/download/${GOCMD_VER}/gocmd-${GOCMD_VER}-darwin-arm64.tar.gz | tar zxvf -
```

**:material-microsoft-windows-classic: Windows :simple-amd: AMD64 with :simple-windowsterminal: Command Prompt**

``` bash
curl -L -s -o gocmdv.txt https://raw.githubusercontent.com/cyverse/gocommands/main/VERSION.txt && set /p GOCMD_VER=<gocmdv.txt
curl -L -s -o gocmd.zip https://github.com/cyverse/gocommands/releases/download/%GOCMD_VER%/gocmd-%GOCMD_VER%-windows-amd64.zip && tar zxvf gocmd.zip && del gocmd.zip gocmdv.txt
```

**:material-microsoft-windows-classic: Windows :simple-amd: AMD64 with :simple-powershell: PowerShell**

``` bash
curl -o gocmdv.txt https://raw.githubusercontent.com/cyverse/gocommands/main/VERSION.txt ; $env:GOCMD_VER = (Get-Content gocmdv.txt)
curl -o gocmd.zip https://github.com/cyverse/gocommands/releases/download/$env:GOCMD_VER/gocmd-$env:GOCMD_VER-windows-amd64.zip ; tar zxvf gocmd.zip ; del gocmd.zip ; del gocmdv.txt
```

------------------------------------------------------------------------

## Install :simple-go: GoCommands with Conda

Conda is a popular package manager. GoCommands is also available in Conda for quick installation. Unfortunately, GoCommands currently only supports Linux and Mac OS (Windows system is not supported). To install GoCommands in Conda, follow instructions below:

Add `conda-forge` channel to `conda`. This is required because `Gocommands` is added to `conda-forge` channel.
```
conda config --add channels conda-forge
conda config --set channel_priority strict
```

Install `Gocommands` with `conda`.
```
conda install gocommands
```

------------------------------------------------------------------------

## Run :simple-go: GoCommands using iCommands configuration

GoCommands can read iCommands configuration file `~/.irods/irods_environment.json`. To create iCommands configuration file using GoCommands, type below:

``` bash
./gocmd init
```

When prompted, enter the values below:

  | host name | port # | username | zone | password |
  |:---------:|:------:|:--------:|:----:|:--------:|
  | data.cyverse.org | 1247| CyVerse Username | iplant | CyVerse Password |

If you already have iCommands' configuration file, you don't need any steps to do. 

To display current configuration, type below:

``` bash
./gocmd env
```

------------------------------------------------------------------------

## Run :simple-go: GoCommands using a YAML configuration file

GoCommands can read a configuration file in YAML format. Create a YAML file using an editor and type-in following:

``` yaml
irods_host: "data.cyverse.org"
irods_port: 1247
irods_user_name: "<username>"
irods_zone_name: "iplant"
irods_user_password: "<password>"
```

Give `-c` or `--config` flag to provide the configuration file.

``` bash
./gocmd -c config.yaml env
```

!!! Tip "Missing Values"

    GoCommands will prompt if there is any missing values in the YAML configuration file. 
    You can omit `irods_user_password` field if you do not want to have the password in clear text in the configuration file.

------------------------------------------------------------------------

## Setting up PATH

Gocmd is downloaded as an executable file. There are several ways to run an executable file, however we recommend adding the path to the gocmd file to the PATH environment variable for ease of use. To do this in a Linux based system, you can run:

`PATH=$PATH:<absolute/path/to/gocmd/file>`

By doing this, anytime you run a `gocmd` command, the operating system will always know where to look for the file, regardless of your current location within the system. If you do not do this, you will simply have to provide the correct path to the gocmd file whenever you want to run a gocommand.  

------------------------------------------------------------------------

## :material-guy-fawkes-mask: Anonymous Access to the CyVerse Data Store

You can access public data in the CyVerse Data Store with GoCommands using:

-   Username: anonymous
-   Password: `<leave blank>`

------------------------------------------------------------------------

## :material-upload: Upload Files/Folders from Local Computer to Data Store

!!! Warning

    When uploading your data to the Data Store, you should not upload files/folders with names containing spaces (e.g., `experiment one.fastq`) or special characters (e.g., \~ \`\` ! @ \# \$ % \^ & \* ( ) + = { } \[ \] \| : ; " ' < \> , ? / and \\). 
    
    The Apps on the Discovery Environment and most command line applications will typically not tolerate these characters. 
    
    For long file/folder names, we recommend the use of underscores (e.g., experiment_one.fastq) instead of spaces.

1.  Upload a directory using the `put` subcommand.

``` bash
./gocmd put --progress /local_directory /iplant/home/cyverse_username/destination_folder
# This command will output the progress as it uploads your local directory
```

There are several optional arguments that the `put` subcommand can take:

``` bash
./gocmd put -R # for specifying resource server

./gocmd put --progress # to display the progress of the upload

./gocmd put -f # to force the upload and overwrite
```

------------------------------------------------------------------------

## :material-download: Download Files/Folders from Data Store to Local Computer

1.  Download a file using the `get` subcommand.

``` bash
./gocmd get --progress /iplant/home/cyverse_username/target_file /local_destination
# This command will output the progress as it downloads to your local machine
```

There are several optional arguments that the `get` subcommand can take:

``` bash
./gocmd get -R # for specifying resource server

./gocmd get --progress # to display the progress of the download

./gocmd get -f # to force the download and overwrite
```

------------------------------------------------------------------------

## Transferring Data from VICE to Data Store and vice versa

When transferring data between VICE apps and data-store, you should use GoCommands as opposed to commands like `scp` or `sftp` for reasons such as improved speed, more control, and increased likelihood of the transfer going smoothly.

To transfer data within VICE, the steps are essentially the same as transferring data to/from your local machine. It is highly important to transfer data to/from VICE to ensure that your data is saved when you exit the app, and so you can access community data, data from your other analyses, etc.

To copy data from your VICE app to data-store:
```
gocmd put /vice_directory /iplant/home/cyverse_username/destination_folder
```

To copy data from data-store to your VICE app:
```
gocmd get /iplant/home/cyverse_username/destination_folder /vice_directory 
```

------------------------------------------------------------------------

## Data Transfer in Bulk
When transferring large files, or perhaps large amounts of somewhat small files, there are certain GoCommand options that can help the transfer go more smoothly. 

Here is an example of a data transfer from my VICE app to data-store.

```
gocmd put --progress --thread_num 12 -f my_dir /iplant/home/my_username/
```
In this case, `my_dir` is a directory containing a large amount of medium (50-100mb) sized files. I chose to use the `--progress` flag to keep track of the progress as this is a bigger transfer. I also used `--thread_num` with 12 threads in order to speed up the transfer by parallel processing. Finally, I used `-f` to indicate that I want the transfer to replace any files or directories with the same name as the directory being transferred.

Here is another example of data transfer, this time from data-store to a VICE app.

```
gocmd put --progress --thread_num 12 -f /iplant/home/my_username/my_file .
```

Note that this time, I am only transferring a single large file and placing it in my current diretory.

??? Tip "Using `--no-hash`"

    * Using the `--no-hash` flag when tranferring files will only check the file size when making file comparisons, leading to a much faster transfer speed
    * It should only be used when the `--diff` flag is used to transfer files with different content
    * :warning: However, it is possible that file content can be changed without changing file size, so this has a chance of error. Only use for data that you know very well

------------------------------------------------------------------------

## Encryption
Encryption is an important part keeping your sensitive information secure during data transfer. Encryption essentially scrambles your data into an unreadable format such that only those with the encryption key can read it, thus protecting it from malicious third parties. To encrypt your files during a gocommands data transfer, you can add the `--encrypt` flag to your `gocmd get` and `gocmd put` commands.

------------------------------------------------------------------------

## Upgrade :simple-go: GoCommands

GoCommands can self-upgrade. Run the `upgrade` command to upgrade to the latest release of GoCommands available.

``` bash
./gocmd upgrade # check a new release and upgrade the gocmd binary
```

If you don't want to upgrade GoCommands, but to check if there is a new release available:
``` bash
./gocmd upgrade --check # just check a new release and display 
```

------------------------------------------------------------------------

## Additional Sub-Commands

In addition to the commands above, there are several frequently used
subcommands, most of which follow the Linux paradigm:

  | subcommand | description |
  |---------|------------------------|
  | `help` | Display help |
  | `env` | Display current configuration |
  | `init` | Initialize iCommands Configuration | 
  | `cd` | Change current working directory | 
  | `pwd` | Display current working directory | 
  | `ls` | List iRODS files or directories in a iRODS directory |
  | `cat` | Show content of an iRODS file  |
  | `cp` | Copy iRODS files or directories to a target iRODS directory |
  | `mv` | Move iRODS files or directories to a target iRODS directory |
  | `rm` | Remove iRODS files or directories |
  | `rmdir` | Remove iRODS directories |
  | `mkdir` | Make iRODS directories |
  | `get` | Download iRODS files or directories |
  | `put` | Upload local files or directories to a target iRODS directory |
  | `bput` | Upload local files or directories to a target iRODS  directory by bundling and transferring in parallel (optimized for many small file upload) |
  | `bun` | Extract iRODS files in a bundle file format (*.tar) to a target iRODS directory |
  | `bclean` | Clear temporary files used by bput |
  | `sync` | Sync a local directory with an iRODS directory |
  | `lsticket` | List iRODS tickets |
  | `mkticket` | Create an iRODS ticket |
  | `modticket` | Update an iRODS ticket |
  | `rmticket` | Remove iRODS tickets |
  | `passwd` | Change user password |
  | `svrinfo` | Display server information |
  | `ps` | Display server processes |
  | `copy-sftp-id` | Upload SSH public key to iRODS for SFTP access |


