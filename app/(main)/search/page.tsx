'use client';

import { useState } from 'react';
import { ProductGrid } from '@/app/components/layout/ProductGrid';
import { ViewToggle } from '@/app/components/features/ViewToggle';
import { Search as SearchIcon, SlidersHorizontal, X, Filter } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // 模拟搜索结果
  const searchResults = searchQuery ? 
    Array.from({ length: 12 }).map((_, i) => `搜索结果 ${i + 1}`) :
    [];
  
  // 模拟最近搜索
  const recentSearches = ['仪表盘UI', '移动应用设计', '网页模板', 'UI组件'];
  
  // 模拟热门分类
  const popularCategories = [
    { id: 'dashboard', name: '仪表盘' },
    { id: 'mobile', name: '移动应用' },
    { id: 'web', name: '网页设计' },
    { id: 'ecommerce', name: '电子商务' },
    { id: 'social', name: '社交媒体' },
    { id: 'health', name: '健康应用' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">搜索UI工具包</h1>
          <p className="text-gray-400">寻找适合您的项目的完美UI工具包</p>
        </div>
        
        {/* 搜索栏 */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索UI工具包、组件或作者..."
              className="w-full rounded-lg bg-[#2A2A2A] px-4 py-3 pl-12 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            />
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
          
          {!searchQuery && (
            <div className="mt-4">
              <h3 className="mb-2 text-sm font-medium text-gray-300">最近搜索</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search)}
                    className="rounded-full bg-[#2A2A2A] px-3 py-1 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {searchQuery ? (
          <div className="flex flex-col gap-6 md:flex-row">
            {/* 筛选器侧栏 - 桌面端 */}
            <div className="hidden md:block md:w-64 shrink-0">
              <div className="rounded-lg bg-[#1A1A1A] p-4">
                <h2 className="mb-4 flex items-center gap-2 font-medium text-white">
                  <Filter className="h-4 w-4" />
                  筛选结果
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-white">分类</h3>
                    <div className="space-y-2">
                      {popularCategories.map((category) => (
                        <label key={category.id} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded text-[#0066FF]" />
                          <span className="text-sm text-gray-300">{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
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
            
            {/* 移动端筛选器切换按钮 */}
            <div className="mb-4 md:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A2A2A] py-3 text-white"
              >
                {showFilters ? (
                  <>
                    <X className="h-4 w-4" />
                    隐藏筛选器
                  </>
                ) : (
                  <>
                    <SlidersHorizontal className="h-4 w-4" />
                    显示筛选器
                  </>
                )}
              </button>
            </div>
            
            {/* 移动端筛选器 - 可折叠 */}
            {showFilters && (
              <div className="fixed inset-0 z-50 bg-black/80 md:hidden">
                <div className="h-full w-4/5 max-w-xs bg-[#1A1A1A] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-medium text-white">筛选结果</h2>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-white">分类</h3>
                      <div className="space-y-2">
                        {popularCategories.map((category) => (
                          <label key={category.id} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded text-[#0066FF]" />
                            <span className="text-sm text-gray-300">{category.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
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
            
            {/* 搜索结果 */}
            <div className="flex-1">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-gray-400">
                    找到 <span className="font-medium text-white">{searchResults.length}</span> 个关于 
                    <span className="font-medium text-white"> "{searchQuery}" </span>的结果
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
                </div>
              </div>
              
              <ProductGrid viewMode={viewMode} />
            </div>
          </div>
        ) : (
          <div>
            <h2 className="mb-4 text-xl font-medium text-white">热门分类</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {popularCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/${category.id}`}
                  className="flex aspect-square flex-col items-center justify-center rounded-lg bg-[#1A1A1A] p-4 text-center transition-colors hover:bg-[#2A2A2A]"
                >
                  <span className="mb-2 text-2xl">🎨</span>
                  <span className="font-medium text-white">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 