# iCommands Installation and Upgrade

## :material-cog-outline: Installing iCommands Using Linux Package Managers

iCommands can be installed using popular Linux package managers such as `apt`, `yum`, or `zypper`. Follow the instructions below to install the latest version of iCommands based on your system's package manager.

> **Note:** You need administrative privileges to install the iCommands package on the system.

### :simple-ubuntu: APT (Debian/Ubuntu)

APT is the default package manager for Debian-based distributions like Ubuntu. Use the following commands to add the iRODS repository, import the signing key, and update your package list:

```bash
wget -qO - https://packages.irods.org/irods-signing-key.asc | sudo apt-key add -
echo "deb [arch=amd64] https://packages.irods.org/apt/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/renci-irods.list
sudo apt-get update
```

Then use the following command to install iCommands:

```bash
sudo apt install irods-icommands
```

---

### :simple-redhat: YUM (RHEL/CentOS/Fedora)

YUM is the default package manager for Red Hat-based distributions such as RHEL, CentOS, and Fedora. To install the public signing key and add the iRODS repository, execute the following commands:

```bash
sudo rpm --import https://packages.irods.org/irods-signing-key.asc
wget -qO - https://packages.irods.org/renci-irods.yum.repo | sudo tee /etc/yum.repos.d/renci-irods.yum.repo
```

Then use the following command to install iCommands:

```bash
sudo yum install irods-icommands
```

---

### :simple-suse: ZYPPER (openSUSE/SUSE Linux Enterprise)

ZYPPER is the package manager for SUSE-based distributions like openSUSE and SUSE Linux Enterprise. Use these commands to import the signing key and add the iRODS repository:

```bash
sudo rpm --import https://packages.irods.org/irods-signing-key.asc
wget -qO - https://packages.irods.org/renci-irods.zypp.repo | sudo tee /etc/zypp/repos.d/renci-irods.zypp.repo
```

Then use the following command to install iCommands:

```bash
sudo zypper install irods-icommands
```

---

## :material-braille: Manual Installation or Specific Versions  

If you prefer to manually download binaries or require a specific version of iCommands, visit the official iRODS download page for more information:

[iRODS Download Page](https://irods.org/download/)

Alternatively, you can directly browse the repositories for specific versions:

- **APT Repository**: [https://packages.irods.org/apt/pool/](https://packages.irods.org/apt/pool/)
- **YUM/ZYPPER Repository**: [https://packages.irods.org/yum/pool](https://packages.irods.org/yum/pool)
