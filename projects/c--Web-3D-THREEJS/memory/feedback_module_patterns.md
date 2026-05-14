---
name: Three.js Module — meta.json & Unique Patterns
description: Chi tiết meta.json pipeline và dependency validation — phần không có trong CLAUDE.md
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---

Dispose, TypeScript rules, performance budget, RuntimeGuard, shader priority → xem `THREEJS/CLAUDE.md` và `00-Threejs/CLAUDE.md`.  
File này chỉ chứa những gì KHÔNG có ở đó.

---

## meta.json — status pipeline

| Status | Nghĩa |
|--------|-------|
| `draft` | Đang viết |
| `unit-pass` | validate.js PASS — files, TS, dispose, no-any, local deps |

Field `dependencies`:
- Chỉ liệt kê npm package (`"three"`) hoặc local module (`"GlobalUniforms"`)
- validate.js tự check local dep (PascalCase) có tồn tại trong threejs-modules/ không
- Không liệt kê transitive deps — chỉ direct deps của module đó

## Module folder structure

```
[category]/[ModuleName]/
├── index.ts       ← export chính, điểm vào duy nhất
├── example.ts     ← export async function createDemo(canvas): Promise<{ dispose() }>
├── meta.json      ← status, version, dependencies, tags
└── README.md      ← props, usage, performance notes
```
