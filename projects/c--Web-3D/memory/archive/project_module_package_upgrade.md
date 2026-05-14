---
name: threejs-modules package upgrade
description: Cân nhắc nâng cấp threejs-modules thành pnpm workspace package khi số modules tăng lên
type: project
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
`threejs-modules/` hiện tại chỉ là thư mục source, không phải npm package thật — import path phải fix tay khi copy sang `00-Threejs/src/imported/`.

**Why:** Ở quy mô Phase A-D (< 20 modules) thì ổn, nhưng nếu modules tăng lên 20-30+ cái thì quy trình copy + fix import path sẽ rườm rà.

**How to apply:** Nếu user bắt đầu Phase C hoặc D và số modules vượt ~15, đề xuất nâng cấp `threejs-modules/` thành proper pnpm workspace package — thêm `package.json` với exports map, link vào `00-Threejs` qua workspace protocol.
