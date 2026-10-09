# Example MCP Server Configuration for Cline

This document provides example configurations for setting up Data Store MCP Server for use with Cline. Configurations are shown for using Streamable-HTTP.

## Using Remote MCP Server with Streamable-HTTP

Configure Cline to use remote Data Store MCP Server with Streamable-HTTP.

1. Click the MCP Servers icon at the top navigation bar of the Cline pane.
2. Select the “Installed” tab.
3. Click the “Configure MCP Servers” button at the bottom of the pane.

### Using Anonymous Access

This configuration allows access only to public data located at `/iplant/home/shared`.

```json
{
    "mcpServers": {
        // other configurations above
        "datastore-public": {
            "type": "streamableHttp",
            "disabled": false,
            "url": "https://mcp-public.cyverse.ai/datastore"
        }
    }
}
```

### Using CyVerse Account

This configuration allows access to your CyVerse home directory (`/iplant/home/<username>`) plus public data. It signs in with your CyVerse account through OAuth.

```json
{
    "mcpServers": {
        // other configurations above
        "datastore": {
            "type": "streamableHttp",
            "disabled": false,
            "url": "https://mcp.cyverse.ai/datastore"
        }
    }
}
```

After saving, the `datastore` entry in the “Installed” tab shows that authentication is required. Click the `Authenticate` button on the entry, and sign in with your CyVerse account in the browser window that opens. After you sign in, the browser returns to VS Code and Cline completes the connection.

No client ID is needed because the server supports dynamic client registration: Cline registers itself with the server automatically.

## Verify Connection

Open a new Cline task and try a simple request, such as:
```
list 5 entries in /iplant/home/shared
```

## Reference

https://docs.cline.bot/mcp/configuring-mcp-servers
