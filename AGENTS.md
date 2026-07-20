<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:marketing-skills-routing -->
# Marketing skills — natural-language routing

Chris will describe what he wants in plain language and won't remember command names. Route these
intents to the right skill automatically — don't wait for him to name the skill or type a slash
command. Everything below is **draft-only**: draft it, hand it to Chris, never send/schedule/arm.

| When Chris says something like… | Use |
|---|---|
| "who should I reach out to this week", "I need more audit leads/conversations", "let's do outreach", "fill the pipe", "line up next week's audits", "I've got a discovery-call transcript", "prep my audit call" | **audit-loop** (the front door — chains the three below end to end) |
| "build me a prospect batch", "refresh the prospect list", "find named [sector] contacts" | **audit-prospect-research** |
| "run an audit", "analyse this transcript", "build the audit report", "audit for [client]" | **music-ai-audit** |
| "write this up as a case study", "turn this audit/win into proof", "post this win properly" | **case-study** |
| "launch a campaign", "radio/playlist/press pitch", "enrich these contacts", "write pitch emails", "track this campaign" | **music-campaign-suite** |
| "prep a demo", "pitch script for a call" | **demo-script-generator** |

**audit-loop is the default for anything about winning or delivering audit work** — prefer it over
the individual child skills unless Chris explicitly wants only one stage.

**Out of scope for this repo:** `customer-acquisition-focus` governs **Audio Intel** — Chris's live
contact-enrichment product inside the Total Audio Promo (TAP) platform (Starter £5/mo, Pro £20/mo,
Agency £80/mo) — which is a separate track from chrisscho.uk consulting. "The Unsigned Advantage"
newsletter is parked and belongs to totalaud.io top-of-funnel — not a chrisscho.uk concern.
<!-- END:marketing-skills-routing -->

