# SFTP Public-key Authentication Configuration

Set up password-less authentication for SFTP access by uploading your SSH public key to the Data Store.

## :material-account-key-outline: Setting Up Public-key Authentication

1. **Generate an SSH key (if needed):**
    ```sh
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

    This creates a private key `id_rsa` and a public key `id_rsa.pub` in the `~/.ssh` directory.

2. **Connect to the Data Store via SFTP:**
    ```sh
    sftp myUser@data.cyverse.org
    ```

3. **Create the `.ssh` directory in your Data Store home:**
    In the SFTP prompt, run:
    ```sh
    mkdir /myUser/.ssh
    ```

    This creates the `.ssh` directory at `/iplant/home/<username>/.ssh` in the Data Store.

    > **Note:** A `.ssh` directory may appear in the root (`/.ssh`), but it is not writable. This directory is distinct from the `/<username>/.ssh` directory and should be ignored.

4. **Copy your SSH public key to the Data Store:**
    Still in the SFTP prompt, copy your local `~/.ssh/id_rsa.pub` file to the Data Store:
    ```sh
    put ~/.ssh/id_rsa.pub /myUser/.ssh/authorized_keys
    ```
    This registers your public key for password-less authentication.

4. **Exit and reconnect to verify:**
    ```sh
    quit
    sftp myUser@data.cyverse.org
    ```

    It should not ask for a password this time.

---

## :material-account-key-outline: Advanced Configuration

For advanced usage, you can control public-key access by manually editing the `/iplant/home/<username>/.ssh/authorized_keys` file in the Data Store. This process involves downloading the file, making changes, and then uploading it back. Here's how to do it:

1. **Download the `authorized_keys` File:**
    Connect to the Data Store via SFTP and download the file:
    ```sh
    sftp myUser@data.cyverse.org
    get /myUser/.ssh/authorized_keys
    quit
    ```

2. **Edit the file locally with a editor:**
    Open it with a text editor (e.g., `vi`, `nano`):
    ```sh
    vi authorized_keys
    ```

    Add parameters in `key=value` format before each SSH key. Example:
    ```sh
    expiry-time="20250320" from="10.11.12.13" ssh-rsa AAAAB3Nza... myUser
    ```

3. **Upload the modified file back to the Data Store:**
    Reconnect via SFTP and upload:
    ```sh
    sftp myUser@data.cyverse.org
    put authorized_keys /myUser/.ssh/
    quit
    ```

    > **Note:** Configuration changes are only applied during user authentication. Therefore, modifications do not affect users or clients that are already logged in.


### Available Parameters

| Parameter   | Description | Example |
|-------------|-------------|---------|
| `expiry-time` | Sets expiration date-time in `YYYYMMDD`, `YYYYMMDDhhmm`, or `YYYYMMDDhhmmss` format | `expiry-time="20250320"` |
| `from`        | Allows access from specific IP addresses. Use IP address, CIDR, or `!` prefix to negate. Separate multiple entries with commas | `from="10.11.12.13,!10.11.12.14"` |
| `home`        | Sets a specific home collection path for SFTP access within the Data Store. Use absolute path of the collection in the Data Store | `home=/iplant/home/myUser/sftp_home` |

