# VS Code Configuration for Data Store MCP Server

This document provides example configurations for setting up the remote Data Store MCP Server for use with VS Code. Configurations are shown for using Streamable-HTTP.

## Prerequisites

- VS Code installed (latest recommended)  
- Copilot Chat extension enabled (supports MCP)  
- CyVerse account credentials (if not using anonymous access)

## 1. Configure MCP Server

### a. Configure MCP Server for Anonymous Access

Edit the `~/.config/Code/User/mcp.json` file.

Configure VS Code to use the Data Store MCP Server with Streamable-HTTP. Paste the following into your `mcp.json` file.

This configuration allows access only to public data located at `/iplant/home/shared`.

```json
{
    "servers": {
        "public-datastore": {
            "type": "http",
            "url": "https://mcp-public.cyverse.ai/datastore"
        }
    }
}
```

Go to `View` → `Chat` and click the wrench icon in the chat box. Expand `MCP Server: public-datastore` and click `Update Tools`.

Accept adding the MCP server and opening a new popup for logging-in. Follow the instructions in the UI.

### b. Configure MCP Server with CyVerse Account

```json
{
    "servers": {
        "datastore": {
            "type": "http",
            "url": "https://mcp.cyverse.ai/datastore"
        }
    }
}
```

Go to `View` → `Chat` and click the wrench icon in the chat box. Expand `MCP Server: datastore` and click `Update Tools`.

Accept adding the MCP server and opening a new popup for logging-in. Follow the instructions in the UI.

VS Code will ask you to enter an OAuth client ID and secret.

- Client ID: `mcp-client`
- Client Secret: `<empty>` **(leave it empty, as one is not required)**


## 2. Verify Connection 

Open Copilot Chat and try running a query, such as:
```bash
list 5 entries in /iplant/home/shared
```

## Reference

[VS Code MCP Server Documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
