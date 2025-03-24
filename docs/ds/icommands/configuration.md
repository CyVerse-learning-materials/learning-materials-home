# Configuration

## :material-cog-outline: Using the `iinit` Command

The `iinit` command sets up the iRODS Host and access account for use with other iCommands tools. Once the configuration is set, configuration files are created under the `~/.irods` directory.

??? Tip "Running iCommands in an HPC environment?"

    :material-braille: To use pre-installed iCommands in an HPC environment, run following to access iCommands:
    ```sh
    module load irods
    ```

1. **Run the following command to configure iCommands:**
    ```sh
    iinit
    ```

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
    ```
    ienv
    ```

    This will display the current configurations.

4. **Execute iCommands for your task:**
    ```
    ils
    ```

---

## :material-cog-outline: Using Environmental Variables

The `iinit` command can be executed with environmental variables to automate configuration.

1. **Export the required variables in your terminal:**
    ```
    export IRODS_HOST="data.cyverse.org"
    export IRODS_PORT=1247
    export IRODS_ZONE_NAME="iplant"
    export IRODS_USER_NAME="<CyVerse Username>"
    ```

    > **Note:** iCommands does not support setting passwords via environment variables.

2. **Execute the `iinit` command:**
    ```
    iinit
    ```

    > **Note:** `iinit` will prompt you to input only the missing fields.


---

## :material-list-box-outline: Full List of Supported Configuration Fields

Below is a comprehensive list of supported fields, along with their corresponding names in JSON, and environmental variables:

| Field Name                     | JSON Key                     | Environmental Variable              | Default Value                    |
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
