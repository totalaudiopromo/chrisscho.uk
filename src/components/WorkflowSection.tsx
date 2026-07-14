"use client";

import React, { useState } from 'react';
import { AgentWorkflow } from '../config/workflows';

interface WorkflowSectionProps {
  workflows: AgentWorkflow[];
}

export default function WorkflowSection({ workflows }: WorkflowSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const flow = workflows[activeIdx];

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Editorial Header */}
      <div className="mb-12 border-b-2 border-neutral-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-[#FAF9F6] px-2 py-0.5 font-bold mb-3">
            [ CAMPAIGN FLOWS // VOL. 02 ]
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-2">
            Dogfooding on sadact
          </h2>
          <p className="text-neutral-700 text-sm max-w-xl font-sans leading-relaxed">
            {flow.description}
          </p>
        </div>

        {/* Tab switcher buttons */}
        <div className="flex flex-wrap gap-2 shrink-0 font-mono text-xs">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3.5 py-2 border-2 transition-all rounded-none font-bold ${
                activeIdx === idx
                  ? 'bg-neutral-900 text-[#FAF9F6] border-neutral-900 shadow-[3px_3px_0px_0px_rgba(238,0,90,1)]'
                  : 'bg-white text-neutral-600 border-neutral-950 hover:bg-neutral-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {wf.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Plain English Timeline (7 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {flow.steps.map((step, idx) => (
            <div key={step.id} className="relative pl-10 border-l-2 border-neutral-950 ml-4 pb-2">
              {/* Step indicator (Elegant print serif number) */}
              <span className="absolute -left-[18px] top-0 flex h-8 w-8 items-center justify-center bg-[#FAF9F6] border-2 border-neutral-950 font-serif text-lg font-bold italic text-tap-accent rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] select-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              
              <div className="mb-2">
                <h3 className="font-serif text-xl font-bold text-neutral-950">{step.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed mt-1 font-sans">
                  {step.plainEnglishDescription}
                </p>
              </div>

              {/* Faded status log strip (Technical Storytelling Accent) */}
              <div className="font-mono text-[10px] bg-[#F5F2EB] border border-neutral-300 text-neutral-650 px-3 py-2 rounded-none flex items-center justify-between mt-3 select-all">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-tap-accent font-bold shrink-0">[{step.agentLabel}]</span>
                  <span className="truncate">{step.logLine}</span>
                </div>
                <span className="ml-4 text-neutral-400 shrink-0 select-none">{step.logTimestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Log summary container (5 cols) */}
        <div className="lg:col-span-4">
          <div className="bg-[#FAF9F6] text-neutral-800 p-6 rounded-none font-mono text-[10px] border-2 border-neutral-900 flex flex-col justify-between min-h-[360px] sticky top-24 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-neutral-300 pb-2.5">
                <span className="text-neutral-550 text-[9px] font-bold">PIPELINE RUN REPORT</span>
                <span className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 bg-neutral-300 rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-neutral-300 rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-[#0e7490] rounded-full animate-pulse"></span>
                </span>
              </div>
              <div className="space-y-3">
                <div className="text-neutral-400">// Observer Environment</div>
                <div className="grid grid-cols-3 border-b border-neutral-200 pb-2">
                  <span className="text-neutral-550 font-semibold">VAR</span>
                  <span className="text-neutral-800 col-span-2 font-bold">VALUE</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-neutral-550">Pipeline</span>
                  <span className="text-neutral-800 col-span-2 truncate">{flow.name}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-neutral-550">Steps</span>
                  <span className="text-neutral-800 col-span-2">{flow.steps.length} loaded</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-neutral-550">Context</span>
                  <span className="text-neutral-800 col-span-2">sadact Release</span>
                </div>
                
                <div className="border-t border-neutral-300 pt-4 mt-2">
                  <div className="text-neutral-500 mb-1.5">// Console summary</div>
                  <p className="text-neutral-700 leading-relaxed bg-[#F5F2EB] p-3 border border-neutral-300 rounded-none font-mono text-[10px]">
                    {flow.terminalSummary}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-[9px] text-neutral-500 border-t border-neutral-200 pt-4 mt-6">
              Observer check: SUCCESS (code 200)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
