# Figma Plugin Hub

Figma插件中心是一个收集和展示各种Figma、AE、Cursor等设计工具插件的平台。

## 功能特点

- 按平台和分类双维度筛选插件
- 纯色+Emoji的简洁卡片设计
- 支持视频预览功能（鼠标悬停时播放）
- 支持列表和网格两种视图模式
- 响应式布局，适配各种设备尺寸

## 如何添加视频预览

现有的视频预览功能支持以下插件：

1. 图像处理助手 - 演示视频位于 `public/videos/image-processor-demo.mp4`
2. frame检查 - 演示视频位于 `public/videos/frame-checker-demo.mp4`

要添加更多视频：

1. 将视频文件放在 `public/videos/` 目录下，使用描述性的文件名
2. 修改 `app/components/features/ProductCard.tsx` 文件中的 `productVideos` 对象

```typescript
const productVideos: Record<string, string> = {
  '7': '/videos/image-processor-demo.mp4', // 图像处理助手的视频
  '9': '/videos/frame-checker-demo.mp4',   // frame检查的视频
  // 添加更多视频...
};
```

## 开发技术

- Next.js
- TypeScript
- Tailwind CSS
- React Hooks

## 项目结构

```
figma-plugin-hub/
├── app/                   # 应用代码
│   ├── components/        # React组件
│   │   ├── features/      # 功能组件
│   │   └── layout/        # 布局组件
│   └── page.tsx           # 主页面
├── public/                # 静态资源
│   └── videos/            # 产品视频预览
└── README.md              # 项目说明
```

## 启动项目

```bash
npm install
npm run dev
```

访问 http://localhost:3000 查看效果.

# 在项目目录中初始化Git
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "初始提交"

# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/Nefish/figma-plugin-hub.git

# 推送到GitHub
git push -u origin master
