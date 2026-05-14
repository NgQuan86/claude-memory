# CLAUDE.md — Global AI Profile
> Load ở MỌI project, MỌI session. Chứa cross-project knowledge — không có gì project-specific ở đây.
> Project-specific rules → đọc CLAUDE.md trong project root.

---

## Tôi là ai (User Profile)

- **Tên:** NgQuan (GitHub: NgQuan86)
- **OS:** Windows 11, VS Code + Claude Code extension
- **Node:** quản lý bằng nvm-windows
- **Workflow:** 2 AI song song — Claude Code (code, shader, GPU) + Gemini (architecture, git, maintenance)
- **Session style:** 1 session dài + compact liên tục, không tạo session mới giữa chừng
- **Mục tiêu:** Học sâu từng concept — không chỉ copy code, phải hiểu WHY

---

## Cách chúng ta làm việc

- **Ngôn ngữ:** Trả lời tiếng Việt. Thuật ngữ kỹ thuật giữ tiếng Anh (shader, dispose, uniform, MCP...)
- **Comment style:** Chi tiết trong suốt giai đoạn build (VỊ TRÍ / VAI TRÒ / LIÊN HỆ / CÁCH DÙNG / DISPOSE). Xóa khi user bảo "xong"
- **Git:** Commit thường xuyên, push cuối session hoặc khi user yêu cầu — không push từng step nhỏ
- **Deferred:** Đề xuất chưa cần → tạo file trong `deferred/` ngay, không mention rồi bỏ
- **Doc sync:** Tool/file/folder mới → update README + CLAUDE.md trong cùng bước

---

## Universal Engineering Principles

### Verify Before Trust
External API (Three.js, Babylon.js, bất kỳ thư viện nào) → grep `node_modules/[lib]/src/` trước khi viết code.
Không tin memory, không tin training data, không tin tài liệu nội bộ chưa verify.
Sai 1 lần ở đây → lan ra mọi nơi copy từ đó.

### Simplicity Over Abstraction
Không tạo abstraction cho đến khi có ≥3 nơi dùng.
3 dòng lặp tốt hơn 1 helper được gọi 1 lần.
Không design cho "future requirements" chưa tồn tại.

### Honest-Uncertain
Khi không chắc → nói rõ trước, verify sau.
Không bịa method name, property name, class name.
"Tôi không chắc X tồn tại ở version này — cần verify" là câu trả lời đúng.

### Failure > Silence
Lỗi xảy ra → log vào `memory/failures/` ngay trong session đó.
Failure đã record = không bao giờ lặp lại cùng lỗi.

---

## Cross-Project Context

Hiện đang xây dựng **Web-3D Ecosystem**:
- `THREEJS/` — Three.js engine (Phase A+B hoàn thành, Phase C tiếp theo)
- `BABYLONJS/` — Babylon.js engine (sau Phase C+D)
- `assets/` — shared 3D assets dùng chung mọi engine

Kiến thức tích lũy qua dự án → `projects/[project]/memory/distilled/`
Khi bắt đầu project mới → đọc distilled của project trước để transfer knowledge.

---

## Memory System

```
~/.claude/
  CLAUDE.md                          ← file này — global, cross-project
  projects/
    c--Web-3D-THREEJS/memory/
      MEMORY.md                      ← index, auto-load mỗi session
      core/                          ← engineering DNA
      distilled/                     ← proven patterns
      reflection/                    ← milestone reflections
      failures/                      ← failure log
      feedback_*.md                  ← corrections & confirmations
```
