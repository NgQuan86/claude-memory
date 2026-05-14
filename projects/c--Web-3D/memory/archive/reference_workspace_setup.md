---
name: workspace_setup
description: Junction setup giữa THREEJS workspace và root workspace — cả 2 share cùng memory folder vật lý
type: reference
originSessionId: 36d88b5d-5b64-44e1-9bb1-78c00886319d
---
## Memory Junction — THREEJS ↔ Root workspace

Cả 2 workspace đọc/ghi cùng 1 folder memory vật lý.

**Physical location:** `C:\Users\nguye\.claude\projects\c--Web-3D\memory\`

**Junction:** `C:\Users\nguye\.claude\projects\c--Web-3D-THREEJS\memory\` → trỏ vào folder trên

**Ngày tạo:** 2026-05-12

---

## Recreate nếu junction bị mất

```powershell
$target = "C:\Users\nguye\.claude\projects\c--Web-3D-THREEJS\memory"
$source = "C:\Users\nguye\.claude\projects\c--Web-3D\memory"
New-Item -ItemType Junction -Path $target -Target $source
```

Verify:
```bash
ls "C:/Users/nguye/.claude/projects/c--Web-3D-THREEJS/memory/"
```

---

## Workspaces hiện tại

| Workspace | Path | Dùng khi |
|---|---|---|
| Engine (primary) | `c:\Web-3D\THREEJS` | 95% thời gian — Three.js work |
| Root (ecosystem) | `c:\Web-3D` | Thay đổi ecosystem, setup Babylon |
