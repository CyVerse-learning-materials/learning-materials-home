# GoCommands Configuration

## :material-cog-outline: Using the `init` Command

The `init` command sets up the iRODS Host and access account for use with other GoCommands tools. Once the configuration is set, configuration files are created under the `~/.irods` directory. The configuration is fully compatible with that of iCommands.

1. **Run the following command to configure GoCommands:**
    ```sh
    gocmd init
    ```

    !!! Tip "Getting 'Command not found error?'"

        :material-braille: This error indicates that the system could not locate `gocmd` binary in the directories specified by the `$PATH` environment variable. To resolve this:
        > 1. Use an absolute path: Run `./gocmd init` from the directory where you downloaded the `gocmd` binary.
        > 2. For easier future use: Move the `gocmd` binary to a directory in your `$PATH`, such as `/usr/local/bin`.
        > 3. Windows users: Ensure the executable is named `gocmd.exe` and run `gocmd.exe init` to initialize.

2. **Enter your Data Store account credentials when prompted. Use the following information:**

    | Configuration Key | Value |
    |-------------------|-------|
    | `irods_host`      | `data.cyverse.org` |
    | `irods_port`      | `1247` |
    | `irods_zone_name` | `iplant` |
    | `irods_user_name` |  `<CyVerse Username>` |
    | `irods_user_password` | `<CyVerse Password>` |

    Use these credentials for anonymous access to the Data Store:

    | Configuration Key | Value |
    |-------------------|-------|
    | `irods_user_name` | `anonymous` |
    | `irods_user_password` | (leave empty) |


3. **To verify the current configuration, use:**
    ```sh
    gocmd env
    ```

    This will display the current configurations.

4. **Execute GoCommands for your task:**
    ```sh
    gocmd ls
    ```

---


## :material-cog-outline: Using iCommands Configuration

GoCommands is compatible with iCommands' configuration files. It can automatically detect and use the existing iCommands configuration files located in `~/.irods`. Additionally, GoCommands creates its own configuration files in this directory, allowing users to work with both iCommands and GoCommands interchangeably.

---

## :material-cog-outline: Using an External Configuration File (YAML or JSON) without `init`

GoCommands can read configurations from YAML or JSON files without running `init` to create the `~/.irods` directory. This approach offers flexibility but requires specifying the configuration file path for each command. Here's how to use this method:

1. **Create a file named `config.yaml` using your preferred text editor:**
    ```sh
    irods_host: "data.cyverse.org"
    irods_port: 1247
    irods_zone_name: "iplant"
    irods_user_name: "<CyVerse Username>"
    irods_user_password: "<CyVerse Password>"
    ```

    !!! Tip "Prefer not to include your password in the file?"

        :material-security: You can omit sensitive fields like `irods_user_password`, and GoCommands will prompt you to enter the missing values during runtime.

2. **To use this configuration file, provide its path with the `-c` flag when running GoCommands:**
    ```sh
    gocmd -c config.yaml env
    ```

3. **Execute GoCommands for your task:**
    ```sh
    gocmd -c config.yaml ls
    ```

---

## :material-cog-outline: Using an External Configuration File (YAML or JSON)

The `init` command can be executed with an external file to automate configuration.

1. **Create a file named `config.yaml` using your preferred text editor:**
    ```sh
    irods_host: "data.cyverse.org"
    irods_port: 1247
    irods_zone_name: "iplant"
    irods_user_name: "<CyVerse Username>"
    irods_user_password: "<CyVerse Password>"
    ```

    !!! Tip "Prefer not to include your password in the file?"

        :material-security: You can omit sensitive fields like `irods_user_password`, and GoCommands will prompt you to enter the missing values during runtime.

2. **Execute the `init` command with the `-c` flag to configure:**
    ```sh
    gocmd -c config.yaml init
    ```

---

## :material-cog-outline: Using Environmental Variables without `init`

GoCommands can read configuration directly from environmental variables, which take precedence over other configuration sources.

1. **Export the required variables in your terminal:**
    ```sh
    export IRODS_HOST="data.cyverse.org"
    export IRODS_PORT=1247
    export IRODS_ZONE_NAME="iplant"
    export IRODS_USER_NAME="<CyVerse Username>"
    export IRODS_USER_PASSWORD="<CyVerse Password>"
    ```

    !!! Tip "Prefer not to set your password as an environment variable?"

        :material-security: You can omit sensitive fields like `IRODS_USER_PASSWORD`, and GoCommands will prompt you to enter the missing values during runtime.

2. **Run GoCommands to verify the environment settings:**
    ```sh
    gocmd env
    ```

3. **Execute GoCommands for your task:**
    ```sh
    gocmd ls
    ```

---

## :material-cog-outline: Using Environmental Variables

The `init` command can be executed with environmental variables to automate configuration.

