'use client';

import { useState } from 'react';
import { ProductGrid } from '@/app/components/layout/ProductGrid';
import { ViewToggle } from '@/app/components/features/ViewToggle';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';

export default function BrowsePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen">
      {/* 搜索和过滤区域 */}
      <div className="sticky top-0 z-10 bg-[#121212] py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="搜索UI工具包..."
                className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 pl-10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-lg bg-[#2A2A2A] p-2 text-white md:hidden"
              >
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">浏览所有产品</h1>
          <p className="mt-1 text-gray-400">发现高品质的UI工具包和设计资源</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* 筛选器侧栏 - 桌面端 */}
          <div className="hidden md:block md:w-64 shrink-0">
            <div className="rounded-lg bg-[#1A1A1A] p-4">
              <h2 className="mb-4 flex items-center gap-2 font-medium text-white">
                <Filter className="h-4 w-4" />
                筛选器
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-sm font-medium text-white">价格范围</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">免费</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">$1 - $50</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">$51 - $100</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">$101+</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-2 text-sm font-medium text-white">类别</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">移动应用</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">网页设计</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">仪表盘</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">电子商务</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-2 text-sm font-medium text-white">评分</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">4星及以上</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#0066FF]" />
                      <span className="text-sm text-gray-300">3星及以上</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 移动端筛选器 - 可折叠 */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-black/80 md:hidden">
              <div className="h-full w-4/5 max-w-xs bg-[#1A1A1A] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-medium text-white">筛选器</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-white">价格范围</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">免费</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">$1 - $50</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">$51 - $100</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">$101+</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-white">类别</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">移动应用</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">网页设计</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">仪表盘</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">电子商务</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-white">评分</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">4星及以上</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">3星及以上</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full rounded-lg bg-[#0066FF] py-2 font-medium text-white"
                  >
                    应用筛选器
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* 产品网格 */}
          <div className="flex-1">
            <ProductGrid category={activeCategory} viewMode={viewMode} />
            
            {/* 加载更多按钮 */}
            <div className="mt-8 text-center">
              <button className="rounded-lg bg-[#2A2A2A] px-6 py-3 font-medium text-white hover:bg-gray-700">
                加载更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 