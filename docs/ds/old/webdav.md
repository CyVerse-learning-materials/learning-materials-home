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
