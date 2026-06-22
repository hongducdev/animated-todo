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

