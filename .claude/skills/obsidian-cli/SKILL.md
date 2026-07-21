---
name: obsidian-cli
description: Interact with Obsidian vaults using the Obsidian CLI to read, create, search, and manage notes, tasks, properties, and more. Also supports plugin and theme development with commands to reload plugins, run JavaScript, capture errors, take screenshots, and inspect the DOM. Use when the user asks to interact with their Obsidian vault, manage notes, search vault content, perform vault operations from the command line, or develop and debug Obsidian plugins and themes.
---

# Obsidian CLI

Use `obs` (shorthand for `obsidian`) to interact with a running Obsidian instance via IPC. Requires Obsidian to be open.

If commands return "Unable to connect to main process", Obsidian needs restarting:
```bash
osascript -e 'tell application "Obsidian" to quit' && sleep 3 && open -a Obsidian && sleep 5
```

## Syntax

**Parameters** take a value with `=`. Quote values with spaces:
```bash
obs create name="My Note" content="Hello world"
```

**Flags** are boolean switches with no value:
```bash
obs create name="My Note" silent overwrite
```

For multiline content use `\n` for newline and `\t` for tab.

## File targeting

Many commands accept `file` or `path` to target a file. Without either, the active file is used.

- `file=<name>` — resolves like a wikilink (name only, no path or extension needed)
- `path=<path>` — exact path from vault root, e.g. `01-daily/2026-03-19.md`

## Key commands by category

### Daily notes
```bash
obs daily:read                              # Read today's daily note
obs daily:append content="- session note"   # Append to daily note
obs daily:prepend content="## Morning"      # Prepend after frontmatter
obs daily:path                              # Get daily note file path
```

### Search (uses Obsidian's index -- faster than grep)
```bash
obs search query="liberty" limit=10         # Search vault content
obs search:context query="TAP" limit=5      # Search with surrounding context
obs search query="tag:#liberty" limit=20    # Search by tag
obs search query="path:06-business" limit=10  # Search within folder
```

### Files
```bash
obs read file="top-of-mind"                 # Read by wikilink name
obs read path="00-north-star/top-of-mind.md" # Read by path
obs create name="New Note" path="02-ideas" content="# Idea" silent
obs append file="My Note" content="New line"
obs prepend file="My Note" content="Top line"
obs move file="Old Name" to="03-contacts/New Name"
obs delete file="Temp Note"
obs file file="My Note"                     # Show file info (path, size, dates)
obs files folder="00-inbox" total            # List files in folder (with count)
obs folders                                 # List all vault folders
```

### Links and graph
```bash
obs backlinks file="top-of-mind"            # What links TO this note
obs links file="top-of-mind"                # What this note links TO
obs orphans                                 # Notes with no incoming links
obs orphans total                           # Count of orphan notes
obs deadends                                # Notes with no outgoing links
obs unresolved                              # Broken wikilinks
obs unresolved total counts                 # Count broken links per file
```

### Tags
```bash
obs tags counts sort=count                  # All tags ranked by usage
obs tags file="My Note"                     # Tags on specific note
obs tag name="#liberty" verbose              # All notes with this tag
```

### Tasks
```bash
obs tasks todo                              # All open tasks in vault
obs tasks daily todo                        # Open tasks from today's note
obs tasks done                              # Completed tasks
obs tasks file="My Note" todo               # Tasks in specific note
obs task ref="task text" toggle             # Toggle task status
```

### Properties (frontmatter)
```bash
obs properties file="My Note"               # List all properties
obs property:read name="status" file="My Note"  # Read specific property
obs property:set name="status" value="done" file="My Note"
obs property:remove name="draft" file="My Note"
obs properties name="status" counts          # All values of a property across vault
```

### Templates
```bash
obs templates                               # List available templates
obs template:read name="daily"              # Read template content
obs create name="New Note" template="daily" silent  # Create from template
```

### Bookmarks
```bash
obs bookmarks                               # List bookmarks
obs bookmark file="Important Note"           # Bookmark a note
```

### History and sync
```bash
obs history file="My Note"                  # Local history versions
obs history:read file="My Note" version=1   # Read specific version
obs sync:status                             # Sync status and usage
obs sync:history file="My Note"             # Sync history for file
```

### Word count
```bash
obs wordcount file="My Note"                # Word and character count
obs wordcount path="06-business"            # Count for folder
```

### Vault and workspace
```bash
obs vault                                   # Current vault info
obs vaults                                  # List all known vaults
obs workspace                               # Show workspace tree
obs tabs                                    # List open tabs
obs recents                                 # Recent files
```

### Plugin development
```bash
obs plugin:reload id=my-plugin              # Reload after code changes
obs eval code="app.vault.getFiles().length"  # Run JS in app context
obs dev:errors                              # Show JS errors
obs dev:console level=error                 # Console messages
obs dev:screenshot path=screenshot.png      # Take screenshot
obs dev:dom selector=".workspace-leaf" text  # Query DOM
obs dev:css selector=".workspace-leaf" prop=background-color
obs dev:mobile on                           # Toggle mobile emulation
```

## Flags available on most commands

- `--copy` — copy output to clipboard
- `silent` — don't open files in UI when creating/modifying
- `total` — show count instead of list
- `counts` — show counts alongside items
- `verbose` — show extra detail
- `format=json` — output as JSON (useful for scripting)

## Chris's vault structure

```
00-inbox/           # Unprocessed notes (check for #graduated tag)
00-inbox/ai-generated/  # Output from /ghost, /emerge, etc.
00-north-star/      # Anchoring docs (top-of-mind, positioning, principles)
01-daily/           # Daily notes (YYYY-MM-DD.md)
02-ideas/           # Graduated ideas
03-contacts/        # People
04-campaigns/       # Campaign notes
05-learnings/       # Patterns and lessons
06-business/        # Strategic decisions
07-meetings/        # Meeting notes
```
