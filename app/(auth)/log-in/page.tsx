'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, Facebook, Github, Twitter } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div>
      <h1 className="mb-6 text-center text-2xl font-bold text-white">登录账户</h1>
      
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">电子邮件</label>
          <input
            type="email"
            className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">密码</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              placeholder="输入密码"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-[#0066FF]"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span className="ml-2 text-sm text-gray-300">记住我</span>
          </label>
          
          <Link href="/forgot-password" className="text-sm text-[#0066FF] hover:underline">
            忘记密码？
          </Link>
        </div>
        
        <button className="w-full rounded-lg bg-[#0066FF] py-2 font-medium text-white hover:bg-blue-600">
          登录
        </button>
      </div>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#1A1A1A] px-2 text-gray-400">或通过以下方式登录</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-3">
          <button className="flex items-center justify-center rounded-lg bg-[#2A2A2A] py-2 hover:bg-gray-700">
            <Facebook className="h-5 w-5 text-[#1877F2]" />
          </button>
          <button className="flex items-center justify-center rounded-lg bg-[#2A2A2A] py-2 hover:bg-gray-700">
            <Twitter className="h-5 w-5 text-[#1DA1F2]" />
          </button>
          <button className="flex items-center justify-center rounded-lg bg-[#2A2A2A] py-2 hover:bg-gray-700">
            <Github className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          还没有账户？{' '}
          <Link href="/sign-up" className="font-medium text-[#0066FF] hover:underline">
            立即注册
          </Link>
        </p>
      </div>
    </div>
  );
} 