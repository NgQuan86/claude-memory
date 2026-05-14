---
name: Deferred Feature Pattern
description: Đề xuất chưa cần thiết → tạo file trong deferred/ + update README, không mention rồi bỏ
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
Khi đề xuất bất kỳ tính năng nào chưa cần thiết ở scale hiện tại, KHÔNG chỉ mention rồi bỏ qua — phải:

1. Kiểm tra `deferred/` có file nào cùng hệ không → gộp vào, không thì tạo file mới
2. Tạo `deferred/[ten-tinh-nang].md` với đầy đủ: là gì, tại sao hoãn, khi nào revisit, estimated effort
3. Update `deferred/README.md` — thêm dòng vào bảng index
4. Ghi chú đầy đủ trong file — người đọc sau không có context của session này

**Why:** Tránh đề xuất hay bị mất, hoặc AI session sau đề xuất lại thứ đã nghiên cứu rồi.

**How to apply:** Áp dụng cho MỌI đề xuất "có thể làm sau": tool mới, pattern mới, tích hợp mới. Commit ngay trong cùng session.
