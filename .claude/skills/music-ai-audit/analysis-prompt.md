# Phase 2 — Analysis prompt

Feed the discovery-call transcript to Claude with the prompt below. Claude does ~80% of the work;
**Chris does the last-mile fit check** — he's uniquely able to (4 yrs radio promo, 9 shipped
systems). Never ship Claude's raw output to a client.

## The prompt

```
You are helping me prepare a £750 AI Workflow Audit report for an owner-run small business.
Below is the transcript of a 45-minute discovery call.

Client: [name] — [business type: label / manager / PR agency / studio / artist / agency /
trades / professional services / e-commerce / other]
Team size: [N]
Current tools: [list]

From the transcript, produce:

0. THE THREE LEVERS — every recommendation must pull at least one: make them more money
   (effectiveness), save them time (efficiency), or raise the quality of their product or service
   (quality). Tag each prescription with its lever. The report's "Primary Focus" field is
   whichever lever dominates.

1. PAIN POINTS — the 5 to 7 biggest time-sinks and bottlenecks, ranked by hours/week lost.
   For each: a one-line description in the client's own words, and an estimate of hours/week lost.

2. TOOL PRESCRIPTIONS — for each pain point, recommend ONE off-the-shelf tool that fixes it.
   Rules:
   - Off-the-shelf SaaS only, that exists today. Cross-check against Futurepedia and
     There's An AI For That. No custom builds here (those are the upsell).
   - Fit the tool to a [N]-person music business. No enterprise tools (no Salesforce for a
     one-person shop — use HubSpot free / GoHighLevel / simpler).
   - Prefer tools priced £0–£30/mo. Give the real monthly price in GBP.
   - For each: tool name, what it does in one line, monthly cost (£), setup effort
     (10 min / 1 hour / half a day), and estimated hours/week saved.
   - Email is almost always the #1 time-sink — check for it. A tool like Sanebox (~£6/mo) that
     batches the inbox often pays for the audit by itself.

3. EFFORT–IMPACT MAP — place each prescription in the 2×2 (high/low impact × high/low effort).
   The "quick wins" quadrant (high impact, low effort) is what the report leads with.

4. 4-DAY QUICK-START — the four highest-leverage tools, one per day, each installable in ~10 min,
   as a task the owner can do themselves.

5. ROI — Corey's exact formula: monthly net ROI = (weekly hours returned × their hourly rate × 4)
   − monthly tool cost. Give total weekly hours reclaimed and total monthly tool cost (£)
   separately too. Done right this lands in four figures monthly ("always four figures, sometimes
   five"). It must clear the 7-hours/week guarantee; the benchmark averages are ~7 hours/week
   found at ~£45/month of tools — so the total needs to be at or above average, not merely close.

6. WHAT COMES AFTER — 2–3 higher-effort, high-impact opportunities that are NOT off-the-shelf:
   custom automations I could build (speed-to-lead agent, contact-hygiene pipeline, release/
   metadata automation, reporting automation). These seed the implementation upsell — describe
   them, don't scope them yet.

Sector context to use — music (home turf): labels lose time on release ops, promo research,
metadata, contact chasing; managers on scheduling, admin, contracts, forwarding; PR agencies on
list-building, pitching, reporting; studios on booking, invoicing, client comms; artists on promo
admin vs making music. General: agencies on proposals, reporting, and project admin; trades on
slow enquiry response, quoting, and chasing payment; professional services on repeated documents
and re-entered data; e-commerce on repetitive customer service and listings.

Be concrete and honest. If a pain point has no good off-the-shelf fix, say so — that's an
implementation opportunity, not a prescription.
```

## Chris's last-mile check (before it goes in the report)

- Would I actually install this tool for my own business? If not, cut it.
- Is the price and hours-saved estimate defensible if the client pushes back?
- Does the total clear 7 hours/week? If it's marginal, dig for more in the transcript or trim to
  the strongest 3–4 rather than padding.
- Is anything music-specific better solved by a tool I know from running campaigns? Override Claude.
- Does the "what comes after" list contain at least one thing I'd genuinely enjoy building? That's
  the upsell that funds the month.

## Make this compound (Corey does exactly this)

- After 2–3 audits, **turn this prompt into a proper Claude skill** and feed it the transcripts
  AND finished reports from past audits as examples — "so Claude knows what good looks like."
  By audit 4–6 the output is near copy-paste quality.
- Tool directories: There's An AI For That; Futurepedia (note: acquired by HubSpot). Chris also
  has his own map of music-specific tooling — that's the moat Corey doesn't have.
- The size-fit rule in action: Claude once prescribed Salesforce to a 4-person landscaping firm.
  Sub tools in and out by team size, every time.

Output of this phase → feed into `report/README.md` to fill the deck.
