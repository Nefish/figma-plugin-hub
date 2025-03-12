'use client';

import { ProductCard } from '../features/ProductCard';

// 插件产品数据
const pluginProducts = [
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
    description: '实现根据主题替换页面图文内容，接入了DeepSeek和Pixabay图库',
    image: '',
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
    description: '一键实现实时的多图层联动逻辑，聚焦：让一个或多个图层，动态的始终面向目标图层，推开：目标图层靠近其他图层时可以将其推开，远离后再回归原位',
    image: '',
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
    description: '本手册详细介绍了如何在Figma插件中接入DeepSeek API，可将本手册喂给AI来快速实现接入DeepSeek的能力！',
    image: '',
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
    description: '本手册详细介绍了如何在Figma插件中接入Pixabay图库，可将本手册喂给AI来快速实现接入DeepSeek的能力！',
    image: '',
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
    description: '本手全面介绍了Figma插件的开发流程，包括环境准备、基础结构搭建、代码示例、调试技巧等，可在开发Figma插件初期将此手册喂给AI，能够有效减少前期基础错误的产生',
    image: '',
  },
  {
    id: '6',
    title: 'TextPolisher 文本润色助手',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'figma',
    category: '文本处理',
    description: '根据@yaqiannxu(徐雅倩)的需求定制来的文本润色工具，支持单/多文本图层的润色，支持自定以Prompt；另外这个版本优化了与DeepseekAPI的通信速度（现在为3个为一组的并发式通信）',
    image: '',
  },
  {
    id: '7',
    title: '图像处理助手',
    price: 0,
    author: {
      name: 'Arvenwang',
      verified: true,
    },
    platform: 'figma',
    category: '图像处理',
    description: '根据倩倩和日日的需求整合出来的图像处理工具集，后续会再进一步整合，做到解决大家在Figma中所有图片处理相关的需求，目前实现的：1. Figma内直接抠图：目前是使用了Remove.bg的API，使用前需要申请一下秘钥（注册一下就行，每月50次免费额度）',
    image: '',
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
    description: '快速调整画板内所有图层的配色色值：可分别调整所有图层的HSB三个参数的值，画板内不常色彩倾向的图层不会受到影响',
    image: '',
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
    description: '快速检查和修改多组frame的间距和圆角',
    image: '',
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
    description: '一键清除隐藏图层',
    image: '',
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
    description: '一键将界面适配至不同设备屏幕尺寸',
    image: '',
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
    description: 'mac即可运行，选装环境包',
    image: '',
  },
];

export function ProductGrid({ 
  platform = 'all',
  category = 'all',
  viewMode = 'grid'
}: { 
  platform?: string;
  category?: string;
  viewMode?: 'grid' | 'list';
}) {
  // Filter products based on platform and category
  let filteredProducts = pluginProducts;
  
  // 先按平台筛选
  if (platform !== 'all') {
    filteredProducts = filteredProducts.filter(product => 
      product.platform === platform.toLowerCase()
    );
  }
  
  // 再按分类筛选
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(product => 
      product.category === category
    );
  }

  return (
    <div className={`grid gap-4 ${
      viewMode === 'grid' 
        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
        : 'grid-cols-1'
    }`}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          author={product.author}
          platform={product.platform}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
} 