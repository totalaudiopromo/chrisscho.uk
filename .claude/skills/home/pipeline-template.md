# Client pipeline tracker — template

Copy this to `.claude/clients/pipeline.md` (git-ignored) as the live ledger. `home` and every engine
read and update it. It's the answer to "where's everyone" and "what's next". **Never commit the live
file** — it holds real client data.

Stages, in order:
`prospect → contacted → replied → audit-booked → audit-delivered → build-signed → build-delivered → concierge → won (case study) / dead`

| Client | Sector / track | Stage | Next action | £ value | Last touch | Updated |
| --- | --- | --- | --- | --- | --- | --- |
| _example: Ivy Records_ | indie label / music (A) | audit-delivered | send review-call booking | 750 | report sent | 2026-07-21 |
| _example: Cornerhouse Studio_ | studio / music (A) | contacted | follow-up touch 2 | — | opener sent | 2026-07-20 |
| _example: Brighton Osteopathy_ | clinic / local (B) | build-signed | onboarding checklist | 3000 | SOW signed | 2026-07-19 |

Keep one row per client. When a client moves stage, update the row in place and log the next action —
don't append duplicates.
