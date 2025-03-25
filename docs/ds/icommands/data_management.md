# Data Management using iCommands

iCommands offers a variety of commands to help you manage your data in the Data Store. In the Data Store, `file` and `directory` are treated as `data objects` and `collections`, respectively. It's perfectly fine to consider these terms interchangeable.

---

## :material-file-arrow-left-right-outline: Display the Current Working Collection

In the Data Store, the **current working collection** is equivalent to the concept of a current working directory in traditional file systems. You can display or change your current working collection using iCommands.

```sh
ipwd
```

By default, after configuring iCommands, your current working collection is set to your **home directory**, which is typically located at:
```sh
/<Zone Name>/home/<Username>
```

> **Note:** Paths in the Data Store always start with the zone name `/iplant`.

---

## :material-file-arrow-left-right-outline: Change the Current Working Collection

1. **Change to a specific collection using an absolute path:**
    ```sh
    icd /iplant/home/myUser/mydata
    ```

    This changes your current working collection to `/iplant/home/myUser/mydata`.

2. **Use a relative path from your current location:**
    Assuming your current working collection is `/iplant/home/myUser`:
    
    ```sh
    icd mydata
    ```

3. **Return to your home collection:**
    ```sh
    icd "~"
    ```

    > **Note:** The `~` must be quoted to prevent shell expansion by your local shell. Without quotes, it will expand to your local machine's home directory instead of your Data Store home directory.

4. **Move up one level:**
    ```sh
    icd ..
    ```

---

## :material-file-arrow-left-right-outline: List Data Objects (files) and Collections (directories)

1. **List the content of a collection:**
    ```sh
    ils /iplant/home/myUser/mydata
    ```

    This will display the data objects and collections in the `/iplant/home/myUser/mydata` collection:
    ```sh
    /iplant/home/myUser/mydata:
        file1.bin
        file2.bin
        C- /iplant/home/myUser/mydata/subdir1
    ```

    The `C-` prefix indicates that the item is a collection (directory).

2. **List the content of the current working collection:**
    ```sh
    ils
    ```

3. **List the contents of a collection in long format with additional details:**
    ```sh
    ils -l /iplant/home/myUser/mydata
    ```

    This command will show the data objects and collections within `/iplant/home/myUser/mydata`, along with their additional details:
    ```sh
    /iplant/home/myUser/mydata:
        myUser	0	demoRes1;rs1	436	2024-04-02.13:36	&	file1.bin
        myUser	1	demoRes2;rs2	436	2024-04-02.13:36	&	file1.bin
        myUser	0	demoRes1;rs1	700	2024-04-02.17:15	&	file2.bin
        myUser	1	demoRes2;rs2	700	2024-04-02.17:15	&	file2.bin
        C- /iplant/home/myUser/mydata/subdir1
    ```

    - Each output line for a data object represents a replica. If iRODS is configured to create multiple replicas, you will see one line for each replica of the data object. For example, if two replicas are created, two lines will be displayed for each file.
    - Each line is shown in the `owner replica_id resource_server size creation_time replica_state name` format.
    - Possible replica states are:
        - `&`: Good
        - `X`: Stale
        - `?`: Unknown

4. **List the contents of a collection with their access control lists:**
    ```sh
    ils -A /iplant/home/myUser/mydata
    ```

    This command will show the data objects and collections within `/iplant/home/myUser/mydata`, along with their access control lists (ACLs):
    ```sh
    /iplant/home/myUser/mydata:
            ACL - g:rodsadmin#iplant:own	myUser#iplant:own
            Inheritance - Disabled
        file1.bin
            ACL - g:rodsadmin#iplant:own	myUser#iplant:own
        file2.bin
            ACL - g:rodsadmin#iplant:own	myUser#iplant:own
        C- /iplant/home/myUser/mydata/subdir1
    ```

    - The `g:` prefix in the ACL username indicates that the user is a group.
    - The ACL is displayed in the `username#zone:access_level` format.
    - Most common access levels are:
        - `read_object`: Allows read access to the data object or collection.
        - `modify_object`: Allows modification (write) of the data object or collection.
        - `own`: Grants ownership of the data object or collection.

---

## :material-file-arrow-left-right-outline: Make a Collections (directories)

1. **Create a new collection:**
    ```sh
    imkdir /iplant/home/myUser/newCollection
    ```

2. **Create parent collections if they do not exist:**
    ```sh
    imkdir -p /iplant/home/myUser/parentCollection/newCollection
    ```

    This command creates the `newCollection` along with its parent collection `parentCollection` if it does not already exist.


---

## :material-file-arrow-left-right-outline: Upload Data Objects (files) and Collections (directories) to the Data Store

