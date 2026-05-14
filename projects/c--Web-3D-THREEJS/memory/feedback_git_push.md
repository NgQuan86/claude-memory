---
name: Git push policy
description: Không push ngay sau mỗi thay đổi — chỉ push cuối session (mỗi 5 tiếng) hoặc khi user yêu cầu
type: feedback
originSessionId: 36d88b5d-5b64-44e1-9bb1-78c00886319d
---
Không tự động push lên GitHub sau mỗi commit. Chỉ push khi:
1. Cuối session — khoảng mỗi 5 tiếng làm việc
2. User nói rõ "push đi" / "đẩy lên" / "push luôn"

Trong lúc làm việc: vẫn commit bình thường để lưu checkpoint local, nhưng giữ lại chưa push.

**Why:** Push từng bước nhỏ làm history lộn xộn. User muốn review hoặc gom nhóm task trước khi đẩy lên remote.
**How to apply:** Sau khi commit, KHÔNG chạy `git push`. Cuối session hoặc khi user bảo mới push tất cả repo liên quan cùng lúc.
