# WebDAV Data Locations

When accessing the Data Store via WebDAV, use the following base URLs to locate your data.

## :material-web: User Data

`https://data.cyverse.org/dav/iplant/home/<username>`

- Maps to your iRODS home directory `/iplant/home/<username>`
- Read and write access for the owner
- Not accessible to anonymous users

## :material-web: Public Data (Read-Only)

`https://data.cyverse.org/dav-anon`

- Read-only access
- Available to anonymous users

## :material-web: Community/Project Data

`https://data.cyverse.org/dav/iplant/projects/<project>`

- Maps to the iRODS community-shared data directory: `/iplant/home/shared/<project>`

## :material-web: CyVerse Curated Data (DOI-Backed Datasets)

`https://data.cyverse.org/dav-anon/iplant/commons/cyverse_curated`

- Maps to the iRODS CyVerse curated data directory: `/iplant/home/shared/commons_repo/curated`
- Read-only access
