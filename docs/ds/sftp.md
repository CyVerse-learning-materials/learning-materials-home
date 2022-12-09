# Transferring Data with SFTP via a Command Line Tool and Desktop Apps

SFTP is the standard secure data transfer protocol that has been widely used. CyVerse has added support for SFTP to the Data Store to allow data access from a variety of computing environments. This means users can access their home and public folders in the CyVerse Data Store from their local omputers using any SFTP-enabled applications such as OS built-in command-line tool, Cyberduck, and FileZilla. With SFTP, users can copy file between their local computer and the Data Store easily.

------------------------------------------------------------------------

## SFTP Access Information

Use following information to access the SFTP service:

  | host name | port # | username | password |
  |:---------:|:------:|:--------:|:--------:|
  | data.cyverse.org | 22| CyVerse Username | CyVerse Password |

!!! Note

  You can configure public-key authentication, that allows logging in without password. Please refer public-key authentication section below.

------------------------------------------------------------------------

## Accessing through OS Built-in SFTP command-line tool

Most Operating Systems have built-in SFTP command-line tool, `sftp`. You can use `sftp` to access CyVerse Data Store.

**Accessing with CyVerse user account**

Open a terminal and type following command. Specify your CyVerse username in front of the host name. `<username>` is your CyVerse Username

  ``` bash
  sftp <username>@data.cyverse.org
  ```

If you haven't configured public-key authentication previously, the command will prompt CyVerse password.

There will be two sub-directories in the root directory:

  | directory | description |
  |-----------|------------------------|
  | `<username>` | Your CyVerse Data Store home dir (read & write) | 
  | `shared` | Public data dir (read only) |

**Anonymous public data access**

If you want to login with `anonymous` user for public data access only, use below command. The anonymous login does not ask password.

  ``` bash
  sftp anonymous@data.cyverse.org
  ```

With anonymous access, you have read-only access to `shared` directory, that contains public data.

**Available SFTP commands**

  | command | description |
  |---------|------------------------|
  | cd `path` | Change remote directory to `path` | 
  | lcd `path` | Change local directory to `path` |
  | pwd | Display remote working directory | 
  | lpwd | Print local working directory |
  | ls `[-1afhlnrSt]` `[path]` | Display remote directory listing |
  | lls `[ls-options]` `[path]` | Display local directory listing |
  | mkdir `path` | Create remote directory |
  | lmkdir `path` | Create local directory |
  | rmdir `path` | Remove remote directory |
  | rm `path` | Delete remote file |
  | rename `oldpath` `newpath` | Rename remote file |
  | get `[-afpR]` `remote` `[local]` | Download file |
  | put `[-afpR]` `local` `[remote]` | Upload file |
  | version | Show SFTP version |
  | help | Display help text |
  | exit | Quit sftp |

------------------------------------------------------------------------

## Accessing through Cyberduck

Cyberduck is a 3rd party software (available as freeware) tool that
allows you to drag-and-drop large and/or multiple files between your MacOS-based local computer and the
Data Store. Cyberduck can also be used to rename files and browse other
shared or public Data Store locations.


**Download Cyberduck**

