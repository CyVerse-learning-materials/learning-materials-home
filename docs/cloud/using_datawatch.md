# Using DataWatch

There is currently no Web UI for DataWatch, user can only access DataWatch via REST API or CLI.

# CLI

## Download CLI
- Find latest release of the CLI at https://gitlab.com/cyverse/datawatch/-/packages .
- Download the zip for your OS and CPU Architecture.
- Unzip to get the CLI executable.
    - e.g. Unix/Linux command line: `unzip datawatch_cli_linux_amd64.zip`
- Consider rename the executable to `datawatch`, the instruction below assume the executable is named `datawatch`
    - e.g. Unix/Linux command line: `mv datawatch_cli_linux_amd64 datawatch`

## Using CLI
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

DataWatch exposes a REST API that can be accessed with a keycloak token as the bearer token in the `Authorization` header, here is the [OpenAPI spec](https://gitlab.com/cyverse/datawatch/-/blob/master/docs/openapi/datawatch-openapi.yaml).

## Obtaining Keycloak token
You can obtain an keycloak token by making a `GET` request to https://datawatch.cyverse.org/keycloakToken with username and password query parameter.

e.g. `curl https://datawatch.cyverse.org/keycloakToken?username=YourUsername&password=YourPassword`

