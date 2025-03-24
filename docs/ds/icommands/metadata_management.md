# Metadata Management

GoCommands provides features to manage metadata for data objects, collections, resources, and users in the Data Store using the `imeta` command.

Metadata consists of three components:

- **Name (Attribute):** The name of information.
- **Value:** The actual data or information.
- **Unit (Optional):** Specifies the unit of measurement, if applicable.


---

## :material-tag-edit-outline: List Metadata of Data Objects, Collections, Resources, or Users

```sh
imeta ls [flags] <irods-object>...
```

### iRODS Objects 

| iROD Object | Flag | Description |
|-------------|-------------|--------|
| `data object` | `-d` | List metadata of data objects |
| `collection` | `-C` | List metadata of collections |
| `resource` | `-R` | List metadata of resources |
| `user` | `-u` | List metadata of users |

### Example Usage

1. **List metadata of a data object:**
    ```sh
    imeta ls -d /iplant/home/myUser/file.txt
    ```

2. **List metadata of a collection:**
    ```sh
    imeta ls -C /iplant/home/myUser/dir
    ```

3. **List metadata of a resource:**
    ```sh
    imeta ls -R myResc
    ```

4. **List metadata of a user:**
    ```sh
    imeta ls -u myUser
    ```

## :material-tag-edit-outline: Add Metadata to Data Objects, Collections, Resources, or Users

```sh
imeta add [flags] <irods-object> <metadata-name> <metadata-value> [metadata-unit]
```

### iRODS Objects 

| iROD Object | Flag | Description |
|-------------|-------------|--------|
| `data object` | `-d` | List metadata of data objects |
| `collection` | `-C` | List metadata of collections |
| `resource` | `-R` | List metadata of resources |
| `user` | `-u` | List metadata of users |

### Example Usage

1. **Add metadata to a data object:**
    ```sh
    imeta add -d /iplant/home/myUser/file.txt meta_name meta_value
    ```

1. **Add metadata to a data object with metadata-unit:**
    ```sh
    imeta add -d /iplant/home/myUser/file.txt meta_name meta_value meta_unit
    ```

3. **Add metadata to a collection:**
    ```sh
    imeta add -C /iplant/home/myUser/dir meta_name meta_value
    ```

4. **Add metadata to a resource:**
    ```sh
    imeta add -R myResc meta_name meta_value
    ```

5. **Add metadata to a user:**
    ```sh
    imeta add -u myUser meta_name meta_value
    ```

---

## :material-tag-edit-outline: Remove Metadata from Data Objects, Collections, Resources, or Users

Remove metadata by name (attribute) and value:

```sh
imeta rm [flags] <irods-object> <metadata-name> <metadata-value>
```

Remove metadata by ID:

```sh
imeta rmi [flags] <irods-object> <metadata-ID>
```

**Note:** The `metadata-ID` is a numeric identifier for the metadata. It can be obtained from the output of the `imeta ls` command.

### iRODS Objects 

| iROD Object | Flag | Description |
|-------------|-------------|--------|
| `data object` | `-d` | List metadata of data objects |
| `collection` | `-C` | List metadata of collections |
| `resource` | `-R` | List metadata of resources |
| `user` | `-u` | List metadata of users |

### Example Usage

1. **Remove metadata from a data object by name:**
    ```sh
    imeta rm -d /iplant/home/myUser/file.txt meta_name meta_value
    ```

2. **Remove metadata from a data object by ID:**
    ```sh
    imeta rmi -d /iplant/home/myUser/file.txt 979206950
    ```

3. **Remove metadata from a collection:**
    ```sh
    imeta rm -C /iplant/home/myUser/dir meta_name meta_value
    ```

4. **Remove metadata from a resource:**
    ```sh
    imeta rm -R myResc meta_name meta_value
    ```

5. **Remove metadata from a user:**
    ```sh
    imeta rm -u myUser meta_name meta_value
    ```
