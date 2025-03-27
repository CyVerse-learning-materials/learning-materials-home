# WebDAV Access using File Managers

Most operating systems include a file manager that supports WebDAV, allowing you to mount a WebDAV directory as part of the filesystem. This enables other applications on the same computer to access data in the Data Store as if it were local.

### :simple-apple: macOS Finder

Follow these steps to connect using macOS Finder:

1. Open Finder.  
2. In the menu bar, click **Go** → **Connect to Server** (*Command + K*).  
3. Enter the WebDAV URL for the folder you want to access.  
4. If prompted, enter your **CyVerse username** and **password**.  

---

### :material-microsoft-windows-classic: Windows File Exploer

To connect using Windows File Explorer:  

1. Open File Explorer.  
2. Right-click **This PC** and select **Map Network Drive**.  
3. Click **Choose a custom network location**, then **Next**.  
4. Enter the WebDAV URL for the folder you want to access.  
5. If prompted, enter your **CyVerse username** and **password**.  

---

### :material-gnome: Gnome Files

To connect using GNOME Files on Linux:  

1. Open **Files**.  
2. In the sidebar, click **Other Locations**.  
3. Under **Connect to Server**, enter the WebDAV URL for the folder you want to access.  
    **Note**: **TLS-encrypted WebDAV URLs use `davs://`** instead of `https://`, so CyVerse URLs should be formatted as:  
    ```sh
    davs://data.cyverse.org/dav/iplant/home/<username>
    ```
4. Click **Connect**.  
5. If prompted, enter your **CyVerse username** and **password**.  

---

### :material-console: Linux Terminal

To mount a WebDAV folder via the Linux terminal, root or sudo access is required:

1. Install `davfs2` (e.g., on Ubuntu: `sudo apt install davfs2`).
2. Create a mount point:
    ```sh
    mkdir /tmp/data
    ```
3. Mount the WebDAV directory:
    ```sh
    sudo mount -o gid=<your_user>,uid=<your_user> -t davfs <webdav_url> /tmp/data
    ```
    - Replace `<your_user>` with your Linux username.
    - Replace `<webdav_url>` with the WebDAV folder URL.  
4. If prompted, enter your **CyVerse username** and **password**.  


---

## :material-account-circle-outline: WebDAV Access Information

Use the following credentials to connect to the Data Store:

| Key            | Value                |
|-----------------|----------------------|
| `username`     | `<CyVerse Username>` |
| `password`     | `<CyVerse Password>` |

Use these credentials for anonymous access to the Data Store:

| Key | Value |
|-------------------|-------|
| `username` | `anonymous` |
| `password` | (leave empty) |


---

## :material-web: Data Locations

1. **User Data**  
    Users can access their data at:

    ```sh
    https://data.cyverse.org/dav/iplant/home/<username>/
    ```

2. **Public Data (Read-Only Access)**  
    Anonymous users can access public data at:  
    ```sh
    https://data.cyverse.org/dav-anon/
    ```

3. **Community/Project Data**  
    To access project-specific data stored in iRODS at `/iplant/home/shared/<project>/`, use:
    ```sh
    https://data.cyverse.org/dav/iplant/projects/<project>/
    ```

4. **CyVerse Curated Data (DOI-Backed Datasets)**  
    Access curated datasets with DOIs in the Data Commons at:
    ```sh
    https://data.cyverse.org/dav-anon/iplant/commons/cyverse_curated/
    ```

