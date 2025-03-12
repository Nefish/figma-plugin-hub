'use client';

import { ReactNode } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface CategoryLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function CategoryLayout({ children, title, description }: CategoryLayoutProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex-1">
      <CategoryFilter 
        onPlatformChange={() => {}} 
        onCategoryChange={() => {}}
      />
      
      <main className="flex-1 bg-[#121212]">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            {description && <p className="mt-1 text-gray-400">{description}</p>}
          </div>
          
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* 移动端筛选器切换按钮 */}
            <div className="mb-4 lg:hidden">
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
            
            {/* 筛选器侧栏 */}
            <div
              className={`${
                showFilters ? 'block' : 'hidden'
              } lg:block lg:w-64 shrink-0`}
            >
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
                  
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-white">文件格式</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">Figma</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">Sketch</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-[#0066FF]" />
                        <span className="text-sm text-gray-300">XD</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 主内容区域 */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 