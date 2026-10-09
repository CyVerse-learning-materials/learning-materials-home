# Claude Code Configuration for Data Store MCP Server

This guide shows how to connect Claude Code to the remote Data Store MCP server over Streamable-HTTP.

## Prerequisites
- Claude Code installed
- CyVerse account (if not using anonymous access)


## 1. Add the Data Store MCP Server

### a. Anonymous Access

This allows access only to public data located at `/iplant/home/shared`.

```bash
claude mcp add --transport http datastore-public https://mcp-public.cyverse.ai/datastore
```

### b. CyVerse Account

This allows access to your CyVerse home directory (`/iplant/home/<username>`) plus public data.

```bash
claude mcp add --transport http datastore https://mcp.cyverse.ai/datastore
```

Add `--scope user` to make the server available in all projects, or `--scope project` to share it with your team through `.mcp.json`.

## 2. Authenticate

Skip this step for anonymous access.

1. Start Claude Code and run `/mcp`.
2. Select `datastore` and choose `Authenticate`.
3. A browser window opens for CyVerse login. After you sign in, return to Claude Code.

No client ID is needed because the server supports dynamic client registration: Claude Code registers itself with the server automatically. The access token is stored by Claude Code and refreshed as needed. To sign out, run `/mcp`, select `datastore`, and choose `Clear authentication`.

## 3. Verify the Connection

Run `/mcp` to check that `datastore` is connected, then try a simple request, such as:
```
list 5 entries in /iplant/home/shared
```

## Reference

[Claude Code MCP Documentation](https://docs.claude.com/en/docs/claude-code/mcp)
