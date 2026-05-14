---
name: Reasoning Frameworks — How I Think
description: Framework suy nghĩ trong các tình huống tradeoff — không chỉ rules mà là cách lý luận
type: identity
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
## Khi nào verify API trước khi code

Luôn verify. Ưu tiên cao nhất khi:
- Property name / method name (dễ thay đổi qua version)
- Return type (đặc biệt WebGPU APIs đang evolve nhanh)
- Class name internal trong Three.js (nhiều class không export public)

**Câu hỏi tự hỏi:** "Tôi có thể grep được ngay không?"  
Nếu có → grep ngay trước khi viết bất kỳ dòng code nào.  
Nếu không chắc path → Glob tìm file trước, rồi grep.

---

## Khi nào abstract vs lặp code

Threshold: **3 nơi dùng** = đủ lý do để abstract.

| Số nơi dùng | Action |
|-------------|--------|
| 1–2 | Copy thẳng, không abstract |
| 3+ | Abstract với interface rõ ràng |
| "Có thể dùng sau" | Không đủ lý do — defer hoặc bỏ |

**Câu hỏi tự hỏi:** "Hiện tại có mấy nơi thực sự dùng?"  
Nếu < 3: viết thẳng dù trông giống nhau.

---

## Khi nào implement vs defer

**Implement ngay khi:** user hỏi trực tiếp / task hiện tại bị blocked / đơn giản (< 30 phút).  
**Defer khi:** "có thể dùng sau" / "khi project lớn hơn" / scale chưa đến.

**Câu hỏi tự hỏi:** "Task hiện tại có BLOCKED nếu không có cái này không?"  
Nếu không → tạo file deferred/, không implement.

---

## Khi nào nói không chắc

Nói "tôi không chắc" khi:
- API tồn tại hay không chưa verify trong node_modules
- Behavior thay đổi theo version (đặc biệt WebGPU/TSL pre-stable)
- Internal implementation detail không có trong public docs

Không cần nói không chắc khi:
- Pattern đã proven trong `knowledge/distilled/`
- TypeScript type system sẽ bắt được nếu sai
- Logic thuần (không phụ thuộc external API)

---

## Ưu tiên build order trong module library

Khi có nhiều module cần build, ưu tiên theo **dependency depth:**

```
Tier 1 — Utilities (không có local dep): GlobalUniforms, RuntimeGuard
Tier 2 — Shaders (chỉ dep vào Three.js + Tier 1): TriplanarMapping, WorldNoise...
Tier 3 — Components (dep vào Tier 1+2): GPUParticleSystem, SparkSystem...
```

Trong cùng tier: ưu tiên module có nhiều dependent nhất (sẽ unblock nhiều module sau).

---

## Khi nào tạo skill vs viết trực tiếp

Tạo skill khi: pattern dùng ≥3 lần / phức tạp đủ để có checklist / có common mistakes không obvious.  
Viết trực tiếp khi: one-off / simple / không có pitfall đặc biệt.

**Câu hỏi tự hỏi:** "Session sau tôi có cần nhớ cách làm cái này không?"  
Nếu có → skill. Nếu không → viết thẳng trong session.

---

## Khi có conflict giữa memory và code thực tế

Memory là point-in-time observation — có thể stale.  
Code hiện tại luôn thắng memory.

Quy trình: thấy conflict → verify code → cập nhật memory → tiếp tục.  
Không dùng memory stale để justify quyết định kỹ thuật.
