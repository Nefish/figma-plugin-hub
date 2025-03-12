export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  price: number;
  discountedPrice?: number;
  platform: string;
  category: string;
  author: {
    name: string;
    verified: boolean;
    avatar?: string;
  };
  rating?: number;
  reviewCount?: number;
  image?: string;
}

export const products: Product[] = [
  {
    id: '7',
    title: 'Figma图像助手',
    description: '解决在Figma中所有图片处理相关的需求。目前已实现：\n1. Figma内直接抠图：点选图片后一键去除背景（抠图能力基于Remove.bg的API）\n2. 实现对透明图片中实体轮廓的描边，且是通过矢量路径形式实现，可在Figma中进行后续编辑！',
    shortDescription: 'Figma中的一站式图像处理解决方案',
    price: 0,
    platform: 'figma',
    category: '图像处理',
    author: {
      name: 'nefish',
      verified: true
    }
  },
  {
    id: '1',
    title: 'Content Replacer',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'figma',
    category: '文本处理',
    description: '实现根据主题替换页面图文内容，接入了DeepSeek和Pixabay图库'
  },
  {
    id: '2',
    title: 'FocusController',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'ae',
    category: '动效',
    description: '一键实现实时的多图层联动逻辑，聚焦：让一个或多个图层，动态的始终面向目标图层，推开：目标图层靠近其他图层时可以将其推开，远离后再回归原位'
  },
  {
    id: '3',
    title: 'DeepSeek接入手册',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'cursor',
    category: '知识库',
    description: '本手册详细介绍了如何在Figma插件中接入DeepSeek API，可将本手册喂给AI来快速实现接入DeepSeek的能力！'
  },
  {
    id: '4',
    title: 'Pixabay接入手册',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'cursor',
    category: '知识库',
    description: '本手册详细介绍了如何在Figma插件中接入Pixabay图库，可将本手册喂给AI来快速实现接入DeepSeek的能力！'
  },
  {
    id: '5',
    title: 'Figma插件初始开发手册',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'cursor',
    category: '知识库',
    description: '本手全面介绍了Figma插件的开发流程，包括环境准备、基础结构搭建、代码示例、调试技巧等，可在开发Figma插件初期将此手册喂给AI，能够有效减少前期基础错误的产生'
  },
  {
    id: '6',
    title: 'TextPolisher 文本润色助手',
    description: '专业的Figma文本优化工具。特性：\n1. 支持单个或多个文本图层的同时润色\n2. 支持自定义Prompt来控制润色风格和方向\n3. 优化了DeepseekAPI通信性能，实现3个文本为一组的并发处理，显著提升处理速度',
    shortDescription: 'AI驱动的多文本智能润色工具',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'figma',
    category: '文本处理'
  },
  {
    id: '8',
    title: 'Color Adjuster',
    price: 0,
    author: {
      name: '劲扬',
      verified: true,
    },
    platform: 'figma',
    category: '设计延展',
    description: '快速调整画板内所有图层的配色色值：可分别调整所有图层的HSB三个参数的值，画板内不常色彩倾向的图层不会受到影响'
  },
  {
    id: '9',
    title: 'frame检查',
    price: 0,
    author: {
      name: '达',
      verified: true,
    },
    platform: 'figma',
    category: '规范化',
    description: '快速检查和修改多组frame的间距和圆角'
  },
  {
    id: '10',
    title: 'clear hidden layers',
    price: 0,
    author: {
      name: '劲扬',
      verified: true,
    },
    platform: 'figma',
    category: '规范化',
    description: '一键清除隐藏图层'
  },
  {
    id: '11',
    title: 'Scale',
    price: 0,
    author: {
      name: 'tips',
      verified: true,
    },
    platform: 'figma',
    category: '规范化',
    description: '一键将界面适配至不同设备屏幕尺寸'
  },
  {
    id: '12',
    title: '字体包压缩插件',
    price: 0,
    author: {
      name: 'tips',
      verified: true,
    },
    platform: 'python',
    category: '沟通&协作',
    description: 'mac即可运行，选装环境包'
  },
  {
    id: '101',
    title: '网页设计完整UI套件',
    description: '一套全面的网页设计组件集合，包含超过200个组件和50个模板页面，适用于各种类型的网站项目。',
    price: 129,
    discountedPrice: 89,
    image: 'https://picsum.photos/id/24/800/400',
    platform: 'figma',
    category: '设计延展',
    author: {
      name: 'WebDesignPro',
      verified: true,
      avatar: 'https://picsum.photos/id/64/100/100'
    },
    rating: 4.9,
    reviewCount: 127
  }
]; 