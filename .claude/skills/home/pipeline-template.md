# Client pipeline tracker — schema

This defines the pipeline's **columns and stages**. The **canonical, durable store is Notion**, not a
file — this repo usually runs in an ephemeral web session, so a local file would evaporate between
visits (see `SKILL.md` → "The client pipeline tracker"). `home` owns reads/writes to the Notion
pipeline; use these columns when creating or updating it.

A local `.claude/clients/pipeline.md` (git-ignored) may hold a within-session cache only — never the
source of truth, **never committed** (it holds real client data).

Stages, in order:
`prospect → contacted → replied → audit-booked → audit-delivered → build-signed → build-delivered → concierge → won (case study) / dead`

| Client | Sector / track | Stage | Next action | £ value | Last touch | Updated |
| --- | --- | --- | --- | --- | --- | --- |
| _example: Ivy Records_ | indie label / music (A) | audit-delivered | send review-call booking | 750 | report sent | 2026-07-21 |
| _example: Cornerhouse Studio_ | studio / music (A) | contacted | follow-up touch 2 | — | opener sent | 2026-07-20 |
| _example: Brighton Osteopathy_ | clinic / local (B) | build-signed | onboarding checklist | 3000 | SOW signed | 2026-07-19 |

Keep one row per client. When a client moves stage, update the row in place and log the next action —
don't append duplicates.
