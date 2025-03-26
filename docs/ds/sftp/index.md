# Manage Your Data Using SFTP

SFTP (Secure File Transfer Protocol) is a widely adopted network protocol for secure file transfer and management. It operates over an encrypted communication channel, ensuring safe data exchange between the client and server. With broad compatibility across various environments, SFTP offers a flexible and reliable solution for managing data.  

This guide covers how to configure SFTP clients to efficiently manage your data in the Data Store.

---

## Limitations

**Using SFTP for File Transfers**

WebDAV is ideal for transferring small files or small collections of files. While there is no strict size limit, it is not recommended for files larger than 10 GiB due to performance issues.

**Alternatives for Large Files**

For large files or extensive datasets, consider using **GoCommands** or **iCommands** instead. These tools offer better performance and efficiency for handling large data transfers.

For more details on GoCommands and iCommands, visit their respective documentation pages:
- [GoCommands](../gocommands)
- [iCommands](../icommands)

---

### Table of Contents

1. [Command-line Tools](cli.md)
2. [FileZilla](filezilla.md)
3. [Cyberduck](cyberduck.md)
4. [Directory Structure](structure.md)
5. [Public-key Authentication Configuration](public_key_auth.md)

---

## [:material-console: Command-line Tools](cli.md)

Use your operating system's built-in SFTP client to access and manage data in the Data Store via the command line.

## [:simple-filezilla: FileZilla](filezilla.md)

Connect to the Data Store using FileZilla, a user-friendly SFTP GUI client for easy file transfers and management.

## [:material-duck: Cyberduck](cyberduck.md)

Connect to the Data Store using Cyberduck, a user-friendly SFTP GUI client for easy file transfers and management.

## [:material-folder-multiple-outline: Directory Structure](structure.md)

Learn how to navigate your files using SFTP by understanding its directory structure.

## [:material-account-key-outline: Public-key Authentication Configuration](public_key_auth.md)

Set up and configure public-key authentication for secure SFTP access to the Data Store.

---

## Acknowledgments

The SFTP functionality for the Data Store is powered by [SFTPGo](https://github.com/drakkan/sftpgo){target=_blank}, an open-source, fully featured, and highly configurable SFTP server created by Nicola Murino. SFTPGo supports various storage backends, including local filesystems, S3 Object Storage, Google Cloud Storage, and Azure Blob Storage. CyVerse extended SFTPGo's capabilities by implementing a new backend module specifically for iRODS, enabling SFTP access to the Data Store. We extend our gratitude to Nicola Murino and the SFTPGo project for making this integration possible.