!!! Warning

    When uploading your data to the Data Store, avoid using:
    
    - Spaces in names (e.g., `experiment one.fastq`)
    - Special characters: \~ \`\` ! @ \# \$ % \^ & \* ( ) + = { } \[ \] \| : ; " ' < \> , ? / and \\

    These may cuase issues with Discovery Environment Apps and command-line applications.

    **Recommendation:** Use underscores for long names (e.g., `experiment_one.fastq`).

1. **Upload a single file:**
    ```sh
    iput /local/path/file.txt /iplant/home/myUser/
    ```

    This command uploads the file `/local/path/file.txt` to `/iplant/home/myUser/`, creating `/iplant/home/myUser/file.txt` in the Data Store.

2. **Upload a directory and its contents:**
    ```sh
    iput /local/dir /iplant/home/myUser/
    ```

    This command uploads the contents of the directory `/local/dir` to `/iplant/home/myUser/dir` in the Data Store. The uploaded files and subdirectories will be placed within the `/iplant/home/myUser/dir` folder.

3. **Upload with progress output:**
    ```sh
    iput -P /local/path/largefile.dat /iplant/home/myUser/
    ```

4. **Force upload:**
    ```sh
    iput -f /local/path/largefile.dat /iplant/home/myUser/
    ```

    This command overwrites the existing file in the Data Store without prompting.

5. **Upload and verify checksum:**
    ```sh
    iput -K /local/path/important_data.txt /iplant/home/myUser/
    ```

    This command uploads the file and verifies its integrity by calculating a checksum during transfer.

6. **Upload via resource server:**
    ```sh
    iput -I /local/dir /iplant/home/myUser/
    ```

    This command bypasses the iCAT server for data transfer, directly accessing the specified resource server for optimized performance.

7. **Upload with connection auto-renewal:**
    ```sh
    iput -T /local/dir /iplant/home/myUser/
    ```

    Renews connections every 10 minutes to prevent failures due to connection or firewall issues.

    
---

## :material-file-arrow-left-right-outline: Download Data Objects (files) and Collections (directories) From the Data Store

1. **Download a data object to a specific local path:**
    ```sh
    iget /iplant/home/myUser/file.txt /local/path/file_new_name.txt
    ```

    This command downloads the data object `/iplant/home/myUser/file.txt` and saves it as `/local/path/file_new_name.txt`.

2. **Download a collection to a specific local path:**
    ```sh
    iget /iplant/home/myUser/dir /local/path/
    ```

    This command downloads the collection `/iplant/home/myUser/dir` and its contents to `/local/path`. A new directory named `dir` will be created under `/local/path`, resulting in `/local/path/dir` containing all the downloaded files and subdirectories.

3. **Download with progress output:**
    ```sh
    iget -P /iplant/home/myUser/largefile.dat /local/dir/
    ```

4. **Force download:**
    ```sh
    iget -f /iplant/home/myUser/largefile.dat .
    ```

    This command overwrites the local file without prompting if it already exists.

5. **Download and verify checksum:**
    ```sh
    iget -K /iplant/home/myUser/important_data.txt .
    ```

    This command downloads the file and verifies its integrity by calculating the checksum after download and comparing it with the original in the Data Store. This ensures data consistency and detects any corruption during transfer.

6. **Download via resource server:**
    ```sh
    iget -I /iplant/home/myUser/dir /local/dir
    ```

    This command bypasses the iCAT server for data transfer, directly accessing the specified resource server. It optimizes performance for large files by direct connection to the resource server.

7. **Download with connection auto-renewal:**
    ```sh
    iget -T /iplant/home/myUser/dir /local/dir
    ```

    Renews connections every 10 minutes to prevent failures due to connection or firewall issues.
    

---

## :material-file-arrow-left-right-outline: Remove Data Objects (files) or Collections (directories) From the Data Store

1. **Remove a single data object:**
    ```sh
    irm /iplant/home/myUser/file.txt
    ```

2. **Remove an empty collection:**
    ```sh
    irmdir /iplant/home/myUser/emptyCollection
    ```

3. **Remove a collection and its contents recursively:**
    ```sh
    irm -r /iplant/home/myUser/parentCollection
    ```

4. **Force remove a collection and its contents recursively:**
    ```sh
    irm -rf /iplant/home/myUser/parentCollection
    ```

---

## :material-file-arrow-left-right-outline: Move/Rename Data Objects (files) or Collections (directories)

1. **Rename a data object:**
    ```sh
    imv /iplant/home/myUser/oldfile.txt /iplant/home/myUser/newfile.txt
    ```

2. **Move a data object to a different collection:**
    ```sh
    imv /iplant/home/myUser/file.txt /iplant/home/myUser/subcollection/
    ```

3. **Rename a collection:**
    ```sh
    imv /iplant/home/myUser/oldcollection /iplant/home/myUser/newcollection
    ```


---

## :material-list-box-outline: Additional Resources

For detailed information on iCommands, refer to the [iRODS iCommands Docs](https://docs.irods.org/4.3.4/icommands/user/).