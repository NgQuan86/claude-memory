---
name: Three.js Wrong API Properties
type: failure
trust: high
decay: none
last_validated: 2026-05-15
date: 2026-05-11
severity: high
resolved: true
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Vấn đề

Dùng sai 2 property của Three.js WebGPURenderer:
- `renderer.info.render.calls` (cumulative) thay vì `render.drawCalls` (per-frame)
- `WebGPURenderTarget` — class không tồn tại ở version 0.174

## Root Cause

Tin vào CLAUDE.md nội bộ và memory thay vì verify `node_modules/three/src/`.  
Tài liệu nội bộ đã stale — không ai cập nhật khi Three.js đổi API.

## Hậu quả

- `RuntimeGuard` check draw calls sai (đọc cumulative thay vì per-frame)
- Skill `dispose-pattern` có ví dụ về class không tồn tại
- Session sau copy lại lỗi từ skill → bug lan ra nhiều nơi

## Fix

Grep `node_modules/three/src/` → tìm đúng `render.drawCalls`.  
Xóa reference đến `WebGPURenderTarget` khỏi skill.

## Lesson

`node_modules/three/src/` là source of truth duy nhất.  
Vòng lặp nguy hiểm: tài liệu sai → code sai → skill sai → session sau sai.  
→ Verify trước khi viết, không tin bất cứ thứ gì chưa grep.
