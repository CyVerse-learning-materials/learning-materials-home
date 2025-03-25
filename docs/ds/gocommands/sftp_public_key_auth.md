# SFTP Public-key Authentication Configuration using GoCommands

GoCommands provides a feature to configure public-key authentication for the Data Store's SFTP service. The `copy-sftp-id` command uploads your local SSH public keys to the Data Store, enabling password-less authentication for the SFTP service.

---

## :material-account-key-outline: Setting Up Public-key Authentication

1. **Generate an SSH key (if needed):**
    ```sh
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

    This creates a private key `id_rsa` and a public key `id_rsa.pub` in the `~/.ssh` directory.

2. **To copy all SSH public keys from your `~/.ssh` directory, run:**
    ```sh
    gocmd copy-sftp-id
    ```

    This command automatically detects all SSH public keys for the current local user in the `~/.ssh` directory at local machine and copies them to `/iplant/home/<username>/.ssh/authorized_keys` in the Data Store. This process is similar to standard SSH public-key registration.

3. **To copy the specified SSH public key, use:**
    ```sh
    gocmd copy-sftp-id -i ~/.ssh/id_rsa.pub
    ```

    This command copies only the SSH public key from the `~/.ssh/id_rsa.pub` file to `/iplant/home/<username>/.ssh/authorized_keys` in the Data Store.

---

## :material-account-key-outline: Advanced Configuration

For advanced usage, you can control public-key access by manually editing the `/iplant/home/<username>/.ssh/authorized_keys` file in the Data Store. This process involves downloading the file, making changes, and then uploading it back. Here's how to do it:

1. **Download the `authorized_keys` file:**
    ```sh
    gocmd get /iplant/home/myUser/.ssh/authorized_keys .
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
    ```sh
    gocmd put authorized_keys /iplant/home/myUser/.ssh/
    ```

### Available Parameters

| Parameter   | Description | Example |
|-------------|-------------|---------|
| `expiry-time` | Sets expiration date-time in `YYYYMMDD`, `YYYYMMDDhhmm`, or `YYYYMMDDhhmmss` format | `expiry-time="20250320"` |
| `from`        | Allows access from specific IP addresses. Use IP address, CIDR, or `!` prefix to negate. Separate multiple entries with commas | `from="10.11.12.13,!10.11.12.14"` |
| `home`        | Sets a specific home collection path for SFTP access within the Data Store. Use absolute path of the collection in the Data Store | `home=/iplant/home/myUser/sftp_home` |

