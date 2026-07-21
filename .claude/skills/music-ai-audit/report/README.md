# Phase 3 — Building the report

`template.html` is Corey Ganim's 9-slide AI Tools Assessment, rebuilt in the chrisscho.uk / TAP
brand (cream + ink, raspberry `#ee005a` as the accent, navy `#012641` dark slides; Instrument
Serif display, Outfit body, JetBrains Mono labels) and worded for music businesses. It is a
self-contained HTML deck — open in a browser, present full-screen, or print to PDF (one slide per
page via the print stylesheet).

## How to fill it

1. Copy `template.html` to a per-client file, e.g. `report/clients/2026-07-audit-<client>.html`
   (the `clients/` folder is git-ignored — client data never gets committed).
2. Fill every element marked with a dashed underline. In source these are `data-fill` — they show
   as dashed guides only while empty. Map the Phase 2 analysis output straight onto the slides:

| Slide | Fill with (from `analysis-prompt.md` output) |
| --- | --- |
| 01 Cover | Client name, date, business type, primary focus (their #1 opportunity) |
| 02 Executive Summary | "The pain" = their biggest time-sink in their words · "The outcome" = life after the quick wins · hero number = total hours/week reclaimed · primary focus |
| 03 Impact & Effort Matrix | Nothing to fill — the six numbered dots correspond to the six quick wins |
| 04 Quick Wins | Six rows: pain → fix, one per prescription |
| 05 Recommended Solutions | Six tool cards: name, one-line use, £ cost, setup effort, hours saved |
| 06 4-Day Quick-Start | Four days, one task + tool each — the four easiest, highest-leverage installs |
| 07 What Comes After | Three higher-effort, high-impact builds (the implementation upsell) + a tool/label line each |
| 08 Financial Impact | Monthly net value (£) · weekly hours returned · total monthly tool cost (£) + captions |
| 09 Next Steps | Two steps — usually "install the 4-day plan" + "book the review call". CTA links to the Cal.com review-call event |

## Keep it stupid-simple

Corey iterated this deck a dozen times to keep it clear. Rules:
- One idea per slide. No walls of text. If a client can't grasp a slide in 10 seconds, cut words.
- Real GBP numbers everywhere. The ROI slide must visibly clear the 7-hours/week guarantee.
- Every prescription is a tool Chris would install himself.
- No fabricated benchmarks. Estimates are defensible or they don't go in.

## Companion primer (ships with every report)

`ai-basics-onepager.md` is a generic, tool-agnostic "how to use AI without hurting yourself" page
for total beginners. Send it as page 2 of the report PDF (or a short separate PDF alongside the
deck) — never instead of the report. Don't personalise it per client; client specifics live in the
slides. Strip the operator-note comment at the top before sending.

## Optional accent swap

The Tweaks panel in Corey's original let you recolour. Here, change `--accent` in the `:root` block
if a client's brand clashes with raspberry — cyan `#0e7490` or french-blue `#213f95` are on-brand
alternates. Leave it raspberry by default for chrisscho.uk consistency.
