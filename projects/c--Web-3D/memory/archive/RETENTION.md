---
name: Archive Retention Policy
description: Quy tắc dọn dẹp archive — ngăn phình không giới hạn
type: meta
trust: high
decay: none
last_validated: 2026-05-15
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
# Archive Retention Policy

## Khi nào review archive

Cuối mỗi Phase hoàn thành — không cần làm thường xuyên hơn.

---

## Quy tắc xóa

| Loại file | Giữ bao lâu | Điều kiện xóa |
|-----------|-------------|---------------|
| `sessions/` — compact session logs | 6 tháng | Sau 6 tháng và context không còn relevant |
| `project_*.md` — kế hoạch dài hạn | Vô thời hạn hoặc đến khi project bắt đầu | Xóa khi project đã bắt đầu và info đã vào memory chính |
| `reference_*.md` — tài nguyên ngoài | Vô thời hạn | Chỉ xóa nếu resource không còn tồn tại |
| `feedback_*.md` — đã merge | Xóa sau khi merge | Nếu còn trong archive và đã merge vào identity/ → xóa ngay |
| `user_profile.md` | Đã merge vào identity/collaboration.md | ✅ Có thể xóa |

---

## Dấu hiệu archive cần review

- `sessions/` > 20 files
- `archive/` > 500KB tổng
- File có `last_validated` > 12 tháng và không ai đọc

---

## Quy trình xóa

1. Check file còn được link từ MEMORY.md không — nếu có, update link trước
2. Xóa file
3. Chạy `node validate-memory.js` để confirm không còn dead link
