# The upsell menu + AI Concierge operations

Where the real money is. The £750 audit is the front door; ~half of clients ask for
implementation. Source: full episode transcript + Corey's Build With AI material.

## The six upsells (with his real prices, adapted to GBP)

| Upsell | What it is | Corey's price | Chris's price |
| --- | --- | --- | --- |
| Process redesign | Current-state map + future-state blueprint. Sold when the process is broken — "fix before automate". | $3,000–3,500 | £2,000–2,500 |
| Automation build | Zapier / Make / n8n for cut-and-dry input→output jobs (1–3 steps). His example: $1,500 for one deduplication Zap saving 30 min/week. | from $1,500 | from £1,000 |
| Knowledge system | A trained assistant on the client's own material. His example: a business-broker GPT answering buyer questions — 400–500 emails per listing → zero. | scoped | scoped |
| Custom workflows | A Claude skill + reference files for a multi-step process. **Built-in recurring revenue:** offer monthly/quarterly maintenance as the process changes. | scoped | scoped |
| Full implementation | Bundles of the above. His example package: 2 process redesigns + skills + a Zap = $8,000. | $8k example | £4,000–8,000 |
| AI Concierge | The retainer (below). | $1,200–2,000/mo | £900–1,500/mo |

Music-flavoured versions Chris can build that Corey can't: speed-to-lead enquiry agents for
studios/venues, contact-hygiene + enrichment pipelines, release/metadata packaging automation,
campaign reporting automation, a "label brain" knowledge system trained on the label's own
catalogue, briefs, and past campaigns.

## AI Concierge — the full operating model

**The offer:** 2 × 45-minute working calls/month + async access (Voxer or WhatsApp voice notes)
with a response-window promise. Done-WITH-you, not done-for-you — the client shares their screen
and you build together, so they gain capability rather than dependence. Cap the roster at 6 and
say so; the cap is real scarcity. Corey's close: *"I'm taking one more client for this offer, and
I have two other calls this week with people interested."*

**Pricing:** raise it every time someone says yes. His actual sequence: $1,200 → $1,500 → $1,500
→ $1,800 → $2,000. If you close everyone, you're underpriced. Chris starts at £900 and ratchets.

**Pre-engagement intake (form, required before call 1):** business basics, role, time
in-vs-on the business, main time sinks, tools in use, and the anchor question — **"90 days from
now, what would make this engagement feel like a win?"** Get a specific, measurable answer; it
becomes the renewal argument. Reschedule call 1 if the form isn't done.

**Call 1 = onboarding only, no building.** Corey's framing: *"This first call, we're not building
anything. We're setting the foundation."* Agenda: connect tools, create context files (company
overview / offers / workflows / voice), set global instructions, show a scheduled task, show what
a skill does. Corey hands clients a guided-onboarding plugin; Chris can reuse his own Claude
setup expertise directly — this IS his existing `claude-code-setup` service in miniature.

**Every call after: the AOA loop.** Audit (show me how you do this today) → Optimise (cut it from
13 steps to 7 — never automate a broken process) → Automate (turn it into a Claude skill). One
bottleneck per call. Ship at least one working automation on the first working call. Rinse and
repeat for as long as they're a client.

**The back-office runs itself (this is the $1,000/hour part):** after each call, an orchestrator
skill takes the transcript and runs two sub-skills — one drafts the recap email (top takeaways,
action items, what got built), one updates the client's Notion hub (notes, action items, build
log). Under 5 minutes of human time per client per month. Chris builds this as a Claude Code
skill on day one of the first concierge client — it's exactly the kind of thing he already ships.

**The Notion hub is the renewal mechanism.** One page per client: every call recording, top-3
takeaways, action items, and a running inventory of every skill/automation/improvement built.
Updated and emailed after every call. At renewal: *"When we started, you said [their 90-day win]
would be success — we exceeded that."* The ledger does the talking; no re-selling.

**Voxer reality check:** async access has near-zero actual load (3 of his 5 clients ever used it,
once each in 2.5 months) but very high perceived value. Promise it confidently.

**Result benchmark:** 4 of his 5 clients hit their 90-day win by day 60. $8K MRR in 10 days,
5 of the first 6 pitches closed.

## Delivering MORE value than Corey does (Chris's edge)

Corey prescribes and coaches; Chris can also **build production systems**. Value-adds per tier
that cost little and compound:

1. **Audit tier:** include one tiny freebie build — e.g. a pre-configured SaneBox-style inbox
   setup checklist, or a 10-minute Loom of Chris doing the day-1 install for their exact stack.
   Cheap for Chris, disproportionately memorable.
2. **Implementation tier:** every build ships with an operator handbook + a 30-day check-in call
   baked in (he already does this on full-ai-infrastructure). The check-in call is also the
   natural retainer conversation.
3. **Concierge tier:** quarterly "state of your stack" one-pager (what we built, hours saved to
   date, what's next) — generated by the post-call skill's data, zero marginal effort, renewal
   ammunition.
4. **All tiers:** the music-specific tool map. Corey has generic directories; Chris knows which
   tools actually work for labels/PR/studios because he ships in this industry. That curated map
   is the differentiator — keep it updated in this skill folder as audits accumulate.

## Positioning note (from the episode's niche discussion)

Corey's two options: the AI person for a **city**, or for an **industry**. Chris is the industry
play — "the AI guy for music businesses" — which per Corey commands higher prices and less pricing
pressure. Don't drift generic.
