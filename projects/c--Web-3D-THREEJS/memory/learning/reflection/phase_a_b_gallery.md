---
name: Reflection — Phase A + B + Gallery
type: reflection
trust: medium
decay: slow
last_validated: 2026-05-15
date: 2026-05-14
milestone: Phase A (5 modules) + Phase B (5 modules) + Module Gallery
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Worked Well

**Composition over inheritance cho particle system**  
GPUParticleSystem là base class, SparkSystem là preset dùng composition.  
Kết quả: SparkSystem gọn, dễ extend, không bị coupled với implementation detail của base.

**TSL built-in trước khi tự viết**  
`triplanarTexture()` có sẵn trong `three/tsl` — không cần tự implement blend formula.  
Approach đúng: grep node_modules trước, tự viết chỉ khi built-in không đủ.

**`createDemo(canvas)` embeddable pattern**  
Một interface duy nhất cho tất cả 10 example.ts — Gallery lazy-load hoạt động ngay mà không cần adapter.  
Pattern đủ clean để reuse cho Phase C+.

**Module structure nhất quán**  
`index.ts + example.ts + meta.json + README.md` — validate.js check được toàn bộ,  
không có module nào cần exception.

**IntersectionObserver cho Gallery**  
10 WebGPU renderer không khởi tạo cùng lúc — chỉ khi card vào viewport.  
Không có vấn đề GPU khi mở gallery.

---

## Failed / Unstable

**`render.calls` vs `render.drawCalls`**  
Dùng sai property — cumulative thay vì per-frame.  
Root cause: tin memory/CLAUDE.md thay vì verify node_modules.  
→ Đã log: `failures/three_api_wrong_properties.md`

**ESLint `lintCommand: 'eslint ./src'`**  
vite-plugin-checker chạy từ root project, không phải từ `src/` — path bị resolve sai.  
Bug pre-existing nhưng không được phát hiện sớm vì không test dev server ngay khi config.  
Fix: `'eslint .'`

**Gallery files ban đầu nằm flat trong src/**  
5 file `gallery*.ts` nằm lẫn với `main.ts`, `index.html` — cần tổ chức lại ngay khi tạo.  
Lesson: nhóm file theo feature ngay từ đầu, không để sau mới reorganize.

---

## Decisions to Retain

- **Verify node_modules trước khi viết bất kỳ Three.js API nào** — không ngoại lệ
- **Composition over inheritance** cho các system có preset/variant
- **`createDemo(canvas): Promise<{ dispose() }>`** làm interface chuẩn cho mọi example
- **Feature folder ngay từ đầu** — không để file flat rồi reorganize sau
- **TSL built-in first** — tự viết chỉ khi cần control mà built-in không có

---

## Promote to Distilled

`createDemo(canvas)` pattern — đã proven qua 10 modules, đủ stable để ghi vào distilled knowledge khi layer đó được tạo.

---

## Next Phase Watchout (Phase C)

**VATShader** — Vertex Animation Texture là API ít phổ biến, khả năng cao Three.js 0.174 không có built-in.  
Verify trước: tìm VAT example trong node_modules hoặc Three.js examples trước khi thiết kế class.

**LODBillboard** — dùng `THREE.Sprite` hay custom billboard shader? Verify `Sprite` API còn tồn tại và behavior như mong đợi ở 0.174 trước khi chọn approach.

**CharacterPool** — object pooling với typed generics có thể conflict với TypeScript strict mode.  
Plan type signature trước khi code.
