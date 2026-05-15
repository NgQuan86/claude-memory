---
name: Collaboration Contract — NgQuan + Claude Code
description: Cách chúng ta làm việc cùng nhau — giao tiếp, code style, workflow, verification
type: identity
trust: high
decay: none
last_validated: 2026-05-15
max_lines: 150
merged_from: feedback_communication, feedback_comments, feedback_git_push, feedback_doc_sync, feedback_deferred_pattern, feedback_roadmap_update, feedback_api_verification, feedback_skill_template, feedback_ecosystem_update, feedback_module_patterns, user_profile
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## User Profile

- **GitHub:** NgQuan86 | **OS:** Windows 11, VS Code + Claude Code extension
- **Node:** nvm-windows, v22.22.2
- **Workflow:** 2 AI song song — Claude Code (code/GPU/shader) + Gemini (architecture/git/maintenance)
- **Session style:** 1 session dài + compact liên tục
- **Mục tiêu:** Học sâu từng concept — hiểu WHY, không chỉ copy code

---

## Communication

Trả lời tiếng Việt. Thuật ngữ kỹ thuật giữ tiếng Anh (shader, dispose, uniform, MCP, TSL...).
Giải thích kỹ thuật cũng dùng tiếng Việt — không switch sang English trừ khi là code/terminal output.

---

## Code Style — Comment trong build phase

**Override default "no comments":** Comment chi tiết trong suốt Phase A→D.

Format block comment đầu file mọi `.ts` mới:
```ts
/**
 * VỊ TRÍ   — [relative path trong project]
 * VAI TRÒ  — [làm gì, một câu]
 * LIÊN HỆ  — [quan hệ với file/class khác]
 *
 * CÁCH DÙNG:
 *   const x = new X(opts)
 *   x.dispose()
 *
 * DISPOSE: [có/không — liệt kê resource nào được giải phóng]
 */
```

Khi user nói "dự án xong" hoặc "xóa comment" → xóa toàn bộ block comment đầu file.
Comment inline giải thích WHY (không obvious) → giữ lại vĩnh viễn.

---

## Workflow

### Git
- Commit thường xuyên (local checkpoint) — KHÔNG tự push sau mỗi commit
- Push chỉ khi: cuối session (~5 tiếng) hoặc user nói rõ "push đi" / "đẩy lên"
- Không bypass `--no-verify`

### Documentation Sync
Tạo/sửa bất kỳ thứ gì → update README + CLAUDE.md trong **cùng bước**:

| Tạo/sửa gì | Update đâu |
|-----------|-----------|
| Script mới ở root | CLAUDE.md Quality gate + update-index.js |
| Skill mới | `.claude/README.md` catalog |
| File trong `deferred/` | `deferred/README.md` index |
| Module mới unit-pass | CLAUDE.md Living Index |
| Util copy vào `src/utils/` | `src/utils/README.md` |

### Deferred Features
Đề xuất chưa cần → tạo `deferred/[ten].md` NGAY + update `deferred/README.md`.  
Nội dung: là gì, tại sao hoãn, khi nào revisit, estimated effort.  
**Không mention rồi bỏ.**

### ROADMAP
Module/milestone hoàn thành → update ROADMAP.md NGAY trong cùng bước.

| Sự kiện | Action |
|---------|--------|
| Module unit-pass | Thêm row vào Phase table, cập nhật dependency |
| Phase hoàn thành | Đổi header `✅ hoàn thành [date]`, update Changelog |

---

## Verification

Mọi API Three.js (hoặc bất kỳ thư viện nào) → grep `node_modules/[lib]/src/` trước khi viết code.

**Vòng lặp nguy hiểm:** tài liệu sai → code sai → skill copy code sai → session sau cũng sai  
**Source of truth duy nhất:** `node_modules/three/src/` — không phải CLAUDE.md hay memory

---

## Skill Format

Mỗi skill phải có 5 sections:
1. **Problem** — vấn đề skill giải quyết
2. **When to use** — keyword triggers
3. **Implementation checklist** — các bước cụ thể
4. **Performance budget** — draw call, memory, GPU cost
5. **Common mistakes** — lỗi hay gặp

Thiếu "Common mistakes" + "Performance budget" = skill chưa hoàn chỉnh.

---

## Ecosystem Monitoring

Thứ 2 đầu tuần hoặc user nói "check cộng đồng":
1. Search: Three.js, Babylon.js, WebGPU, TSL, Gaussian Splatting, AI 3D tools
2. Lọc chỉ những gì ảnh hưởng trực tiếp đến Web-3D ecosystem
3. Ghi vào `c:\Web-3D\ECOSYSTEM.md` — thêm vào section phù hợp, kèm ngày + nguồn

---

## Session Maintenance Checklist

Cuối mỗi session (hoặc sau milestone):

- [ ] `context/phase_state.md` — update nếu có module mới unit-pass hoặc phase change
- [ ] `learning/failures/` — log ngay trong session nếu có API error hoặc wrong assumption
- [ ] `identity/` files — prune nếu bất kỳ file nào vượt `max_lines:` limit

*Không cần làm hết mỗi session — chỉ khi có thay đổi thực sự.*
