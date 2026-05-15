#!/usr/bin/env node
/**
 * validate-memory.js — check all markdown links in MEMORY.md still exist
 *
 * Usage:
 *   node validate-memory.js                            # THREEJS (default)
 *   node validate-memory.js projects/c--Web-3D-THREEJS/memory
 */

const fs = require('fs')
const path = require('path')

const ROOT = __dirname
const memoryDir = process.argv[2]
  ? path.resolve(ROOT, process.argv[2])
  : path.join(ROOT, 'projects/c--Web-3D-THREEJS/memory')

const memoryFile = path.join(memoryDir, 'MEMORY.md')

if (!fs.existsSync(memoryFile)) {
  console.error(`\n  ❌  MEMORY.md not found: ${memoryFile}\n`)
  process.exit(1)
}

const content = fs.readFileSync(memoryFile, 'utf8')

// Extract [text](path) — skip http and anchors
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
const links = []
let match

while ((match = linkRegex.exec(content)) !== null) {
  const href = match[2]
  if (href.startsWith('http') || href.startsWith('#')) continue
  links.push({ text: match[1], href })
}

let passed = 0
let failed = 0
const failures = []

for (const { text, href } of links) {
  const resolved = path.resolve(memoryDir, href)
  if (fs.existsSync(resolved)) {
    passed++
  } else {
    failed++
    failures.push({ text, href, resolved })
  }
}

console.log(`\nvalidate-memory — ${path.relative(ROOT, memoryFile)}\n`)

if (failures.length > 0) {
  console.log('  Dead links:\n')
  for (const { href, resolved } of failures) {
    console.log(`  ❌  ${href}`)
    console.log(`      expected: ${resolved}\n`)
  }
}

console.log(`  ─────────────────────────────────`)
console.log(`  ✅ ${passed} passed   ❌ ${failed} failed`)
console.log(`  ─────────────────────────────────\n`)

if (failed > 0) process.exit(1)
