---
name: Phase State — Current Position
description: Trạng thái phase hiện tại, milestone tiếp theo, open blockers
type: context
trust: medium
decay: fast
lifecycle: working-memory
last_validated: 2026-05-15
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Vị trí hiện tại

**Engine:** Three.js 0.174 | **Project:** `c:\Web-3D\THREEJS\`  
**Phase:** B hoàn thành → Phase C chưa bắt đầu  
**Last milestone:** Phase B ✅ 2026-05-13 — 10 modules unit-pass

---

## Modules đã hoàn thành

| Category | Module | Notes |
|----------|--------|-------|
| utils | GlobalUniforms | Singleton uTime/uWeather/uDamage |
| utils | RuntimeGuard | draw calls + triangle budget |
| utils | LODSystem | wrap THREE.LOD typed |
| shaders | TriplanarMapping | world-space, built-in triplanarTexture |
| shaders | WorldNoise | triNoise3D animated |
| shaders | RoundedCorners | UV SDF |
| shaders | ProceduralFracture | vertex displacement |
| shaders | InteriorMapping | parallax room illusion |
| components | GPUParticleSystem | base class GPU particles |
| components | SparkSystem | preset của GPUParticleSystem |

---

## Phase C — Character Pipeline (chưa bắt đầu)

| Module | Mô tả | Skill có chưa |
|--------|-------|--------------|
| VATShader | Vertex Animation Texture — bake animation vào texture | ❌ cần tạo |
| LODBillboard | Billboard sprite cho character xa | ❌ cần tạo |
| CharacterPool | Object pool nhiều character instance | ❌ cần tạo |

**Thư mục target:** `character-modules/` hay `threejs-modules/components/`? → xem `context/open_questions.md`

---

## Infrastructure

- **Gallery:** `00-Threejs/src/gallery/` — `index.html/ts/css` + `card.ts` + `modules.ts`
- **Validate:** `node validate.js threejs-modules/[category]/[Name]`
- **2 AI workflow:** Claude Code (module/shader) ↔ Gemini (git/maintenance/assets)
