# Docs writing style

Mục tiêu: lưu format viết docs đang dùng trong dự án này để các mốc sau giữ cùng giọng điệu, cấu trúc và mức chi tiết.

## 1) Nguyên tắc chung

- Viết bằng tiếng Việt
- Giọng văn rõ, thực dụng, thiên về hệ thống kiến thức
- Ưu tiên mô tả trạng thái hiện tại của codebase, không viết marketing
- Mỗi mốc là 1 ảnh chụp kiến trúc tại thời điểm đó
- Tên file, component, package, prop, hook để trong backtick
- Khi chưa chắc thứ gì đang dùng thật, ghi rõ `đã khai báo nhưng hiện chưa thấy dùng`
- Ưu tiên giải thích vai trò, luồng dữ liệu, và giới hạn hiện tại
- Tránh lý thuyết dài nếu chưa gắn trực tiếp vào code đang có

## 2) Cấu trúc tài liệu chuẩn

Khi viết tài liệu kiểu knowledge base, dùng khung sau:

1. Tiêu đề tài liệu
2. Mốc hiện tại, ví dụ `## Mốc 2 — ...`
3. Đoạn mở đầu nói mốc này đánh dấu thay đổi gì
4. Các mục con được đánh số `### 1)`, `### 2)`...
5. Trong từng mục, dùng bullet list ngắn để tóm ý chính
6. Nếu có flow, dùng danh sách số thứ tự
7. Nếu có phân tích component/file, dùng heading mức 4 với path file
8. Cuối mốc nên có:
   - kiến trúc rút ra
   - hạn chế hiện tại
   - mốc tiếp theo nên ghi gì

## 3) Format heading

Mẫu heading chuẩn:

```md
# Knowledge Base dự án animated-todo

## Mốc N — Tên mốc

### 1) Thay đổi chính
### 2) Cấu trúc file mới sau mốc N
### 3) Luồng UI mới
### 4) Chi tiết từng phần
#### `src/some/file.tsx`
### 5) Dependency và cấu hình mới cần nhớ
### 6) Kiến thức kiến trúc rút ra từ mốc N
### 7) Hạn chế hiện tại
### 8) Mốc tiếp theo nên ghi gì
```

Không bắt buộc luôn đủ mọi mục, nhưng nên giữ cùng nhịp và cách đặt tiêu đề.

## 4) Cách viết nội dung

- Mở mốc bằng 1 đoạn ngắn 1-2 câu: mốc này thêm gì, khác gì so với mốc trước
- Sau đó liệt kê thay đổi chính trước, chi tiết sau
- Khi nói về file, mô tả:
  - file này làm gì
  - state nằm ở đâu
  - props gì quan trọng
  - dependency nào liên quan
  - giới hạn/hard-code nào còn tồn tại
- Khi nói về flow, mô tả theo thứ tự render -> interaction -> state change -> effect
- Khi nói về animation, nêu:
  - shared values nào có
  - style nào derive từ shared values
  - trigger ở đâu
  - lúc bật và tắt khác nhau thế nào

## 5) Mức chi tiết mong muốn

Nên có:

- đủ để người mới đọc hiểu codebase nhanh
- đủ để so sánh mốc trước và mốc sau
- đủ để biết component nào chỉ là demo, component nào đã gần reusable

Không cần:

- kể lại toàn bộ code line by line
- giải thích khái niệm React/Expo cơ bản nếu code chưa dùng gì đặc biệt
- suy đoán roadmap quá xa

## 6) Từ ngữ nên ưu tiên

Nên dùng các cụm như:

- `Hiện trạng code`
- `Thay đổi chính`
- `Luồng UI mới`
- `Điểm cần nhớ`
- `Kiến thức kiến trúc rút ra`
- `Hạn chế hiện tại`
- `Mốc tiếp theo nên ghi gì`
- `đang đóng vai trò ...`
- `hiện dùng như 1 primitive`
- `chưa có ...`
- `mới dừng ở mức demo`

## 7) Điều cần nhất quán giữa các mốc

- Luôn ghi mốc theo thứ tự tăng dần: `Mốc 1`, `Mốc 2`, `Mốc 3`...
- Luôn phân biệt rõ:
  - cái gì đang chạy thật
  - cái gì mới khai báo dependency
  - cái gì mới là scaffold/demo
- Luôn nhắc tới giới hạn hiện tại nếu feature chưa hoàn chỉnh
- Luôn bám vào code thực tế trong repo tại thời điểm viết

## 8) Quy tắc cập nhật

Khi thêm mốc mới vào `docs/knowledge-base.md`:

1. Đọc mốc trước để giữ nhịp viết nhất quán
2. Đọc diff hoặc file mới để xác định thay đổi thật
3. Ghi thay đổi lớn trước, chi tiết file sau
4. Nếu có dependency/cấu hình mới, tách riêng 1 mục để dễ tra cứu
5. Nếu feature vẫn chưa hoàn chỉnh, phải ghi rõ phần thiếu

## 9) File chuẩn tham chiếu

Nguồn chuẩn hiện tại:

- `docs/knowledge-base.md`

Nếu sau này style đổi, cập nhật file này trước rồi mới viết các mốc tiếp theo.
