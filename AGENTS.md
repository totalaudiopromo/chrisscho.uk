<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:marketing-skills-routing -->
# Marketing skills — natural-language routing

Chris will describe what he wants in plain language and won't remember command names. Route these
intents to the right skill automatically — don't wait for him to name the skill or type a slash
command. Everything below is **draft-only**: draft it, hand it to Chris, never send/schedule/arm.

**Front door / engine router:** for anything about the audit business, `home` (aka **`/dan`**) is the
default entrypoint — it classifies the request to one of four money-loop engines (`pipeline` →
`audit` → `delivery` → `retain`), answers "where's everyone / what's next" from the Notion client
pipeline, and runs the whole loop on request. The individual skills below are the engines'
blueprints. **Precedence:** use `home` for anything spanning stages, a pipeline/status question, or
"run the loop"; go **straight to a single skill only when Chris explicitly names that one stage**
("just build me a batch", "analyse this transcript") and no cross-stage state or tracker update is
needed. When in doubt, `home`. It supersedes the older `audit-loop` chainer (now home's full-loop
sequence).

| When Chris says something like… | Use |
|---|---|
| "dan", "/dan", "home", "run the loop", "the money loop", "where's everyone", "what's next", "which engine", "route this" | **home** (engine router) |
| "who should I reach out to this week", "I need more audit leads/conversations", "let's do outreach", "fill the pipe", "line up next week's audits", "I've got a discovery-call transcript", "prep my audit call" | **audit-loop** (the front door — chains the three below end to end) |
| "build me a prospect batch", "refresh the prospect list", "find named [sector] contacts" | **audit-prospect-research** |
| "run an audit", "analyse this transcript", "build the audit report", "audit for [client]" | **music-ai-audit** |
| "onboard my new client", "kick off the build", "deliver the project", "scope the build", "handover", "30-day check-in" | **client-delivery** |
| "write this up as a case study", "turn this audit/win into proof", "post this win properly" | **case-study** |
| "launch a campaign", "radio/playlist/press pitch", "enrich these contacts", "write pitch emails", "track this campaign" | **music-campaign-suite** |
| "prep a demo", "pitch script for a call" | **demo-script-generator** |

**audit-loop is the default for anything about winning or delivering audit work** — prefer it over
the individual child skills unless Chris explicitly wants only one stage.

**Out of scope for this repo:** `customer-acquisition-focus` governs the **Total Audio Promo (TAP)**
platform — a separate track from chrisscho.uk consulting. (TAP's contact-enrichment feature was once
the standalone "Audio Intel" / intel.totalaudiopromo.com; it was folded into TAP at the start of 2026
and is no longer a separate brand, product, or price.) "The Unsigned Advantage" newsletter is parked
and belongs to totalaud.io top-of-funnel — not a chrisscho.uk concern.
<!-- END:marketing-skills-routing -->

