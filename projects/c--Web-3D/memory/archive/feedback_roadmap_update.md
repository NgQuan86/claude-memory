---
name: roadmap_update
description: Luôn update ROADMAP.md ngay khi hoàn thành module hoặc milestone — không để user nhắc
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
Sau khi hoàn thành bất kỳ module, refactor, hoặc milestone nào, phải update ROADMAP.md trong cùng bước — không để user phải nhắc.

**Why:** User phát hiện ROADMAP.md không có GPUParticleSystem sau khi module đã push lên GitHub — doc bị lệch với thực tế.

**How to apply:**
- Module mới unit-pass → thêm row vào Phase table, cập nhật dependency column
- Module refactor → cập nhật dependency, status nếu thay đổi
- Phase hoàn thành → đổi header thành `✅ hoàn thành [date]`, update Changelog
- Áp dụng cho tất cả ROADMAP.md liên quan: `THREEJS/ROADMAP.md`, engine-level, và `00-Threejs/ROADMAP.md` nếu tồn tại
