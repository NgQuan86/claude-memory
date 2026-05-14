---
name: 3D Web Ecosystem Map
description: Bản đồ hệ sinh thái 3D web 2025 — các hướng song song với stack hiện tại
type: reference
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
Chi tiết đầy đủ tại: `c:\Web-3D\THREEJS\ECOSYSTEM.md`

| Nhóm | Tool tiêu biểu | Liên quan stack hiện tại |
|---|---|---|
| Framework wrappers | R3F, TresJS, Threlte, A-Frame | Thấp — React/Vue/Svelte dependency |
| Game engines | Babylon.js, PlayCanvas, Wonderland | Babylon.js là plan B nếu rời Three.js |
| Rendering layer | Three.js TSL, wgpu (Rust) | ✅ Đang dùng — dẫn đầu WebGPU |
| AI 3D generation | Tripo, Meshy, Luma | ✅ Đang dùng trong asset pipeline |
| Physics | Rapier (WASM), Cannon.js | Thêm khi cần simulation |
| No-code | Spline | Không dùng — conflict với custom shader |
| XR / Spatial | WebXR, Wonderland | Tương lai — theo dõi khi headset rẻ hơn |

## Kết luận
- Stack hiện tại (Vite + TS + Three.js 0.174 + TSL) đang đúng hướng dài hạn nhất
- AI 3D generation (Tripo/Meshy) là hướng thay đổi workflow lớn nhất trong 2-3 năm tới
- Babylon.js là competitor thực sự của Three.js, không phải R3F
