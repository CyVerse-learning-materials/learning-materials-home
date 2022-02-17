[Learning Center Home](http://learning.cyverse.org/)

# Command Line Transfer with iCommands

iCommands is a collection of tools developed by the project. iRODS is
the technology that supports the CyVerse Data Store. Using iCommands is
the most flexible way to interact with the Data Store. This section will
cover the basics of installation and use; see also the official .

**Some things to remember about iCommands**

-   This is a *command line* tool, operated in a terminal.
-   There is poor support for *Windows OS*: Currently, we have not
    tested a Windows-only shell version of iCommands. We do suggest
    installing and following the Linux installation instructions.

------------------------------------------------------------------------

## *iCommands Installation for Linux*

On a linux OS you can use a package manager to install iCommands in the
terminal.

**CentOS:**

Instructions for configuring the iRODS repository can be be found on the
[iRODS Packages](https://packages.irods.org/) webpage. After
configurating the repository, `yum` can be used to install the iCommands
package `irods-icommands`.

``` bash
sudo rpm --import https://packages.irods.org/irods-signing-key.asc
wget -qO - https://packages.irods.org/renci-irods.yum.repo \
  | sudo tee /etc/yum.repos.d/renci-irods.yum.repo
sudo yum install irods-icommands
```

If that does not work, an older version of iCommands, 4.1.12, can be
installed from RENCI\'s website.

``` base
sudo yum install \
  https://files.renci.org/pub/irods/releases/4.1.12/centos7/irods-icommands-4.1.12-centos7-x86_64.rpm
```

**Ubuntu 18.04:**

Instructions for configuring the iRODS repository can be be found on the
[iRODS Packages](https://packages.irods.org/) webpage. After
configurating the repository, `apt` can be used to install the iCommands
package `irods-icommands`.

``` bash
wget -qO - https://packages.irods.org/irods-signing-key.asc \
  | sudo apt-key add -
echo "deb [arch=amd64] https://packages.irods.org/apt/ $(lsb_release -sc) main" \
  | sudo tee /etc/apt/sources.list.d/renci-irods.list
sudo apt-get update
sudo apt install irods-icommands
```

**Ubuntu 20.04:**

iRODS doesn\'t current support Ubuntu 20.04 yet. However, the one for
Ubuntu 18.04 works as long as a few extra packages are installed.

Here are the commands to configure the iRODS repository.

``` bash
wget -qO - https://packages.irods.org/irods-signing-key.asc \
  | sudo apt-key add -
echo "deb [arch=amd64] https://packages.irods.org/apt/ bionic main" \
  | sudo tee /etc/apt/sources.list.d/renci-irods.list
sudo apt update
```

Prior to installing the iCommands package, a few 18.04 packages neet to
be installed that are not available for 20.04. Here are the comands to
install these packages.

``` bash
wget --directory-prefix /tmp/ \
  http://security.ubuntu.com/ubuntu/pool/main/p/python-urllib3/python-urllib3_1.22-1ubuntu0.18.04.2_all.deb \
  http://security.ubuntu.com/ubuntu/pool/main/r/requests/python-requests_2.18.4-2ubuntu0.1_all.deb \
  http://security.ubuntu.com/ubuntu/pool/main/o/openssl1.0/libssl1.0.0_1.0.2n-1ubuntu5.6_amd64.deb
sudo apt install \
  /tmp/libssl1.0.0_1.0.2n-1ubuntu5.6_amd64.deb \
  /tmp/python-urllib3_1.22-1ubuntu0.18.04.2_all.deb \
  /tmp/python-requests_2.18.4-2ubuntu0.1_all.deb
```

Now `apt` can be used to install the iCommands package
`irods-icommands`.

``` bash
sudo apt install irods-icommands
```

If the above does not work, e.g., incomplete support for Ubuntu 20,04,
an older version of iCommands, 4.1.10, can be installed by doing the
following.

``` bash
sudo apt update
wget \
  http://mirrors.kernel.org/ubuntu/pool/main/g/glibc/multiarch-support_2.27-3ubuntu1.4_amd64.deb \
  http://ftp.se.debian.org/debian/pool/main/o/openssl/libssl1.0.0_1.0.1t-1+deb8u8_amd64.deb \
  https://files.renci.org/pub/irods/releases/4.1.10/ubuntu14/irods-icommands-4.1.10-ubuntu14-x86_64.deb
sudo dpkg --install \
  multiarch-support_2.27-3ubuntu1.4_amd64.deb \
  libssl1.0.0_1.0.1t-1+deb8u8_amd64.deb \
  irods-icommands-4.1.10-ubuntu14-x86_64.deb
```

**Arm64/Aarch64:**

A CyVerse community user compiled i-commands for Raspberry Pi (and
tested in NVIDIA Jetsons):
<https://github.com/jmscslgroup/libpanda/blob/master/scripts/irods-icommands-debs.tgz>

``` bash
wget https://github.com/jmscslgroup/libpanda/raw/master/scripts/irods-icommands-debs.tgz
tar zxvf irods-icommands-debs.tgz
cd irods-icommands-debs/
./install.sh
```

------------------------------------------------------------------------

## **iCommands Installation for Mac OS X**

iRODS doesn\'t currently support Mac OS X, but CyVerse has built an
installer for it.

> 1.  Download the CyVerse-specific .
> 2.  Open the file by locating it in your Finder; right-click to run
>     the installer. You may get a security warning noting the file is
>     from an \"unidentified developer.\" You may bypass this warning by
>     going to \'System Preferences\', selecting the \'Security &
>     Privacy\' menu, and clicking the \'Open Anyway\' button to
>     proceed.
> 3.  Follow the prompts to begin the installation. You will need to
>     know your administrator password to install new software.

::: note
::: title
Note
:::

Newer Mac OS X now ships with `zsh` as its default shell rather than
`bash`. The installer will attempt to write some environmental variables
to the `.bashrc` file which for `zsh` is called the
[.zshrc]{.title-ref}.

By default, this installation will place iCommands in your system `PATH`
so you should be ready to run iCommands immediately at the terminal. If
this does not happen (i.e. you get an error when trying to run `iinit`),
you can add the [icommands]{.title-ref} path by editing your `.zshrc`
file:

``` bash
# add iCommands Path
export PATH="/Applications/icommands/:$PATH"
export IRODS_PLUGINS_HOME=/Applications/icommands/plugins/
```

and then in terminal source the file `source ~/.zshrc`.
:::

------------------------------------------------------------------------

## *iCommands First-time Configuration*

::: note
::: title
Note
:::

If using iCommands in an HPC environment, which already has iCommands
installed, run the `module load irods` command to get access to iRODS
iCommands.
:::

Once iCommands is installed and in the system [PATH]{.title-ref} these
instructions apply at a terminal in Mac OS X and Linux systems.

> 1.  Open terminal
>
> 2.  Type [iinit]{.title-ref} command to start the configuration
>     process. When prompted, enter the values shown below as comments
>     in the example code block.
>
>     CyVerse Data Store configuration:

CyVerse Data Store configuration:

  -------------------------------- -------------------- ---------------- ---------------------- ------------------
  host name                        port \#              username         zone                   password
  [data.cyverse.org]{.title-ref}   [1247]{.title-ref}   CyVerse UserID   [iplant]{.title-ref}   CyVerse Password
  -------------------------------- -------------------- ---------------- ---------------------- ------------------

::: note
::: title
Note
:::

You can reconfigure iCommands for other iRODS data stores by changing
your environment file

3.  Verify that your iCommands installation works and is properly
    configured using the `ils` command to list the contents of your Data
    Store home directory.

    > ``` bash
    > $ ils
    >   /iplant/home/your_home_directory:
    > file1
    > file2
    > file3
    > C- /iplant/home/your_home_directory/analyses
    > C- /iplant/home/your_home_directory/another_folder
    > ```
:::

------------------------------------------------------------------------

## *Anonymous access to the CyVerse Datastore*

You can access public data in the CyVerse Datastore with iCommands
using:

> -   Username: anonymous
> -   Password: \<leave blank>

## *Upload Files/folders from local Computer to Data Store*

> ::: warning
> ::: title
> Warning
> :::
>
> When uploading your data to the Data Store you should not upload
> files/ folders with names containing spaces (e.g. experiment
> one.fastq) or name that contain special characters (e.g. \~ \`\` ! @
> \# \$ % \^ & \* ( ) + = { } \[ \] \| : ; \"\" \'\' \< \> , ? /). The
> Apps on the Discovery Environment and most command line applications
> will typically not tolerate these characters. For long file/folder
> names the use of underscores (e.g. experiment_one.fastq) is the
> recommended practice.
> :::

See the for more information.

> 1.  Upload a directory using the [iput]{.title-ref} command. Remember,
>     the -r flag is to recursively upload a directory, so if you are
>     uploading a single file, omit the -r flag.
>
> > ``` bash
> > $ iput -rPT /local_directory /iplant/home/cyverse_username/destination_folder
> >   # This command will output the progress as it uploads your local directory
> >
> >
> > There are several optional arguments that the upload iCommand `iput` can
> > take:
> >
> > .. code:: bash
> >
> >   $ iput -r # For recursive transfer of directories and their contents
> >
> >   $ iput -P # display the progress of the upload
> >
> >   $ iput -f # force the upload and overwrite
> >
> >   $ iput -T # Renew socket connection after 10 min (May help connections
> >             # that are failing due to some connection/firewall settings)
> > ```

------------------------------------------------------------------------

## *Download Files/folders from Data Store to local Computer*

See the for more information.

> 1.  Download a file using the [iget]{.title-ref} command. Remember,
>     the -r flag is to recursively upload a directory, so if you are
>     uploading a single file, omit the -r flag.
>
> > ``` bash
> > $ iget -PT /iplant/home/cyverse_username/target_file /local_destination
> >   # This command will output the progress as it downloads to your local machine
> > ```
>
> ::: tip
> ::: title
> Tip
> :::
>
> There are several optional arguments that the upload iCommand
> [iget]{.title-ref} can take:
>
> > ``` bash
> > $ iget -r # For recursive transfer of directories and their contents
> >
> > $ iget -P # display the progress of the upload
> >
> > $ iget -f # force the upload and overwrite
> >
> > $ iget -T # Renew socket connection after 10 min (May help connections
> >           # that are failing due to some connection/firewall settings)
> > ```
> :::

------------------------------------------------------------------------

## *NetCDF iCommands*

For the Linux distributions there are three extra iCommands that support
common NetCDF operations:

> -   `inc` performs data operations on a list of NetCDF files,
> -   `incarch` archives a open ended time series data,
> -   `incattr` performs operation on attributes of NetCDF files.

Each of these commands accepts the `-h` command line option. When a
command is called with this option, it displays the command\'s help
documentation. Please see this help documentation for more information.

> **Installation**
>
> 1.  Install iRODS Runtime. Before the NetCDF iCommands can be
>     installed, the current version of the iRODS run-time library needs
>     to be installed. Please install the appropriate version (e.g.
>     `irods-runtime-X-X-XX`). The distribution specific packages can be
>     found on .
>
> 2.  Install NetCDF API. Once the run-time library is installed, the
>     iRODS NetCDF API library needs to be installed. Please use the
>     appropriate link to the download the installation package and
>     install it. The package installer will likely warn that irods user
>     and/or group don\'t exist, and that it will be using root instead.
>     These warnings are harmless, since the package contents should be
>     installed with root ownership.
>
>     > -   
>     > -   

------------------------------------------------------------------------

## *Additional Frequently Used iCommands*

In addition to the commands above, there are several frequently used
iCommands - most of which you would expect following the Linux paradigm:

-   **ipwd**: Print current directory
-   **imkdir**: Create a directory
-   **icd**: Change directory
-   **irsync**: Sync local directory with iRODS directory

------------------------------------------------------------------------

**Fix or improve this documentation**

-   Search for an answer: [CyVerse Learning Center](https://cyverse-learning-materials.github.io/learning-materials-home)
-   Ask us for help: click on the lower right-hand side of the page
-   Report an issue or submit a change: [Github Repo](https://github.com/CyVerse-learning-materials/data_store_guide)
-   Send feedback: [learning@CyVerse.org](learning@CyVerse.org)

------------------------------------------------------------------------

> [Learning Center Home](http://learning.cyverse.org/)
