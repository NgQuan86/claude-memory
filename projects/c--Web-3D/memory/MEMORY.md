# Memory Index — THREEJS Workspace

## core/ — Engineering DNA (đọc đầu tiên)
- [core/engineering_dna.md](core/engineering_dna.md) — 7 nguyên tắc cốt lõi bất biến: verify, dispose, simplicity, honest-uncertain, budget, TS discipline, failure logging

## distilled/ — Proven Patterns (promoted từ reflection)
- [distilled/create_demo_pattern.md](distilled/create_demo_pattern.md) — createDemo(canvas) embeddable interface — proven across 10 modules
- [distilled/gpu_module_structure.md](distilled/gpu_module_structure.md) — Module scaffold: folder, meta.json, class structure, composition pattern

## reflection/ — Milestone Reflections
- [reflection/phase_a_b_gallery.md](reflection/phase_a_b_gallery.md) — Phase A+B+Gallery: composition pattern, TSL built-in first, createDemo interface, ESLint/API failures

## failures/ — Failure Memory
- [failures/three_api_wrong_properties.md](failures/three_api_wrong_properties.md) — ⚠️ high: dùng sai render.calls + WebGPURenderTarget không tồn tại → verify node_modules trước khi dùng API

## sessions/ — Compact Archive (auto-saved)
- [sessions/INDEX.md](sessions/INDEX.md) — Index tất cả sessions đã compact, đọc khi cần recover context

## user/
- [user_profile.md](user_profile.md) — NgQuan86: GitHub, OS, workflow 2 AI agents, mục tiêu học Three.js

## feedback/ — Quy tắc làm việc
- [feedback_communication.md](feedback_communication.md) — Trả lời tiếng Việt, thuật ngữ kỹ thuật giữ tiếng Anh
- [feedback_comments.md](feedback_comments.md) — Comment chi tiết lúc dev (vị trí/vai trò/cách dùng), xóa khi xong
- [feedback_doc_sync.md](feedback_doc_sync.md) — Tool/file mới → update README + CLAUDE.md ngay cùng bước
- [feedback_deferred_pattern.md](feedback_deferred_pattern.md) — Đề xuất chưa cần → deferred/ folder, không mention rồi bỏ
- [feedback_api_verification.md](feedback_api_verification.md) — Luôn grep node_modules/three/src/ trước khi viết code/skill
- [feedback_module_patterns.md](feedback_module_patterns.md) — Module structure, validate pipeline, dispose, TS rules, RuntimeGuard
- [feedback_skill_template.md](feedback_skill_template.md) — Format skill chuẩn: problem → checklist → budget → common mistakes
- [feedback_ecosystem_update.md](feedback_ecosystem_update.md) — Thứ 2 đầu tuần hoặc khi user đề xuất: check cộng đồng, lọc update lớn → ghi vào ECOSYSTEM.md
- [feedback_git_push.md](feedback_git_push.md) — Không push ngay sau commit — chỉ push cuối session (mỗi 5 tiếng) hoặc khi user yêu cầu
- [feedback_roadmap_update.md](feedback/feedback_roadmap_update.md) — Luôn update ROADMAP.md ngay khi hoàn thành module/milestone — không để user nhắc

## reference/
- [reference_tsl_resources.md](reference_tsl_resources.md) — TSL repos đã verify: tsl-textures, TSL Tutorials, WebGPU Claude Skill
- [reference_ecosystem.md](reference_ecosystem.md) — Bản đồ 3D web ecosystem 2025, chi tiết tại ECOSYSTEM.md
- [reference_workspace_setup.md](reference_workspace_setup.md) — Junction setup: THREEJS/root workspace share cùng memory, cách recreate nếu mất
- [reference_bruno_simon.md](reference_bruno_simon.md) — Bruno Simon (Three.js Journey) có chapter R3F — tham khảo khi migrate lên R3F

## project/
- [project_dashboard.md](project_dashboard.md) — Website dashboard theo dõi tiến độ framework (2D → 3D), bắt đầu sau Phase A
- [project_babylon_parallel.md](project_babylon_parallel.md) — Tạo BABYLON/ song song sau khi Phase A xong, rebuild TriplanarMapping để so sánh
- [project_module_package_upgrade.md](project_module_package_upgrade.md) — Nâng cấp threejs-modules thành pnpm workspace package khi modules > ~15
