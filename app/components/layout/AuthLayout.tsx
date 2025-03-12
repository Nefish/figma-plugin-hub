'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto flex min-h-screen flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl font-bold text-white">FigmaHub</h1>
            </Link>
          </div>
          
          <div className="rounded-lg bg-[#1A1A1A] p-8 shadow-lg">
            {children}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} FigmaHub. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 