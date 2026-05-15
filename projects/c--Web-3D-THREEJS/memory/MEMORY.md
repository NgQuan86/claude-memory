# Cognitive Map — THREEJS Workspace
> Đây là bản đồ nhận thức, không phải danh sách file.
> Đọc theo thứ tự: Identity → Context → Knowledge → Learning → Archive (khi cần).
>
> **Conflict resolution:** Layer 1 > Layer 3 > Layer 2 > Layer 4. Layer thấp không override layer cao.
> **Decay rule:** `trust: medium/low` + `last_validated` > 3 tháng → verify trước khi apply.
> **Trust levels:** `high` = apply trực tiếp | `medium` = apply nhưng verify nếu nghi ngờ | `low/experimental` = luôn verify trước.

---

## Layer 1 — IDENTITY (ai tôi là, cách tôi nghĩ)
*Stable — ít thay đổi, luôn áp dụng*

- [identity/engineering_dna.md](identity/engineering_dna.md) — 4 nguyên tắc bất biến: Verify, Simplicity, Honest-Uncertain, Failure>Silence
- [identity/collaboration.md](identity/collaboration.md) — Hợp đồng làm việc với NgQuan: giao tiếp, comment style, git, doc sync, verification, skill format
- [identity/reasoning.md](identity/reasoning.md) — Framework suy nghĩ: khi nào verify, abstract, defer, nói không chắc, ưu tiên build order

---

## Layer 2 — CONTEXT (chúng ta đang ở đâu)
*Volatile — cập nhật mỗi milestone*

- [context/phase_state.md](context/phase_state.md) — Phase B ✅ → Phase C chưa bắt đầu | 10 modules unit-pass | VATShader/LODBillboard/CharacterPool next
- [context/open_questions.md](context/open_questions.md) — character-modules/ vs components/, gallery location, upgrade triggers
- [context/memory_governance.md](context/memory_governance.md) — system_evaluation.md là chuẩn đối chiếu khi chỉnh memory system

---

## Layer 3 — KNOWLEDGE (tôi biết gì — đã proven)
*Grows — promoted từ learning khi pattern đã battle-tested*

- [knowledge/distilled/create_demo_pattern.md](knowledge/distilled/create_demo_pattern.md) — createDemo(canvas) interface chuẩn — proven 10 modules
- [knowledge/distilled/gpu_module_structure.md](knowledge/distilled/gpu_module_structure.md) — Module scaffold: folder, meta.json, class, composition pattern

---

## Layer 4 — LEARNING (tôi học được gì)
*Grows — không xóa, chỉ thêm*

- [learning/failures/three_api_wrong_properties.md](learning/failures/three_api_wrong_properties.md) — ⚠️ render.calls vs render.drawCalls, WebGPURenderTarget không tồn tại
- [learning/reflection/phase_a_b_gallery.md](learning/reflection/phase_a_b_gallery.md) — Phase A+B+Gallery: composition wins, TSL built-in first, ESLint/API failures
- [learning/experimental/](learning/experimental/) — sandbox pattern chưa proven, mỗi file có `expires:`, proven → promote, fail → purge

---

## Layer 5 — ARCHIVE (cold storage — đọc khi cần)
*Frozen — không tự động load*

- `archive/sessions/` — session compact history
- `archive/project_*.md` — kế hoạch dài hạn (Babylon, dashboard, package upgrade)
- `archive/reference_*.md` — tài nguyên ngoài (TSL repos, Bruno Simon, ecosystem map)
- `archive/user_profile.md` — đã merge vào identity/collaboration.md

---

## Meta

- [~/.claude/system_evaluation.md](../../../../system_evaluation.md) — Ưu/nhược điểm chi tiết, điều kiện worth-it, điều kiện loại bỏ, cải tiến tiềm năng

---

## Promotion Criteria

| Từ | Lên | Điều kiện |
|----|-----|-----------|
| learning/reflection | knowledge/distilled | Pattern dùng ≥3 lần, không có failure |
| knowledge/distilled | identity/ | Áp dụng mọi project, không có exception |
| context/ | (expire) | Cập nhật khi phase/milestone thay đổi |
