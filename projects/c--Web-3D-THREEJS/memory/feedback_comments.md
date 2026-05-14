---
name: Comment Style — Verbose During Build Phase
description: Comment chi tiết trong suốt quá trình xây dựng — override default "no comments" behavior
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---

**Override:** Rule này thắng default "no comments" của Claude Code system prompt.  
Lý do: user đang trong giai đoạn học và xây dựng — comment là tài liệu học tập, không phải noise.

---

## Áp dụng khi nào

**Trong suốt Phase A → D** (toàn bộ giai đoạn build hiện tại):  
Mọi file mới trong `00-Threejs/src/` và `threejs-modules/` đều cần comment đầu file.

**Không áp dụng cho:**
- Template files trong `threejs-modules/` (skeleton thuần)
- File config (vite.config.js, tsconfig.json) — đã có comment sẵn

---

## Format block comment đầu file

```ts
/**
 * VỊ TRÍ   — [nằm ở đâu trong project, relative path]
 * VAI TRÒ  — [làm gì, một câu]
 * LIÊN HỆ  — [quan hệ với file/class khác]
 *
 * CÁCH DÙNG:
 *   const x = new X(opts)
 *   x.dispose()
 *
 * DISPOSE: [có/không — nếu có, liệt kê resource nào được giải phóng]
 */
```

---

## Khi nào xóa

Khi user nói "dự án xong" hoặc "xóa comment" — xóa toàn bộ block comment đầu file.  
Comment inline giải thích WHY (không obvious) → giữ lại vĩnh viễn.
