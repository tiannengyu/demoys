# Revolut Landing Page Clone

基于 React 的响应式金融应用落地页，实现了现代化的 UI 设计和流畅的用户体验。

## 技术栈

- **React 18**: 使用最新的 React 特性，包括并发渲染
- **Styled Components**: CSS-in-JS 解决方案，实现模块化样式管理
- **Swiper**: 实现流畅的卡片轮播效果
- **Framer Motion**: 添加流畅的动画效果
- **Webpack**: 模块打包和开发环境配置
- **ESLint & Prettier**: 代码规范和格式化

## 特性

- 响应式设计：适配移动端、平板和桌面端
- 现代化 UI：使用 Styled Components 实现组件级样式隔离
- 流畅动画：整合 Framer Motion 实现过渡效果
- 轮播展示：使用 Swiper 实现卡片轮播
- 代码规范：ESLint 和 Prettier 确保代码质量

## 项目结构

```
src/
  ├── assets/         # 静态资源
  │   └── images/     # 图片资源
  ├── components/     # React 组件
  │   ├── Card.jsx   # 卡片组件
  │   └── HomePage.jsx# 主页组件
  └── index.jsx       # 应用入口
```

## 开发过程

1. 技术选型考虑：
   - React：生态完善，组件化开发
   - Styled Components：更好的样式隔离和动态样式
   - Swiper：成熟的轮播解决方案
   - Framer Motion：专业的动画库

2. 响应式设计实现：
   - 移动优先设计
   - 使用 CSS Grid 和 Flexbox 布局
   - 媒体查询适配不同屏幕

3. 性能优化：
   - 组件拆分和复用
   - 样式优化
   - 图片资源优化

## 运行项目

1. 安装依赖：
```bash
npm install
```

2. 开发模式：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

## 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 React 最佳实践

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版) 