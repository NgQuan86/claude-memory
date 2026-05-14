---
name: Open Questions — Unresolved Decisions
description: Quyết định kiến trúc chưa giải quyết, cần revisit khi đến thời điểm
type: context
updated: 2026-05-14
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Architecture Decisions

### character-modules/ hay threejs-modules/components/?
Phase C cần CharacterPool, VATShader, LODBillboard.  
CLAUDE.md đề cập `character-modules/` riêng nhưng chưa tạo.  
**Implication:** Nếu tách → cần validate.js support thêm path mới.  
**Revisit khi:** Bắt đầu Phase C.

### Gallery ở đâu khi library trở thành package?
Hiện tại: `00-Threejs/src/gallery/` (consumer project).  
Đúng chỗ cho giai đoạn hiện tại.  
**Trigger move:** Khi `threejs-modules/` trở thành npm/pnpm package.  
**Revisit khi:** Modules > ~15 (xem archive/project_module_package_upgrade.md).

---

## Upgrade Triggers

### threejs-modules → pnpm workspace package
Threshold: ~15 modules (hiện 10). Chi tiết tại `archive/project_module_package_upgrade.md`.

### Babylon.js engine
Bắt đầu sau Phase C+D THREEJS. Chi tiết tại `archive/project_babylon_parallel.md`.

### Website dashboard
Theo dõi tiến độ framework 2D→3D. Chi tiết tại `archive/project_dashboard.md`.
