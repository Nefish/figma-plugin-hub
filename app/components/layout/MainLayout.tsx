'use client';

import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-[#1A1A1A] py-8 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold text-white">FigmaHub</h3>
              <p className="text-sm">高品质UI工具包和设计资源的市场平台</p>
            </div>
            <div>
              <h4 className="mb-3 font-medium text-white">产品</h4>
              <ul className="space-y-2 text-sm">
                <li>UI工具包</li>
                <li>图标库</li>
                <li>模板</li>
                <li>插件</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-medium text-white">资源</h4>
              <ul className="space-y-2 text-sm">
                <li>博客</li>
                <li>教程</li>
                <li>文档</li>
                <li>帮助中心</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-medium text-white">公司</h4>
              <ul className="space-y-2 text-sm">
                <li>关于我们</li>
                <li>联系我们</li>
                <li>使用条款</li>
                <li>隐私政策</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} FigmaHub. 保留所有权利。
          </div>
        </div>
      </footer>
    </>
  );
} 