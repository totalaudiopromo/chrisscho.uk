import posthog from "posthog-js";

// Lightweight analytics: pageviews + web vitals only. Initializes only
// when a key is configured, so local dev and forks stay clean.
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (POSTHOG_KEY) {
  try {
    posthog.init(POSTHOG_KEY, {
      api_host: "https://eu.i.posthog.com",
      autocapture: false,
      capture_pageview: true,
      capture_pageleave: true,
      capture_performance: true,
      disable_session_recording: true,
      respect_dnt: true,
    });
  } catch {
    // analytics must never break the site
  }
}
