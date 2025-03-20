# Data Transfer

GoCommands provides a range of commands designed to efficiently and conveniently transfer large datasets between your local machine and the Data Store.

## :material-package-variant-closed: Download Data from the Data Store

1. **Download a collection to a specific local path:**
   ```sh
   gocmd get --progress -f -K --icat /iplant/home/myUser/mydir /local/dir/
   ```

   This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/`. A new directory named `mydir` will be created under `/local/dir/`, resulting in `/local/dir/mydir` containing all the downloaded files and subdirectories.

   Flags:
   - `--progress`: Displays progress bars for visual feedback during transfer.
   - `-f`: Overwrites existing local files without prompting.
   - `-K`: Verifies file integrity by calculating and comparing checksums after download.
   - `--icat`: Uses iCAT as a transfer broker, avoiding direct resource server access that may cause occasional failures.

2. **Sync a collection in the Data Store with a local directory:**
   ```sh
   gocmd get --progress -f -K --icat --diff --delete /iplant/home/myUser/mydir /local/dir/
   ```

   This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/`, syncing any new updates made to the original data.

   Additional flag:
   - `--diff`: Transfers only files that are different or don't exist locally, comparing file sizes and checksums.
   - `--delete`: Removes extra files in the destination directory that do not exist in the source data.

   This command is equivalent to:
   ```sh
   gocmd sync --progress -K --icat --delete i:/iplant/home/myUser/mydir /local/dir/
   ```

3. **Download a collection using multiple parallel transfers:**
   ```sh
   gocmd get --progress -f -K --icat --thread_num 20 /iplant/home/myUser/mydir /local/dir/
   ```

   This command downloads the collection `/iplant/home/myUser/mydir` and its contents to `/local/dir/` using 20 parallel transfer threads. Utilizing more transfer threads can maximize I/O and network bandwidth, often speeding up the transfer process significantly.

   **Important Considerations:**
   - Increasing the number of transfer threads requires additional CPU and memory resources. Setting the thread count too high may exceed your system's capacity, leading to performance issues.
   - For example, in Discovery Environment (DE) apps, the transfer thread count is limited to 5 due to RAM constraints.
   - The Data Store may enforce policies that restrict the number of simultaneous connections, so excessive thread counts may not be permitted.

## :material-package-variant-closed: Upload Data to the Data Store

1. **Upload a local directory to a specific path in the Data Store:**
   ```sh
   gocmd put --progress -f -K --icat /local/dir/ /iplant/home/myUser/mydir/
   ```

   This command uploads the local directory `/local/dir/` and its contents to the Data Store at `/iplant/home/myUser/mydir/`. A new directory named `dir` will be created under `/iplant/home/myUser/mydir/`, resulting in `/iplant/home/myUser/mydir/dir` containing all the uploaded files and subdirectories.

   Flags:
   - `--progress`: Displays progress bars for visual feedback during transfer.
   - `-f`: Overwrites existing files in the Data Store without prompting.
   - `-K`: Verifies file integrity by calculating and comparing checksums after upload.
   - `--icat`: Uses iCAT as a transfer broker, avoiding direct resource server access that may cause occasional failures.

2. **Sync a local directory with a collection in the Data Store:**
   ```sh
   gocmd put --progress -f -K --icat --diff --delete /local/dir/ /iplant/home/myUser/mydir/
   ```

   This command uploads the local directory `/local/dir/` to `/iplant/home/myUser/mydir/` in the Data Store, syncing any new or updated files. It also removes extra files in the destination collection that do not exist locally.

   Additional flags:
   - `--diff`: Transfers only files that are different or don't exist in the destination, comparing file sizes and checksums.
   - `--delete`: Deletes extra files in the destination collection that are not present.

   This command is equivalent to:
   ```sh
   gocmd sync --progress -K --icat --delete /local/dir/ i:/iplant/home/myUser/mydir/
   ```

3. **Upload a local directory using multiple parallel transfers:**
   ```sh
   gocmd put --progress -f -K --icat --thread_num 20 /local/dir/ /iplant/home/myUser/mydir/
   ```

   This command uploads the local directory `/local/dir/` and its contents to `/iplant/home/myUser/mydir/` in the Data Store using 20 parallel transfer threads. This can significantly speed up the upload process by maximizing I/O and network bandwidth.

   **Important Considerations:**
   - Increasing the number of transfer threads requires additional CPU and memory resources. Setting the thread count too high may exceed your system's capacity, leading to performance issues.
   - For example, in Discovery Environment (DE) apps, the transfer thread count is limited to 5 due to RAM constraints.
   - The Data Store may enforce policies that restrict the number of simultaneous connections, so excessive thread counts may not be permitted.

4. **Upload a local directory containing many small files:**
   ```sh
   gocmd bput --progress -K --icat --thread_num 20 /local/dir/ /iplant/home/myUser/mydir/
   ```

   This command uploads the local directory `/local/dir/` containing numerous small files to `/iplant/home/myUser/mydir/` in the Data Store. Using bundle transfer and parallel transfer can significantly speed up the transfer of many small files.

   This command is equivalent to:
   ```sh
   gocmd sync --bulk_upload --progress -K --icat /local/dir/ i:/iplant/home/myUser/mydir/
   ```
