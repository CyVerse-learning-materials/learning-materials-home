# Data Transfer

iCommands provides a range of commands designed to efficiently and conveniently transfer large datasets between your local machine and the Data Store.

---

## :material-package-variant-closed: Download Data from the Data Store

1. **Download a collection to a specific local path:**
    ```sh
    iget -P -f -K -T /iplant/home/myUser/mydir /local/dir/
    ```

    This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/`. A new directory named `mydir` will be created under `/local/dir/`, resulting in `/local/dir/mydir` containing all the downloaded files and subdirectories.

    - The `-P` flag outputs download progress.
    - The `-f` flag forces overwriting of existing local files without confirmation.
    - The `-K` flag ensures file integrity by verifying checksums after the download.
    - The `-T` flag renews connections every 10 minutes to prevent failures due to connection or firewall issues.

2. **Sync a collection in the Data Store with a local directory:**
    ```sh
    irsync -r -K i:/iplant/home/myUser/mydir /local/dir/
    ```

    This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/`, syncing any new updates made to the original data.

3. **Download a collection using multiple parallel transfers:**
    ```sh
    iget -P -f -K -T -N 10 /iplant/home/myUser/mydir /local/dir/
    ```

    This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/` using 10 parallel transfer threads. Utilizing more transfer threads can maximize I/O and network bandwidth, often speeding up the transfer process significantly.

    - The `-N` flag sets the maximum number of threads to use for the transfer.

    !!! Warning "Thread Count Considerations"

        1. Higher thread counts require more CPU and memory. Excessive threads may overload your system, causing performance issues. For example, Discovery Environment (DE) apps limit transfer threads to 4 due to RAM constraints.
        2. The Data Store limits concurrent connections, potentially restricting high thread counts.

---

## :material-package-variant-closed: Upload Data to the Data Store

1. **Upload a local directory to a specific path in the Data Store:**
    ```sh
    iput -P -f -K -T /local/dir/ /iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` and its contents to the Data Store at `/iplant/home/myUser/mydir/`. A new directory named `dir` will be created under `/iplant/home/myUser/mydir/`, resulting in `/iplant/home/myUser/mydir/dir` containing all the uploaded files and subdirectories.

    - The `-P` flag outputs upload progress.
    - The `-f` flag forces overwriting of existing files in the Data Store without confirmation.
    - The `-K` flag ensures file integrity by verifying checksums after upload.
    - The `-T` flag renews connections every 10 minutes to prevent failures due to connection or firewall issues.

2. **Sync a local directory with a collection in the Data Store:**
    ```sh
    irsync -r -K /local/dir/ i:/iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` to `/iplant/home/myUser/mydir/` in the Data Store, syncing any new or updated files.

3. **Upload a local directory using multiple parallel transfers:**
    ```sh
    iput -P -f -K -T -N 10 /local/dir/ /iplant/home/myUser/mydir/
    ```

    This command uploads the local directory `/local/dir/` and its contents to `/iplant/home/myUser/mydir/` in the Data Store using 10 parallel transfer threads. This can significantly speed up the upload process by maximizing I/O and network bandwidth.

    - The `-N` flag sets the maximum number of threads to use for the transfer.

    !!! Warning "Thread Count Considerations"

        1. Higher thread counts require more CPU and memory. Excessive threads may overload your system, causing performance issues. For example, Discovery Environment (DE) apps limit transfer threads to 4 due to RAM constraints.
        2. The Data Store limits concurrent connections, potentially restricting high thread counts.
