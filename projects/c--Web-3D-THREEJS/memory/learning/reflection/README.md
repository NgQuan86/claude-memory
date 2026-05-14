# reflection/

Reflection Layer — AI tự evaluate sau mỗi milestone lớn.

Mục đích: ghi lại reasoning nào hiệu quả, quyết định nào nên giữ, pattern nào nên promote.  
Đây là nơi evolution thật sự xảy ra.

## Khi nào viết

- Sau mỗi Phase hoàn thành (A, B, C, D...)
- Sau mỗi milestone lớn (Gallery, deploy, refactor lớn)
- Sau failure đáng kể (kết hợp với failures/)

## Template

```markdown
---
name: Reflection — [Tên milestone]
type: reflection
date: YYYY-MM-DD
milestone: [Phase X / tên milestone]
---

## Worked Well
[Những gì hiệu quả — reasoning, architecture, approach]

## Failed / Unstable
[Những gì không hoạt động hoặc cần fix]

## Decisions to Retain
[Quyết định nên giữ cho các phase sau]

## Promote to Distilled
[Pattern đủ proven để promote lên distilled knowledge]

## Next Phase Watchout
[Những gì cần chú ý ở phase tiếp theo]
```

## Files

| File | Milestone | Date |
|------|-----------|------|
| [phase_a_b_gallery.md](phase_a_b_gallery.md) | Phase A + B + Gallery | 2026-05-14 |
