# claude-memory — THREEJS Workspace

Private backup — Claude AI memory & context cho NgQuan86.

## Cấu trúc (4-layer cognitive architecture)

```
memory/
├── MEMORY.md              ← Index + conflict resolution rules (auto-loaded mỗi session)
├── identity/              ← Layer 1: Immutable Core — engineering DNA, collaboration, reasoning
├── context/               ← Layer 2: Working Memory — phase state, open questions
├── knowledge/distilled/   ← Layer 3: Distilled Knowledge — proven patterns
├── canonical/             ← Layer 4: Canonical Architecture — cross-project truths
├── learning/              ← Evolution Pipeline: failures/, reflection/, experimental/
└── archive/               ← Cold storage — sessions, long-term plans, references
```

## Governance

- `~/.claude/system_evaluation.md` — ưu/nhược điểm, điều kiện worth-it
- `archive/RETENTION.md` — cleanup policy
- `~/.claude/validate-memory.js` — check dead links: `node validate-memory.js`
