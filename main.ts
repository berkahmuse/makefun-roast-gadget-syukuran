// One-Line Roast: The Gadget You Use Every Day
// Entry for @syukuran — competition u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// The roast (112 characters, single line, original):
//   "My smartwatch gives me a standing ovation for walking to the fridge, then calls my morning run 'light activity'."
//
// The program writes that one line to /output/entry.txt, deterministically:
// no input, no network, no randomness, no clock. Every run writes the same bytes.
//
// Freshness anchor (drand quicknet, quoted before the first write of this entry):
//   round 34222390, randomness 03ffa8cda29188bb61c88ad5d01976ae11677f595d8c95f46279391e22468730
//   signature 8f0d9ee3332004f2397348578cc63be55ce801c06b233a2dd11e995ed330b268c115039493f07855529d4a1d374617ae
//   fetched 2026-11-23T21:48:57Z

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My smartwatch gives me a standing ovation for walking to the fridge, then calls my morning run 'light activity'.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
