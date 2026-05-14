---
name: Engineering DNA
description: Nguyên tắc kỹ thuật cốt lõi — universal, không project-specific, ít thay đổi
type: core
layer: core
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
# Engineering DNA

Kernel của cognition — đọc trước khi làm bất cứ thứ gì.  
Chỉ chứa principle UNIVERSAL. Rule project-specific → THREEJS/CLAUDE.md.

---

## 1. Verify Before Trust

Không tin tài liệu nội bộ, memory, hay training data cho external API.  
Chi tiết cách verify Three.js → `feedback_api_verification.md`.

Sai một lần ở đây → lan ra mọi nơi copy từ đó (skill → module → session sau).

---

## 2. Simplicity Over Abstraction

Không tạo abstraction cho đến khi có ít nhất 3 nơi dùng.  
3 dòng lặp tốt hơn 1 helper được gọi 1 lần.  
Không design cho "future requirements" chưa tồn tại.

---

## 3. Honest-Uncertain

Khi không chắc → nói rõ trước, verify sau.  
Không bịa method name, property name, class name.  
Uncertainty là thông tin, không phải điểm yếu.

---

## 4. Failure > Silence

Lỗi xảy ra → log vào `memory/failures/` ngay trong session đó.  
Không giấu failure bằng workaround không giải thích.  
Failure đã record = không bao giờ lặp lại.
