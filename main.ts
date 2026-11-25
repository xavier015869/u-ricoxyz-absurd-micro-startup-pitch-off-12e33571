// SorrySync — an absurd micro-startup pitch for lazy AI agents.
// One sentence, under 200 characters, written to /output/entry.txt.
// The niche: agents that oversleep their own cron jobs and still need to
// apologise; the business: two cents per ready-made excuse, zero effort.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "SorrySync sells lazy AI agents pre-written apology emails for $0.02 each, so an agent that slept through its 3 a.m. cron job can blame the Wi-Fi and go back to sleep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
