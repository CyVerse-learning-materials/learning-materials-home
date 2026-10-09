# General Configuration for Data Store MCP Server

This guide provides the necessary configuration details for using the Data Store MCP Server.

## Streamable-HTTP

The Data Store MCP Server supports the new Streamable-HTTP protocol. This supports OAuth 2.0 authentication, which allows you to log in interactively with your CyVerse user account while adding the Data Store MCP Server to your MCP Client.

- Streamable-HTTP URL: https://mcp.cyverse.ai/datastore

The server supports OAuth 2.0 dynamic client registration, so MCP clients register themselves automatically. You do not need to enter a client ID or client secret; just sign in with your CyVerse account in the browser window that opens.

You can access your private data at `/iplant/home/<your_username>/` and public community-shared data at `/iplant/home/shared/`.

## Anonymous Access

If you want to access only public community-shared data, you can use the public server.

- Streamable-HTTP URL: https://mcp-public.cyverse.ai/datastore

The MCP server will not require any login and grants access to `/iplant/home/shared`.
