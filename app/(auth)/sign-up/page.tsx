'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, Facebook, Github, Twitter } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  return (
    <div>
      <h1 className="mb-6 text-center text-2xl font-bold text-white">创建账户</h1>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">名</label>
            <input
              type="text"
              className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              placeholder="输入名"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">姓</label>
            <input
              type="text"
              className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
              placeholder="输入姓"
            />
          </div>
        </div>
        
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
              placeholder="创建密码"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">密码必须至少包含8个字符，包括字母和数字</p>
        </div>
        
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 rounded text-[#0066FF]"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <span className="ml-2 text-sm text-gray-300">
              我同意 FigmaHub 的
              <Link href="/terms" className="ml-1 text-[#0066FF] hover:underline">
                服务条款
              </Link>
              {' '}和{' '}
              <Link href="/privacy" className="text-[#0066FF] hover:underline">
                隐私政策
              </Link>
            </span>
          </label>
        </div>
        
        <button 
          className={`w-full rounded-lg py-2 font-medium text-white ${
            agreeTerms ? 'bg-[#0066FF] hover:bg-blue-600' : 'bg-[#0066FF]/50 cursor-not-allowed'
          }`}
          disabled={!agreeTerms}
        >
          注册
        </button>
      </div>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#1A1A1A] px-2 text-gray-400">或通过以下方式注册</span>
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
          已有账户？{' '}
          <Link href="/log-in" className="font-medium text-[#0066FF] hover:underline">
            登录
          </Link>
        </p>
      </div>
    </div>
  );
} 