---
name: music-ai-audit
description: Run a £750 AI Workflow Audit for any owner-run small business end-to-end — discovery call prep, transcript analysis into 3–7 off-the-shelf tool prescriptions, report generation from the branded template, review-call script, and the implementation/retainer upsell. Music businesses (label, manager, PR agency, studio, artist) are home turf; agencies, trades, professional services, and e-commerce are equally in scope. Triggers: "run an audit", "prep the audit call", "analyse this discovery transcript", "build the audit report", "audit for [client]".
---

# AI Workflow Audit

The productised lead offer for chrisscho.uk consulting. Adapted from Corey Ganim's $999 AI Tools
Assessment (Startup Ideas Podcast, 15 Jul 2026) — repriced to **£750**, open to **any owner-run
business of 2–20 people**, with the **music industry as the flagship specialism** (warmest
network, strongest proof), and with implementation kept **in-house** (Chris builds the
automations; the audit fee credits toward the build).

Positioning rule: generic offer, music home turf. Never turn away a non-music audit; never
dilute the music proof when pitching music businesses.

## The offer in one line

A 45-minute discovery call → Claude analysis → a simple report prescribing 3–7 off-the-shelf
tools that reclaim 7+ hours/week → a 30-minute review call. **Full refund if fewer than 7
hours/week of savings are found within 30 days.** (Raised from 5 on 16 Jul 2026 — see
`guarantee.md` for the trade-off notes.)

## The four phases

| Phase | What happens | This skill's file |
| --- | --- | --- |
| 1. Discovery | 45-min call, recorded with an AI note-taker (Fathom/Granola). Probe where time goes; save every prescription for the report, don't give it away live. | `discovery-questions.md` |
| 2. Analysis | Drop the transcript into Claude. Surface 5–7 pain points, prescribe off-the-shelf tools, sanity-check fit, map to effort/impact + hours saved. | `analysis-prompt.md` |
| 3. Report | Fill the branded template — exec summary, effort-vs-impact matrix, tool cards, 4-day quick-start, ROI. Keep it stupid-simple. Ship the beginner primer (`report/ai-basics-onepager.md`) alongside it. | `report/` |
| 4. Review call | Email the report ahead, then a 30-min screen-share walkthrough. Close with the 3 upsell questions. | `review-call.md` |

Upsell menu + AI Concierge retainer operations (intake form, call-1 onboarding, AOA loop,
post-call automation, Notion hub renewal mechanism): `upsells-and-concierge.md`.
Full episode transcript: `source-transcript.txt`.

## How to run it (Claude Code operator flow)

1. **Booked audit** → read the intake section in `guarantee.md`, confirm business type + team size +
   current tools from the Cal.com booking answers.
2. **Prep** → open `discovery-questions.md`, assemble the base bank + the ICP-specific set for this
   client (label / manager / PR / studio / artist). Chris runs the call.
3. **After the call** → feed the transcript with `analysis-prompt.md`. Chris reviews the tool fit
   (he's uniquely able to — 4 yrs radio promo, 9 shipped systems). Never ship Claude's raw output.
4. **Report** → follow `report/README.md` to map the analysis into the template slides.
5. **Review call** → run `review-call.md`; capture the answer to the 3 closing questions.
6. **Upsell** → if they want it done for them, scope an implementation build (£2k–£8k, £750
   credited) or the concierge retainer (£900–£1,500/mo, roster cap 6).

## Hard rules (inherited from Chris's standing rules)

- **No fabricated proof.** Until there are real audited clients, no testimonials, no client counts,
  no borrowed Liberty/BBC endorsements. Proof is the shipped systems + the guarantee.
- **Never send outreach or client emails without Chris approving the specific message.** Draft only.
- **The guarantee is real** and must be honoured. Don't prescribe tools you can't stand behind.
- **GBP, UK spelling, calm/professional tone, no emojis, no hype.**
- **Tool prescriptions must fit the client's size** — no enterprise tools for a 1–3 person shop.

## The ladder (what "yes" leads to)

- **Audit** — £750 (first 2–3 at £250 or free to build case studies).
- **Implementation build** — £2,000–£8,000, done-for-you, £750 credited.
- **AI Concierge retainer** — £900–£1,500/mo, 2×45-min calls + async, roster cap 6.
- **FDE engagement** *(up-market, future)* — embedded enterprise work at £5k+ / £4k+/mo. The premium
  rung above the concierge; a growth vector gated on the 30-Day Sprint, not sold yet. See
  `../home/roadmap-fde.md`.

Related: the `outreach/` folder holds the client-acquisition playbook. `prospect-coach` (TAP repo)
can host the daily-target + post-call-capture cadence.
