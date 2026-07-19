---
name: audit-loop
description: One command that runs the whole £750 AI Workflow Audit money-loop end to end — build a verified named prospect batch, enrich each contact to a real email, draft the openers, then (for any booked call) prep discovery, analyse the transcript, and fill the report. Chains audit-prospect-research + music-campaign-suite (enrichment) + music-ai-audit. Draft-only; Chris reviews and sends everything. Triggers: "run the audit loop", "/audit-loop", "fill the audit pipe".
---

# Audit loop

The single-command spine for chrisscho.uk consulting revenue. It stitches three existing skills
into one pass so a week's worth of prospecting-to-delivery runs from one prompt instead of three
separate invocations. Nothing is sent, scheduled, or armed — every output lands as a draft for
Chris to review.

Inherits all standing rules from the child skills: draft-only, no fabricated proof, no borrowed
Liberty/BBC credibility, GBP, UK spelling, calm tone, name-only greeting ("Sarah,"), no emojis.
Keep Liberty clients, TAP prospects, and audit prospects in separate pools.

## The loop in one line

`audit-prospect-research` (who + what to say) → `music-campaign-suite` enrichment (their real
email, not info@) → `music-ai-audit` (deliver the £750 + seed the upsell).

## Stage 1 — Fill the pipe (audit-prospect-research)

Run `audit-prospect-research` for one batch of ~15 verified prospects. Default track A (UK music)
unless Chris names track B (Brighton/Sussex local). Rotate the sector from the last batch logged in
`audit-prospect-research/prospects/`. Produce the table it specifies: business, URL, contact name +
where found, size estimate, fit score, pain signal, draft opener, status.

## Stage 2 — Enrich to a real inbox (music-campaign-suite)

Stage 1 leaves some rows as `contact: unknown` or with a name but no address — and the research
skill's own rule is that info@/hello@ almost never reply. Feed those rows through the
`music-campaign-suite` enrichment pipeline (Intel API first, Puppeteer fallback) to resolve a named
person's email, and dedupe. This is the join that makes the openers actually reach a human. Mark
each row `email: found / not found`; a `not found` row stays in the batch flagged for manual look-up,
never dropped silently. Dogfooding Audio Intel here is deliberate — it is the same enrichment Chris
sells.

## Stage 3 — Deliver a booked audit (music-ai-audit)

Only runs when there is a booked call or a transcript. For each:
- **Before the call:** assemble the discovery bank + the ICP set for this client
  (`music-ai-audit/discovery-questions.md`).
- **After the call:** run `analysis-prompt.md` on the transcript → Chris does the last-mile fit
  check → fill the report from `report/README.md` into a git-ignored `report/clients/` file →
  hand Chris the review-call script and the three upsell questions.

If there is no booked call this week, Stage 3 is skipped and the loop ends after Stage 2 with the
enriched, drafted batch ready to send.

## How to run it

1. `/audit-loop` with no argument → track A, next sector in rotation, Stages 1–2, plus Stage 3 for
   any transcript found in the audit skill's inbox.
2. `/audit-loop track B <sector>` → Brighton/Sussex batch instead.
3. `/audit-loop deliver <client>` → jump straight to Stage 3 for a named booked client.

## What Chris gets back (one review packet)

- A batch summary: N verified prospects, sectors, fit-score spread, how many reached a real email.
- The drafted openers, ready to review and send.
- For any booked call: the prepped discovery questions or the finished draft report + review script.
- The rows to chase manually (email not found), so nothing is quietly lost.

## Guardrails

- Draft only. Chris approves and sends every message. No armed sequences, no auto-send.
- No fabricated proof, no invented client counts, no borrowed endorsements.
- Tool prescriptions in any report must fit the client's size and be tools Chris would install himself.
- Enriched contacts from Stage 2 are audit prospects only — never merged into TAP or Liberty pools.
