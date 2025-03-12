'use client';

import { useState } from 'react';
import { ProductGrid } from '@/app/components/layout/ProductGrid';
import { ViewToggle } from '@/app/components/features/ViewToggle';
import { Star, StarsIcon } from 'lucide-react';
import Image from 'next/image';

export default function WebCategoryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const featuredProduct = {
    id: '101',
    title: '网页设计完整UI套件',
    description: '一套全面的网页设计组件集合，包含超过200个组件和50个模板页面，适用于各种类型的网站项目。',
    price: 129,
    discountedPrice: 89,
    image: 'https://picsum.photos/id/24/800/400',
    author: {
      name: 'WebDesignPro',
      verified: true,
      avatar: 'https://picsum.photos/id/64/100/100'
    },
    rating: 4.9,
    reviewCount: 127
  };
  
  return (
    <div>
      {/* 分类页面头部 */}
      <div className="container mx-auto px-4 pt-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold text-white">网页设计UI工具包</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">排序：</span>
              <select className="rounded-lg bg-[#2A2A2A] px-3 py-1.5 text-sm text-white">
                <option>最新发布</option>
                <option>热门程度</option>
                <option>价格：从低到高</option>
                <option>价格：从高到低</option>
                <option>评分</option>
              </select>
            </div>
            <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
          </div>
        </div>
      </div>
      
      {/* 特色项目 */}
      <div className="container mx-auto mb-12 px-4">
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-[#0066FF]/20 to-[#1A1A1A]">
          <div className="grid md:grid-cols-2">
            <div className="order-2 p-6 md:order-1">
              <div className="mb-1 flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-300">({featuredProduct.reviewCount})</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-white">{featuredProduct.title}</h2>
              <p className="mb-4 text-gray-300">{featuredProduct.description}</p>
              
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={featuredProduct.author.avatar}
                    alt={featuredProduct.author.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{featuredProduct.author.name}</p>
                  <p className="text-xs text-gray-400">精选作者</p>
                </div>
              </div>
              
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">${featuredProduct.discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through">${featuredProduct.price}</span>
                <span className="rounded-full bg-[#FF6B00] px-2 py-0.5 text-xs font-medium text-white">省31%</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button className="rounded-lg bg-[#0066FF] px-6 py-2 font-medium text-white hover:bg-blue-600">
                  查看详情
                </button>
                <button className="rounded-lg border border-gray-700 bg-transparent px-6 py-2 font-medium text-white hover:bg-[#2A2A2A]">
                  添加到购物车
                </button>
              </div>
            </div>
            <div className="order-1 relative aspect-video md:order-2">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 产品网格 */}
      <div className="container mx-auto px-4">
        <ProductGrid category="web" viewMode={viewMode} />
        
        {/* 加载更多按钮 */}
        <div className="mt-10 text-center">
          <button className="rounded-lg bg-[#2A2A2A] px-6 py-3 font-medium text-white hover:bg-gray-700">
            加载更多
          </button>
        </div>
      </div>
    </div>
  );
} 