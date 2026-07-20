---
name: case-study
description: Turn a real, completed piece of work — a delivered £750 audit or a finished promo campaign — into public proof Chris can use. Produces three drafts from the actual numbers: a full written case study for the site/audit page, a short social post (LinkedIn + @chrisschouk), and a one-line proof snippet that drops into outreach openers and future audit reports. Runs only on real, finished work with the client's permission; anonymises when consent isn't given. Draft-only; Chris approves and publishes everything. Triggers: "write this up as a case study", "turn this audit into proof", "case study for [client]", "post this win properly", "I finished an audit, make it a case study".
---

# Case study

The proof-manufacturing step of the money-loop. Every completed audit and every landed campaign is
evidence the offer works — this skill packages that evidence so it raises the conversion rate on the
next batch. Without it, delivered work stays invisible and each new prospect starts from cold.

Sits after `music-ai-audit`'s review call (audit proof) or after a `music-campaign-suite` campaign
closes (promo proof). The one-line snippet it produces feeds straight back into
`audit-prospect-research` openers and the `music-ai-audit` report — proof compounds.

## Hard rules (these are the whole point — do not bend them)

- **Real work only.** Never generate a case study for work that hasn't actually been delivered.
  No hypothetical clients, no illustrative examples dressed as real ones.
- **No fabricated proof.** Every number — hours saved, £ cost, ROI, outcome — comes from the actual
  report or campaign tracker. If a figure isn't real and defensible, it doesn't go in. No invented
  testimonials, no borrowed Liberty/BBC credibility, no rounded-up wins.
- **Consent gates naming.** Ask Chris: has the client agreed to be named and/or quoted?
  - **Yes, named** → use their name, business, and any quote they actually gave (verbatim, approved).
  - **No / unsure** → anonymise honestly: "a Brighton recording studio, 4 staff", "an independent
    UK label". Real details, no identity. An anonymised true story beats a named fake one.
  - Never attribute a quote the client didn't say.
- **Keep the pools straight.** A Liberty client written up as an audit case study is still an audit
  client — don't blur it with TAP campaign proof or imply endorsements that weren't given.
- **Draft only.** Chris reviews and publishes. Nothing is posted, sent, or scheduled here.
- **GBP, UK spelling, calm/professional tone, no emojis, no hype.** Let the numbers carry it.

## What it needs before it can run

1. **Source of truth** — the finished audit report (`music-ai-audit/report/clients/…`) or the
   campaign tracker (`music-campaign-suite` output). Pull real figures from there.
2. **Outcome, if known** — what actually happened after (tools installed, hours genuinely reclaimed,
   any follow-on build or retainer). If it's too soon to know the realised outcome, say so and write
   the case study around the *prescribed* result, clearly framed as the plan, not a measured result.
3. **Consent status** — named or anonymised, and any approved quote.

If the report or tracker isn't to hand, ask for it. Don't reconstruct numbers from memory.

## The three outputs (one packet)

### 1. Full written case study (site / audit sales page)

Structure — keep it tight, one idea per section, real GBP numbers:

- **Headline** — the outcome in one line, e.g. "How a 4-person Brighton studio reclaimed 9 hours a
  week for £38/month of tools."
- **The client** — one line: type of business, size, what they do (named or anonymised).
- **The problem** — the biggest time-sinks in their words (from the discovery call), no jargon.
- **What the audit found** — the 3–7 pain points, ranked, with hours/week lost.
- **The prescription** — the tools recommended, one line each, with real £ cost and setup effort.
- **The result** — total hours/week reclaimed, monthly tool cost, net monthly ROI (the report's
  figure). If realised, say "measured over X weeks"; if prescribed, say "the plan projects".
- **Optional quote** — only if approved and real.
- **What came next** (if applicable) — implementation build or retainer, described honestly.

### 2. Short social post (LinkedIn + @chrisschouk)

120–180 words, first person, calm. The before/after, the one or two headline tools, the hours saved,
the honest framing (plan vs measured). End with a soft pointer to `chrisscho.uk/audit` — no hard
sell, no emojis. Routing rule: this is personal/build content → **@chrisschouk** and LinkedIn, never
@totalaudiopromo (that's TAP product content).

### 3. One-line proof snippet (reusable)

A single sentence Chris can drop into `audit-prospect-research` openers and the "why me" line of
future reports, e.g. "I recently found a 4-person studio 9 hours a week for under £40/month of tools."
Anonymised by default so it's safe to reuse widely. This is the piece that compounds — it makes the
next cold opener warmer.

## Where it saves

Client-identifying drafts go in `case-studies/clients/` inside this skill folder — **git-ignored**,
same rule as the audit reports; real names and outreach state never get committed. The anonymised
snippet and the publishable social/site versions are Chris's to move onto the site or into a post
once he's approved them.

## Cadence — make it automatic

- After **every** completed audit review call, offer to run this. It's the difference between one-off
  revenue and a growing wall of proof.
- After a campaign lands a real result (airplay, playlist, coverage), offer it too.
- Ask for the case study / testimonial while the win is fresh — right after the review call is the
  warmest moment. (Getting the permission is Chris's job; drafting is this skill's.)
