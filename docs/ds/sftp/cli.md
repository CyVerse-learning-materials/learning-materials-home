# SFTP Access using Command-line Tools

Most operating systems include built-in SFTP clients, enabling command-line access to the Data Store. This guide outlines the basics of using SFTP tools on Linux, macOS, and Windows.

??? Tip "Windows Users"

    Windows 10 and later versions include an SFTP client. For earlier versions, you may need to use a third-party command-line tool like `WinSCP` or a GUI tool like `FileZilla`.


## :material-play-network: SFTP Access Information

Use the following credentials to connect to the Data Store:

| Key            | Value                |
|-----------------|----------------------|
| `hostname`     | `data.cyverse.org`   |
| `port`         | `22`                 |
| `username`     | `<CyVerse Username>` |
| `password`     | `<CyVerse Password>` |


Use these credentials for anonymous access to the Data Store:

| Key | Value |
|-------------------|-------|
| `username` | `anonymous` |
| `password` | (leave empty) |

---

## :material-play-network: Connect to the Data Store

To connect using SFTP, open a terminal and run:

```sh
sftp <username>@data.cyverse.org
```

Upon successful connection, you'll see a prompt like this:

```sh
$ sftp <username>@data.cyverse.org
Connected to data.cyverse.org.
sftp>
```

> **Note:** Output may vary depending on the operating system. The example above is from Linux.

---

## :material-play-network: Basic SFTP Commands

Once connected, you can use these common SFTP commands:

- `ls`: List files and directories
- `cd`: Change directory
- `pwd`: Display current directory
- `get`: Download a file from the Data Store
- `put`: Upload a file to the Data Store
- `mkdir`: Create a directory
- `rmdir`: Remove an empty directory
- `rm`: Delete a file

To close the SFTP connection, use the `exit` or `bye` command.

Use the `help` or `?` command to see a list of available SFTP commands.

---

## :material-play-network: Top-level Directories

Once connected, you will see two directories in the root:

- `<username>`: Your home directory (`/iplant/home/<username>` in the Data Store). You have read and write permissions. Note that anonymous users do not have a home directory.
- `shared`: Community-shared data directory (`/iplant/home/shared` in the Data Store). You have only read permission.

> **Note:** A `.ssh` directory may appear in the root, but it is not writable. This directory is distinct from the `/<username>/.ssh` directory and should be ignored.


---

## :material-play-network: Examples

1. **List files in your home directory:**
    ```sh
    ls /myUser
    ```

2. **Download a file:**
    ```sh
    get /myUser/myfile.txt
    ```

3. **Upload a file:**
    ```sh
    put localfile.txt /myUser/
    ```

4. **Create a new directory:**
    ```sh
    mkdir /myUser/newdir
    ```
