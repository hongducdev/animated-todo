# Knowledge Base dự án animated-todo

## Mốc 1 — Trạng thái hiện tại

Tài liệu này ghi lại kiến thức nền của dự án tại thời điểm hiện tại. Mục tiêu: có 1 điểm neo để sau này so sánh thay đổi, học nhanh cấu trúc code, và biết mỗi thư viện đang làm gì.

### 1) Tổng quan dự án

- Tên app: `animated-todo`
- Nền tảng: Expo + React Native
- Entry point: `index.ts` -> `App.tsx`
- Kiểu app hiện tại: 1 màn hình chính, bọc bởi provider cho navigation và theme

Luồng khởi động:

1. `index.ts` gọi `registerRootComponent(App)`
2. `App.tsx` render `AppContainer`
3. `AppContainer` bọc `NavigationContainer` và `NativeBaseProvider`
4. `MainScreen` hiển thị nội dung chính

### 2) Cấu trúc file đang có

- `App.tsx`: ghép layout cấp cao nhất
- `index.ts`: đăng ký root component cho Expo
- `src/components/app-container.tsx`: wrapper provider
- `src/components/theme-toggle.tsx`: công tắc đổi light/dark
- `src/screens/main-screen.tsx`: màn hình chính
- `src/theme.ts`: theme tuỳ biến cho Native Base
- `app.json`: cấu hình Expo
- `package.json`: dependency và script

### 3) Thư viện đang dùng và vai trò

#### Expo

- `expo`: lõi app Expo
- `expo-linking`: đã khai báo nhưng hiện chưa thấy dùng trong code
- `expo-status-bar`: đã khai báo nhưng hiện chưa thấy dùng trong code

Ghi nhớ theo docs Expo SDK 55: `expo` là nền tảng chính cho app Expo/React Native; package Expo SDK có thể cài độc lập và dùng trong app React Native đã cấu hình Expo.

#### React / React Native

- `react`: runtime component
- `react-dom`: hỗ trợ web
- `react-native`: UI native
- `react-native-safe-area-context`: tránh đè lên vùng notch/system UI
- `react-native-screens`: tối ưu screen/navigation

#### Navigation

- `@react-navigation/native`: container điều hướng
- `@react-navigation/drawer`: đã khai báo, hiện chưa thấy dùng

#### UI / Theme

- `native-base`: bộ component UI + color mode + provider
- `styled-components`: đã khai báo, hiện chưa thấy dùng
- `styled-system`: đã khai báo, hiện chưa thấy dùng

#### Animation / Graphics

- `moti`: thư viện animation cho React Native
- `react-native-reanimated`: engine animation
- `react-native-worklets`: nền cho worklets
- `react-native-svg`: vẽ SVG

#### Utils

- `shortid`: tạo id ngắn
- `@types/shortid`: type cho TypeScript

### 4) Hiện trạng code

#### `App.tsx`

- Chỉ làm nhiệm vụ ghép `AppContainer` với `MainScreen`
- Không có logic riêng

#### `AppContainer`

- Bọc `NavigationContainer`
- Bọc `NativeBaseProvider theme={theme}`
- Đây là nơi đặt provider cấp ứng dụng

#### `MainScreen`

- Dùng `Center`, `VStack`, `Box`, `Text`, `useColorModeValue` từ Native Base
- Hiển thị text `MainScreen`
- Có `ThemeToggle`
- Màu nền đổi theo light/dark mode

#### `ThemeToggle`

- Dùng `useColorMode()` để lấy `colorMode` và `toggleColorMode`
- `Switch` đổi giữa dark và light

#### `theme.ts`

- `initialColorMode: 'light'`
- `useSystemColorMode: false`
- Có palette `primary` từ 50 đến 900

### 5) Cấu hình Expo

Trong `app.json`:

- `name`, `slug`: `animated-todo`
- `orientation`: `portrait`
- `userInterfaceStyle`: `light`
- có `splash`, `ios`, `android`, `web`
- Android đã tắt `predictiveBackGestureEnabled`

### 6) Script đang có

Từ `package.json`:

- `npm run start`: chạy Expo
- `npm run android`: mở Android
- `npm run ios`: mở iOS
- `npm run web`: chạy web

### 7) Điểm cần nhớ khi đọc tiếp code

- Dự án đang ở giai đoạn nền tảng, chưa có feature todo thật sự
- Nhiều dependency đã khai báo nhưng chưa dùng
- Theme và color mode là trục chính hiện tại
- Navigation đã set sẵn, nhưng chưa có nhiều màn hình

### 8) Từ khoá tra cứu nhanh

- Root app: `index.ts`
- Layout app: `App.tsx`
- Provider: `src/components/app-container.tsx`
- Theme: `src/theme.ts`
- Dark mode: `src/components/theme-toggle.tsx`
- Màn hình chính: `src/screens/main-screen.tsx`

### 9) Mốc tiếp theo nên ghi gì

Khi dự án có thay đổi, ghi thêm vào đây:

- màn hình mới
- luồng điều hướng mới
- state management nếu có
- data source / API
- animation quan trọng
- cấu trúc folder mới
- dependency mới hoặc dependency bị bỏ

### 10) Ghi chú phiên bản

- Expo SDK: `55.x`
- React Native: `0.83.6`
- React: `19.2.0`

## Mốc 2 — Task item animation đầu tiên

Mốc này đánh dấu dự án đã có 1 lát cắt feature thật hơn: checkbox có thể toggle, label có animation, và cấu hình Babel đã thêm plugin cho Reanimated.

