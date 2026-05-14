# failures/

Failure Memory — lưu những gì **không hoạt động**.

Mục đích: tránh lặp sai = compound intelligence.

## Mỗi failure file gồm

```markdown
---
name: [Tên ngắn gọn]
type: failure
date: YYYY-MM-DD
severity: low | medium | high
resolved: true | false
---

## Vấn đề
[Mô tả ngắn]

## Root Cause
[Tại sao xảy ra]

## Hậu quả
[Tác động thực tế]

## Fix
[Đã fix như thế nào]

## Lesson
[Rule cụ thể để không lặp lại]
```

## Files

| File | Severity | Resolved |
|------|----------|---------- |
| [three_api_wrong_properties.md](three_api_wrong_properties.md) | high | ✅ |
