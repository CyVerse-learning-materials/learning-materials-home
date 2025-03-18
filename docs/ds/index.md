# Data Store

<figure markdown>
  ![!ds](../assets/ds/datastore_plchldr.png){ width="200" }
</figure>

CyVerse Data Store runs the [Integrated Rule-Oriented Data System (iRODS)](https://irods.org){target=_blank} Open Source Data Management Software.

iRODS helps researchers, archivists, and others manage large, geographically dispersed computer files by providing a virtual filesystem, metadata catalog, and a rule engine to automate data management and enforce policies. 

The Data Store is designed for storing, managing, and sharing your data throughout its entire lifecycle. 

Integrated across all CyVerse platforms, the Data Store has high accessibility and connectivity.  

The Data Store's features are aimed at helping you maintain data integrity and value, while making your data more FAIR (Findable, Accessible, Interoperable, and Reusable) with minimal effort.

This guide will walk you through the essential steps to get started, assuming you’ve already created a CyVerse account.

---

# Data Management

There are several ways to access the Data Store. These methods vary in speed, flexibility, and technical knowledge required. Different methods may suit your needs for different projects at different times.

| Method                 | Access Point               | OS               | Upload/Download | Installation/Setup Required | Account Required         | Max File Size         |
|------------------------|----------------------------|------------------|-----------------|-----------------------------|--------------------------|-----------------------|
| Discovery Environment  | Web                        | Any              | Both            | No                          | Yes                      | 2GB/file upload, no limit for import |
| WebDAV                 | Web & Command line         | Any              | Both            | No                          | Yes (No for public data) | No limit              |
| GoCommands             | Command line               | Any              | Both            | Yes                         | Yes (No for public data) | No limit              |
| iCommands              | Command line               | Linux & macOS    | Both            | Yes                         | Yes (No for public data) | No limit              |
| SFTP                   | Desktop App & Command line | Any              | Both            | No (Yes for desktop app)    | Yes (No for public data) | No limit              |
| Cyberduck              | Desktop App                | macOS & Windows  | Both            | Yes                         | Yes (No for public data) | No limit              |

[de]: ../assets/de/logos/deIcon.svg
[data]: ../assets/de/menu_items/dataIcon.svg

This section covers each of the following data management methods:

  1. [Discovery Environment](de/index.md): A comprehensive web-based platform for data analysis and management
  2. [GoCommands](gocommands): A lightweight, portable command-line tool for efficient data operations on any OS
  3. [iCommands](icommands): A powerful command-line suite for advanced data management tasks on Linux
  4. [SFTP](sftp): A secure file transfer protocol accessible via command-line or GUI applications on any OS
  5. [WebDAV](webdav): A protocol extending HTTP for collaborative file management over the internet, usable on any OS
  6. [Cyberduck](cyberduck): A user-friendly desktop application for file transfer and management on macOS and Windows

Additional resources for managing your data and team collaboration:

  1. [Getting a DOI](doi.md): Obtain a Digital Object Identifier (DOI) for a permanent and stable link to your data
  2. [Checking Data Usage](check_data.md): Monitor your data usage and storage limits
  3. [Team Access Management](teams.md): Create and manage teams in the Data Store for collaborative work

---

## [:material-laptop: Manage Your Data in Discovery Environment](de/index.md)

The Discovery Environment has a fully managed interface for uploading, downloading, sharing, and adding metadata to the Data Store through your browser.

## [:simple-go: Manage Your Data with GoCommands](gocommands)

GoCommands is a lightweight and portable command-line tool designed for efficient data management within the Data Store. This section provides guidance on how to set up and use GoCommands to interact with the Data Store.

## [:octicons-terminal-16: Manage Your Data with iCommands](icommands)

iCommands is a powerful command-line tool designed for data management in iRODS. It enables you to manage data in the Data Store efficiently via the command line. This section covers how to install and use iCommands for streamlined data transfers and management.

## [:material-play-network: Transferring Data with SFTP](sftp)

SFTP (Secure File Transfer Protocol) is a widely adopted network protocol for secure file access, transfer, and management. This section explains how to use SFTP to move your data to and from the Data Store.

## [:material-web: HTTP Access with WebDAV](webdav)

WebDAV (Web Distributed Authoring and Versioning) is a protocol built on top of HTTP/HTTPS, allowing users to manage data on web servers. This section demonstrates how to use WebDAV for seamless data access and management within the Data Store.

## [:material-duck: Transferring Data with Cyberduck](cyberduck)

CyberDuck is a popular open-source file transfer client for macOS that provides easy access to the Data Store. Its intuitive graphical interface ensures seamless file transfer and management. This section provides step-by-step instructions for using Cyberduck to transfer data to and from the Data Store.

## [:simple-doi: Getting a DOI](doi.md)

A Digital Object Identifier (DOI) offers a permanent and stable link to your data. Learn how to obtain a DOI for your datasets stored in the Data Store, ensuring long-term citation and accessibility.

## [Checking Data Storage](check_data.md)

Keep track of your data usage and storage limits. This section covers tools and techniques for monitoring your data storage within the Data Store.

## [![team](../assets/de/menu_items/teamsIcon_2.svg){width=25} Managing Data within a Team](teams.md)

Efficiently manage team access and permissions for your data. Learn how to create and manage teams in the Data Store to facilitate collaborative data work.
