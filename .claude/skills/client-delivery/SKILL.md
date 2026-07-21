---
name: client-delivery
description: Step-by-step runbook for delivering a signed one-off AI implementation build (£2k–£8k done-for-you) end to end — from verbal yes through onboarding, scope-lock, build, QA, handover, and the 30-day check-in that becomes the retainer conversation. Music businesses are home turf; any owner-run 2–20-person business is in scope. For the ongoing AI Concierge retainer's recurring operating model use `../music-ai-audit/upsells-and-concierge.md`. Triggers: "onboard a new client", "kick off the build", "deliver the project", "client onboarding", "scope the build", "handover", "30-day check-in".
---

# Client delivery — the implementation build runbook

The fulfilment side of the ladder. The £750 audit is the front door; the
`../music-ai-audit/` skill takes a prospect through the audit. **This skill picks up the moment a
client says yes to a paid build** and carries it, stage by stage, to a working system in their
hands and a retainer conversation on the table.

Scope: the **one-off implementation build** (£2,000–£8,000, done-for-you, £750 audit fee credited).
For the **AI Concierge retainer** — the recurring 2-calls-a-month model — the operating manual is
`../music-ai-audit/upsells-and-concierge.md`; this runbook hands off to it at Stage 7. The upsell
menu and prices live there too.

## Hard rules (inherited from Chris's standing rules)

- **Draft only.** Every client email, message, SOW and handbook is drafted for Chris to review and
  send. Nothing is sent, scheduled or auto-fired.
- **No fabricated proof.** No invented client counts, testimonials, or borrowed Liberty/BBC
  credibility. Proof is the shipped systems + the guarantee.
- **Client data never gets committed.** Per-client delivery files live in `clients/` (git-ignored).
  Never paste a client's data, access, or transcript into a committed file.
- **Honour the scope and the credit.** The £750 audit fee credits toward the build. The SOW defines
  what's in; changes go through a written change note, not a quiet yes.
- **Fit the client's size.** No enterprise tooling for a 3-person shop. Every build is something
  Chris would run himself.
- **GBP, UK spelling, calm/professional tone, no emojis, no hype.**
- **Build WITH, not just FOR, where you can.** A client who understands their system renews and
  refers; a black box churns. Ship the operator handbook every time.

## The eight stages

Each stage has a **goal**, the **steps**, who does what, the **artifact** it produces, and a
**gate** that must be true before the next stage starts. Don't skip gates.

### Stage 0 — Trigger
A client has said yes (usually on the audit review call — see `../music-ai-audit/review-call.md`,
the 3 closing questions — or occasionally direct). You have a rough scope in mind from the audit.
**Gate:** verbal yes + you know which build(s) from the audit's "What Comes After" slide they want.

### Stage 1 — Yes → signed (target: within 48h of the verbal yes)
**Goal:** convert the yes to a signed agreement and deposit before momentum cools.
- Draft the one-page proposal/SOW (Stage 4 template — a lightweight version is fine to sign on):
  outcome, deliverables, price, £750 credit applied, timeline, what's out of scope, revision policy.
- Payment terms: 50% deposit to start, 50% on handover is the default. State it plainly.
- Send within the day (drafted for Chris). Use the "send immediately after yes" discipline — every
  hour between yes and signature is risk.
**Artifact:** signed SOW + deposit invoice. **Gate:** SOW signed and deposit paid.

### Stage 2 — Onboarding (Day 0–2)
**Goal:** collect everything needed to start, and make the client feel they chose well.
- Send the welcome message (`comms-templates.md` → Welcome): confirm what happens next, the timeline,
  and one thing you need from them.
- Send the intake + access checklist: business basics, the exact tools/logins involved, brand assets
  if relevant, and the anchor question — **"When this is done, what makes it a win for you?"** Get a
  specific, measurable answer; it's the sign-off bar and the case-study/renewal line later.
- Book the kickoff call (30–45 min).
- **Access hygiene:** collect logins via a proper method, record them only in the git-ignored
  `clients/` tracker, never in chat or a committed file. Prefer the client grants access to their own
  accounts over sharing raw passwords.
**Artifact:** `clients/<date>-<client>.md` tracker started; intake answers captured.
**Gate:** intake done + access confirmed working. Reschedule kickoff if the intake isn't back.

### Stage 3 — Kickoff call (≈ Day 3)
**Goal:** align on scope, success, and how you'll work — before any building.
- Corey's framing, adapted: *"This call we're not building anything — we're setting the foundation."*
- Agenda (`comms-templates.md` → Kickoff agenda): confirm the SOW outcome in their words; walk their
  current process for the thing you're automating; confirm the win definition; set the comms cadence
  (see below); flag risks/dependencies.
