---
name: API Verification Principle
description: Luôn verify Three.js API trong node_modules/three/src/ — không tin tài liệu nội bộ
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
Luôn grep `node_modules/three/src/` để verify tên class/method/property trước khi viết code hoặc cập nhật skill.

**Why:** Session 2026-05-11 phát hiện `render.calls` (cumulative) bị dùng thay `render.drawCalls` (per-frame) và `WebGPURenderTarget` không tồn tại — cả hai lỗi xuất phát từ việc tin vào CLAUDE.md nội bộ thay vì check source thực tế.

**How to apply:**
- Khi viết skill mới hoặc module mới → grep source trước, đặc biệt với property name, class name
- `node_modules/three/src/` là source of truth duy nhất, không phải CLAUDE.md hay memory
- Vòng lặp nguy hiểm: tài liệu sai → code sai → skill copy code sai → session sau cũng sai
- Check định kỳ: xem `WEEKLY-CHECK.md` ở root workspace
