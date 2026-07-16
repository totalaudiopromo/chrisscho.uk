import React from 'react';
import Link from 'next/link';

export default function Advisory() {
  const tiers = [
    {
      name: "Blueprint",
      price: "£500",
      period: "one-off fee",
      timeline: "1 week turnaround",
      description: "We audit your manual systems and map exactly what to automate, where to keep humans, and what to drop.",
      features: [
        "60-minute discovery session",
        "Complete current/future workflow maps",
        "Automation matrix & priority rankings",
        "Estimated time & cost savings projections",
        "Detailed software/stack recommendations"
      ]
    },
    {
      name: "Build",
      price: "£2,000–5,000",
      period: "project rate",
      timeline: "2–6 weeks delivery",
      description: "We construct and configure the automated campaigns pipeline within your tools.",
      features: [
        "Everything included in Blueprint",
        "Custom campaign automation logic",
        "TAP CRM workspace configured",
        "Outreach contacts imported and enriched",
        "Tone and voice profiles matched to your copy",
        "System documentation & handbook"
      ],
      popular: true
    },
    {
      name: "Ops",
      price: "£1,000–2,000",
      period: "/month retainer",
      timeline: "Ongoing maintenance",
      description: "We monitor and refine your AI workflows, prompts, and APIs as your agency evolves.",
      features: [
        "Monthly runs health check & reporting",
        "Prompt engineering adjustments",
        "Outreach list maintenance & imports",
        "Priority engineering support",
        "Quarterly systems strategy review"
      ]
    }
  ];

  const setups: { name: string; price: string; description: string; href?: string }[] = [
    {
      name: "Claude Code Setup",
      price: "£1,500–3,000",
      description: "Claude Code configured for your project workflow — custom coding skills, pre-commit hooks, and MCP servers (Gmail, Monday, SQL) configured for your workspace.",
      href: "/services/claude-code-setup"
    },
    {
      name: "OpenClaw Setup",
      price: "£2,000–5,000",
      description: "Your own dedicated AI agent running locally or on a private VPS. Hardened for safety (Tailscale), integrated with Telegram/Slack/WhatsApp, and structured with memory."
    },
    {
      name: "Hermes Setup",
      price: "£1,200–2,500",
      description: "A lightweight, always-on helper agent watching your inbox, trained on your historical copy to write and queue media pitches."
    },
    {
      name: "Full AI Infrastructure",
      price: "£4,000–8,000",
      description: "The complete stack end-to-end: agent environments, MCP integrations across your tools, an Obsidian-grounded knowledge base, and the automation pipelines that tie it together.",
      href: "/services/full-ai-infrastructure"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Section Header */}
      <div className="mb-16 border-b-2 border-neutral-900 pb-6 max-w-xl">
        <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
          [ SERVICES // VOL. 03 ]
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-2">
          Done-With-You Workflow Advisory
        </h2>
        <p className="text-tap-text-secondary text-sm leading-relaxed font-sans">
          Practical workflow automation built by a working promoter with 4 years of radio experience. We work directly with your agency to harden your operations, plug in APIs, and free up campaign hours.
        </p>
        <p className="text-xs text-neutral-500 font-sans mt-3">
          Full engagement details on the{" "}
          <Link href="/services" className="font-bold text-tap-raspberry hover:underline">
            services pages
          </Link>
          . Music PR agencies: the platform-specific funnel lives at{" "}
          <a href="https://totalaudiopromo.com/advisory" target="_blank" rel="noopener" className="font-bold text-tap-raspberry hover:underline">
            TAP advisory
          </a>
          .
        </p>
      </div>

      {/* Advisory Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`border-2 border-neutral-900 p-6 flex flex-col justify-between bg-tap-raised relative rounded-none transition-all duration-200 ${
              tier.popular
                ? 'shadow-[6px_6px_0px_0px_rgba(238,0,90,1)] hover:shadow-[8px_8px_0px_0px_rgba(238,0,90,1)]' /* Raspberry shadow */
                : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-6 px-3 py-1 bg-tap-raspberry border border-neutral-950 text-white font-mono text-[8px] uppercase tracking-widest font-bold">
                Most Popular
              </span>
            )}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-serif text-xl font-bold text-neutral-950">{tier.name}</span>
                <span className="text-[10px] font-mono text-neutral-500 font-medium">{tier.timeline}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4 border-b border-neutral-200 pb-3">
                <span className="font-serif text-3xl font-black text-neutral-950">{tier.price}</span>
                <span className="text-[10px] font-mono text-neutral-500 font-bold">{tier.period}</span>
              </div>
              <p className="text-tap-text-secondary text-xs leading-relaxed mb-6 font-sans italic">{tier.description}</p>
              
              <ul className="space-y-2.5 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="text-neutral-800 text-xs flex items-start gap-2 font-sans">
                    <span className="text-tap-accent font-bold font-mono">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a
              href="https://cal.com/chris-schofield/advisory-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center py-2.5 text-xs font-mono border-2 border-neutral-900 transition-all rounded-none font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] ${
                tier.popular
                  ? 'bg-neutral-900 text-white hover:bg-neutral-850'
                  : 'bg-white text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Book Discovery Call ➔
            </a>
          </div>
        ))}
      </div>

      {/* Specialty Agent Tech setups */}
      <div className="border-t-2 border-neutral-900 pt-16">
        <h3 className="font-serif text-2xl font-bold text-neutral-950 mb-2">Systems Engineering & Setup Projects</h3>
        <p className="text-tap-text-secondary text-sm max-w-xl mb-8 font-sans leading-relaxed">
          Done-with-you setups to install, secure, and customize developer tooling and agent frameworks in your local or cloud setup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {setups.map((setup) => (
            <div key={setup.name} className="border-2 border-neutral-900 bg-tap-raised p-6 flex flex-col justify-between rounded-none shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all">
              <div>
                <h4 className="font-serif text-lg font-bold text-neutral-950 mb-1">
                  {setup.href ? (
                    <Link href={setup.href} className="hover:text-tap-raspberry transition-colors">
                      {setup.name} →
                    </Link>
                  ) : (
                    setup.name
                  )}
                </h4>
                <div className="font-serif text-lg font-semibold text-neutral-800 border-b border-neutral-250 pb-2 mb-4">
                  {setup.price} <span className="text-[10px] font-mono text-neutral-500 font-normal">project flat rate</span>
                </div>
                <p className="text-tap-text-secondary text-xs leading-relaxed mb-6 font-sans">
                  {setup.description}
                </p>
              </div>
              
              <a
                href="https://cal.com/chris-schofield/advisory-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-xs font-mono border-2 border-neutral-900 text-neutral-700 bg-white hover:bg-neutral-50 transition-all font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              >
                Inquire for Setup ➔
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
