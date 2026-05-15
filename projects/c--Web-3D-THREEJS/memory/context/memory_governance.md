---
name: Memory Governance — Quy ước vận hành hệ thống
description: Quy ước dùng system_evaluation.md làm chuẩn đối chiếu khi chỉnh sửa memory system
type: context
trust: medium
decay: fast
last_validated: 2026-05-15
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Quy ước

`~/.claude/system_evaluation.md` là tài liệu chuẩn để:
- Đối chiếu khi đề xuất thay đổi cấu trúc memory
- So sánh trước/sau khi chỉnh hệ thống
- Đánh giá xem thay đổi giải quyết nhược điểm nào, hay tạo ra nhược điểm mới
- Quyết định loại bỏ hoặc simplify nếu cost > benefit

## Khi nào dùng

- Trước khi thêm layer mới hoặc file mới vào memory/
- Trước khi restructure lại folder
- Khi user nói "chỉnh memory", "cải tiến memory", "đơn giản hóa"
- Định kỳ mỗi phase hoàn thành — review xem system còn worth-it không

## Quy trình đối chiếu

1. Đọc `~/.claude/system_evaluation.md`
2. Xác định thay đổi đề xuất giải quyết nhược điểm nào (mục "Nhược điểm" hoặc "Cải tiến tiềm năng")
3. Nếu không giải quyết nhược điểm nào → defer, không implement
4. Sau khi implement → update system_evaluation.md phản ánh trạng thái mới
