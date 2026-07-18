import React from 'react';

export default function AgenticEngines() {
  const engines = [
    {
      id: "obsidian-brain",
      title: "Obsidian 'Second Brain' Grounding",
      status: "Operational Core",
      description: "My personal knowledge graph is compiled inside an Obsidian vault. It is git-synchronized and automatically indexed, allowing Claude to read structured markdown logs, design heuristics, and format rules to ground prompts in deep context.",
      technicalDetails: {
        syncPlugin: "Obsidian Git (Auto-Push/Pull)",
        contextFormat: "Markdown Vault wikilinks",
        groundingRole: "LLM contextual injection (RAG / Vault nodes)"
      },
      schema: {
        "obsidian_sync": {
          "vault_path": "~/documents/personal_wiki",
          "sync_interval_mins": 15,
          "ssh_key": "id_ed25519_obsidian"
        }
      }
    },
    {
      id: "claude-code-mcp",
      title: "Claude Code & MCP Integrations",
      status: "Active Environment",
      description: "My local command-line terminal operations. Connected to Model Context Protocol (MCP) servers that allow Claude to read local databases, coordinate project files, and write code scripts for any client vertical.",
      technicalDetails: {
        cliEnvironment: "Claude Code / Claude CLI",
        connectedTools: "SQLite DB, local file editor, script runner",
        gmailInterface: "mcp-gmail-stage (staged compose queues)"
      },
      schema: {
        "mcp_config": {
          "servers": {
            "filesystem": { "allowed_paths": ["./src", "./docs"] },
            "gmail-stage": { "port": 3009, "staged_label": "Drafts" }
          }
        }
      }
    },
    {
      id: "generic-engines",
      title: "Generalizable Automation Pipelines",
      status: "Flexible Architecture",
      description: "These systems are built to fit any operational domain (SaaS, media, e-commerce). By combining cron checks, LLM relevance filters, and structured schema validations, we turn arbitrary web feeds or APIs into structured database entries.",
      technicalDetails: {
        cronDaemon: "24/7 VPS check loop (Node/Python)",
        llmClassifier: "Claude-3-Haiku relevance threshold checks",
        notifications: "Slack webhook status alerts & Notion triggers"
      },
      schema: {
        "general_pipeline": {
          "input_type": "any_rss_or_api",
          "relevance_cutoff": 85,
          "max_monthly_tokens": 2000000
        }
      }
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Title block */}
      <div className="mb-12 border-b-2 border-neutral-900 pb-6">
        <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
          [ ARCHITECTURE // VOL. 04 ]
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-2">
          Agentic Infrastructures & Second Brains
        </h2>
        <p className="text-neutral-700 text-sm leading-relaxed max-w-xl font-sans">
          I build contextual agent systems that generalize to any business pipeline. By mapping internal knowledge vaults directly to custom coding environments and LLMs, we create self-contained operating loops.
        </p>
      </div>

      {/* Interactive Schematic Diagram (Bespoke SVG zine blueprint) */}
      <div className="border-2 border-neutral-900 bg-white p-6 mb-12 shadow-[4px_4px_0px_rgba(1,38,65,1)]">
        <h3 className="font-serif text-xl font-bold text-neutral-950 mb-6 flex items-center gap-2">
          Obsidian Second Brain Context Grounding Loop
        </h3>
        
        <div className="w-full overflow-x-auto select-none py-2">
          <svg className="mx-auto min-w-[700px] h-[180px]" viewBox="0 0 750 180" fill="none">
            {/* SVG Grid lines to look zine-like */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f1f1ef" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="750" height="180" fill="url(#grid)" />

            {/* Block 1: Obsidian Vault */}
            <rect x="20" y="50" width="160" height="80" rx="0" fill="#FAF9F6" stroke="#1c1917" strokeWidth="2" />
            <text x="100" y="80" textAnchor="middle" fill="#1c1917" className="font-mono text-[10px] font-bold">[ 01 // OBSIDIAN VAULT ]</text>
            <text x="100" y="100" textAnchor="middle" fill="#57534e" className="font-sans text-[9px]">Markdown Notes & Wikis</text>
            <text x="100" y="115" textAnchor="middle" fill="#0e7490" className="font-mono text-[8px] font-bold">git-sync (SSH publickey)</text>

            {/* Connector 1 */}
            <path d="M 180 90 L 260 90" stroke="#1c1917" strokeWidth="2" strokeDasharray="3,3" />
            <polygon points="260,90 252,85 252,95" fill="#1c1917" />
            <text x="220" y="80" textAnchor="middle" fill="#78716c" className="font-mono text-[8px] font-bold">GIT PULL</text>

            {/* Block 2: Context Grounder / Indexer */}
            <rect x="260" y="50" width="160" height="80" rx="0" fill="#FAF9F6" stroke="#1c1917" strokeWidth="2" />
            <text x="340" y="80" textAnchor="middle" fill="#1c1917" className="font-mono text-[10px] font-bold">[ 02 // VECTOR RAG ]</text>
            <text x="340" y="100" textAnchor="middle" fill="#57534e" className="font-sans text-[9px]">Heuristics & Prompts Extractor</text>
            <text x="340" y="115" textAnchor="middle" fill="#d97757" className="font-mono text-[8px] font-bold">claude-context-generator</text>

            {/* Connector 2 */}
            <path d="M 420 90 L 500 90" stroke="#1c1917" strokeWidth="2" />
            <polygon points="500,90 492,85 492,95" fill="#1c1917" />
            <text x="460" y="80" textAnchor="middle" fill="#78716c" className="font-mono text-[8px] font-bold">FEED LLM</text>

            {/* Block 3: Claude Code / System API */}
            <rect x="500" y="50" width="220" height="80" rx="0" fill="#FAF9F6" stroke="#1c1917" strokeWidth="2" />
            <text x="610" y="80" textAnchor="middle" fill="#1c1917" className="font-mono text-[10px] font-bold">[ 03 // CLAUDE / WORKSPACE ]</text>
            <text x="610" y="100" textAnchor="middle" fill="#57534e" className="font-sans text-[9px]">Execution Engine (Claude Code / MCP)</text>
            <text x="610" y="115" textAnchor="middle" fill="#0e7490" className="font-mono text-[8px] font-bold">Outcome: Staged SaaS Campaigns / Builds</text>
          </svg>
        </div>
      </div>

      {/* Grid of engines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {engines.map((engine) => (
          <div
            key={engine.id}
            className="border-2 border-neutral-900 bg-white p-6 flex flex-col justify-between rounded-none shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(238,0,90,1)] transition-all duration-200"
          >
            <div>
              <div className="flex justify-between items-start mb-4 border-b border-neutral-200 pb-3">
                <h3 className="font-serif text-lg font-bold text-neutral-950 leading-tight">{engine.title}</h3>
                <span className="text-[8px] font-mono uppercase bg-neutral-900 text-white px-1.5 py-0.5 font-bold shrink-0">
                  {engine.status}
                </span>
              </div>
              <p className="text-neutral-700 text-xs leading-relaxed mb-6 font-sans">
                {engine.description}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-3 font-mono text-[10px] bg-neutral-50 p-3.5 border border-neutral-350 mb-6">
                <div className="text-neutral-550 font-bold border-b border-neutral-200 pb-1 uppercase tracking-wider text-[8px]">
                  Specs:
                </div>
                {Object.entries(engine.technicalDetails).map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-4">
                    <span className="text-neutral-450 uppercase text-[9px] font-semibold">{key.replace(/([A-Z])/g, '_$1')}:</span>
                    <span className="text-neutral-800 text-right truncate font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Config JSON output block */}
            <pre className="text-[9px] text-[#d97757] bg-neutral-950 p-3 border border-neutral-900 font-mono overflow-x-auto whitespace-pre select-all">
              {JSON.stringify(engine.schema, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
