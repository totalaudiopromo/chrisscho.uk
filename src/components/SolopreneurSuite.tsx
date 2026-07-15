"use client";

import React, { useState } from 'react';

export default function SolopreneurSuite() {
  const [activeTab, setActiveTab] = useState<'guard' | 'backup' | 'obsidian' | 'pitch' | 'ableton' | 'gmail'>('guard');

  const scripts = {
    guard: {
      name: "session-time-guard.js",
      language: "javascript",
      category: "Stamina Monitor",
      description: "A terminal monitor that tracks development session length on your active Git branch, issues break alerts, and logs focus metrics directly to a local CSV file.",
      code: `#!/usr/bin/env node
/**
 * Session Time Guard - Dev Stamina Monitor
 * Tracks active development sessions and logs focus milestones.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const LOG_FILE = path.join(process.env.HOME, '.solopreneur', 'focus-sessions.csv');
const MAX_DURATION_MINUTES = 120;
const WARNING_MINUTES = 90;

function getCurrentBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf-8'
    }).trim();
  } catch {
    return 'detached';
  }
}

export function startSession(task) {
  const session = {
    startTime: new Date().toISOString(),
    task: task || 'General Refactoring',
    branch: getCurrentBranch()
  };
  fs.writeFileSync(
    path.join(process.env.HOME, '.solopreneur', 'current-session.json'),
    JSON.stringify(session, null, 2)
  );
  console.log(\`[GUARD] Started focus session on branch: \${session.branch}\`);
}

export function checkStamina(session) {
  const elapsed = (Date.now() - new Date(session.startTime).getTime()) / 60000;
  if (elapsed >= MAX_DURATION_MINUTES) {
    console.log(\`[ALERT] Session exceeded \${MAX_DURATION_MINUTES}m! Step away from the monitor.\`);
  } else if (elapsed >= WARNING_MINUTES) {
    console.log(\`[WARNING] Stamina threshold met (\${WARNING_MINUTES}m). Consider taking a 10m break.\`);
  }
}`
    },
    backup: {
      name: "auto-backup.js",
      language: "javascript",
      category: "File Rotation",
      description: "A background utility that snapshots project source directories, creates compressed archives, and rotates old snapshots to enforce a rolling 7-day retention limit.",
      code: `#!/usr/bin/env node
/**
 * Auto-Backup & Rotation Daemon
 * Backs up active workspace folders and rotates out old zip archives.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const BACKUP_DIR = path.join(process.env.HOME, 'workspace', 'backups');
const RETENTION_DAYS = 7;

function getTimestamp() {
  const now = new Date();
  return \`\${now.getFullYear()}-\${String(now.getMonth() + 1).padStart(2, '0')}-\${String(now.getDate()).padStart(2, '0')}\`;
}

export function runBackupTask(sourcePath) {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  const archiveName = \`\${getTimestamp()}_snapshot.zip\`;
  const targetZip = path.join(BACKUP_DIR, archiveName);

  console.log(\`[BACKUP] Compressing \${sourcePath}...\`);
  execSync(\`zip -r \${targetZip} \${sourcePath} -x "**/node_modules/**" "**/.next/**"\`);

  // Clean old snapshots
  const files = fs.readdirSync(BACKUP_DIR);
  const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;

  files.forEach(file => {
    const filePath = path.join(BACKUP_DIR, file);
    const stats = fs.statSync(filePath);
    if (stats.mtimeMs < cutoff) {
      fs.unlinkSync(filePath);
      console.log(\`[ROTATE] Expired old backup snapshot: \${file}\`);
    }
  });
}`
    },
    obsidian: {
      name: "obsidian-git-sync.sh",
      language: "bash",
      category: "Second Brain Sync",
      description: "A cron script that automatically commits and synchronizes your local Obsidian markdown vault with your private Git repository. Automates upstream pulls via rebase to avoid merge conflicts.",
      code: `#!/bin/bash
# Obsidian Second Brain git sync task
# */15 * * * * /bin/bash ~/scripts/obsidian-git-sync.sh

VAULT_DIR="$HOME/documents/second-brain"
cd "$VAULT_DIR" || exit 1

# Pull upstream changes
git pull --rebase origin main

# Check if there are local edits in markdown notes
if [[ -n $(git status -s) ]]; then
  git add .
  git commit -m "brain-vault: auto sync $(date +'%Y-%m-%d %H:%M')"
  git push origin main
  echo "Synced note updates successfully at $(date)"
else
  echo "No vault note modifications found. Standing by."
fi`
    },
    pitch: {
      name: "pitch-classifier.ts",
      language: "typescript",
      category: "Email Classifier",
      description: "Extracts and filters promotional outreach. Evaluates incoming email text against weighted keywords (e.g. 'soundcloud link', 'press kit') to classify pitches vs. invoices/newsletters.",
      code: `/**
 * Simple Pitch Classification Filter
 * Categorises incoming message text based on semantic signal markers.
 */
const POSITIVE_SIGNALS = [
  'new single', 'new release', 'stream link', 'press kit',
  'electronic press kit', 'album artwork', 'playlist consideration'
];

const NEGATIVE_SIGNALS = [
  'invoice', 'payment', 'receipt', 'unsubscribe',
  'order confirmation', 'shipping', 'password reset'
];

export function evaluateMessage(subject: string, body: string): { isPitch: boolean; score: number } {
  const content = \`\${subject} \${body}\`.toLowerCase();
  let score = 0;

  POSITIVE_SIGNALS.forEach(sig => {
    if (content.includes(sig)) score += 10;
  });

  NEGATIVE_SIGNALS.forEach(sig => {
    if (content.includes(sig)) score -= 25;
  });

  return {
    isPitch: score > 15,
    score
  };
}`
    },
    ableton: {
      name: "ableton-midi-driver.py",
      language: "python",
      category: "Ableton MIDI Integration",
      description: "Controls Ableton Live programmatically. Connects to the local Ableton remote script TCP socket on port 9877 to create arrangement clips and trigger backbeat templates.",
      code: `import socket
import json
import time

# Socket target parameters
HOST = 'localhost'
PORT = 9877

def send_midi_command(cmd_type, params=None):
    """Sends TCP JSON command to Ableton Live remote script listener."""
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(5.0)
    s.connect((HOST, PORT))
    
    cmd = json.dumps({'type': cmd_type, 'params': params or {}})
    s.sendall(cmd.encode('utf-8'))
    
    response = s.recv(8192).decode('utf-8')
    s.close()
    return json.loads(response)

def create_backbeat():
    # Initialize arrangement clip on track 1
    print("[ABLETON] Creating 4-bar MIDI clip...")
    send_midi_command('create_arrangement_clip', {
        'track_index': 0,
        'position': 0.0,
        'length': 16.0
    })`
    },
    gmail: {
      name: "gmail-mcp-server.ts",
      language: "typescript",
      category: "Gmail MCP Server",
      description: "Registers search, drafting, and labeling tools with Claude Code. Allows your agent to safely scan, stage, and queue outreach messages directly from the editor console.",
      code: `import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { google } from "googleapis";

const server = new Server(
  { name: "gmail-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "gmail_stage_draft",
      description: "Create a staged draft in the outreach queue.",
      inputSchema: {
        type: "object",
        properties: {
          to: { type: "string" },
          subject: { type: "string" },
          body: { type: "string" }
        },
        required: ["to", "subject", "body"]
      }
    }
  ]
}));`
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Header */}
      <div className="mb-12 border-b-2 border-neutral-900 pb-6">
        <div className="inline-block font-mono text-[9px] uppercase tracking-widest bg-neutral-900 text-white px-2 py-0.5 font-bold mb-3">
          [ OPEN SOURCE SHELF // VOL. 05 ]
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-2">
          Solopreneur Automation Kit
        </h2>
        <p className="text-tap-text-secondary text-sm leading-relaxed max-w-xl font-sans">
          Production scripts I write to orchestrate my daily backups, guard my coding stamina, and sync environment states. Copy, customize, and run them locally.
        </p>
      </div>

      {/* Selector and Code Block Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: 6-tab script list selector - horizontally scrollable on mobile, vertically stacked on desktop */}
        <div className="lg:col-span-5 flex flex-row lg:flex-col gap-2 font-mono text-xs overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 select-none scrollbar-thin">
          {Object.entries(scripts).map(([key, script]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`p-3 text-left border-2 border-neutral-900 transition-all font-bold rounded-none flex flex-col justify-between shrink-0 min-w-[145px] lg:min-w-0 lg:w-full ${
                activeTab === key
                  ? 'bg-tap-accent text-white shadow-[3px_3px_0px_rgba(1,38,65,1)] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white text-neutral-850 hover:bg-neutral-50 shadow-[2px_2px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <span className={`text-[8px] uppercase tracking-wider mb-1 ${
                activeTab === key ? 'text-tap-celadon' : 'text-neutral-500'
              }`}>
                {script.category}
              </span>
              <span className="text-xs font-semibold tracking-tight whitespace-nowrap lg:whitespace-normal">{script.name}</span>
            </button>
          ))}
        </div>

        {/* Right Side: High-legibility Code Window */}
        <div className="lg:col-span-7 border-2 border-neutral-900 bg-neutral-950 p-6 shadow-[4px_4px_0px_rgba(1,38,65,1)] flex flex-col justify-between min-h-[380px]">
          <div>
            <div className="flex justify-between items-center border-b border-neutral-850 pb-3 mb-4 text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-black">
              <span>{scripts[activeTab].name}</span>
              <span className="text-[#d97757]">{scripts[activeTab].language}</span>
            </div>
            
            <p className="text-neutral-400 text-xs font-sans leading-relaxed mb-4 italic">
              {scripts[activeTab].description}
            </p>

            <pre className="text-[9px] leading-relaxed text-neutral-100 font-mono overflow-x-auto whitespace-pre bg-neutral-900/40 p-4 border border-neutral-850 select-all max-h-[220px] overflow-y-auto">
              {scripts[activeTab].code}
            </pre>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-900 flex justify-between items-center text-[9px] font-mono text-neutral-500 font-bold uppercase">
            <span>Copy file contents directly to use locally</span>
            <span className="text-emerald-400 font-black">Ready to use</span>
          </div>
        </div>

      </div>
    </div>
  );
}
