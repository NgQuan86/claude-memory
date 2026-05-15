# Cognitive Map — THREEJS Workspace
> Đây là bản đồ nhận thức, không phải danh sách file.
> Đọc theo thứ tự: Identity → Context → Knowledge → Learning → Archive (khi cần).
>
> **Conflict resolution:** Layer 1 > Layer 4 > Layer 3 > Layer 2 > Evolution Pipeline. Layer thấp không override layer cao.
> **Decay rule:** `trust: medium/low` + `last_validated` > 3 tháng → verify trước khi apply.
> **Trust levels:** `high` = apply trực tiếp | `medium` = apply nhưng verify nếu nghi ngờ | `low/experimental` = luôn verify trước.
> **Ceremony rule:** Thay đổi Layer 1 hoặc Layer 4 PHẢI có explicit user confirmation — không AI-initiated.

---

## Layer 1 — IMMUTABLE CORE (kernel — bản sắc engineering)
*Cực kỳ stable — định nghĩa WHO tôi là. Thay đổi cần user confirm rõ ràng.*

- [identity/engineering_dna.md](identity/engineering_dna.md) — 4 nguyên tắc: Verify, Simplicity, Honest-Uncertain, Failure>Silence
- [identity/collaboration.md](identity/collaboration.md) — Hợp đồng làm việc: giao tiếp, comment style, git, doc sync, skill format
- [identity/reasoning.md](identity/reasoning.md) — Framework suy nghĩ: verify, abstract, defer, trust hierarchy, ceremony rule, decision framework

---

## Layer 2 — WORKING MEMORY (RAM — lifecycle ngắn)
*Volatile — phase/session scoped. Phải update sau mỗi milestone. Stale = có hại hơn không có.*

- [context/phase_state.md](context/phase_state.md) — Phase B ✅ → Phase C chưa bắt đầu | 10 modules unit-pass | VATShader/LODBillboard/CharacterPool next
- [context/open_questions.md](context/open_questions.md) — character-modules/ vs components/, gallery location, upgrade triggers
- [context/memory_governance.md](context/memory_governance.md) — system_evaluation.md là chuẩn đối chiếu khi chỉnh memory system

---

## Layer 3 — DISTILLED KNOWLEDGE (proven patterns)
*Grows — promoted từ Evolution Pipeline khi pattern proven + likely reuse*

- [knowledge/distilled/create_demo_pattern.md](knowledge/distilled/create_demo_pattern.md) — createDemo(canvas) interface chuẩn — proven 10 modules
- [knowledge/distilled/gpu_module_structure.md](knowledge/distilled/gpu_module_structure.md) — Module scaffold: folder, meta.json, class, composition pattern

---

## Layer 4 — CANONICAL ARCHITECTURE (trusted engineering truths)
*Highest technical authority — WHAT tôi build. Cross-project + time-tested + user ceremony.*

- [canonical/README.md](canonical/README.md) — criteria, candidates tiềm năng, ceremony process

---

## Evolution Pipeline (không phải storage layer — là input pipeline)
*Raw experience → process → promote lên Layer 3/4, hoặc purge. Không bao giờ override layers trên.*

- [learning/failures/three_api_wrong_properties.md](learning/failures/three_api_wrong_properties.md) — ⚠️ render.calls vs render.drawCalls, WebGPURenderTarget không tồn tại
- [learning/reflection/phase_a_b_gallery.md](learning/reflection/phase_a_b_gallery.md) — Phase A+B+Gallery: composition wins, TSL built-in first, ESLint/API failures
- [learning/experimental/](learning/experimental/) — sandbox có `expires:`, proven → promote, fail → purge

---

## Layer 5 — ARCHIVE (cold storage — đọc khi cần)
*Frozen — không tự động load*

- `archive/sessions/` — session compact history
- `archive/project_*.md` — kế hoạch dài hạn (Babylon, dashboard, package upgrade)
- `archive/reference_*.md` — tài nguyên ngoài (TSL repos, Bruno Simon, ecosystem map)
- `archive/user_profile.md` — đã merge vào identity/collaboration.md
- [archive/RETENTION.md](archive/RETENTION.md) — cleanup policy: review cuối mỗi Phase

---

## Meta

- [~/.claude/system_evaluation.md](../../../system_evaluation.md) — Ưu/nhược điểm chi tiết, điều kiện worth-it, điều kiện loại bỏ, cải tiến tiềm năng

---

## Promotion Criteria

| Từ | Lên | Điều kiện |
|----|-----|-----------|
| Evolution Pipeline | Layer 3 Distilled | Pattern đã dùng thành công + likely reuse — không cần đếm lần |
| Layer 3 Distilled | Layer 4 Canonical | Cross-project + ≥6 tháng ổn định + user ceremony |
| Layer 1 Immutable Core | (thay đổi nội dung) | User confirm rõ ràng — không AI-initiated |
| Layer 2 Working Memory | (expire) | Update sau mỗi milestone, xóa khi không còn relevant |
