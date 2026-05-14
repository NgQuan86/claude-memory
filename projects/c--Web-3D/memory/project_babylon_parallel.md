---
name: Babylon.js Parallel Project
description: Kế hoạch tạo dự án BABYLON/ song song với THREEJS/ sau khi Phase A hoàn thành
type: project
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
Tạo thư mục `c:\Web-3D\BABYLON\` song song với `THREEJS\` sau khi Phase A xong.

**Why:** So sánh trực tiếp hai engines — cùng rebuild 1 module (TriplanarMapping) bằng Babylon.js Node Material Editor để đánh giá API, performance, shader workflow trước khi đầu tư thêm.

**How to apply:** Không đề xuất bắt đầu BABYLON/ cho đến khi Phase A (GlobalUniforms + TriplanarMapping + WorldNoise + RoundedCorners) đã hoàn thành. Khi Phase A xong, nhắc user về kế hoạch này.

## Cấu trúc dự kiến

```
Web-3D/
├── THREEJS/     ← đang build
└── BABYLON/     ← tạo sau Phase A
    └── 01-Babylon/
        └── src/
            └── TriplanarMapping/   ← module đầu tiên để so sánh
```

## Điều kiện để bắt đầu
- [ ] Phase A hoàn thành: GlobalUniforms, TriplanarMapping, WorldNoise, RoundedCorners
- [ ] Ít nhất 1 scene Three.js chạy ổn với các module trên
- [ ] User confirm muốn bắt đầu
