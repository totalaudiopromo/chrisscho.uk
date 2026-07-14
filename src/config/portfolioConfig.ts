export interface Project {
  id: string;
  name: string;
  type: 'flagship-saas' | 'micro-saas' | 'internal-tool' | 'developer-labs';
  status: 'active' | 'soft-live' | 'self-running' | 'parked';
  tagline: string;
  description: string;
  liveUrl?: string;
  githubRepos: string[];
  techStack: string[];
  roleInEcosystem: string;
  editorialCopy: string;
  technicalAccent: {
    commandLine: string;
    sampleLogLines: string[];
    configSnippet: string;
  };
}

export const portfolioProjects: Project[] = [
  {
    id: "total-audio-promo",
    name: "Total Audio Promo (TAP)",
    type: "flagship-saas",
    status: "active",
    tagline: "Where Music PR Actually Happens.",
    description: "The campaign operating system for music PR agencies. Consolidates contact intelligence, pitch drafting, outcome tracking, and client reporting into a unified system that remembers what worked.",
    liveUrl: "https://totalaudiopromo.com",
    githubRepos: ["https://github.com/totalaudiopromo/total-audio-platform"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Resend"],
    roleInEcosystem: "Flagship Step-3 recurring-revenue SaaS. All building and selling attention centers here.",
    editorialCopy: "Most music PR agencies run their business across seven disconnected tabs: spreadsheets, email clients, trackers, and document folders. TAP replaces this chaos with a clean workspace built around relationships. It tracks pitches, attributes radio plays automatically, and generates client-facing web portals with a single click.",
    technicalAccent: {
      commandLine: "npx -y @totalaudiopromo/tap-mcp",
      sampleLogLines: [
        "[22:04:12] INITIALIZE: Starting TAP Model Context Protocol server",
        "[22:04:13] REGISTER: Registered 49 tools for context-grounded agents",
        "[22:04:15] DB: Synced 5 core workspace objects (Artists, Campaigns, Contacts, Pitches, Activity)"
      ],
      configSnippet: JSON.stringify({
        llmProvider: "anthropic/claude-3.5-sonnet",
        contextWindows: { contactWarmth: true, recentPlays: true, genreTuning: true },
        variantTuning: ["direct", "story", "value"]
      }, null, 2)
    }
  },
  {
    id: "totalaud-io",
    name: "totalaud.io",
    type: "flagship-saas",
    status: "soft-live",
    tagline: "The label workspace pluggers want to receive briefs from (Waiting-list landing page).",
    description: "A release brief and asset packaging workspace for independent record labels. Connects labels and PR partners via structured brief handoffs. Currently active as a waitlist landing page.",
    liveUrl: "https://totalaud.io",
    githubRepos: ["https://github.com/totalaudiopromo/totalaud.io"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    roleInEcosystem: "Step-3 label market play. Deployed waitlist surface drives label leads off shared founder content channels.",
    editorialCopy: "totalaud.io provides independent record labels with a dedicated handoff surface. Before your campaign goes live, compile a clean, structured brief that validates formats, bundles metadata, and drafts promotional angles. Currently active as a waitlist landing page to capture record label outreach leads.",
    technicalAccent: {
      commandLine: "curl -I https://totalaud.io/api/brief/validate",
      sampleLogLines: [
        "[22:05:01] INTAKE: Processing release brief for label catalog",
        "[22:05:03] CHECK: Validating asset formats (WAV files, metadata headers)",
        "[22:05:04] GENERATE: Staging promotional angles for outreach handoff"
      ],
      configSnippet: JSON.stringify({
        schema: "totalaud.io/brief-v2",
        autoValidate: ["audioFormat", "isrc", "pressReleaseText"],
        status: "waitlist_mode_active"
      }, null, 2)
    }
  },
  {
    id: "spotcheck",
    name: "SpotCheck",
    type: "micro-saas",
    status: "active",
    tagline: "Validate Spotify playlists before you pay. Spot bots, check curators.",
    description: "A browser extension and API validating Spotify playlists for bot risk, growth spikes, and curator details to protect artists' budgets.",
    liveUrl: "https://spotcheck.cc",
    githubRepos: ["https://github.com/totalaudiopromo/spotcheck"],
    techStack: ["React", "Chrome Extension API", "Next.js", "Stripe", "Spotify API"],
    roleInEcosystem: "Step-1 micro-SaaS earner. Drives cash flow and sharpens the solo-founder selling muscle on organic directories and SEO channels.",
    editorialCopy: "Paying curators to include your tracks on their playlists is a gamble. SpotCheck analyzes playlist growth metrics and flags bot risks and inorganic spikes. Available as a Chrome extension and a batch-upload dashboard.",
    technicalAccent: {
      commandLine: "spotcheck analyze https://open.spotify.com/playlist/37i9dQZF1DX10zKjJ27jN5",
      sampleLogLines: [
        "[22:06:10] FETCH: playlist_id=37i9dQZF1DX10zKjJ27jN5 (followers=124,520)",
        "[22:06:11] COMPUTE: Analyzing historical follower delta matrices",
        "[22:06:12] AUDIT: Flags = [SPIKE_DETECTED, INORGANIC_RATIO_HIGH]. Bot Risk Score: 78%"
      ],
      configSnippet: JSON.stringify({
        proPrice: "£4.99/mo",
        premiumPrice: "£14.99/mo",
        limits: { free: 2, pro: "unlimited_local", premium: "cloud_monitored_25" }
      }, null, 2)
    }
  },
  {
    id: "newsjack",
    name: "Newsjack",
    type: "internal-tool",
    status: "self-running",
    tagline: "AI-Powered Newsjacking for Music PR.",
    description: "A daemon that monitors industry trade feeds 24/7, scores stories for relevance, and drafts platform-ready social posts.",
    liveUrl: "https://newsjack.cc",
    githubRepos: ["https://github.com/totalaudiopromo/newsjack"],
    techStack: ["Next.js", "Turbo Monorepo", "Claude API", "Notion API", "RSS Parser"],
    roleInEcosystem: "Organic marketing engine. Pulls traffic via industry news briefings and Roast My Post features.",
    editorialCopy: "Keeping up with music trade papers takes hours of daily reading. Newsjack tracks trade feeds (MBW, Billboard, Music Week) around the clock, uses AI to grade the relevance of breaking news, and drafts content ideas in your voice. Built to ensure your agency is first to comment on industry trends.",
    technicalAccent: {
      commandLine: "pnpm run monitor --verbose",
      sampleLogLines: [
        "[22:07:05] DAEMON: Fetching 12+ music RSS feeds",
        "[22:07:07] CLAUDE: Scored article 'Spotify Launches AI Prompts' -> Relevance: 88",
        "[22:07:08] DRAFT: Generated Twitter thread, LinkedIn post, and Notion card"
      ],
      configSnippet: JSON.stringify({
        monthlyClaudeBudgetUSD: 5,
        economyMode: true,
        businessHoursOnly: "Europe/London"
      }, null, 2)
    }
  },
  {
    id: "sadact-uk",
    name: "sadact.uk",
    type: "developer-labs",
    status: "active",
    tagline: "Release portal & digital catalog for sadact music.",
    description: "The official web platform for sadact releases. Implements fast page loads, pre-rendered album pages, Spotify API caching, and direct links to Bandcamp and streaming platforms.",
    liveUrl: "https://sadact.uk",
    githubRepos: ["https://github.com/totalaudiopromo/sadact"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Spotify API", "Vercel"],
    roleInEcosystem: "Release platform for sadact music. Integrates and displays streaming metrics, album artwork, and play channels.",
    editorialCopy: "The official catalog site for the sadact music project. Built to load fast, it caches Spotify metadata dynamically and provides direct CTAs to Bandcamp, SoundCloud, and major streaming endpoints.",
    technicalAccent: {
      commandLine: "npm run build --filter=sadact.uk",
      sampleLogLines: [
        "[22:11:30] SPOTIFY: Fetching artist metadata (ID: 1Pj866WF6r7xZcJxtKsPlU)",
        "[22:11:31] METRIC: Cached 'Mild Peril' album metadata and streaming links",
        "[22:11:32] BUILD: Pre-rendered release page /mild-peril-ep"
      ],
      configSnippet: JSON.stringify({
        spotifyArtistId: "1Pj866WF6r7xZcJxtKsPlU",
        discographyCacheTTL: 86400,
        streamingNetworks: ["spotify", "bandcamp", "soundcloud", "youtube"]
      }, null, 2)
    }
  },
  {
    id: "datasink",
    name: "Datasink (sink-cli)",
    type: "internal-tool",
    status: "active",
    tagline: "Data hygiene for music PR. Scrub, rinse, and soak contact lists.",
    description: "An open-source CLI and browser engine to format, clean, deduplicate, and enrich contact spreadsheets with LLMs.",
    liveUrl: "https://sink-web-indol.vercel.app",
    githubRepos: ["https://github.com/totalaudiopromo/sink-cli"],
    techStack: ["Node.js", "TypeScript", "Firecrawl API", "Anthropic SDK"],
    roleInEcosystem: "Ecosystem lead-gen and credibility builder. Sits top-of-funnel for technical developers.",
    editorialCopy: "PR contact spreadsheets easily rot with bad email syntax, typos, and duplicate rows. Datasink cleans up these contact sheets: corrects UK-specific domain typos (like bbc.com -> bbc.co.uk), strips duplicates, and uses AI site scraping to find submission guidelines and outlet contacts.",
    technicalAccent: {
      commandLine: "sink wash contacts.csv --provider anthropic",
      sampleLogLines: [
        "[22:08:15] SCRUB: Validated RFC 5322 emails. Corrected: bbc.com -> bbc.co.uk",
        "[22:08:16] RINSE: Jaro-Winkler Jaccard dedup (threshold=0.92) collapsed 47 duplicates",
        "[22:08:19] STEEP: Crawled outlet URLs. Extracted presenter names and submission rules"
      ],
      configSnippet: JSON.stringify({
        scrub: { mxCacheTTL: 1800, customTypoMap: true },
        rinse: { strategies: ["exact-email", "fuzzy-name", "cross-field"] },
        steep: { engine: "firecrawl", cacheTTL: "30_days" }
      }, null, 2)
    }
  },
  {
    id: "audx",
    name: "audx",
    type: "developer-labs",
    status: "active",
    tagline: "A terminal-native digital audio workstation.",
    description: "A pattern sequencer and TUI sampler designed for local, calm, post-Ableton music workflows.",
    githubRepos: ["https://github.com/uisato/audx"],
    techStack: ["Python", "Textual (TUI)", "FastAPI", "uv", "RtAudio"],
    roleInEcosystem: "Ring-fenced personal music-tech research ('Joy Lane'). Demonstrates audio DSP engineering.",
    editorialCopy: "A minimalist digital audio workstation designed to run entirely in the terminal. Created to bypass complex DAWs, it features a clean pattern DSL, 16-channel audio mixer, sample indexer, and real-time audio thread rendering.",
    technicalAccent: {
      commandLine: "audx init my-beat && audx launch",
      sampleLogLines: [
        "[22:10:01] ENGINE: rt_audio callback initialized (16 channels, float32)",
        "[22:10:02] DSL: Parsing pattern: 'kick 4/4 | hh 16x8 | vel 0.45'",
        "[22:10:03] TUI: Textual interface mounted successfully"
      ],
      configSnippet: JSON.stringify({
        engine: "pure-functional-audio-data",
        midiClockOut: "Ableton Push 2",
        bridges: ["heartmula-bridge", "sadact-bridge"]
      }, null, 2)
    }
  },
  {
    id: "podflow",
    name: "podflow",
    type: "developer-labs",
    status: "active",
    tagline: "Automated podcast digest and transcript CLI & web viewer.",
    description: "A local terminal helper and web app for downloading podcast episodes, generating Whisper transcripts, and producing markdown summaries.",
    liveUrl: "https://podflow.vercel.app",
    githubRepos: ["https://github.com/totalaudiopromo/podflow"],
    techStack: ["Node.js", "Vite", "React", "Whisper API", "Markdown"],
    roleInEcosystem: "Active utility. Synchronizes local podcast libraries, generates digests, and serves a clean web reading panel.",
    editorialCopy: "A local-first CLI tool and web frontend that parses your podcast subscriptions, transcribes episode audio streams using Whisper, and leverages Claude to compile guests, key topics, and timeline digests into clean markdown summaries.",
    technicalAccent: {
      commandLine: "podflow digest --max-episodes 3",
      sampleLogLines: [
        "[22:42:00] SQLITE: Reading Apple Podcasts library...",
        "[22:42:01] BATCH: Found 3 new episodes to process",
        "[22:42:03] LLM: Summarising 'AI Agents in Production' (score: 94)",
        "[22:42:05] OUTPUT: Written 3 new digests to podflow-digest.md"
      ],
      configSnippet: JSON.stringify({
        transcriptionEngine: "whisper-large-v3",
        exportFormat: "gfm-markdown",
        provider: "anthropic"
      }, null, 2)
    }
  },
  {
    id: "sadact-finisher",
    name: "sadact finisher",
    type: "developer-labs",
    status: "active",
    tagline: "DSP mastering engine for electronic and UK garage audio.",
    description: "An 8-stage Float64 DSP finishing chain and FastAPI server performing EQ, compression, and spectral matching against golden-master profiles.",
    githubRepos: ["https://github.com/totalaudiopromo/sadact-mono"],
    techStack: ["Python", "FastAPI", "Demucs", "numpy/scipy", "uv"],
    roleInEcosystem: "Ring-fenced music-tech engine ('Joy Lane') showcasing high-precision digital signal processing.",
    editorialCopy: "A command-line mastering engine tuned specifically for house and UK Garage. It runs track audio through a high-precision digital signal processing chain, separating stems and matching spectral curves against custom golden-master profiles.",
    technicalAccent: {
      commandLine: "finisher process demo.wav --profile ukg --platform spotify",
      sampleLogLines: [
        "[22:11:15] FLOAT64: DSP Chain loaded (gain -> gate -> HPF -> tilt EQ -> compressor -> limiter)",
        "[22:11:17] DEMUCS: Separating audio stems (drums, bass, melody)",
        "[22:11:21] SPECTRAL: Matching curve against statistical UKG golden profile"
      ],
      configSnippet: JSON.stringify({
        dspPrecision: "float64",
        stemsModule: "demucs-v4-2gb",
        presets: "ukg_house_club_streaming"
      }, null, 2)
    }
  }
];
