# Data Transfer using GoCommands

GoCommands provides a range of commands designed to efficiently and conveniently transfer large datasets between your local machine and the Data Store.

---

## :material-package-variant-closed: Download Data from the Data Store

1. **Download a collection to a specific local path:**
    ```sh
    gocmd get --progress -f -K --icat /iplant/home/myUser/mydir /local/dir/
    ```

    This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/`. A new directory named `mydir` will be created under `/local/dir/`, resulting in `/local/dir/mydir` containing all the downloaded files and subdirectories.

    - The `--progress` flag shows progress bars, providing visual feedback during file transfers.
    - The `-f` flag forces overwriting of existing local files without confirmation.
    - The `-K` flag ensures file integrity by verifying checksums after the download.
    - The `--icat` flag uses iCAT as a transfer broker, bypassing direct resource server access to prevent potential transfer failures.

2. **Sync a collection in the Data Store with a local directory:**
    ```sh
    gocmd get --progress -f -K --icat --diff --delete /iplant/home/myUser/mydir /local/dir/
    ```

    This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/`, syncing any new updates made to the original data.

    - The `--diff` flag transfers only new or modified files, comparing sizes and checksums.
    - The `--delete` flag removes files from the destination that don't exist in the source.

    This command is equivalent to:
    ```sh
    gocmd sync --progress -K --icat --delete i:/iplant/home/myUser/mydir /local/dir/
    ```

3. **Download a collection using multiple parallel transfers:**
    ```sh
    gocmd get --progress -f -K --icat --thread_num 10 /iplant/home/myUser/mydir /local/dir/
    ```

    This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/` using 10 parallel transfer threads. Utilizing more transfer threads can maximize I/O and network bandwidth, often speeding up the transfer process significantly.

    - The `--thread_num` flag sets the maximum number of threads to use for the transfer.

    !!! Warning "Thread Count Considerations"

        1. Higher thread counts require more CPU and memory. Excessive threads may overload your system, causing performance issues. For example, Discovery Environment (DE) apps limit transfer threads to 5 due to RAM constraints.
        2. The Data Store limits concurrent connections, potentially restricting high thread counts.

    
    !!! Tip "Using GoCommands on the University of Arizona Campus Network?"

        When using GoCommands on the UA Campus network, include the `--icat` flag for stable large file transfers.

---

## :material-package-variant-closed: Upload Data to the Data Store

1. **Upload a local directory to a specific path in the Data Store:**
    ```sh
    gocmd put --progress -f -K --icat /local/dir/ /iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` and its contents to the Data Store at `/iplant/home/myUser/mydir/`. A new directory named `dir` will be created under `/iplant/home/myUser/mydir/`, resulting in `/iplant/home/myUser/mydir/dir` containing all the uploaded files and subdirectories.

    - The `--progress` flag shows progress bars during file transfers.
    - The `-f` flag forces overwriting of existing files in the Data Store without confirmation.
    - The `-K` flag ensures file integrity by verifying checksums after upload.
    - The `--icat` flag uses iCAT as a transfer broker, bypassing direct resource server access to prevent potential transfer failures.

2. **Sync a local directory with a collection in the Data Store:**
    ```sh
    gocmd put --progress -f -K --icat --diff --delete /local/dir/ /iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` to `/iplant/home/myUser/mydir/` in the Data Store, syncing any new or updated files. It also removes extra files in the destination collection that do not exist locally.

    - The `--diff` flag transfers only new or modified files, comparing sizes and checksums.
    - The `--delete` flag removes files from the destination that don't exist in the source.

    This command is equivalent to:
    ```sh
    gocmd sync --progress -K --icat --delete /local/dir/ i:/iplant/home/myUser/mydir/
    ```

3. **Upload a local directory using multiple parallel transfers:**
    ```sh
    gocmd put --progress -f -K --icat --thread_num 10 /local/dir/ /iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` and its contents to `/iplant/home/myUser/mydir/` in the Data Store using 10 parallel transfer threads. This can significantly speed up the upload process by maximizing I/O and network bandwidth.

    - The `--thread_num` flag sets the maximum number of threads to use for the transfer.

    !!! Warning "Thread Count Considerations"

        1. Higher thread counts require more CPU and memory. Excessive threads may overload your system, causing performance issues. For example, Discovery Environment (DE) apps limit transfer threads to 5 due to RAM constraints.
        2. The Data Store limits concurrent connections, potentially restricting high thread counts.

    
    !!! Tip "Using GoCommands on the University of Arizona Campus Network?"

        When using GoCommands on the UA Campus network, include the `--icat` flag for stable large file transfers.

4. **Upload a local directory containing many small files:**
    ```sh
    gocmd bput --progress -K --icat --thread_num 10 /local/dir/ /iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` containing numerous small files to `/iplant/home/myUser/mydir/` in the Data Store. Using bundle transfer and parallel transfer can significantly speed up the transfer of many small files.

    This command is equivalent to:
    ```sh
    gocmd sync --bulk_upload --progress -K --icat /local/dir/ i:/iplant/home/myUser/mydir/
    ```
