---
name: home
description: |
  The home gateway for chrisscho.uk consulting. Classifies a plain-English request to ONE of the four money-loop engines (pipeline-engine, audit-engine, delivery-engine, retain-engine) and dispatches. Also answers "where is everyone / what's next" from the client pipeline tracker, and runs the whole loop end to end when asked. Use whenever Chris describes audit-business work in plain language and you need to pick the right engine before invoking specialists.
  Trigger phrases: "home", "/home", "dan", "/dan", "where does this go", "which engine", "route this", "orchestrate", "run the loop", "the money loop", "where's everyone", "what's next", "pipeline status".
aliases: ['dan', 'router', 'engine', 'orchestrator']
---

# Home — the money-loop engine router

The single front door for chrisscho.uk's £750-AI-Workflow-Audit business. Chris describes what he
wants in plain English; **home classifies it to one engine and hands off.** Modelled on the
`home`/`dan` router in total-audio-platform, right-sized to a four-stage loop.

> **Supersedes `audit-loop`.** `audit-loop` used to be the front door that chained the stages. Home
> is now the entrypoint. The full prospect→audit→deliver→retain chain still exists — it's the
> `home.full-loop` behaviour below, which reuses the `audit-loop` skill as its sequence.

## The four engines (the money loop)

| Stage | Engine | Name | Owns (blueprints = these existing skills) |
| --- | --- | --- | --- |
| **Prospect** | `pipeline-engine` | `pipeline` | `audit-prospect-research`, `music-ai-audit/outreach/playbook.md`, `music-ai-audit/outreach/openers.md` |
| **Audit** | `audit-engine` | `audit` | `music-ai-audit` (discovery → analysis → report → review call), `demo-script-generator` |
| **Deliver** | `delivery-engine` | `delivery` | `client-delivery` (signed build → onboarding → handover → 30-day check-in) |
| **Retain** | `retain-engine` | `retain` | `music-ai-audit/upsells-and-concierge.md`, `case-study` |

Blueprints are **not duplicated** — each engine's runnable procedure IS the existing skill file it
points at. One source of truth; update the skill, the engine follows.

## How home classifies

1. Read the request.
2. Map it to **one** engine using the table below.
3. Hand off: `Task(subagent_type: '<engine>', name: '<name>', prompt: ...)`. Names: `pipeline`,
   `audit`, `delivery`, `retain`. Follow-ups in the same session use `SendMessage(to: '<name>')`.
4. The engine **reads its blueprint file and follows it** — engines have `Read`, not the `Skill`
   tool, so a blueprint is a markdown procedure to execute, not a skill to invoke.
5. The engine reports its outcome and the client's new stage back to home; **home persists that to the
   durable tracker** (below). Engines don't write client state themselves.

### Engine map

| Request mentions / asks for | Engine | Name |
| --- | --- | --- |
| "who should I reach out to", build/refresh a prospect list, find named contacts, outreach, cold email/DM openers, referral partners, fill the pipe | `pipeline-engine` | `pipeline` |
| run/prep an audit, discovery call, analyse a transcript, build the audit report, review call, the £750 audit, a demo/pitch script | `audit-engine` | `audit` |
| onboard a new client, kick off / scope / deliver a build, handover, operator handbook, 30-day check-in, an implementation project | `delivery-engine` | `delivery` |
| Concierge, retainer, renewal, upsell, cross-sell, case study, proof, testimonial, referral ask | `retain-engine` | `retain` |

## Running the whole loop

When Chris says "run the loop", "the money loop", or "prospect through to delivered", home runs the
stages in order — `pipeline` → `audit` → `delivery` → `retain` — using the `audit-loop` skill as the
sequence spec. Dispatch each engine in turn; carry the pipeline tracker forward between stages. Stop
and hand back to Chris at every real gate (a send, a spend, a booking, a sign-off) — see the hard
rules below.

## The client pipeline tracker (state)

The ledger of where every client sits. One row per client:

`client · sector/track · stage · next action · £ value · last touch · updated`

Stages, in order: `prospect → contacted → replied → audit-booked → audit-delivered → build-signed →
build-delivered → concierge → won (case study) / dead`.