1. **Export the required variables in your terminal:**
    ```sh
    export IRODS_HOST="data.cyverse.org"
    export IRODS_PORT=1247
    export IRODS_ZONE_NAME="iplant"
    export IRODS_USER_NAME="<CyVerse Username>"
    export IRODS_USER_PASSWORD="<CyVerse Password>"
    ```

    !!! Tip "Prefer not to set your password as an environment variable?"

        :material-security: You can omit sensitive fields like `IRODS_USER_PASSWORD`, and GoCommands will prompt you to enter the missing values during runtime.

2. **Execute the `init` command:**
    ```sh
    gocmd init
    ```

    > **Note:** GoCommands will prompt you to input only the missing fields.


---

## :material-list-box-outline: Full List of Supported Configuration Fields

Below is a comprehensive list of supported fields, along with their corresponding names in JSON, YAML, and environmental variables:

| Field Name                     | JSON/YAML Key                     | Environmental Variable              | Default Value                    |
|--------------------------------|------------------------------------|-------------------------------------|---------------------------------|
| AuthenticationScheme           | `irods_authentication_scheme`     | `IRODS_AUTHENTICATION_SCHEME`       | native                           |
| AuthenticationFile             | `irods_authentication_file`       | `IRODS_AUTHENTICATION_FILE`         | ~/irods/.irodsA                 |
| ClientServerNegotiation        | `irods_client_server_negotiation` | `IRODS_CLIENT_SERVER_NEGOTIATION`   | off                              |
| ClientServerPolicy             | `irods_client_server_policy`       | `IRODS_CLIENT_SERVER_POLICY`        | CS_NEG_REFUSE                    |
| Host                           | `irods_host`                      | `IRODS_HOST`                        |                                 |
| Port                           | `irods_port`                      | `IRODS_PORT`                        | 1247                            |
| ZoneName                       | `irods_zone_name`                 | `IRODS_ZONE_NAME`                   |                                 |
| ClientZoneName                 | `irods_client_zone_name`          | `IRODS_CLIENT_ZONE_NAME`            |                                 |
| Username                       | `irods_user_name`                 | `IRODS_USER_NAME`                   |                                 |
| ClientUsername                 | `irods_client_user_name`          | `IRODS_CLIENT_USER_NAME`            |                                 |
| DefaultResource                | `irods_default_resource`          | `IRODS_DEFAULT_RESOURCE`            |                                 |
| CurrentWorkingDir              | `irods_cwd`                       | `IRODS_CWD`                         |                                 |
| Home                           | `irods_home`                      | `IRODS_HOME`                        |                                 |
| DefaultHashScheme              | `irods_default_hash_scheme`       | `IRODS_DEFAULT_HASH_SCHEME`         | SHA256                           |
| MatchHashPolicy                | `irods_match_hash_policy`         | `IRODS_MATCH_HASH_POLICY`           |                                 |
| Debug                          | `irods_debug`                     | `IRODS_DEBUG`                       |                                 |
| LogLevel                       | `irods_log_level`                 | `IRODS_LOG_LEVEL`                   | 0                               |
| EncryptionAlgorithm            | `irods_encryption_algorithm`      | `IRODS_ENCRYPTION_ALGORITHM`        | AES-256-CBC                      |
| EncryptionKeySize              | `irods_encryption_key_size`       | `IRODS_ENCRYPTION_KEY_SIZE`         | 32                              |
| EncryptionSaltSize             | `irods_encryption_salt_size`      | `IRODS_ENCRYPTION_SALT_SIZE`        | 8                               |
| EncryptionNumHashRounds        | `irods_encryption_num_hash_rounds`| `IRODS_ENCRYPTION_NUM_HASH_ROUNDS`  | 16                              |
| SSLCACertificateFile           | `irods_ssl_ca_certificate_file`   | `IRODS_SSL_CA_CERTIFICATE_FILE`     |                                 |
| SSLCACertificatePath           | `irods_ssl_ca_certificate_path`   | `IRODS_SSL_CA_CERTIFICATE_PATH`     |                                 |
| SSLVerifyServer                | `irods_ssl_verify_server`         | `IRODS_SSL_VERIFY_SERVER`           | hostname                         |
| SSLCertificateChainFile        | `irods_ssl_certificate_chain_file`| `IRODS_SSL_CERTIFICATE_CHAIN_FILE`  |                                 |
| SSLCertificateKeyFile          | `irods_ssl_certificate_key_file`  | `IRODS_SSL_CERTIFICATE_KEY_FILE`    |                                 |
| SSLDHParamsFile                | `irods_ssl_dh_params_file`        | `IRODS_SSL_DH_PARAMS_FILE`          |                                 |
| Password                       | `irods_user_password`             | `IRODS_USER_PASSWORD`               |                                 |
| Ticket                         | `irods_ticket`                    | `IRODS_TICKET`                      |                                 |
| PAMToken                       | `irods_pam_token`                 | `IRODS_PAM_TOKEN`                   |                                 |
| PAMTTL                         | `irods_pam_ttl`                   | `IRODS_PAM_TTL`                     |                                 |
| SSLServerName                  | `irods_ssl_server_name`           | `IRODS_SSL_SERVER_NAME`             |                                 |
