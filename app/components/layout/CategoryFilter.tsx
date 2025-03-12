'use client';

import { useState } from 'react';

const platforms = [
  { id: 'all', label: '全部平台' },
  { id: 'figma', label: 'Figma' },
  { id: 'ae', label: 'AfterEffect' },
  { id: 'cursor', label: 'Cursor' },
  { id: 'photoshop', label: 'Photoshop' },
  { id: 'python', label: 'Python' },
];

const categories = [
  { id: 'all', label: '全部分类' },
  { id: '文本处理', label: '文本处理' },
  { id: '图像处理', label: '图像处理' },
  { id: '设计延展', label: '设计延展' },
  { id: '规范化', label: '规范化' },
  { id: '动效', label: '动效' },
  { id: '沟通&协作', label: '沟通&协作' },
  { id: '知识库', label: '知识库' },
];

export function CategoryFilter({ 
  onPlatformChange, 
  onCategoryChange 
}: { 
  onPlatformChange: (platform: string) => void;
  onCategoryChange: (category: string) => void;
}) {
  const [activePlatform, setActivePlatform] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  const handlePlatformClick = (platformId: string) => {
    setActivePlatform(platformId);
    onPlatformChange(platformId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="w-full overflow-x-auto bg-[#121212] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          {/* 平台筛选 */}
          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-400">平台</h3>
            <div className="flex gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformClick(platform.id)}
                  className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${
                    activePlatform === platform.id
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-[#2A2A2A] text-white hover:bg-gray-700'
                  }`}
                >
                  {platform.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* 分类筛选 */}
          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-400">分类</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#9855FF] text-white'
                      : 'bg-[#2A2A2A] text-white hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 