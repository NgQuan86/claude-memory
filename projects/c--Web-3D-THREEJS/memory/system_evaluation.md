---
name: System Evaluation — Persistent Engineering Cognition
description: Đánh giá ưu/nhược điểm của memory system hiện tại — để xem xét cải tiến hoặc loại bỏ
type: meta
created: 2026-05-15
originSessionId: a2a44180-fdf2-4f77-8e3f-9cae83adf89b
---
# Đánh giá hệ thống: Persistent Engineering Cognition

> Tài liệu này không phải tự quảng cáo — mục đích là ghi rõ lý do tồn tại,
> điểm yếu thực sự, và điều kiện để đánh giá "có còn worth it không?"

---

## Bối cảnh ra đời

Trước: `~/.claude/` chỉ có CLAUDE.md + settings.json. Mỗi session Claude bắt đầu từ đầu.
Vấn đề: Cùng lỗi API lặp lại, không biết project đang ở phase nào, phải kể lại context mỗi lần.

Sau (2026-05-15): 5-layer cognitive architecture, git-backed, GitHub remote `NgQuan86/claude-memory`.

---

## Ưu điểm

### 1. Failure không lặp lại — ROI cao nhất

**Cái gì:** `learning/failures/` ghi lại lỗi đã xảy ra với nguyên nhân gốc.

**Tại sao có giá trị:**
Không phải "nhớ để nhớ" — mà là *interrupt* trước khi viết code sai. Ví dụ: `three_api_wrong_properties.md` ghi `render.calls` không tồn tại, phải dùng `render.info.render.calls`. Nếu không có file này, session sau sẽ tra memory/training data và bịa lại property name sai.

**Lý do là ROI cao nhất:** Failure log không tốn nhiều space, load nhanh, và payoff là tránh 1 bug tốn 30 phút debug. Cost/benefit rõ ràng nhất trong toàn hệ thống.

---

### 2. Context không cần kể lại — giảm overhead mỗi session

**Cái gì:** `context/phase_state.md` + `context/open_questions.md`.

**Tại sao có giá trị:**
Không có context layer, mỗi session mất 5-10 phút đầu để establish "ta đang ở đâu, làm gì, quyết định gì đang treo." Với project dài hạn (THREEJS đã Phase B, chuẩn bị Phase C), context phức tạp dần.

**Caveat quan trọng:** Chỉ valuable nếu context được cập nhật đúng lúc. Context stale thì có hại hơn là không có — AI tin vào thông tin sai.

---

### 3. Identity layer — không viết lại cùng rule nhiều lần

**Cái gì:** `identity/collaboration.md` (merge 9 feedback files), `identity/reasoning.md`, `identity/engineering_dna.md`.

**Tại sao có giá trị:**
Trước khi merge: 9 file `feedback_*.md` rải rác, có thể conflict, không rõ thứ tự ưu tiên. Sau merge: 1 file có sections rõ ràng, không duplicate.

**Tại sao đáng hơn chỉ dùng CLAUDE.md:**
CLAUDE.md checked vào repo — chứa project rules, không phải AI behavior rules. Tách biệt "code của dự án cần gì" vs "AI này hoạt động thế nào" là separation of concerns đúng.

---

### 4. Git-backed — không mất khi xóa nhầm

**Cái gì:** `~/.claude/.git` → remote `NgQuan86/claude-memory`.

**Tại sao có giá trị:**
Memory files có thể bị overwrite bởi AI trong session. Có git history = revert được. Không git = 1 bad write mất hết.

---

### 5. Promotion pipeline — knowledge có provenance

**Cái gì:** learning/reflection → knowledge/distilled khi ≥3 lần dùng, không có failure.

**Tại sao có giá trị:**
Tạo ra distinction giữa "tôi thử 1 lần" và "pattern này đã proven". Không có promotion criteria, knowledge/ sẽ đầy những pattern chưa tested. Với TSL/WebGPU đang evolve nhanh, distinction này quan trọng.

---

## Nhược điểm

### 1. Stale data — rủi ro lớn nhất

**Vấn đề:** Memory là snapshot tại thời điểm ghi. Code thay đổi → memory nói dối → AI làm theo memory sai.

**Tại sao nguy hiểm hơn không có memory:**
Không có memory = AI không chắc, sẽ grep verify. Có memory sai = AI tin tưởng, không verify, viết code sai.

**Không có fix hoàn toàn.** Chỉ có mitigation: `identity/reasoning.md` ghi rõ "memory vs code conflict → code wins, update memory." Nhưng phụ thuộc vào AI thực sự follow rule này.

**Dấu hiệu cần review:** Nếu memory reference function/property/path không còn tồn tại trong codebase → memory stale, cần audit.

---

### 2. Context window cost — phình to theo thời gian

**Vấn đề:** MEMORY.md + tất cả identity files load mỗi session. Hiện tại: ~200 lines identity + ~60 lines MEMORY.md = chấp nhận được. Sau 1 năm: nếu không prune, có thể 2-3x.

