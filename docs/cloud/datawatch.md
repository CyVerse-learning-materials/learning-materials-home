# DataWatch

DataWatch is a service that is integrated with CyVerse DataStore, it will trigger actions based on files changes in iRODS(DataStore). To use this service, you create a DataWatch listener that will listen on one or more iRODS directories. When triggered, the listener will perform the action you defined in the listener (HTTPS webhook, email, etc.) with a list of events, each event represent changes of a single file. 

> There is currently no Web UI for DataWatch, user can only access DataWatch via [REST API or CLI](#using-datawatch).

## Important Details

- Your CyVerse account must have access to the iRODS path you want to listen for file changes
- Listener will be triggered for any changes made to files under the "directory" (iRODS collection) that it watches (recursive)
- DataWatch will batch events over a period of time before sending them out, so you will receive a list of events (could be a list of one).
    - minimum trigger interval for a listener is 60 seconds

# CyVerse DataStore Events

Each event has a `event` field, this indicate the type of event, the value can be:
- `created` (file is created)
- `modified` (file is updated in place)
- `moved` (file is renamed/moved)
- `removed` (file is deleted)

All event **except** `moved` type will have a `path` field, this is the iRODS path of the file.

`moved` event will have `old_path` and `new_path` field that indicate the before & after iRODS path of the move.

Examples in JSON:
```json
[
    {
        "event": "modified",
        "path": "/iplant/xxx/XXX/mydata.json"
    },
    {
        "event": "created",
        "path": "/iplant/xxx/XXX/mydata.bin"
    },
    {
        "event": "moved",
        "old_path": "/iplant/xxx/XXX/mydata.bin",
        "new_path": "/iplant/xxx/XXX/mydata_moved.bin"
    },
    {
        "event": "removed",
        "path": "/iplant/xxx/YYY/mydata.json"
    }
]
```

JSON Schema
```json
{
  "type": "object",
  "required": [
    "event"
  ],
  "properties": {
    "event": {
      "type": "string",
      "description": "type of event",
      "enum": [
        "created",
        "modified",
        "moved",
        "removed"
      ]
    },
    "path": {
      "type": "string",
      "description": "path of the file that trigger the event, for created/modified/removed events, NOT for moved event",
      "example": "/iplant/xxx/XXX/data.bin"
    },
    "old_path": {
      "type": "string",
      "description": "old path of the file that trigger the 'moved' event",
      "example": "/iplant/xxx/XXX/old/path/data.bin"
    },
    "new_path": {
      "type": "string",
      "description": "new path of the file that trigger the 'moved' event",
      "example": "/iplant/xxx/XXX/new/path/data.bin"
    }
  }
}
```

# Listener

There are 3 type of listener currently supported:
- webhook
- webdav
- email

# Webhook

Webhook listener will make an HTTP request to a URL you specified with list of events when triggered.

Note: URL specified in Webhook listener is expected to be reachable by datawatch.cyverse.org, if you wish to add authentication, you can set basic authentication (username & password) or additional header in listener.

## POST/PUT JSON
If the method of the webhook is `POST` or `PUT` **AND** you **didn't** specify parameters (e.g. via `-param` CLI flag), then the events will be delivered in the response body as JSON.

Example:
```
POST /api/datawatch-test HTTP/1.1
Host: example.cyverse.org
Content-Type: application/json; charset=UTF-8
Content-Length: 356

[
    {
        "event": "modified",
        "path": "/iplant/xxx/XXX/mydata.json"
    },
    {
        "event": "created",
        "path": "/iplant/xxx/XXX/mydata.bin"
    },
    {
        "event": "moved",
        "old_path": "/iplant/xxx/XXX/mydata.bin",
        "new_path": "/iplant/xxx/XXX/mydata_moved.bin"
    },
    {
        "event": "removed",
        "path": "/iplant/xxx/YYY/mydata.json"
    }
]
```

## POST multipart/form-data
If one or more parameters is specified (e.g. via `-param` CLI flag), method will be override to `POST` and `Content-Type` will be set to `multipart/form-data`.

Example with parameters `foo=bar`:
```
POST /api/datawatch-test HTTP/1.1
Host: example.cyverse.org
Content-Type: multipart/form-data; boundary=92fed06b6a9e422a327e48967008ee4e9c090a42b4931a96527cdcd36edb

--92fed06b6a9e422a327e48967008ee4e9c090a42b4931a96527cdcd36edb
Content-Disposition: form-data; name="foo"

bar
--92fed06b6a9e422a327e48967008ee4e9c090a42b4931a96527cdcd36edb
Content-Disposition: form-data; name="file"

[
    {
        "event": "created",
        "path": "/iplant/home/shared/EXAMPLE_PATH/"
    }
]
--92fed06b6a9e422a327e48967008ee4e9c090a42b4931a96527cdcd36edb--
```

## GET
If you specify the webhook method to be `GET`, then the events will be included in the request `events` query parameter.

Example:
```
GET /api/datawatch-test?events=%0A%5B%0A++++%7B%0A++++++++%22event%22%3A+%22modified%22%2C%0A++++++++%22path%22%3A+%22%2Fiplant%2Fxxx%2FXXX%2Fmydata.json%22%0A++++%7D%0A%5D%0A HTTP/1.1
Host: example.cyverse.org
Content-Length: 0
```

> Note: the request line may be subjected to size limit in many web server or reverse proxy implementations. Therefore `GET` request webhook is not recommended.

# WebDAV

WebDAV listener will make an request to save a JSON file with list of events when triggered.

Note: URL specified in WebDAV listener is expected to be reachable by datawatch.cyverse.org, if you wish to add authentication, you can set basic authentication (username & password) or additional header in listener.

When WebDAV listener triggers, it will make a `PUT` request to save a json file. The json file will be named in the format like `DataWatch_2025_01_02_15_04_05.9999999_MST.json`
e.g. if the url you specified for the listener is https://example.cyverse.org/webdav/example, then the request will be made to https://example.cyverse.org/webdav/example/DataWatch_2025_01_02_15_04_05.9999999_MST.json

The content of the json file will follow the same schema as `POST/PUT JSON` webhook

# Email

The email will be sent by noreply@cyverse.org with a subject `DataWatch Notification`, the body of the email will be JSON string of the list of events.

Example:
```
From: noreply@cyverse.org
Subject: DataWatch Notification
[
    {
        "event": "removed",
        "path": "/iplant/xxx/YYY/mydata.json"
    },
    {
        "event": "created",
        "path": "/iplant/xxx/YYY/mydata.json"
    }
]
```

# Using DataWatch

There is currently no Web UI for DataWatch, user can only access DataWatch via REST API or CLI.

## CLI

### Download CLI
- Find latest release of the CLI at https://gitlab.com/cyverse/datawatch/-/packages .
- Download the zip for your OS and CPU Architecture.
- Unzip to get the CLI executable.
    - e.g. Unix/Linux command line: `unzip datawatch_cli_linux_amd64.zip`
- Consider rename the executable to `datawatch`, the instruction below assume the executable is named `datawatch`
    - e.g. Unix/Linux command line: `mv datawatch_cli_linux_amd64 datawatch`

### Using CLI
Before using commands, you need to define the following environment variable:
  - `DATAWATCH_API` - base URL for API
    - default: http://localhost
    - Note: if this does not start with the scheme, `http://` will be prepended so if `https` is required, make sure it is included in the variable
For example:
```bash
export DATAWATCH_API=https://datawatch.cyverse.org
```
A line setting the environment variable can be added to your shell's profile or config file. For bash add it to ~/.bashrc

### Authentication
The DataWatch API uses keycloak for authentication by default. So the CLI needs to obtain a keycloak token in order to make calls to the API. The first time you run the CLI you will be prompted to enter your keycloak username and password. They will be used to obtain a token which is then written to a file for running the CLI in the same session. The token will expire over time and so the CLI will prompt you again to enter your username and password when that happens. If for some reason you want to manually obtain a new keycloak token, run `./datawatch login`.

Login with your CyVerse credential:
```shell
$ ./datawatch login
Enter your keycloak username: <Your CyVerse Username Goes Here>
Enter your password: 
```

## Examples
- Listing user (non users can only get oneself), this can be used to verify if login is successful.
```bash
./datawatch get users
```

- Here's an example of **webhook** listener. The notification will hit a `POST` endpoint with `Authorization` header.
```bash
./datawatch create listener -listenerTypeID webhook -sourceID cyverse \
  -m POST -header 'Authorization: <what-ever-token-you-need>' \
  -u "https://example.com/datawatch-upload" \
  -notifyInterval 60 \
  /iplant/home/<username>/watched-folder
```
> Note this command takes one or more arguments (after options), each being a path that the listener will use when matching events

- Here's an example of updating URL of an existing listener (webhook).
```bash
./datawatch update listener <Listerner ID> -u https://example.com/datawatch-upload/updated-url
```

- Here's an example of a **webdav** listener. The notification will use WEBDAV to put the notification text in a file on the CyVerse data store.
```bash
./datawatch create listener -listenerTypeID webdav -sourceID cyverse -url https://data.cyverse.org/dav/iplant/home/<username>/event.json -username <username> -password <password> /iplant/home/<username>/test
```

- Here's an example of an **email** listener
```bash
./datawatch create listener -listenerTypeID=email -sourceID=cyverse -e "YOUR-EMAIL@example.com" "/iplant/home/<username>/analyses" "/iplant/home/<username>/test"
```

### Command Options
- `-listenerTypeID` is required when creating listener, the value must be one of `email`, `webdav`, or `webhook`.
- `-sourceID` is required when creating listener, the value must be `cyverse`.
- `-notifyInterval` is optional. It can be used to override the default interval (in seconds) used for bundling events for a given path. Note that the value lower than 60 **will not apply**.

## Frequently Used Commands
`delete listener`, `delete user`, `get dataSources`, `get keycloakToken`, `get listeners`, `get listenerTypes`, `get users`, `update listener`, and `update user`.

## Common Error

1. Forgot to set `DATAWATCH_API` environment variable
```
Get "http://localhost/users": dial tcp 127.0.0.1:80: connect: connection refused
```
You didn't set environment variable `export DATAWATCH_API=https://datawatch.cyverse.org`

# Open API spec

[OpenAPI spec of the DataWatch REST API](https://gitlab.com/cyverse/datawatch/-/blob/master/docs/openapi/datawatch-openapi.yaml)