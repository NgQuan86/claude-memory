---
name: Documentation Sync Rules
description: Tool/file/folder mới → update README và CLAUDE.md ngay trong cùng bước, không để sau
type: feedback
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
3 quy tắc về giữ documentation đồng bộ với code:

## 1. Tool / Script mới → document ngay

Tạo hoặc sửa tool, script, hook, skill → update CLAUDE.md + README liên quan **trong cùng bước**.

**Why:** validate.js + PostToolUse hook được tạo nhưng không ghi vào CLAUDE.md → AI session sau không biết phải chạy validate.js khi nào.

Checklist:
- Script mới ở root → thêm vào CLAUDE.md (Quality gate) + scanScripts() trong update-index.js
- Skill mới → update .claude/README.md bảng catalog
- Liên quan assets/ → update assets/README.md
- Liên quan threejs-modules/ → update threejs-modules/README.md
- Liên quan cả 2 AI → update GEMINI.md tương ứng

## 2. File / Folder mới → update README của folder đó

Tạo file, folder, tính năng mới trong folder có README.md → thêm entry vào README đó **ngay trong cùng bước**.

**Why:** deferred/asset-tag-search.md được tạo nhưng chưa thêm vào deferred/README.md → user phải nhắc.

Checklist:
- File trong deferred/ → thêm dòng vào deferred/README.md
- Module mới trong threejs-modules/ → thêm vào catalog README root repo

## 3. Copy util vào 00-Threejs → update src/utils/README.md

Khi copy util từ threejs-modules/ vào 00-Threejs/src/utils/ → thêm 1 dòng vào bảng "Danh sách" trong src/utils/README.md.

**How to apply:** Chỉ update khi util đã thực sự được copy vào src/utils/ (không phải khi còn trong threejs-modules/).
