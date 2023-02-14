# Transferring Data with :simple-go: GoCommands and Command Line

GoCommands is a command-line tool developed by CyVerse. Unlike iCommands, Gocommands is portable which does not require any installation and runs on any modern OSes, such as MacOS, Linux, and Windows.

This section will cover the basics of GoCommands.

??? Tip "Things to remember about GoCommands"

    * :simple-gnometerminal: This is a command line tool, operated in a terminal.
    * You must have a [CyVerse account](https://user.cyverse.org){target=_blank} or other iRODS Zone account to authenticate

------------------------------------------------------------------------

## :material-download: Download :simple-go: GoCommands

Visit [GoCommands Releases](https://github.com/cyverse/gocommands/releases) webpage. Download a package file bundled with `tar.gz` or `zip` for your target system's OS and architecture. 

Uncompress the package file using `tar zxvf <package file>` or `unzip <package file>`.

Here are commands to download and uncompress the package file for a target system's OS and architecture.

**:simple-linux: Linux :simple-amd: AMD64**

``` bash
curl -L -o gocmd.tar.gz https://github.com/cyverse/gocommands/releases/download/v0.4.6/gocmd-v0.4.6-linux-amd64.tar.gz && \
tar zxvf gocmd.tar.gz && rm gocmd.tar.gz
```

**:simple-macos: MacOS :simple-amd: AMD64**

``` bash
curl -L -o gocmd.tar.gz https://github.com/cyverse/gocommands/releases/download/v0.4.6/gocmd-v0.4.6-darwin-amd64.tar.gz && \
tar zxvf gocmd.tar.gz && rm gocmd.tar.gz
```

**:simple-linux: Linux :simple-arm: ARM64**

``` bash
curl -L -o gocmd.tar.gz https://github.com/cyverse/gocommands/releases/download/v0.4.6/gocmd-v0.4.6-linux-arm64.tar.gz && \
tar zxvf gocmd.tar.gz && rm gocmd.tar.gz
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
  | `ls` | List data-objects or collections in a collection |
  | `cp` | Copy iRODS data-objects or collections to a target collection |
  | `mv` | Move iRODS data-objects or collections to a target collection |
  | `rm` | Remove iRODS data-objects or collections |
  | `rmdir` | Remove iRODS collections |
  | `mkdir` | Make iRODS collections |
  | `get` | Download iRODS data-objects or collections |
  | `put` | Upload local files or directories to a target collection |
  | `bput` | Upload local files or directories to a target collection by bundling and transferring in parallel (optimzied for many small file upload) |
  | `bun` | Extract iRODS data-objects in a bundle file format (*.tar) to a target collection |
  | `sync` | Sync local directory with iRODS collection |
  | `passwd` | Change user password |
  | `copy-sftp-id` | Upload SSH public key to iRODS for SFTP access |

