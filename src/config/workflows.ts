export interface WorkflowStep {
  id: string;
  title: string;
  plainEnglishDescription: string;
  logTimestamp: string;
  agentLabel: string;
  logLine: string;
}

export interface AgentWorkflow {
  id: string;
  name: string;
  tagline: string;
  description: string;
  steps: WorkflowStep[];
  terminalSummary: string;
}

export const portfolioWorkflows: AgentWorkflow[] = [
  {
    id: "sadact-release-pipeline",
    name: "sadact Release & Mastering Loop",
    tagline: "From terminal DAW patterns and raw audio to finished, streaming-ready releases.",
    description: "How Chris coordinates his custom audio tools, masters tracks against golden profiles, validates outreach contacts, and stages outreach campaigns.",
    steps: [
      {
        id: "step-1",
        title: "Composition & Pattern Sequence",
        plainEnglishDescription: "Chris composes and sequences track structures locally using custom command patterns in audx, bypassing complex graphical DAWs.",
        logTimestamp: "10:15:02",
        agentLabel: "audx_daemon",
        logLine: "audx render-project project.audx --stems --output ./renders/"
      },
      {
        id: "step-2",
        title: "Float64 DSP & Profile Matching",
        plainEnglishDescription: "Rendered stems pass into the finisher engine. The track is dynamically compressed and spectrally matched against custom UK Garage master charts.",
        logTimestamp: "10:15:30",
        agentLabel: "sadact_finisher",
        logLine: "finisher process ./renders/stem_mix.wav --profile ukg --loudness streaming"
      },
      {
        id: "step-3",
        title: "Contact Hygiene & Typo Correction",
        plainEnglishDescription: "The campaign mailing sheet runs through Datasink to remove invalid MX domains, correct common typos, and collapse Jaro-Winkler duplicate names.",
        logTimestamp: "10:16:05",
        agentLabel: "datasink_scrub",
        logLine: "sink wash ./contacts/campaign_list.csv --provider anthropic"
      },
      {
        id: "step-4",
        title: "Personalized Pitch Generation",
        plainEnglishDescription: "TAP's pitching module scans contact relationship warmth, notes target formats, and drafts three distinct email copy variants.",
        logTimestamp: "10:16:15",
        agentLabel: "tap_pitcher",
        logLine: "tap-mcp generate-pitch --artist sadact --contacts ./contacts_clean.csv"
      },
      {
        id: "step-5",
        title: "Staged Drafts Review & Release",
        plainEnglishDescription: "Generated drafts are pushed into a labeled Gmail inbox. Chris reviews, tweaks the phrasing, and authorizes the sends.",
        logTimestamp: "10:16:22",
        agentLabel: "gmail_mcp",
        logLine: "gmail-mcp stage-drafts --label 'TAP: sadact Outreach' --verify-preflight"
      }
    ],
    terminalSummary: "Release pipeline completed. 1 master rendered (Float64 UKG profile), 42 contacts scrubbed, 42 pitch drafts staged in Gmail queue. System state: STAGED_APPROVALS_AWAITING_USER."
  },
  {
    id: "newsjacking-content-pipeline",
    name: "Newsjack Trade Briefing Daemon",
    tagline: "Scouting, scoring, and writing for the music business in real-time.",
    description: "Runs 24/7 on a Cron daemon, indexing major industry feeds (Billboard, MBW, Music Week). Scores relevance and generates high-fidelity posts and briefs with custom voice parameters.",
    steps: [
      {
        id: "step-1",
        title: "RSS Trade Scanning",
        plainEnglishDescription: "A cron daemon sweeps 12+ music business RSS feeds every five minutes to check for breaking news stories.",
        logTimestamp: "14:20:00",
        agentLabel: "news_fetcher",
        logLine: "newsjack check-feeds --sources Billboard,MBW,MusicWeek"
      },
      {
        id: "step-2",
        title: "AI Relevance Classification",
        plainEnglishDescription: "Breaking articles are sent to Claude, scored on a scale from 0 to 100, and filtered. High-priority stories (>85) are flagged.",
        logTimestamp: "14:20:05",
        agentLabel: "claude_scorer",
        logLine: "claude score-relevance --text 'Spotify rolls out new artist tools' -> score: 88"
      },
      {
        id: "step-3",
        title: "Platform-Specific Copywriting",
        plainEnglishDescription: "The system drafts tailored messages (short-form Twitter hooks, structured LinkedIn articles, and newsletter bullets).",
        logTimestamp: "14:20:12",
        agentLabel: "claude_copywriter",
        logLine: "claude generate-drafts --voice 'Chris/TAP' --story_id 412"
      },
      {
        id: "step-4",
        title: "Notion & Slack Staging",
        plainEnglishDescription: "The generated copy is pushed to a Notion review database. A notification goes to Slack for manual sign-off.",
        logTimestamp: "14:20:15",
        agentLabel: "notion_sync",
        logLine: "notion create-page --db_id Opportunities --title 'Spotify AI tools'"
      }
    ],
    terminalSummary: "Monitor run finished. 1 story jacked (score=88), Twitter/LinkedIn draft copy saved to Notion. Human approval queued."
  }
];
