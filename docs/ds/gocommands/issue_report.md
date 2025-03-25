# GoCommands Troubleshooting and Issue Report

## :material-bullseye-arrow: Troubleshooting

### Command Not Found Error
This error indicates that the system could not locate `gocmd` binary in the directories specified by the `$PATH` environment variable. 

To resolve this:

1. Use an absolute or relative path: Run `./gocmd init` from the directory where you downloaded the `gocmd` binary.
2. For easier future use: Move the `gocmd` binary to a directory in your `$PATH`, such as `/usr/local/bin`.
3. Windows users: Ensure the executable is named `gocmd.exe` and run `gocmd.exe init` to initialize.


### Cannot Execute Binary File (Exec Format Error)
This error occurs when the `gocmd` binary is incompatible with your CPU architecture or operating system. To resolve this issue:

1. Review the [installation instructions](installation.md) to ensure you downloaded the correct version for your system.
2. Verify your system's architecture and OS version:
    - On Linux/macOS, use the command `uname -m` for architecture and `uname -s` for OS.
    - On Windows, check System Information in the Control Panel.
3. Download the appropriate `gocmd` binary that matches your system specifications.
4. If the problem persists, seek support from the CyVerse community.


### Path Not Found Error in Windows
In Windows, the backslash (`\`) is used as the default path delimiter, while the forward slash (`/`) is used in Linux and macOS. If you encounter a "Path not found" error, ensure the following:

1. **Local Path**: Verify that your local path is correctly specified using the backslash (`\`) as the delimiter. For example:
    - Correct: `C:\Users\YourName\Documents`
    - Incorrect: `C:/Users/YourName/Documents`

2. **Data Store Path**: Use the forward slash (`/`) as the delimiter for paths in the Data Store. For example:
    - Correct: `/iplant/home/username/folder`
    - Incorrect: `\iplant\home\username\folder`


### Keep Failing Large File Transfer

If you are using GoCommands within the University of Arizona Campus or the Discovery Environment, large file transfers may fail due to campus firewall restrictions. This issue occurs when transferring files via resource servers using commands like `get`, `put`, `bput`, and `sync`. By default, these commands transfer large files (≥1GB) through resource servers or when the `--redirect` flag is specified. To avoid such failures, use the `--icat` flag to transfer data directly through ICAT.

### Request Support

If you encounter an issue that you cannot resolve, please contact [support@cyverse.org](mailto:support@cyverse.org) for assistance. Your Data Store access via GoCommands may be limited or fail due to various factors, including configuration issues, network problems, authentication errors, or data policies. The support team is available to help you identify and resolve these issues.

---

## :material-bug-check-outline: Report Bugs

If you encounter a bug, please report it to our [GitHub repository](https://github.com/cyverse/gocommands/issues). Your detailed bug report is valuable in helping us improve the stability and usability of GoCommands.

When submitting a bug report, please include the following information:

- **System Information:** Specify your CPU architecture and operating system (OS).
- **Failing Command:** Provide the exact command you used that resulted in the error.
- **Debug Log:** Run the command with the `-d` flag to display debug output, then copy and paste the relevant error messages into your report. This provides valuable context for troubleshooting.

