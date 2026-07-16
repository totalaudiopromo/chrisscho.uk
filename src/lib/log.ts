import "server-only";
import fs from "node:fs";
import path from "node:path";

export interface LogEntry {
  week: string;
  dateRange: string;
  summary: string;
  highlights: { repo: string; text: string }[];
  commitCount: number;
  reposTouched: string[];
  generatedBy: string;
  generatedAt: string;
}

const LOG_DIR = path.join(process.cwd(), "src/content/log");

export function getLogEntries(): LogEntry[] {
  if (!fs.existsSync(LOG_DIR)) return [];
  return fs
    .readdirSync(LOG_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), "utf-8")) as LogEntry)
    .sort((a, b) => b.week.localeCompare(a.week));
}
