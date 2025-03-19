# Data Management

GoCommands offers a variety of commands to help you manage your data in the Data Store. In the Data Store, `file` and `directory` are treated as `data objects` and `collections`, respectively. It's perfectly fine to consider these terms interchangeable.

## :material-file-arrow-left-right-outline: Display the Current Working Collection

In the Data Store, the **current working collection** is equivalent to the concept of a current working directory in traditional file systems. You can display or change your current working collection using GoCommands.

```sh
gocmd pwd
```

By default, after configuring GoCommands, your current working collection is set to your **home directory**, which is typically located at:
```sh
/<Zone Name>/home/<Username>
```

> **Note:** Paths in the Data Store always start with the zone name `/iplant`.

## :material-file-arrow-left-right-outline: Change the Current Working Collection

1. **Change to a specific collection using an absolute path:**
   ```sh
   gocmd cd /iplant/home/myUser/mydata
   ```

   This changes your current working collection to `/iplant/home/myUser/mydata`.

2. **Use a relative path from your current location:**
   Assuming your current working collection is `/iplant/home/myUser`:
   ```sh
   gocmd cd mydata
   ```

3. **Return to your home collection:**
   ```sh
   gocmd cd "~"
   ```

   > **Note:** The `~` must be quoted to prevent shell expansion by your local shell. Without quotes, it will expand to your local machine's home directory instead of your Data Store home directory.

4. **Move up one level:**
   ```sh
   gocmd cd ..
   ```

## :material-file-arrow-left-right-outline: List Data Objects (files) and Collections (directories)

1. **List the content of a collection:**
   ```sh
   gocmd ls /iplant/home/myUser/mydata
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
   gocmd ls
   ```