Download Cyberduck at the [Cyberduck Website](https://cyberduck.io/download/). Follow the installation instructions for your operating system.

**Accessing with CyVerse user account**

1. Open the installed Cyberduck.
2. Click `Open Connection` icon.
3. Select `SFTP (SSH File Transfer Protocol)`.
4. Input `data.cyverse.org` in the field `Server` and `22` in the field `Port`.
5. Input your **CyVerse username** in the field `Username`.
6. Input your **CyVerse password** in the field `Password`.

You should now be connected to the CyVerse Data Store and viewing the following directories:

  | directory | description |
  |-----------|------------------------|
  | `<username>` | Your CyVerse Data Store home dir (read & write) | 
  | `shared` | Public data dir (read only) |

You can drag and drop files to upload or download files.


**Anonymous public data access**

You can login with `anonymous` user for public data access only.

1. Open the installed Cyberduck.
2. Click `Open Connection` icon.
3. Select `SFTP (SSH File Transfer Protocol)`.
4. Input `data.cyverse.org` in the field `Server` and `22` in the field `Port`.
5. Input `anonymous` in the field `Username`.

You should now be connected to the CyVerse Data Store and viewing the following directories:

  | directory | description |
  |-----------|------------------------|
  | `shared` | Public data dir (read only) |

You can drag and drop files to download files.

------------------------------------------------------------------------

## Accessing through FileZilla

FileZilla is a 3rd party software (available as freeware) tool that
allows you to drag-and-drop large and/or multiple files between your local computer and the
Data Store. FileZilla can also be used to rename files and browse other
shared or public Data Store locations. Unlike Cyberduck, FileZilla runs on any modern OSes, including MacOS, Linux, and Windows OSes.


**Download FileZilla**

Download FileZilla at the [FileZilla Website](https://filezilla-project.org/). Follow the installation instructions for your operating system.

**Accessing with CyVerse user account**

1. Open the installed FileZilla.
2. Input `data.cyverse.org` in the field `Host` and `22` in the field `Port`.
3. Input your **CyVerse username** in the field `Username`.
4. Input your **CyVerse password** in the field `Password`.
5. Click `Quickconnect` icon.

You should now be connected to the CyVerse Data Store and viewing the following directories:

  | directory | description |
  |-----------|------------------------|
  | `<username>` | Your CyVerse Data Store home dir (read & write) | 
  | `shared` | Public data dir (read only) |

You can drag and drop files to upload or download files.

**Anonymous public data access**

You can login with `anonymous` user for public data access only.

1. Open the installed FileZilla.
2. Input `data.cyverse.org` in the field `Host` and `22` in the field `Port`.
3. Input `anonymous` in the field `Username`.
4. Leave the field `Password` empty.
5. Click `Quickconnect` icon.

You should now be connected to the CyVerse Data Store and viewing the following directories:

  | directory | description |
  |-----------|------------------------|
  | `shared` | Public data dir (read only) |

You can drag and drop files to download files.

------------------------------------------------------------------------

## Configuring public-key authentication

If you were able to login with your CyVerse username and password, you can configure public-key authentication for more secure and password-less authentication.

This guide only covers how to configure and access public-key authentication using `sftp`, the OS built-in command-line tool.

**Create a public/private key pair**

If you don't have a public/private key pair, you need to create one. Before run following command, please check if `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub` files exist. If they exist, you already have the key pair.

  ``` bash
  ssh-keygen -t rsa -C "`hostname`" -f ~/.ssh/id_rsa -P "" -q
  ```

The command will generate `id_rsa` (private key) and `id_rsa.pub` (public key) under `~/.ssh` directory.

**Create authorized_keys file**

`authorized_keys` file contains a list of public keys that can login. Type following command to create a new `authorized_keys` file to be uploaded to CyVerse Data Store.

  ``` bash
  cat ~/.ssh/id_rsa.pub > authorized_keys
  ```

To add more public keys to allow login, type following.

  ``` bash
  cat <other_public_key> >> authorized_keys
  ```

**Upload authorized_keys file to CyVerse Data Store**

The `authorized_keys` file needs to be uploaded to CyVerse Data Store for authentication. Using any SFTP clients, upload the `authorized_keys` file to `.ssh` directory under your CyVerse Data Store home dir. 

!!! Note

  The `.ssh` directory should be already created when you first log-in using SFTP. If not, create a new directory. Currently, CyVerse Data Store does not check access permissions of the `.ssh` directory and `authorized_keys` file.

First, login with your CyVerse username and password.
  
  ``` bash
  sftp <username>@data.cyverse.org
  ```

Second, upload the `authorized_keys` file to `.ssh/` and quit `sftp`.

  ``` bash
  sftp> put authorized_keys <username>/.ssh
  sftp> exit
  ```

Third, re-login using the public-key.

  ``` bash
  sftp <username>@data.cyverse.org
  ```

------------------------------------------------------------------------

## Advanced configuration of public-key authentication

The `authorized_keys` file contains a list of public keys that can login. You can set `options` for the public keys in the `authorized_keys` file for more controls.

**Available options**

  | option | description | example |
  |---------|------------------------|-----------|
  | expiry-time | Set expiry time of the key. <br/> Must be in "YYYYMMDD", "YYYYMMDDHHMM", or "YYYYMMDDHHMMSS" format | expiry-time="20221231" |
  | from | Allow or reject access by client IP. Set filters as a COMMA-SEPARATED STRING. <br/> IP filter must be any of following: <br/> - Exact IP (e.g., "10.11.12.13") <br/> - IP with wildcard (e.g., "10.11.*.*") <br/> - IP mask (e.g., "10.11.12.0/24") <br/> If nothing is given, default is all-opened ("*") <br/> To reject, add "!" in front of the filter string. | from="!10.11.12.13,*" |
  | home | Set a collection path to be mounted as a home dir. Provide absolute path including zone name. If not, it is treated as a relative path from the user's CyVerse Data Store home dir. | home="/iplant/home/`<username>`/newhome |


**Set options to a public key**

To set options for a public key in the `authorized_keys` file, add the options in front of the public key as a comma-separated string. Do not add a space or a tab between options.

An example that allows login using a public-key from host `10.11.12.13` by `2023/12/31`, can access only `/iplant/home/<username>/newhome` directory.

```
expiry-time="20231231",from="10.11.12.13",home="/iplant/home/<username>/newhome" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmUOJiMgmEC61npfQnYMVWhA7rGFRp1cZZ4gKV4r8Okdj7W5NLPAQW9M+.......3HZJSA2lD17SyPOjU6ire7ajIMeEoniZEtnqc4DrKNZBZ2flnkDIbcyS/57 <username>@virtual-machine
```

!!! Note
  The options are only checked during user authentication, therefore, changing them do not affect to users/clients already logged-in.
  