- Capture the current-state walkthrough — it feeds Stage 4.
**Artifact:** kickoff notes in the tracker; confirmed win definition. **Gate:** both sides agree the
scope and the win in one sentence each.

### Stage 4 — Scope lock / SOW (Day 3–4)
**Goal:** a precise map of what you're building, so scope creep can't kill the margin.
- Produce the **current-state → future-state** blueprint: how it works today (steps), how it'll work
  after (steps), and the delta you're building. Never automate a broken process — if the process
  itself is the problem, redesign first (that's the "process redesign" upsell, name it).
- Lock the deliverables list, the out-of-scope list, and the revision policy (e.g. two rounds of
  tweaks included; new scope = a change note with its own price).
- If Stage 1 used the lightweight SOW, this is where the full one is confirmed.
**Artifact:** blueprint + final deliverables list in the tracker. **Gate:** client has seen and
agreed the deliverables + out-of-scope list in writing.

### Stage 5 — Build (the sprint)
**Goal:** ship the system, one working piece at a time, with no surprises.
- Work the **AOA loop** per workflow: **Audit** (confirm exactly how they do it) → **Optimise** (cut
  the steps — never automate waste) → **Automate** (build the Zap/Make/n8n flow, Claude skill, or
  knowledge system).
- **One workflow at a time.** Get one thing genuinely working before starting the next.
- **Weekly async update** (`comms-templates.md` → Weekly update): a 2–3 min Loom + a line on what
  shipped, what's next, anything you need. Proactive updates are retention — a client who hears from
  you weekly never feels ignored.
- **QA before the client sees anything:** test with real (or realistic) data, check the edge cases,
  confirm it fails safely. Never demo something you haven't run yourself.
**Artifact:** working build(s) + build log in the tracker. **Gate:** every deliverable works on real
data and has passed your own QA.

### Stage 6 — Handover (done-with-you)
**Goal:** the client can run and trust the system, not just receive it.
- Live handover call: screen-share, walk each build, let *them* drive it once.
- Ship the **operator handbook**: what it does, how to run it, what to do when it misbehaves, and who
  to call (you). Plus a short Loom walkthrough they can re-watch.
- The beginner primer (`../music-ai-audit/report/ai-basics-onepager.md`) rides along if they're new
  to AI generally.
- Get explicit **sign-off** against the Stage 2 win definition. Trigger the final 50% invoice.
**Artifact:** operator handbook + handover Loom + sign-off. **Gate:** client confirms it meets the
win definition; final invoice sent.

### Stage 7 — 30-day check-in (the retainer conversation)
**Goal:** confirm it's still working, capture the result, and open the retainer — without a hard sell.
- Book a 30-min check-in at handover; it's baked into the build, not an upsell ambush.
- Confirm it's embedded, fix any drift, and **capture the number** — hours saved, emails deflected,
  time-to-reply — in their words.
- That number is two things: the **case study** (route to `../case-study/` — real, permissioned,
  anonymised if no consent) and the **retainer pitch**: *"There's always a next bottleneck — the
  Concierge is how we keep working through them."* Hand off to
  `../music-ai-audit/upsells-and-concierge.md` for the concierge offer, pricing ratchet, and ops.
**Artifact:** captured result + a yes/no on the retainer. **Gate:** none — this is the loop's end
and the next loop's start.

### Stage 8 — Close the loop
- **If retainer = yes:** run concierge onboarding (`upsells-and-concierge.md`, Call 1).
- **If no:** draft the case study (with permission) + a referral ask on the client's sector — a
  fresh case study makes that sector the highest-converting outreach pool (feeds
  `../audit-prospect-research/`).

## Comms cadence (set it at kickoff, keep it)

- **Weekly** async update during the build (Loom + a line). Never go dark.
- **Same-day** reply to client questions during an active build (or a holding note if you can't
  answer yet).
- **Proactive flag** the moment something slips — before they notice. A surfaced delay costs trust
  once; a discovered one costs the renewal.

## The delivery tracker (`clients/`, git-ignored)

One file per build: `clients/<YYYY-MM>-<client>.md`. Holds the SOW terms, intake answers, win
definition, access notes, blueprint, build log, weekly-update log, handover sign-off, and the
30-day result. It's the single source of truth for the project and the raw material for the case
study. **Never committed** — see `.gitignore`.

## Draft templates

All client-facing copy — welcome, intake checklist, kickoff agenda, weekly update, handover note,
30-day check-in — lives in `comms-templates.md`, in Chris's voice (UK spelling, calm, name-only
greeting, no emojis). Draft only; Chris sends.
