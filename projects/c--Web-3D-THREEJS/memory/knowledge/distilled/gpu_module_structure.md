---
name: GPU Module Structure — threejs-modules scaffold
type: distilled
trust: high
decay: slow
last_validated: 2026-05-15
promoted_from: reflection/phase_a_b_gallery.md
date: 2026-05-14
proven_in: 10 modules (Phase A + B)
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Folder structure bắt buộc

```
threejs-modules/[category]/[ModuleName]/
  index.ts       ← export chính — class + types
  example.ts     ← export async function createDemo(canvas)
  meta.json      ← { version, status, dependencies, tags }
  README.md      ← props table, usage snippet, performance notes
```

## meta.json template

```json
{
  "name": "ModuleName",
  "version": "1.0.0",
  "status": "unit-pass",
  "category": "shaders | components | utils",
  "dependencies": ["three", "GlobalUniforms"],
  "tags": ["tsl", "webgpu"]
}
```

## Class structure chuẩn (có GPU resource)

```ts
export class MyModule {
  private mesh: THREE.Mesh | null = null
  private geometry: THREE.BufferGeometry | null = null
  private material: THREE.Material | null = null
  private isDisposed = false

  constructor(opts: MyModuleOptions) { /* ... */ }

  dispose(): void {
    if (this.isDisposed) return
    this.geometry?.dispose()
    this.material?.dispose()
    this.mesh?.parent?.remove(this.mesh)
    this.geometry = null
    this.material = null
    this.mesh = null
    this.isDisposed = true
  }
}
```

## Composition over inheritance

Khi module có preset/variant (vd: SparkSystem là preset của GPUParticleSystem):
→ Dùng composition, không extend
→ Base class export options interface riêng
→ Preset nhận base instance qua constructor hoặc tự tạo internally
