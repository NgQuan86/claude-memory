---
name: TSL Resources — Three.js Shading Language
description: Repos và resources đã verify cho TSL (Three.js 0.174+) — đọc trước khi viết shader mới
type: reference
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
TSL là ưu tiên shader #1 trong project (TSL > WGSL > GLSL). Tài liệu official còn sparse — dùng các resource này.

## Repos đã verify (tháng 5/2026)

### tsl-textures — boytchev/tsl-textures
- Stars: 253 | Version: 3.0.1 (Feb 2026) | NPM: có
- Procedural texture generators bằng TSL thuần: polkaDots, wood, marble, planets, noise...
- **Dùng khi:** build TriplanarMapping, WorldNoise — tham khảo pattern trước khi viết từ đầu

### Threejs TSL Tutorials — cmhhelgeson/Threejs_TSL_Tutorials
- Stars: 18 | Progressive từ basics lên advanced
- **Dùng khi:** cần hiểu concept TSL mới (NodeMaterial, uniform nodes...)

### WebGPU Claude Skill — dgreenheck/webgpu-claude-skill
- Stars: 893 | Last commit: April 2026
- Distributed dạng `.claude/skills` — tham khảo cách document TSL cho AI
- **Dùng khi:** nâng cấp skill `shader-tsl`

## Source of truth
`node_modules/three/src/nodes/` — khi không chắc API.
