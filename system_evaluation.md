---
name: System Evaluation — Persistent Engineering Cognition
description: Đánh giá ưu/nhược điểm của memory system hiện tại — để xem xét cải tiến hoặc loại bỏ
type: meta
created: 2026-05-15
---

# Đánh giá hệ thống: Persistent Engineering Cognition

> Tài liệu này không phải tự quảng cáo — mục đích là ghi rõ lý do tồn tại,
> điểm yếu thực sự, và điều kiện để đánh giá "có còn worth it không?"

---

## Bối cảnh ra đời

| | Trước | Sau (2026-05-15) |
|---|---|---|
| Cấu trúc | CLAUDE.md + settings.json | 5-layer cognitive architecture |
| Cross-session | Mỗi session bắt đầu từ đầu | MEMORY.md load tự động |
| Backup | Không | Git-backed → `NgQuan86/claude-memory` |
| Vấn đề cốt lõi | Cùng lỗi API lặp lại, phải kể lại context mỗi lần | Failure log + context layer giải quyết |

---

## Ưu điểm

| # | Tên | Cái gì | Tại sao có giá trị | Ghi chú |
|---|-----|--------|-------------------|---------|
| 1 | **Failure không lặp lại** | `learning/failures/` ghi lỗi đã xảy ra + nguyên nhân gốc | Không phải "nhớ để nhớ" — mà là *interrupt* trước khi viết code sai. Vd: `render.calls` không tồn tại → file ghi rõ → không bịa lại lần sau | **ROI cao nhất:** space nhỏ, payoff tránh 30 phút debug |
| 2 | **Context không kể lại** | `context/phase_state.md` + `context/open_questions.md` | Không có → mỗi session mất 5-10 phút establish "ta đang ở đâu". Project dài hạn context phức tạp dần | Chỉ valuable nếu update đúng lúc. Stale = có hại hơn không có |
| 3 | **Identity layer** | 9 `feedback_*.md` merge thành 3 file có structure | Trước: conflict tiềm ẩn, không rõ ưu tiên. Sau: 1 file/section rõ ràng, không duplicate | Tách "project rules" (CLAUDE.md) vs "AI behavior rules" (memory) là separation of concerns đúng |
| 4 | **Git-backed** | `~/.claude/.git` → remote GitHub | Memory bị overwrite bởi AI → revert được. Không git → 1 bad write mất hết | — |
| 5 | **Promotion pipeline** | `learning/reflection` → `knowledge/distilled` khi ≥3 lần dùng, không có failure | Tạo distinction "thử 1 lần" vs "pattern đã proven". TSL/WebGPU evolve nhanh → distinction này quan trọng | Xem nhược điểm #5 — ít dùng trong thực tế |

---

## Nhược điểm

| # | Tên | Vấn đề | Tại sao nguy hiểm | Mitigation hiện tại | Fix còn thiếu |
|---|-----|--------|-------------------|--------------------|----|
| 1 | **Stale data** | Memory là snapshot. Code thay đổi → memory nói dối | Không có memory → AI không chắc, grep verify. Có memory sai → AI tin tưởng, không verify, viết sai | `identity/reasoning.md`: "memory vs code conflict → code wins" | Không có fix hoàn toàn. Phụ thuộc AI follow rule |
| 2 | **Context window cost** | Identity files load mỗi session. Hiện tại ~260 lines, có thể 2-3x sau 1 năm | Token overhead = tiền thực. Context bị chiếm → ít room cho code | Archive không auto-load. MEMORY.md giới hạn 200 lines | `collaboration.md` 110 lines và tăng dần — chưa có prune policy |
| 3 | **Manual discipline** | Promotion, context update, failure log đều không tự trigger | Kiến trúc đẹp nhưng không update = dead weight load mỗi session | — | Không có enforcement mechanism |
| 4 | **Archive không có cleanup** | Chỉ nhận vào, không bao giờ xóa | Sau 2-3 năm chiếm phần lớn repo, noise khi search | Archive không auto-load | Cần retention policy: sessions >6 tháng → delete |
| 5 | **Promotion pipeline ít dùng** | Criteria khó verify tự động. Patterns tốt thường vào CLAUDE.md trực tiếp | 2 distilled files sau 10 modules → <5 promotions/năm. Overhead > benefit | — | Cân nhắc bỏ hoặc simplify |
| 6 | **Không có validation** | Không script kiểm tra MEMORY.md links còn sống, hay functions nhắc đến còn tồn tại không | File rename → links chết. AI đọc link chết → không error, chỉ missing context | — | Cần validation script (xem Cải tiến #1) |

---

## Dấu hiệu hệ thống đang rot

| Dấu hiệu | Ý nghĩa |
|----------|---------|
| `context/phase_state.md` > 2 tuần chưa update sau milestone mới | Context layer bị bỏ bê |
| `knowledge/distilled/` không có file mới dù đã 20+ modules | Promotion pipeline không hoạt động |
| `failures/` dừng lại ở 1-2 entries sau 6 tháng | Failure log không đủ ROI |
| Memory reference function/path không còn trong codebase | Stale data, cần audit |

---

## Điều kiện worth-it

Hệ thống có giá trị khi **tất cả** điều kiện sau đều đúng:

| Điều kiện | Lý do | Trạng thái (2026-05-15) |
|-----------|-------|------------------------|
| Project > 3 tháng | Context layer amortize overhead | ✅ THREEJS đang Phase C |
| > 10 modules/components | Knowledge distilled đủ phong phú | ✅ 10 modules unit-pass |
| Failure đã xảy ra ≥2 lần | Failure log đủ justify maintenance | ⚠️ 1 entry — chưa đủ |
| Discipline maintain memory | Không update = dead weight | ⚠️ Chưa proven qua nhiều tháng |

---

## Điều kiện loại bỏ hoặc downgrade về CLAUDE.md

| Trigger | Hành động |
|---------|-----------|
| Context files không update ≥ 3 milestone liên tiếp | Xóa context layer, merge vào CLAUDE.md |
| Failure log ≤ 2 entries sau 6 tháng | Bỏ learning/ layer, giữ failures inline trong CLAUDE.md |
| Identity files phình > 300 lines total | Prune hoặc split, không thêm nữa |
| Bắt đầu BABYLONJS mà không tạo memory riêng | Hệ thống không scale cross-project → redesign |

---

## Cải tiến tiềm năng

| # | Cải tiến | Giải quyết nhược điểm | Effort | Priority |
|---|----------|----------------------|--------|----------|
| 1 | Validation script — check MEMORY.md links còn sống | #6 Dead links | Thấp | Cao |
| 2 | Context auto-expire — thêm `expires:` field vào frontmatter | #1 Stale data, #3 Manual discipline | Trung bình | Cao |
| 3 | Archive retention policy — sessions > 6 tháng → delete | #4 Archive phình | Thấp | Trung bình |
| 4 | Failure count tracking — thêm `occurrences:` vào failure files | Đo ROI #1 | Thấp | Trung bình |
| 5 | Cross-project memory bridge — BABYLONJS kế thừa distilled từ THREEJS | Knowledge không mất khi đổi engine | Cao | Thấp — defer đến Phase C+D |

---

## Verdict

| | |
|---|---|
| **Giá trị thực nhất** | Failure log + Context layer |
| **Overengineered nhất** | Promotion pipeline |
| **Rủi ro lớn nhất** | Stale data được AI tin tưởng quá mức |
| **Bản chất thực** | File lookup có structure + provenance — không phải cognition thực sự |

**Review lại file này:** Mỗi phase hoàn thành, hoặc khi có cảm giác "memory đang cản trở hơn là giúp đỡ."
