---
name: createDemo(canvas) — Embeddable Demo Pattern
type: distilled
trust: high
decay: slow
last_validated: 2026-05-15
promoted_from: reflection/phase_a_b_gallery.md
date: 2026-05-14
proven_in: 10 modules (Phase A + B)
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Pattern

```ts
export async function createDemo(canvas: HTMLCanvasElement): Promise<{ dispose(): void }> {
  const w = canvas.clientWidth || 300
  const h = canvas.clientHeight || 200

  const renderer = new WebGPURenderer({ canvas })
  renderer.setPixelRatio(1)
  renderer.setSize(w, h)
  await renderer.init()

  // ... scene setup ...

  renderer.setAnimationLoop(() => { /* ... */ })

  return {
    dispose() {
      renderer.setAnimationLoop(null)
      // dispose all GPU resources
      renderer.dispose()
    },
  }
}
```

## Tại sao pattern này hoạt động

- `{ canvas }` option → renderer dùng canvas có sẵn, không append vào DOM
- `clientWidth || 300` → fallback khi canvas chưa mount
- `setPixelRatio(1)` → performance với nhiều renderer đồng thời
- Return `{ dispose() }` → caller kiểm soát lifecycle, không leak

## Dùng khi nào

Mọi `example.ts` trong `threejs-modules/` — chuẩn hóa interface cho gallery và integration test.

## Không dùng khi nào

Standalone demo chạy toàn trang (không cần embed) — dùng trực tiếp renderer + body append.
