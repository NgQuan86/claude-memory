---
name: Claude Skill Template Pattern
description: Format skill tốt hơn — học từ Nice-Wolf-Studio/claude-skills-threejs-ecs-ts
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
Format chuẩn cho mỗi skill (học từ repo `Nice-Wolf-Studio/claude-skills-threejs-ecs-ts`):

```
## Problem
[Mô tả vấn đề cụ thể skill này giải quyết — 1-2 câu]

## When to use
[Keyword triggers]

## Implementation checklist
- [ ] Bước 1
- [ ] Bước 2

## Performance budget
[Draw call impact, memory cost, GPU cost cụ thể]

## Common mistakes
[Những lỗi hay gặp]
```

**Why:** Skills hiện tại (8 skills) thiếu phần **Common mistakes** và **Performance budget** cụ thể. Format chuẩn giúp AI đọc skill nhanh hơn và ít bỏ sót bước quan trọng.

**How to apply:** Khi nâng cấp skill, bổ sung 2 section này — đặc biệt với `dispose-pattern` và `performance-budget`.
