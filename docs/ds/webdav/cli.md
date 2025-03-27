# WebDAV Access using Command-line Tools

You can access the Data Store via command-line tools using WebDAV, which is especially useful for integrating data into analysis pipelines or scripts. This guide covers using `curl`, a widely used command-line tool, for efficient WebDAV access and data management.


## :material-account-circle-outline: WebDAV Access Information

Use the following credentials to connect to the Data Store:

| Key            | Value                |
|-----------------|----------------------|
| `URL`     | `https://data.cyverse.org/dav`  |
| `username`     | `<CyVerse Username>` |
| `password`     | `<CyVerse Password>` |

Use these credentials for anonymous access to the Data Store:

| Key | Value |
|-------------------|-------|
| `username` | `anonymous` |
| `password` | (leave empty) |

---

## :material-console: Connect to the Data Store

To list the contents of your home directory in the Data Store using WebDAV, open a terminal and run the following command:

```sh
curl --user '<username>:<password>' https://data.cyverse.org/dav/iplant/home/<username>
```

- Use your CyVerse username and password with `--user` flag to login
- `https://data.cyverse.org/dav` is the URL of the WebDAV root. Add Data Store path after for URL

- `--user '<username>:<password>'`: This option provides your CyVerse username and password for authentication. Replace <username> and <password> with your actual credentials.
- `https://data.cyverse.org/dav/iplant/home/<username>`: This is the URL of your home directory within the Data Store's WebDAV server. `https://data.cyverse.org/dav` is the root WebDAV URL, and `/iplant/home/<username>` specifies the path to your home directory in the Data Store.

The output will be an HTML-formatted text displaying files and directories in a table layout.

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
    
---

## :material-console: Examples

1. **List files in your home directory:**
    ```sh
    curl https://data.cyverse.org/dav/iplant/home/myUser
    ```

    This prints files and directories in HTML format.


2. **Read a file:**
    ```sh
    curl https://data.cyverse.org/dav/iplant/home/myUser/myfile.txt
    ```

    This displays the content of `myfile.txt` in the terminal.

3. **Download a file:**
    ```sh
    curl -O https://data.cyverse.org/dav/iplant/home/myUser/myfile.txt
    ```

    This saves `myfile.txt` to the current directory.

    ```sh
    curl -o newfile.txt https://data.cyverse.org/dav/iplant/home/myUser/myfile.txt
    ```

    This saves `myfile.txt` as `newfile.txt` in the current directory.

4. **Upload a file:**
    ```sh
    curl -T localfile.txt https://data.cyverse.org/dav/iplant/home/myUser
    ```

2. **Creat a new directory:**
    ```sh
    curl -X MKCOL https://data.cyverse.org/dav/iplant/home/myUser/newdir
    ```

4. **Renaming a File**:
    ```
    curl -X MOVE --header "Destination: https://data.cyverse.org/dav/iplant/home/myUser/new_name.txt" https://data.cyverse.org/dav/iplant/home/myUser/old_name.txt
    ```

    This renames `old_name.txt` to `new_name.txt`.

5. **Deleting Files/Folders**:
    ```
    curl -X DELETE https://data.cyverse.org/dav/iplant/home/myUser/file_to_delete.txt
    ```

