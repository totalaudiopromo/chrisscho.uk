---
name: audit-prospect-research
description: Build verified, named prospect lists for the £750 AI Workflow Audit (chrisscho.uk/audit) using Perplexity + web verification, and draft openers for Chris to review. Two tracks — UK music businesses and Brighton/Sussex local businesses. Draft-only; Chris sends everything. The prospecting stage of the audit money-loop — for a full prospect→enrich→deliver pass use audit-loop; reach here directly when Chris wants just a batch, e.g. "build me a prospect batch", "refresh the prospect list", "find named [sector] contacts".
---

# Audit prospect research

Repeatable process for turning "I need more audit conversations" into a named, verified
target list with ready-to-review openers. Companion to
`../music-ai-audit/outreach/playbook.md` (the seven acquisition methods — this skill feeds
methods 2, 5 and 7 with actual names).

Seed research: `../music-ai-audit/outreach/research-2026-07-16.md` (sectors ranked by fit,
named directories and communities, stats for copy). Refresh it if older than ~2 months.

## Hard rules

- **Draft only.** Every message goes to Chris for review; nothing is sent, scheduled or armed.
- **No fabricated details.** A prospect makes the list only if verified live (website loads,
  business looks active, plausibly 2–20 people). Never invent a contact name — if no named
  person is findable, record the business with `contact: unknown` and a note on where to look.
- **Named contacts beat generic inboxes.** info@/hello@ almost never reply. Prefer a founder or
  owner name from the site's about page, LinkedIn, or Companies House.
- **Keep pools separate.** Liberty clients, TAP prospects, and audit prospects never share a
  list. Liberty contacts may be approached warm as *audit* prospects only via method 1
  (warm mini-audit), never cold.
- **Name-only greeting** ("Sarah," not "Hi Sarah,"), UK spelling, GBP, no emojis, calm tone.

## The process (per batch of ~15 prospects)

1. **Pick the track and sector.** Track A = UK music (labels, managers, PR, studios).
   Track B = Brighton/Sussex local (agencies, trades, professional services, e-commerce).
   Rotate sectors; don't exhaust one.
2. **Source names.** Use `mcp__perplexity__search` plus the directories in the seed research
   (e.g. AIM member directory for labels; Brighton Chamber member list, coworking-space member
   pages, local directories for Track B). Query patterns:
   - "independent record labels UK 2-20 staff site:—" / directory pages
   - "Brighton [sector] owner-run" + the named directories
   - LinkedIn company pages for staff-count sanity checks
3. **Verify each.** Website loads, recent activity (release, post, review), team size looks
   2–20, and a named owner/founder if findable. Ten verified beats thirty scraped.
4. **Score fit (1–3).** 3 = visible admin pain (slow enquiry reply, manual booking, heavy
   release schedule) + right size. 1 = plausible but no visible signal.
5. **Draft the opener** using the playbook scripts (method 5 message 1 for cold, method 1 text
   for warm, method 2 for referral partners). One line of genuine specificity per prospect —
   something true from their site, not flattery.
6. **Record the batch** in `prospects/YYYY-MM-DD-<track>-<sector>.md` (git-ignored, see below)
   as a table: business, URL, contact name + where found, size estimate, fit score, pain
   signal, draft opener, status.
7. **Hand to Chris**: batch summary + the drafts. He reviews, edits, sends. Log outcomes back
   into the same file (`sent / replied / call booked / dead`) so the next batch learns.

## Output location

`prospects/` inside this skill folder is git-ignored (real names + outreach state don't
belong in a public-ish repo). One file per batch, statuses updated in place.

## Cadence

- 15 touches/day drafted is the playbook target; one research batch of ~15 verified names
  supports roughly a week of method-5 outreach plus follow-ups.
- After every completed audit, re-run step 2 on the client's sector — case-study proof makes
  that sector the highest-converting pool.
