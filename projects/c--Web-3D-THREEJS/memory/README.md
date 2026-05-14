# claude-memory

Private backup — Claude AI memory & context cho NgQuan86.

## Cấu trúc

```
memory/
├── MEMORY.md              ← Index tất cả memory files (auto-loaded mỗi session)
├── user_profile.md        ← Profile, background, workflow
├── feedback_*.md          ← Quy tắc làm việc (corrections + confirmations)
├── reference_*.md         ← Tài nguyên tra cứu ngoài
├── project_*.md           ← Kế hoạch dài hạn
├── sessions/              ← Compact archive các session cũ
└── context/               ← Context bổ sung — triết lý, mục tiêu, style guide
```

## context/ là gì

Nơi lưu những thứ không thuộc một session cụ thể — viết một lần, AI đọc để hiểu sâu hơn:
- Triết lý code cá nhân
- Mục tiêu học dài hạn
- Style guide riêng
- Ghi chú kỹ thuật không nằm trong project

## Update

Push cuối mỗi session quan trọng hoặc khi thêm context mới.
