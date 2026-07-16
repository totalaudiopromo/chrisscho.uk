export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Short name used in cards and nav */
  name: string;
  /** H1 / metadata title */
  title: string;
  /** Meta description (~155 chars, keyword-targeted) */
  description: string;
  priceRange: string;
  timeline: string;
  kicker: string;
  intro: string[];
  deliverables: string[];
  faqs: ServiceFaq[];
  relatedProjectIds: string[];
  /** Set when this page should cross-link the music-PR-specific funnel */
  musicCrossLink?: boolean;
}

export const services: Service[] = [
  {
    slug: "ai-workflow-audit",
    name: "AI Workflow Audit",
    title: "AI Workflow Audit for Small Businesses",
    description:
      "A fixed-price AI workflow audit for owner-run businesses: a 45-minute call, a report prescribing the tools to reclaim 5+ hours a week, and a review call. £750, or your money back. Music industry a speciality.",
    priceRange: "£750 fixed · money-back guarantee",
    timeline: "Report in days · review call to follow",
    kicker: "[ SERVICE // 01 ]",
    intro: [
      "Most owner-run businesses are losing five to ten hours a week to admin that a handful of off-the-shelf tools would erase — inbox overload, chasing leads, retyping the same data between apps, invoicing, scheduling. You don't need a bespoke build to fix that. You need someone who ships this stuff daily to sit with you for 45 minutes and tell you exactly which tools to install on Monday.",
      "That's the audit. I map where your week actually goes, then hand you a plain report: the three-to-seven tools that will save you the most time, what each costs, how long it takes to set up, and a four-day plan to get them running. If I can't find you at least five hours a week back within 30 days, you get a full refund — I've built the offer so the maths works heavily in your favour.",
      "I come from the music industry — four years of radio promotion and nine shipped systems on the back of it — so labels, studios, managers, and PR agencies are home turf. But the framework works for any business that runs on email, spreadsheets, and a busy owner: agencies, trades, professional services, e-commerce.",
    ],
    deliverables: [
      "A 45-minute discovery call mapping where your time actually goes",
      "A report prescribing 3–7 off-the-shelf tools, with real GBP costs and hours saved",
      "An effort-versus-impact matrix so you know what to do first",
      "A four-day quick-start plan you can run in ten minutes a day",
      "A 30-minute review call to walk through it and answer questions",
      "Money-back guarantee: 5+ hours a week found in 30 days, or a full refund",
    ],
    faqs: [
      {
        question: "How is this different from your other services?",
        answer:
          "This is the front door. The audit finds the quick wins any business can install themselves. If you'd rather have the deeper automations built for you — a speed-to-lead agent, data pipelines, workflow automation — that's the implementation build, and your £750 comes off the price.",
      },
      {
        question: "What's the money-back guarantee, exactly?",
        answer:
          "If the report can't identify at least five hours a week of time savings for you within 30 days, you pay nothing. The average audit finds around seven hours a week at roughly £45/month of tool cost, so it's a safe promise to make.",
      },
      {
        question: "Do I need to be technical, or already using AI?",
        answer:
          "No. Most of the tools I prescribe take ten minutes to set up and need no technical knowledge. The whole point is that someone who runs these systems daily translates it into plain, specific steps for your business.",
      },
      {
        question: "Who is this for?",
        answer:
          "Owner-run businesses of roughly two to twenty people — big enough to have real bottlenecks, small enough that the owner decides. Music businesses (labels, managers, PR agencies, studios, self-releasing artists) are my speciality, but the framework fits agencies, trades, professional services, and e-commerce just as well.",
      },
    ],
    relatedProjectIds: ["total-audio-promo", "spotcheck", "newsjack"],
    musicCrossLink: true,
  },
  {
    slug: "ai-agentic-workflow-consulting",
    name: "Agentic Workflow Consulting",
    title: "AI Agentic Workflow Consulting",
    description:
      "Done-with-you AI agentic workflow consulting: audit your manual operations, map the automation, and ship working multi-agent pipelines. Blueprint from £500.",
    priceRange: "£500 blueprint · £2,000–5,000 build · £1,000–2,000/mo ops",
    timeline: "1 week audit · 2–6 week builds",
    kicker: "[ SERVICE // 02 ]",
    intro: [
      "Most businesses don't need more AI tools — they need the ones they have wired together properly. I audit how work actually moves through your operation, map which steps an agent can own outright, which need a human in the loop, and which should be deleted rather than automated.",
      "Then I build it: agent pipelines with real error handling, API integrations that survive schema changes, and documentation your team can operate without me. Everything I recommend runs in production across my own portfolio of shipped systems — this site's commit feed and status banner are live proof.",
    ],
    deliverables: [
      "Workflow audit with current-state and future-state maps",
      "Automation matrix: what to automate, what stays human, what to drop",
      "Working agent pipelines built inside your stack",
      "Time and cost savings projections you can hold me to",
      "Operator handbook and handover documentation",
    ],
    faqs: [
      {
        question: "What does 'done-with-you' mean in practice?",
        answer:
          "You and your team stay in the room. I build alongside your existing tools and processes rather than dropping in a black box, so you understand and can maintain every pipeline after handover.",
      },
      {
        question: "What stack do you build on?",
        answer:
          "Typically Claude and the Model Context Protocol (MCP) for agent work, TypeScript/Node or Python for glue, and whatever systems you already run — Gmail, Notion, Airtable, SQL databases, or bespoke APIs.",
      },
      {
        question: "How do engagements start?",
        answer:
          "A £500 Blueprint: a discovery session plus a full workflow map and automation priority ranking, delivered inside a week. If we go on to a build, you know exactly what's being built and why.",
      },
    ],
    relatedProjectIds: ["total-audio-promo", "newsjack", "datasink"],
  },
  {
    slug: "claude-code-setup",
    name: "Claude Code Setup",
    title: "Claude Code Setup & Configuration",
    description:
      "Claude Code configured for your team's real workflow: custom skills, hooks, MCP servers, and guardrails. Flat-rate setup from £1,500 by a daily power user.",
    priceRange: "£1,500–3,000 flat rate",
    timeline: "1–2 weeks",
    kicker: "[ SERVICE // 03 ]",
    intro: [
      "Claude Code out of the box is a strong pair programmer. Configured properly — project memory, custom skills, pre-commit hooks, MCP servers for your email, database, and project tracker — it becomes an operations layer for your whole business.",
      "I run my company on this setup daily: this website ships its own weekly changelog through an agent pipeline, and my products' release workflows run through Claude Code with custom tooling. I install that same working configuration into your environment, tuned to your codebase and your guardrails.",
    ],
    deliverables: [
      "Claude Code installed and configured for your repos and team",
      "Project CLAUDE.md memory files and custom skills for your workflows",
      "MCP servers wired to your systems (Gmail, SQL, Notion, custom APIs)",
      "Permission rules and hooks so the agent stays inside safe boundaries",
      "Team walkthrough session and a written operating guide",
    ],
    faqs: [
      {
        question: "Do we need to be developers to benefit?",
        answer:
          "No. Claude Code is most famous as a coding tool, but configured with the right MCP servers it handles operations work — inbox triage, report generation, data cleanup — for non-technical teams too.",
      },
      {
        question: "What about API costs and security?",
        answer:
          "Setup includes spend caps, model selection tuned to each task, and permission rules that require approval for anything destructive. You own all keys and infrastructure.",
      },
    ],
    relatedProjectIds: ["newsjack", "podflow", "datasink"],
  },
  {
    slug: "automation-for-music-industry",
    name: "Music Industry Automation",
    title: "AI Automation for the Music Industry",
    description:
      "Workflow automation for labels, PR agencies, and artists — built by a working radio promoter. Campaign pipelines, contact intelligence, and release automation.",
    priceRange: "£500 blueprint · builds from £2,000",
    timeline: "Scoped per engagement",
    kicker: "[ SERVICE // 04 ]",
    intro: [
      "I've spent four years doing radio promotion, and I've shipped an ecosystem of music-tech products because of it: a campaign OS for PR agencies, a playlist validator, a newsjacking daemon, and contact-hygiene tooling. That means automation advice grounded in how campaigns actually run — not generic consulting applied to music.",
      "For labels and artists I build release automation: brief packaging, asset validation, metadata pipelines, and streaming analytics. For agencies, the deeper campaign work lives at Total Audio Promo, my flagship platform.",
    ],
    deliverables: [
      "Campaign workflow audit specific to music promotion",
      "Contact list cleaning and enrichment pipelines",
      "Release brief and asset packaging automation",
      "Radio play attribution and reporting automation",
      "Integration with your existing CRM, sheets, and inboxes",
    ],
    faqs: [
      {
        question: "How is this different from general AI consulting?",
        answer:
          "It's the same engineering discipline applied by someone who has actually pitched radio, chased playlist placements, and run campaigns. The workflows come pre-mapped because I run them myself.",
      },
      {
        question: "I run a music PR agency — where should I start?",
        answer:
          "Start at Total Audio Promo's advisory page — that's the music-PR-specific funnel built around the TAP platform. This page covers the broader label, artist, and music-tech automation work.",
      },
    ],
    relatedProjectIds: ["total-audio-promo", "spotcheck", "totalaud-io"],
    musicCrossLink: true,
  },
  {
    slug: "full-ai-infrastructure",
    name: "Full AI Infrastructure",
    title: "Full AI Infrastructure Build",
    description:
      "A complete AI operations stack installed end-to-end: agent environments, MCP integrations, second-brain knowledge base, and automation pipelines. £4,000–8,000.",
    priceRange: "£4,000–8,000",
    timeline: "4–8 weeks",
    kicker: "[ SERVICE // 05 ]",
    intro: [
      "For businesses ready to go beyond one workflow: a full AI operations stack, installed and hardened end-to-end. Agent environments (Claude Code, always-on assistants), an Obsidian-grounded knowledge base your agents can actually cite, MCP integrations across your tools, and the automation pipelines that tie it together.",
      "This is the same architecture my own company runs on — a solo operation shipping and maintaining nine production systems. The infrastructure is what makes that leverage possible, and it transfers.",
    ],
    deliverables: [
      "Complete architecture design for your AI operations stack",
      "Agent environments installed locally or on your private cloud",
      "Obsidian second-brain knowledge base with agent grounding",
      "MCP server suite across email, docs, databases, and custom APIs",
      "Monitoring, spend controls, and security hardening",
      "Handover training and 30 days of post-install support",
    ],
    faqs: [
      {
        question: "Is this overkill for a small team?",
        answer:
          "It's built for small teams — the point is leverage. The stack is what lets one operator run at the output of several. If you only need one workflow automated, start with a Blueprint instead.",
      },
      {
        question: "What happens after handover?",
        answer:
          "You own everything: keys, servers, and documentation. 30 days of support is included, and the Ops retainer (£1,000–2,000/mo) exists if you want ongoing tuning.",
      },
    ],
    relatedProjectIds: ["total-audio-promo", "newsjack", "audx"],
  },
];
