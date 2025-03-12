# 视频文件目录

本目录用于存放产品的演示视频。目前系统支持以下视频：

1. `image-processor-demo.mp4` - 图像处理助手的演示视频
2. `frame-checker-demo.mp4` - frame检查的演示视频

## 如何添加视频

1. 将视频文件重命名为对应的名称
2. 将视频文件放在此目录下
3. 确保视频文件格式为 MP4，且分辨率适合在卡片上显示（建议不超过720p）
4. 视频文件大小应尽量控制在5MB以内，以保证页面加载速度

## 如何为其他产品添加视频

如果需要为其他产品添加视频预览功能，请修改 `app/components/features/ProductCard.tsx` 文件，
在 `productVideos` 对象中添加对应产品的ID和视频路径。

```typescript
const productVideos: Record<string, string> = {
  '7': '/videos/image-processor-demo.mp4', // 图像处理助手的视频
  '9': '/videos/frame-checker-demo.mp4',   // frame检查的视频
  '1': '/videos/your-new-video.mp4',      // 添加新产品的视频
};
``` 