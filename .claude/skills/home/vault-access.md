# Vault access — dual mode (second brain)

How the money-loop engines reach Chris's Obsidian second brain. The vault has two faces; use whichever
the session supports.

## Mode A — local (`obs` CLI)

When Chris runs `home`/the engines **on his Mac** with Obsidian open. Drive the vault through the
`obsidian-cli` skill (`obs search`, `obs read`, `obs files`). Fast (uses Obsidian's index) and
supports **gated writes** back to the vault. Preferred when available.

## Mode B — remote (the `vault` git repo, read-only)

When Chris runs in a **remote/web session** (no Obsidian, no `~/vault/`). His vault is mirrored to the
**`totalaudiopromo/vault`** git repo, so read it from there:

1. Ensure the repo is in the session — if not, add it (`add_repo` → clone to `/workspace/vault`).
2. Read with `Grep`/`Glob`/`Read` against the clone. Search prospect/transcript folders (paths below).
3. **Read-only in this mode.** Never commit to the vault repo — writes belong in Obsidian locally, or
   they'll fight Obsidian's own sync. If an engine wants to save something back, it drafts the note
   and hands it to Chris to add via Obsidian.

The clone is ephemeral (a fresh web session starts without it), so step 1 repeats per session.

## Path map (what lives where)

| Need | Folders |
| --- | --- |
| **Prospect / contact intel** (pipeline) | `03-contacts/` (per-person notes + `outreach-targets.md`, `radio-station-intel-log.md`), `06-business/sales-outreach/`, `06-business/customer-discovery/` |
| **Call transcripts + client memory** (audit) | `07-meetings/` and `07-meetings/raw/`, `06-business/customer-discovery/calls/` |
| Business context, decisions, learnings | `06-business/`, `05-learnings/`, `00-north-star/` |

**Do not treat as audit prospects:** `11-tap-crm/` (TAP), `10-hermes-work/` (Hermes/Liberty day-job),
`liberty/` (Liberty client work). Keep those pools separate — the standing rule.

## Honest fallback

If neither mode is available (remote session and the repo can't be added), say so plainly and fall
back to web research. Never fabricate vault contents.
