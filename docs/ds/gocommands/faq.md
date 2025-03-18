# Frequently Asked Questions

## Command Not Found Error
This error indicates that the system could not locate `gocmd` binary in the directories specified by the `$PATH` environment variable. 

To resolve this:

1. Use an absolute path: Run `./gocmd init` from the directory where you downloaded the `gocmd` binary.
2. For easier future use: Move the `gocmd` binary to a directory in your `$PATH`, such as `/usr/local/bin`.
3. Windows users: Ensure the executable is named `gocmd.exe` and run `gocmd.exe init` to initialize.


## Cannot Execute Binary File (Exec Format Error)
This error occurs when the `gocmd` binary is incompatible with your CPU architecture or operating system. To resolve this issue:

1. Review the [installation instructions](installation.md) to ensure you downloaded the correct version for your system.
2. Verify your system's architecture and OS version:
   - On Linux/macOS, use the command `uname -m` for architecture and `uname -s` for OS.
   - On Windows, check System Information in the Control Panel.
3. Download the appropriate `gocmd` binary that matches your system specifications.
4. If the problem persists, seek support from the CyVerse community.

## Path Not Found Error in Windows
In Windows, the backslash (`\`) is used as the default path delimiter, while the forward slash (`/`) is used in Linux and macOS. If you encounter a "Path not found" error, ensure the following:

1. **Local Path**: Verify that your local path is correctly specified using the backslash (`\`) as the delimiter. For example:
   - Correct: `C:\Users\YourName\Documents`
   - Incorrect: `C:/Users/YourName/Documents`

2. **Data Store Path**: Use the forward slash (`/`) as the delimiter for paths in the Data Store. For example:
   - Correct: `/iplant/home/username/folder`
   - Incorrect: `\iplant\home\username\folder`


