---
name: Canonical Architecture — Trusted Engineering Truths
description: Highest technical authority — rất ít thứ được vào, AI ưu tiên rất mạnh khi đã vào
type: canonical
trust: high
decay: none
last_validated: 2026-05-15
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
# Canonical Architecture

Layer này chứa "trusted engineering truths" — không phải pattern thông thường mà là
quyết định kiến trúc đã được cross-project validate và user confirm chính thức.

## Criteria — tất cả 3 phải đúng

| Điều kiện | Nghĩa là |
|-----------|---------|
| **Cross-project** | Dùng ít nhất 2 project khác nhau, cả 2 đều work | 
| **Time-tested** | Pattern ổn định ≥ 6 tháng, không có major revision |
| **Ceremony** | User confirm rõ ràng khi promote — không AI-initiated |

## Hiện tại

Đang build. Chưa có entry nào đủ điều kiện sau Phase A+B.

**Candidates tiềm năng** — chờ cross-project evidence từ BABYLONJS:

| Candidate | Nguồn | Còn thiếu |
|-----------|-------|-----------|
| TSL > WGSL > GLSL priority | THREEJS CLAUDE.md | BABYLONJS confirm |
| Module structure: meta.json + index.ts + example.ts | knowledge/distilled | Cross-project |
| Dispose pattern: mọi GPU resource phải có dispose() | THREEJS | Cross-project |

## Ceremony khi promote

1. Đề xuất rõ ràng kèm evidence cross-project
2. User confirm: "yes, add to canonical"
3. Tạo file mới trong `canonical/` + update MEMORY.md
4. Không AI-initiated — user là người quyết định cuối cùng