3. **List the contents of a collection in long format with additional details:**
   ```sh
   gocmd ls -l /iplant/home/myUser/mydata
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
   gocmd ls -A /iplant/home/myUser/mydata
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

## :material-file-arrow-left-right-outline: Make a Collections (directories)

1. **Create a new collection:**
   ```sh
   gocmd mkdir /iplant/home/myUser/newCollection
   ```

2. **Create parent collections if they do not exist:**
   ```sh
   gocmd mkdir -p /iplant/home/myUser/parentCollection/newCollection
   ```

   This command creates the `newCollection` along with its parent collection `parentCollection` if it does not already exist.


## :material-file-arrow-left-right-outline: Upload Data Objects (files) and Collections (directories) to the Data Store

1. **Upload a single file:**
   ```sh
   gocmd put /local/path/file.txt /iplant/home/myUser/
   ```

   This command uploads the file `/local/path/file.txt` to `/iplant/home/myUser/`, creating `/iplant/home/myUser/file.txt` in the Data Store.

2. **Upload a directory and its contents:**
   ```sh
   gocmd put /local/dir /iplant/home/myUser/
   ```

   This command uploads the contents of the directory `/local/dir` to `/iplant/home/myUser/dir` in the Data Store. The uploaded files and subdirectories will be placed within the `/iplant/home/myUser/dir` folder.

3. **Upload with progress bars:**
   ```sh
   gocmd put --progress /local/path/largefile.dat /iplant/home/myUser/
   ```

4. **Force upload:**
   ```sh
   gocmd put -f /local/path/largefile.dat /iplant/home/myUser/
   ```

   This command overwrites the existing file in the Data Store without prompting.

5. **Upload and verify checksum:**
   ```sh
   gocmd put -K /local/path/important_data.txt /iplant/home/myUser/
   ```

   This command uploads the file and verifies its integrity by calculating a checksum during transfer.

6. **Upload only different or new contents:**
   ```sh
   gocmd put --diff /local/dir /iplant/home/myUser/
   ```

   This command uploads only files that are different or don't exist in the destination. It compares file sizes and checksums to determine which files need updating.

7. **Upload via iCAT:**
   ```sh
   gocmd put --icat /local/dir /iplant/home/myUser/
   ```

   This command uses iCAT as a transfer broker, useful when direct access to the resource server is unstable.

8. **Upload via resource server:**
   ```sh
   gocmd put --redirect /local/dir /iplant/home/myUser/
   ```

   This command bypasses the iCAT server for data transfer, directly accessing the specified resource server for optimized performance.

## :material-file-arrow-left-right-outline: Download Data Objects (files) and Collections (directories) From the Data Store

1. **Download a data object to a specific local path:**
   ```sh
   gocmd get /iplant/home/myUser/file.txt /local/path/file_new_name.txt
   ```

   This command downloads the data object `/iplant/home/myUser/file.txt` and saves it as `/local/path/file_new_name.txt`.

2. **Download a collection to a specific local path:**
   ```sh
   gocmd get /iplant/home/myUser/dir /local/path/
   ```

   This command downloads the collection `/iplant/home/myUser/dir` and its contents to `/local/path`. A new directory named `dir` will be created under `/local/path`, resulting in `/local/path/dir` containing all the downloaded files and subdirectories.

3. **Download with progress bars:**
   ```sh
   gocmd get --progress /iplant/home/myUser/largefile.dat /local/dir/
   ```

4. **Force download:**
   ```sh
   gocmd get -f /iplant/home/myUser/largefile.dat .
   ```

   This command overwrites the local file without prompting if it already exists.

5. **Download and verify checksum:**
   ```sh
   gocmd get -K /iplant/home/myUser/important_data.txt .
   ```

   This command downloads the file and verifies its integrity by calculating the checksum after download and comparing it with the original in the Data Store. This ensures data consistency and detects any corruption during transfer.

6. **Download only different or new contents:**
   ```sh
   gocmd get --diff /iplant/home/myUser/dir /local/dir
   ```

   This command downloads the source collection to the local directory, transferring only files that are different or don't exist locally. It compares file sizes and checksums to determine which files need updating, making the transfer more efficient by skipping unchanged files.

7. **Download via iCAT:**
   ```sh
   gocmd get --icat /iplant/home/myUser/dir /local/dir
   ```

   This command uses iCAT as a transfer broker, which is useful when direct access to the resource server is unstable. It ensures reliable data transfer by routing through the iCAT server.

8. **Download via resource server:**
   ```sh
   gocmd get --redirect /iplant/home/myUser/dir /local/dir
   ```

   This command bypasses the iCAT server for data transfer, directly accessing the specified resource server. It optimizes performance for large files by direct connection to the resource server.


9. **Download with wildcard:** 
   ```sh
   gocmd get -w /iplant/home/myUser/dir/file*.txt /local/dir
   ```

   This command downloads all data objects matching the pattern "file*.txt" from the specified collection to the local directory.


## :material-file-arrow-left-right-outline: Remove Data Objects (files) or Collections (directories) From the Data Store

1. **Remove a single data object:**
   ```sh
   gocmd rm /iplant/home/myUser/file.txt
   ```

2. **Remove an empty collection:**
   ```sh
   gocmd rmdir /iplant/home/myUser/emptyCollection
   ```

3. **Remove a collection and its contents recursively:**
   ```sh
   gocmd rm -r /iplant/home/myUser/parentCollection
   ```

4. **Force remove a collection and its contents recursively:**
   ```sh
   gocmd rm -rf /iplant/home/myUser/parentCollection
   ```

## :material-file-arrow-left-right-outline: Move/Rename Data Objects (files) or Collections (directories)

1. **Rename a data object:**
   ```sh
   gocmd mv /iplant/home/myUser/oldfile.txt /iplant/home/myUser/newfile.txt
   ```

2. **Move a data object to a different collection:**
   ```sh
   gocmd mv /iplant/home/myUser/file.txt /iplant/home/myUser/subcollection/
   ```

3. **Rename a collection:**
   ```sh
   gocmd mv /iplant/home/myUser/oldcollection /iplant/home/myUser/newcollection
   ```

4. **Move multiple data objects with wildcard:**
   ```sh
   gocmd mv -w /iplant/home/myUser/*.txt /iplant/home/myUser/targetcollection/
   ```

   This command will move all data objects with the `.txt` extension from the /iplant/home/myUser/ collection to the `targetcollection`. The asterisk (*) wildcard matches any number of characters in the filename.

   You can use more specific wildcard patterns for precise file selection, such as `file*.txt` to move all text files starting with "file".


## :material-list-box-outline: Additional Resources

For detailed information on GoCommands, refer to the [GoCommands GitHub repository](https://github.com/cyverse/gocommands/tree/main/docs/commands). The following command-specific documentation is available:

- [init](https://github.com/cyverse/gocommands/tree/main/docs/commands/init.md): Initialize GoCommands configuration
- [env](https://github.com/cyverse/gocommands/tree/main/docs/commands/env.md): Display or modify environment variables
- [passwd](https://github.com/cyverse/gocommands/tree/main/docs/commands/passwd.md): Change user password
- [cd and pwd](https://github.com/cyverse/gocommands/tree/main/docs/commands/cd_pwd.md): Change and print working directory
- [ls](https://github.com/cyverse/gocommands/tree/main/docs/commands/ls.md): List directory contents
- [touch](https://github.com/cyverse/gocommands/tree/main/docs/commands/touch.md): Create empty files or update timestamps
- [mkdir](https://github.com/cyverse/gocommands/tree/main/docs/commands/mkdir.md): Create directories
- [rm](https://github.com/cyverse/gocommands/tree/main/docs/commands/rm.md): Remove files or directories
- [rmdir](https://github.com/cyverse/gocommands/tree/main/docs/commands/rmdir.md): Remove directories
- [mv](https://github.com/cyverse/gocommands/tree/main/docs/commands/mv.md): Move or rename files and directories
- [cp](https://github.com/cyverse/gocommands/tree/main/docs/commands/cp.md): Copy files or directories
- [cat](https://github.com/cyverse/gocommands/tree/main/docs/commands/cat.md): Display contents of a file
- [get](https://github.com/cyverse/gocommands/tree/main/docs/commands/get.md): Download files from the Data Store
- [put](https://github.com/cyverse/gocommands/tree/main/docs/commands/put.md): Upload files to the Data Store
- [bput](https://github.com/cyverse/gocommands/tree/main/docs/commands/bput.md): Bulk upload files to the Data Store
- [sync](https://github.com/cyverse/gocommands/tree/main/docs/commands/sync.md): Synchronize local and remote directories
- [svrinfo](https://github.com/cyverse/gocommands/tree/main/docs/commands/svrinfo.md): Display server information
- [ps](https://github.com/cyverse/gocommands/tree/main/docs/commands/ps.md): Display current iRODS sessions
- [upgrade](https://github.com/cyverse/gocommands/tree/main/docs/commands/upgrade.md): Upgrade GoCommands
- [copy-sftp-id](https://github.com/cyverse/gocommands/tree/main/docs/commands/copy-sftp-id.md): Copy SFTP identity file to the Data Store for SFTP public-key authentication