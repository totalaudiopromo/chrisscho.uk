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
4. The engine reads the request, picks its blueprint (the skill), and runs it.

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

## The client pipeline tracker (state — git-ignored)

`.claude/clients/pipeline.md` (git-ignored) is the ledger of where every client sits. One row per
client:

`client · sector/track · stage · next action · £ value · last touch · updated`

Stages, in order: `prospect → contacted → replied → audit-booked → audit-delivered → build-signed →
build-delivered → concierge → won (case study) / dead`.

Home reads it to answer **"where's everyone"** and **"what's next"**, and to pick up mid-loop. Every
engine updates the tracker for the client it just touched (its final duty each run). If the file
doesn't exist yet, create it from the header above. **Never commit it** — it holds real client data.

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
