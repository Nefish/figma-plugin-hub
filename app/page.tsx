'use client';

import { useState } from 'react';
import { CategoryFilter } from './components/layout/CategoryFilter';
import { ProductGrid } from './components/layout/ProductGrid';
import { ViewToggle } from './components/features/ViewToggle';

export default function Home() {
  const [activePlatform, setActivePlatform] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-[#121212] pb-16">
      {/* 分类过滤栏 */}
      <CategoryFilter onPlatformChange={setActivePlatform} onCategoryChange={setActiveCategory} />
      
      {/* 主内容区域 */}
      <div className="container mx-auto px-4 py-8">
        {/* 标题和控制区 */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">All Plugins</h1>
            <p className="mt-1 text-gray-400">
              {activePlatform === 'all' && activeCategory === 'all'
                ? '浏览我们所有优质的插件工具'
                : activePlatform !== 'all' && activeCategory === 'all'
                ? `浏览我们的 ${activePlatform} 平台插件`
                : activePlatform === 'all' && activeCategory !== 'all'
                ? `浏览我们的 ${activeCategory} 类插件`
                : `浏览我们的 ${activePlatform} 平台 ${activeCategory} 类插件`}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
          </div>
        </div>
        
        {/* 产品网格 */}
        <ProductGrid platform={activePlatform} category={activeCategory} viewMode={viewMode} />
      </div>
    </div>
  );
}