**Tại sao cost thực:**
- Token overhead = tiền thực (nếu dùng paid API)
- Context window bị chiếm → ít room cho code thực
- Thông tin ít quan trọng chiếm chỗ của thông tin quan trọng hơn

**Mitigation hiện tại:** Archive layer cho cold storage, không auto-load. MEMORY.md có giới hạn 200 lines.

**Chưa có fix cho:** Identity/collaboration.md đang 110 lines và có thể tiếp tục tăng.

---

### 3. Manual discipline — hệ thống chỉ tốt bằng người dùng

**Vấn đề:** Promotion criteria không tự enforce. Context update không tự trigger. Failure log không tự ghi.

**Tại sao nghiêm trọng:**
Hệ thống có kiến trúc đẹp nhưng nếu không update sau milestone, sẽ trở thành dead weight — load mỗi session nhưng thông tin cũ.

**Dấu hiệu hệ thống đang rot:**
- context/phase_state.md quá 2 tuần chưa update sau milestone mới
- knowledge/distilled/ không có file mới dù đã 20+ modules
- failures/ dừng lại ở 1 entry

---

### 4. Archive không có cleanup policy

**Vấn đề:** Archive chỉ nhận vào, không bao giờ xóa. Sessions từ Phase A sẽ còn đó mãi mãi.

**Tại sao quan trọng:**
Dù archive không auto-load, nó vẫn tốn disk và tạo noise khi search. Sau 2-3 năm, archive sẽ chiếm phần lớn repo.

**Chưa có fix.** Cần định nghĩa retention policy (vd: sessions > 6 tháng → delete, project plans đã completed → delete).

---

### 5. Promotion pipeline ít được dùng trong thực tế

**Vấn đề:** Criteria "≥3 lần dùng, không có failure" khó verify tự động. Trên thực tế, patterns tốt thường được đưa thẳng vào CLAUDE.md, không qua learning → knowledge → identity.

**Tại sao overengineered:**
Có 2 distilled files sau 10 modules. Với tốc độ project hiện tại, promotion sẽ xảy ra < 5 lần/năm. Overhead của việc maintain pipeline này so với benefit nhận được → questionable.

---

### 6. Không có validation — memory có thể reference thứ không tồn tại

**Vấn đề:** Không có script kiểm tra "tất cả paths trong MEMORY.md có tồn tại không?" hoặc "functions được nhắc trong memory có còn trong node_modules không?"

**Tại sao rủi ro:**
File rename, folder restructure → memory links chết. AI đọc link chết → không có error, chỉ có missing context.

---

## Điều kiện để hệ thống worth it

Hệ thống này có giá trị khi **tất cả** điều kiện sau đều đúng:

| Điều kiện | Lý do |
|-----------|-------|
| Project > 3 tháng | Context layer amortize overhead |
| > 10 modules/components | Knowledge distilled đủ phong phú để reference |
| Failure đã xảy ra ≥2 lần | Failure log đủ để justify maintenance |
| Team discipline maintain memory | Không update = dead weight |

**Hiện tại (2026-05-15):** THREEJS đáp ứng 3/4. Discipline chưa proven qua nhiều tháng.

---

## Điều kiện để loại bỏ hoặc downgrade

Nên xem xét loại bỏ hoặc simplify về chỉ CLAUDE.md nếu:

- Context files không được update ≥ 3 milestone liên tiếp
- Failure log vẫn 1-2 entries sau 6 tháng (không đủ ROI)
- Identity files phình >300 lines total (cost > benefit)
- Bắt đầu project mới (BABYLONJS) mà không tạo memory riêng → hệ thống không scale cross-project

---

## Cải tiến tiềm năng

| Cải tiến | Giải quyết vấn đề gì | Effort | Priority |
|----------|---------------------|--------|----------|
| Validation script: check MEMORY.md links còn sống | Dead links | Thấp | Cao |
| Archive retention policy: sessions > 6 tháng → delete | Archive phình | Thấp | Trung bình |
| Context auto-expire: thêm `expires:` field vào frontmatter | Stale context | Trung bình | Cao |
| Failure count tracking: thêm `occurrences:` vào failure files | Đo ROI failure log | Thấp | Trung bình |
| Cross-project memory bridge: khi bắt đầu BABYLONJS, distilled từ THREEJS transfer sang | Knowledge không bị mất khi đổi engine | Cao | Thấp (defer đến Phase C+D) |

---

## Kết luận

Hệ thống này là **engineering tốt cho đúng vấn đề** — long-running project với nhiều technical decisions cần track.

Không phải "cognition thực sự" — vẫn là file lookup. Nhưng file lookup có structure, có provenance, có version control thì hơn nhiều so với không có gì.

**Giá trị thực nhất:** Failure log + Context layer.  
**Overengineered nhất:** Promotion pipeline.  
**Rủi ro lớn nhất:** Stale data được AI tin tưởng quá mức.

Review lại file này: mỗi phase hoàn thành, hoặc khi có cảm giác "memory đang cản trở hơn là giúp đỡ."
