---
name: Framework Dashboard Project
description: Module Gallery — live Three.js canvas mini cho mỗi module, bắt đầu session 2026-05-15
type: project
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---

> ⚠️ NHẮC ĐẦU SESSION 2026-05-15: User muốn bắt đầu build Module Gallery — nhắc ngay khi mở session.

## Kế hoạch đã thống nhất — Module Gallery

Mỗi module là 1 card với live Three.js canvas mini (~300×200px) chạy thật bên trong.

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  TriplanarMap   │  │   WorldNoise    │  │   SparkSystem   │
│  [rotating      │  │  [animated      │  │  [sparks        │
│   sphere]       │  │   terrain]      │  │   flying]       │
│ shaders · med   │  │ shaders · low   │  │ components·med  │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

- Hover → pause/play
- Click → mở full demo
- Data từ `meta.json` (name, category, complexity, description)

## Bước đầu tiên khi bắt đầu

1. Define interface `EmbeddableDemo` chuẩn — nhận `canvas` element thay vì tự tạo renderer
2. Refactor từng `example.ts` thành embeddable (~15-20 phút/module, 10 modules)
3. Build gallery page đọc danh sách từ `meta.json`

## Tradeoff chính

`example.ts` hiện tại hard-code `document.getElementById` — phải refactor thành:
```typescript
export function createDemo(canvas: HTMLCanvasElement): { dispose: () => void }
```

## Scope gốc (vẫn còn giá trị)

**Phase 2D:** Standard web UI, data từ `meta.json` — không cần Three.js
**Phase 3D:** Rebuild với Three.js, nodes = modules, edges = dependencies, glow + particle trail
