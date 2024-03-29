# HTTP Access with WebDAV

WebDAV is an extension to the HTTP protocol that allows users to
remotely edit and manage files. CyVerse has added support for WebDAV to
the Data Store. This means users can access their home and public
folders in the CyVerse Data Store from their local computers using web
browsers and other WebDAV-enabled applications such as common operating
system file managers. With WebDAV, users can copy files between their local
computer and the Data Store as easily as if they were copying them
between two folders on their computer.

------------------------------------------------------------------------

## Limitations

WebDAV works best for small files or small collections of files. There
is no hard size limit for files, but we do not recommended using WebDAV with
files over 1 GiB in size (however, 10 GiB files have been downloaded
from the CyVerse WebDAV service using a web browser with decent
performance). The iCommands still outperform WebDAV. For better ways to
download large files or large sets of files, please see the pages for
[iCommands](./icommands.md) or [Cyberduck](./cyberduck.md).

------------------------------------------------------------------------

## Accessing CyVerse Data via WebDAV Services

There are two access points to CyVerse WebDAV services: one for
anonymous, read-only access and one for authenticated access. These
services can be accessed directly in a web browser, or with command line
tools.

The simplest way to access WebDAV in a browser is to go to
<https://data.cyverse.org/>. This will bring up a menu for the
options described below.

WebDAV provides anonymous, read-only access through URLs rooted at
`https://data.cyverse.org/dav-anon/`. All data that can be seen by the
anonymous user can be accessed anonymously through this service,
excluding the immediate contents of `/iplant/home` and the immediate
contents of `/iplant/home/<username>`, where `<username>` is any CyVerse
login name.

WebDAV also provides authenticated access through URLs rooted at
`https://data.cyverse.org/dav/`. Once a user has authenticated with their
CyVerse credentials, they can access any file or folder with the
permission level they have on the file or folder.

------------------------------------------------------------------------

## User Data

A user with a CyVerse login of `<username>` would use the WebDAV link
`https://data.cyverse.org/dav/iplant/home/<username>/` to access their
data.

------------------------------------------------------------------------

## Community Released Data/Project Data

To access data from specific projects stored in iRODS at
`/iplant/home/shared/<project>/`, use the link
`https://data.cyverse.org/dav/iplant/projects/<project>/`.

------------------------------------------------------------------------

## CyVerse Curated Data (Data with a DOI)

To access the data curated by CyVerse in the Data Commons (that is,
datasets with DOIs), use the following link:
<https://data.cyverse.org/dav-anon/iplant/commons/cyverse_curated/>.

------------------------------------------------------------------------

## Common Ways to Access the WebDAV Service

**Via Web Browser**

Since WebDAV is an extension of HTTP, any web browser can be used to
browse and download data through the service, using the links provided
above.

**Via File Manager**

Most common operating systems come with a file manager application that
can interface with a WebDAV service and can mount a WebDAV folder into
the file system being managed. This allows other applications running on
the same computer as the file manager to access data hosted by a WebDAV
service as if it were local.

**Accessing through OS X Finder**

Use these instructions to connect to the WebDAV service with OS X
Finder.

1.  Open Finder.
2.  From the menu bar, select Go, then Connect to Server (or use the keyboard shortcut *command+K*).
3.  Enter the URL for the folder to access.
4.  Provide your CyVerse username and password, if prompted.

**Accessing through Windows File Explorer**

Use these instructions to connect to the WebDAV service with Windows
File Explorer.

1.  Open the File Explorer.
2.  Right-click on This PC.
3.  Select Map Network Drive.
4.  Select Choose a custom network location and click Next.
5.  Enter the URL for the folder to access.
6.  Provide your CyVerse username and password, if prompted.

**Accessing through Gnome Files**

Use these instructions to open the WebDAV service from the Gnome desktop
using Files.

1.  Open Files.
2.  Select Other Locations in the Places sidebar.
3.  In the Connect to Server footer, enter the URL for the desired folder to access. Note: Files identifies TLS encrypted WebDAV URLs with the scheme davs. This means the base for the CyVerse URLs is `davs://data.cyverse.org/` instead of `https://data.cyverse.org/`. (e.g., `davs://data.cyverse.org/dav/iplant/home/<username>/`)
4.  Click the neighboring Connect button.
5.  Provide your CyVerse username and password, if prompted.

**Accessing through Linux Terminal**

This requires root or at least sudo access. Use these instructions to
mount a WebDAV folder into the file system from a Linux terminal.

1.  Ensure that davfs2 is installed, e.g., for Ubuntu, `sudo apt install davfs2`.
2.  Create a directory where you to want to mount the data, e.g., mkdir /tmp/data.
3.  Mount the data as root, i.e., `sudo mount -o gid=<you>,uid=<you> -t davfs <link> /tmp/data`, where `<you>` is your username on the
Linux machine and `<link>` is the URL to the WebDAV folder you want to mount.
4.  Provide your CyVerse username and password, if prompted.

------------------------------------------------------------------------

## Summary

This guide introduces the basic data management tools you need to
manage the lifecycle of data in CyVerse. You can explore many more features that are detailed in the full [Data Store Manual](https://cyverse.atlassian.net/wiki/spaces/DS/overview).