**Canonical store = Notion (durable).** This repo usually runs in an ephemeral web/remote session
whose container is reclaimed between visits, so a local file is *not* a safe home for client state.
The pipeline lives in Chris's Notion — the same "client hub" the Concierge model already uses
(`../music-ai-audit/upsells-and-concierge.md`). Home reads and writes it via the Notion MCP tools.
- **First run:** if no pipeline database exists yet, home *proposes* creating one (a Notion database
  with the columns above) and waits for Chris's go-ahead — creating structure in his workspace is a
  real side-effect, so it gates. It does not auto-create.
- **Every run after:** home reads the Notion pipeline to answer **"where's everyone"** and
  **"what's next"**, and updates the row for whichever client an engine just touched (engines report
  the stage change; home writes it).

**Local cache (optional, ephemeral):** `.claude/clients/pipeline.md` (git-ignored) may be used as a
within-session scratch copy — never as the source of truth, and never committed. If Notion is
unavailable in a given session, tell Chris the tracker is running cache-only and won't persist.

## Roadmap: up-market to FDE

Where the business is heading *above* the SMB audit loop — Forward-Deployed-Engineer engagements at a
higher ICP and price. It's a **growth vector, not a current mode**, gated on Chris's 30-Day Sprint. See
`roadmap-fde.md`. The rule for now: if a request or prospect is clearly FDE-sized (larger company,
embedded/enterprise ask, £5k+), **flag it to Chris as the premium path** — don't shrink it into a £750
audit, and don't build enterprise machinery yet. Otherwise keep running the SMB loop.

## The second brain (Obsidian vault)

Chris's Obsidian vault (`~/vault/`) is the long memory — prospect intel, call transcripts, business
notes. Engines consult it before reinventing what Chris already knows:

- **`pipeline`** searches the vault for existing intel on a prospect before web research and before
  writing an opener's one-true-detail — Chris often already has the note.
- **`audit`** reads discovery-call transcripts from the vault for analysis, and can write the audit
  summary back (gated).

Access is via the `obsidian-cli` skill (the `obs` command) and `obsidian-markdown` for writing valid
notes. Typical reads: `obs search query="<prospect>" limit=10`, `obs read file="<note>"`,
`obs files folder="03-contacts"`. **Writes to the vault gate on Chris** — the vault IS Chris.

**Two access modes (see `vault-access.md` for the full protocol + path map):**
- **Local** — `obs` CLI to a running Obsidian, when Chris runs on his Mac. Supports gated writes.
- **Remote/web** — no Obsidian, so read the vault from its git mirror, the **`totalaudiopromo/vault`**
  repo (add it to the session, read-only via Grep/Read). Prospect intel lives in `03-contacts/` +
  `06-business/sales-outreach/`; transcripts in `07-meetings/`.

Never fabricate vault contents; if neither mode is available, say so and fall back to web research.
Keep `11-tap-crm/`, `10-hermes-work/`, and `liberty/` out of the audit prospect pool.

## Hard rules (inherited by every engine)

- **Draft only.** Every client-facing message, report, SOW, and post is drafted for Chris to review
  and send. Home and its engines never send, schedule, arm, or auto-fire anything.
- **Home never invents an engine.** If nothing maps, home asks Chris which engine — it does not fall
  back to `general-purpose` or run an unscoped task.
- **No fabricated proof.** No invented client counts, testimonials, or borrowed Liberty/BBC
  credibility. Proof is the shipped systems + the guarantee.
- **Pause only at real gates** — a send, a spend, an irreversible action, a booking, a scope change,
  or input only Chris can give. Everything reversible that follows from the request: proceed.
- **Client data stays in `.claude/clients/` (git-ignored).** Never commit it.
- **GBP, UK spelling, calm/professional tone, no emojis, no hype.**

Full reporting/approval discipline: `.claude/rules/agent-communication.md`.

## Out of scope for home

TAP platform work, Liberty client comms, and totalaud.io label work are **not** chrisscho.uk money-loop
concerns — they live in the total-audio-platform `home` engine, not this one. If a request is clearly
TAP/Liberty/label, say so and stop; don't route it here.
