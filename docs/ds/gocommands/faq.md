# Frequently Asked Questions

## Getting 'Command not found error'
This error indicates that the system could not locate `gocmd` binary in the directories specified by the `$PATH` environment variable. 

To resolve this:

1. Use an absolute path: Run `./gocmd init` from the directory where you downloaded the `gocmd` binary.
2. For easier future use: Move the `gocmd` binary to a directory in your `$PATH`, such as `/usr/local/bin`.
3. Windows users: Ensure the executable is named `gocmd.exe` and run `gocmd.exe init` to initialize.


