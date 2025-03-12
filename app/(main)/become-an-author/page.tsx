'use client';

import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function BecomeAuthorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const benefits = [
    {
      title: '全球影响力',
      description: '接触我们庞大的全球设计师社区，提高您的影响力和品牌知名度。',
      image: 'https://picsum.photos/id/26/600/400',
    },
    {
      title: '持续收入',
      description: '通过销售您的设计资源赚取持续的被动收入，并获得有竞争力的分成。',
      image: 'https://picsum.photos/id/180/600/400',
    },
    {
      title: '专业成长',
      description: '加入我们的设计师社区，接触行业领袖，并参与专属活动和研讨会。',
      image: 'https://picsum.photos/id/63/600/400',
    },
  ];

  const requirements = [
    '高质量的原创UI设计',
    '良好的组件组织和文件结构',
    '响应式设计和多平台支持',
    '详细的文档和使用说明',
    '定期更新和技术支持'
  ];

  const successStories = [
    {
      name: '王小明',
      role: 'UI/UX设计师',
      quote: '成为FigmaHub的作者彻底改变了我的职业生涯。我现在每月通过销售UI工具包赚取超过5000美元的被动收入。',
      avatar: 'https://picsum.photos/id/64/100/100',
    },
    {
      name: '李晓华',
      role: '自由设计师',
      quote: '平台提供的曝光度让我的作品得到了全球认可。我的客户基础已经扩展到了20多个国家。',
      avatar: 'https://picsum.photos/id/65/100/100',
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* 英雄部分 */}
      <div className="bg-gradient-to-b from-[#0066FF]/20 to-transparent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">成为FigmaHub作者</h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
            分享您的设计才华，接触全球设计师社区，并获得被动收入
          </p>
          <button
            onClick={() => setCurrentStep(1)}
            className="rounded-lg bg-[#0066FF] px-8 py-3 font-medium text-white hover:bg-blue-600"
          >
            立即申请
          </button>
        </div>
      </div>

      {/* 好处部分 */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">为什么要成为FigmaHub作者</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-[#1A1A1A]">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 成功案例 */}
      <div className="bg-[#1A1A1A] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">作者成功案例</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {successStories.map((story, index) => (
              <div key={index} className="rounded-lg bg-[#2A2A2A] p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{story.name}</h3>
                    <p className="text-sm text-gray-400">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 要求部分 */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">成为作者的要求</h2>
        <div className="mx-auto max-w-2xl rounded-lg bg-[#1A1A1A] p-8">
          <ul className="space-y-4">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-gray-300">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 申请表单 */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">申请成为作者</h2>
        
        <div className="mx-auto max-w-3xl rounded-lg bg-[#1A1A1A] p-8">
          {/* 进度指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      currentStep > index
                        ? 'bg-[#0066FF] text-white'
                        : currentStep === index + 1
                        ? 'border-2 border-[#0066FF] bg-transparent text-white'
                        : 'border-2 border-gray-600 bg-transparent text-gray-600'
                    }`}
                  >
                    {currentStep > index ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < totalSteps - 1 && (
                    <div
                      className={`h-1 w-16 md:w-32 ${
                        currentStep > index + 1
                          ? 'bg-[#0066FF]'
                          : 'bg-gray-600'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between">
              <span className="text-sm text-gray-400">个人信息</span>
              <span className="text-sm text-gray-400">作品集</span>
              <span className="text-sm text-gray-400">确认</span>
            </div>
          </div>
          
          {/* 表单步骤 */}
          <div className="mt-8">
            {currentStep === 1 && (
              <div>
                <h3 className="mb-6 text-xl font-medium text-white">个人信息</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-300">全名</label>
                    <input
                      type="text"
                      className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      placeholder="输入您的全名"
                    />
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
                    <label className="mb-1 block text-sm font-medium text-gray-300">设计经验</label>
                    <select className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#0066FF]">
                      <option value="">选择经验水平</option>
                      <option value="1-2">1-2年</option>
                      <option value="3-5">3-5年</option>
                      <option value="5+">5年以上</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-300">个人网站或作品集链接</label>
                    <input
                      type="url"
                      className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div>
                <h3 className="mb-6 text-xl font-medium text-white">上传作品集</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-300">作品描述</label>
                    <textarea
                      className="h-32 w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                      placeholder="简要描述您的设计风格和专长..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-300">上传样例作品</label>
                    <div className="mt-2 flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-[#2A2A2A] p-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-400">拖放文件至此处或</p>
                        <button className="mt-2 rounded-lg bg-[#0066FF] px-4 py-1 text-sm font-medium text-white hover:bg-blue-600">
                          浏览文件
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      支持PDF, PNG, JPG。最大文件大小: 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div>
                <h3 className="mb-6 text-xl font-medium text-white">最后确认</h3>
                <div className="rounded-lg bg-[#2A2A2A] p-4">
                  <p className="text-gray-300">
                    提交申请后，我们的团队将在3-5个工作日内审核您的资料。如果您的申请被接受，我们将通过电子邮件与您联系，提供下一步详情。
                  </p>
                </div>
                <div className="mt-4">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 rounded text-[#0066FF]" />
                    <span className="ml-2 text-sm text-gray-300">
                      我同意FigmaHub的<a href="#" className="text-[#0066FF]">服务条款</a>和<a href="#" className="text-[#0066FF]">隐私政策</a>
                    </span>
                  </label>
                </div>
              </div>
            )}
            
            {/* 导航按钮 */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className={`rounded-lg border border-gray-600 px-6 py-2 font-medium text-white ${
                  currentStep === 1 ? 'invisible' : ''
                }`}
              >
                上一步
              </button>
              <button
                onClick={currentStep < totalSteps ? nextStep : () => {}}
                className="rounded-lg bg-[#0066FF] px-6 py-2 font-medium text-white hover:bg-blue-600"
              >
                {currentStep < totalSteps ? '下一步' : '提交申请'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 