### 1) Thay đổi chính

- `MainScreen` không còn chỉ render text tĩnh
- Đã có state `checked` cục bộ bằng `useState`
- Đã có callback `handlePressCheckbox` dùng `useCallback` để toggle trạng thái
- Đã thêm `TaskItem` vào UI chính
- Đã thêm `AnimatedTaskLabel` để animate text khi task hoàn thành
- Đã thêm `babel.config.js` với `react-native-reanimated/plugin`
- `package.json` thêm dependency `react-native-checkbox-reanimated`

### 2) Cấu trúc file mới sau mốc 2

- `src/components/task-item.tsx`: item task gồm checkbox + label
- `src/components/animated-task-label.tsx`: label có animation đổi màu, rung ngang nhẹ, và gạch ngang
- `babel.config.js`: cấu hình Babel cho Reanimated

### 3) Luồng UI mới

1. `MainScreen` giữ state `checked`
2. `MainScreen` truyền `isDone` và `onToggleCheckbox` xuống `TaskItem`
3. `TaskItem` render `AnimatedCheckbox`
4. Người dùng bấm checkbox
5. `checked` đổi trạng thái
6. `AnimatedTaskLabel` nhận `strikeThrough` mới và chạy animation tương ứng

### 4) Chi tiết từng phần

#### `src/screens/main-screen.tsx`

- Vẫn là màn hình demo chính
- Đã có state cục bộ đầu tiên trong app: `checked`
- `TaskItem` hiện được đặt dưới `ThemeToggle`
- Màn hình này đang đóng vai trò sandbox để thử UI component trước khi có danh sách todo thật

Hiện trạng quan trọng:

- Chưa có mảng tasks
- Chưa có nhập liệu
- Chưa có persistence
- Mới demo 1 item duy nhất

#### `src/components/task-item.tsx`

- Dùng `AnimatedCheckbox` từ `react-native-checkbox-reanimated`
- Dùng `themeTools.getColor(...)` + `useTheme()` để đổi token theme thành giá trị màu thực
- Tách riêng màu cho:
  - `highlightColor`
  - `boxStroke`
  - `checkmarkColor`
  - `activeTextColor`
  - `doneTextColor`
- Dùng `Pressable` bọc checkbox để gọi `onToggleCheckbox`
- Dùng `AnimatedTaskLabel` để hiển thị text `Task item`

Ý nghĩa thiết kế hiện tại:

- `TaskItem` đã là component tái sử dụng được ở mức UI primitive
- Nhưng vẫn còn hard-code text `Task item`
- Chưa có `id`, `title`, `completedAt`, hoặc model task riêng

#### `src/components/animated-task-label.tsx`

Component này là phần đáng nhớ nhất của mốc 2.

Nó có 3 animation chính khi `strikeThrough = true`:

1. `hStackOffset`: dịch ngang nhẹ rồi trả về vị trí cũ bằng `withSequence`
2. `striketroughWidth`: tăng độ dài gạch ngang từ `0%` lên `100%`
3. `textColorProgress`: đổi màu text từ màu active sang màu inactive bằng `interpolateColor`

Chi tiết kỹ thuật:

- Dùng `useSharedValue` để giữ progress animation
- Dùng `useAnimatedStyle` để map shared value sang style
- Dùng `Easing.out(Easing.quad)` cho chuyển động mềm hơn
- Dùng `withDelay(1000, ...)` để đổi màu text trễ sau khi gạch ngang bắt đầu
- Dùng `Animated.createAnimatedComponent(...)` cho `Box`, `HStack`, `Text`
- Export component qua `memo(...)` để giảm re-render không cần thiết

Khi `strikeThrough = false`:

- màu text animate về trạng thái active
- độ rộng gạch ngang animate về `0%`
- không có sequence rung ngang

### 5) Dependency và cấu hình mới cần nhớ

#### `react-native-checkbox-reanimated`

- Đây là dependency UI animation chuyên cho checkbox
- Giúp tránh phải tự dựng animation checkbox từ đầu
- Hiện dùng như 1 primitive, còn logic state vẫn nằm ở `MainScreen`

#### `babel.config.js`

- Có `presets: ['babel-preset-expo']`
- Có `plugins: ['react-native-reanimated/plugin']`

Điểm này quan trọng vì Reanimated cần Babel plugin để chạy đúng.

### 6) Kiến thức kiến trúc rút ra từ mốc 2

- State vẫn đang nâng ở screen level, chưa cần global state
- Component đang tách theo hướng hợp lý:
  - screen giữ state
  - item giữ layout + color token
  - label giữ animation chi tiết
- Đây là bước chuyển từ app scaffold sang app có interactive component thật

### 7) Hạn chế hiện tại

- Chỉ có 1 task demo
- Text task đang hard-code
- `onPress` của `AnimatedTaskLabel` đã có trong props nhưng chưa được dùng
- Có typo tên biến `striketroughWidth` trong `animated-task-label.tsx`; chưa gây lỗi nhưng nên nhớ nếu refactor
- Animation timing hiện mang tính demo, chưa chắc tối ưu UX cuối cùng

### 8) Mốc tiếp theo nên ghi gì

Sau mốc 2, nếu tiếp tục phát triển, nên ghi thêm khi có:

- danh sách nhiều task
- thêm/xoá/sửa task
- model dữ liệu task rõ ràng
- lưu local storage hoặc backend
- gesture/drag/reorder
- animation enter/exit cho item
- test cho component animation hoặc logic toggle

