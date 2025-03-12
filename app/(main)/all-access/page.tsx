'use client';

import { Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// 定义价格计划项的接口
interface PricingTier {
  name: string;
  price: number;
  discountedPrice?: number;
  billing: string;
  description: string;
  features: string[];
  notIncluded: string[];
  cta: string;
  highlighted: boolean;
}

export default function AllAccessPage() {
  console.log('渲染 AllAccessPage 组件');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  // 使用useEffect确保状态变化会触发重新渲染
  useEffect(() => {
    // 仅用于调试，确认状态变化
    console.log('当前计费周期:', billingPeriod);
    
    // 根据计费周期更新页面标题（仅用于调试）
    document.title = `FigmaHub - ${billingPeriod === 'monthly' ? '月付' : '年付'}会员`;
  }, [billingPeriod]);
  
  // 明确定义切换函数
  const switchToMonthly = () => {
    console.log('点击切换到月付');
    if (billingPeriod !== 'monthly') {
      console.log('从', billingPeriod, '切换到月付');
      setBillingPeriod('monthly');
    } else {
      console.log('已经是月付，无需切换');
    }
  };
  
  const switchToYearly = () => {
    console.log('点击切换到年付');
    if (billingPeriod !== 'yearly') {
      console.log('从', billingPeriod, '切换到年付');
      setBillingPeriod('yearly');
    } else {
      console.log('已经是年付，无需切换');
    }
  };
  
  // 定义不同付款周期的价格表
  const pricingData: Record<'monthly' | 'yearly', PricingTier[]> = {
    monthly: [
      {
        name: '基础会员',
        price: 29,
        billing: '每月',
        description: '适合个人设计师和小型团队',
        features: [
          '访问30+UI工具包',
          '基本更新',
          '标准支持',
          '每月下载限制：5个',
          '商用许可'
        ],
        notIncluded: [
          '源文件访问',
          '高级组件',
          '优先支持',
          '无限下载'
        ],
        cta: '选择基础计划',
        highlighted: false,
      },
      {
        name: '专业会员',
        price: 79,
        billing: '每月',
        description: '适合专业设计师和中型设计团队',
        features: [
          '访问100+UI工具包',
          '优先更新',
          '24/7支持',
          '每月下载限制：25个',
          '商用许可',
          '源文件访问',
          '高级组件'
        ],
        notIncluded: [
          '优先支持',
          '无限下载'
        ],
        cta: '选择专业计划',
        highlighted: true,
      },
      {
        name: '企业会员',
        price: 199,
        billing: '每月',
        description: '适合企业和大型设计团队',
        features: [
          '访问所有UI工具包',
          '最先获得更新',
          '专属客户经理',
          '无限下载',
          '商用许可',
          '源文件访问',
          '高级组件',
          '优先支持',
          '自定义品牌'
        ],
        notIncluded: [],
        cta: '联系销售',
        highlighted: false,
      }
    ],
    yearly: [
      {
        name: '基础会员',
        price: 290,
        discountedPrice: 245,
        billing: '每年',
        description: '适合个人设计师和小型团队',
        features: [
          '访问30+UI工具包',
          '基本更新',
          '标准支持',
          '每月下载限制：5个',
          '商用许可'
        ],
        notIncluded: [
          '源文件访问',
          '高级组件',
          '优先支持',
          '无限下载'
        ],
        cta: '选择基础计划',
        highlighted: false,
      },
      {
        name: '专业会员',
        price: 790,
        discountedPrice: 670,
        billing: '每年',
        description: '适合专业设计师和中型设计团队',
        features: [
          '访问100+UI工具包',
          '优先更新',
          '24/7支持',
          '每月下载限制：25个',
          '商用许可',
          '源文件访问',
          '高级组件'
        ],
        notIncluded: [
          '优先支持',
          '无限下载'
        ],
        cta: '选择专业计划',
        highlighted: true,
      },
      {
        name: '企业会员',
        price: 1990,
        discountedPrice: 1690,
        billing: '每年',
        description: '适合企业和大型设计团队',
        features: [
          '访问所有UI工具包',
          '最先获得更新',
          '专属客户经理',
          '无限下载',
          '商用许可',
          '源文件访问',
          '高级组件',
          '优先支持',
          '自定义品牌'
        ],
        notIncluded: [],
        cta: '联系销售',
        highlighted: false,
      }
    ]
  };
  
  // 根据当前选择的付款周期获取价格表
  const tiers = pricingData[billingPeriod];
  console.log('当前显示价格套餐:', billingPeriod, '共', tiers.length, '个套餐');

  return (
    <div className="min-h-screen bg-[#121212] pb-16">
      <div className="bg-gradient-to-b from-[#0066FF]/20 to-transparent pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">全部访问会员</h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
            解锁我们所有的高级UI工具包和设计资源。一个会员，无限创意可能。
          </p>
          
          <div className="mb-8 inline-flex items-center rounded-full bg-[#2A2A2A] p-1">
            <button 
              type="button"
              onClick={switchToMonthly}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                billingPeriod === 'monthly' 
                  ? 'bg-[#0066FF] text-white' 
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              月付
            </button>
            <button 
              type="button"
              onClick={switchToYearly}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                billingPeriod === 'yearly' 
                  ? 'bg-[#0066FF] text-white' 
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              年付
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 价格卡片 */}
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl ${
                tier.highlighted 
                  ? 'bg-gradient-to-b from-[#0066FF]/20 to-[#1A1A1A] ring-2 ring-[#0066FF]'
                  : 'bg-[#1A1A1A]'
              } overflow-hidden p-6`}
            >
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline">
                {tier.discountedPrice ? (
                  <>
                    <span className="text-4xl font-extrabold text-white">${tier.discountedPrice}</span>
                    <span className="ml-1 text-gray-400">/{tier.billing}</span>
                    <span className="ml-2 rounded-full bg-[#FF6B00] px-2 py-0.5 text-xs font-medium text-white">
                      省${tier.price - tier.discountedPrice}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-white">${tier.price}</span>
                    <span className="ml-1 text-gray-400">/{tier.billing}</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
              
              <button
                className={`mt-6 w-full rounded-lg ${
                  tier.highlighted
                    ? 'bg-[#0066FF] hover:bg-blue-600'
                    : 'bg-[#2A2A2A] hover:bg-gray-700'
                } py-2 font-medium text-white`}
              >
                {tier.cta}
              </button>
              
              <div className="mt-6">
                <h4 className="mb-4 font-medium text-white">包含功能：</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <X className="mr-2 h-5 w-5 shrink-0 text-gray-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ部分 */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">常见问题</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-[#1A1A1A] p-6">
              <h3 className="mb-2 font-medium text-white">会员包括哪些内容？</h3>
              <p className="text-gray-400">我们的会员计划包括所有UI工具包、图标库、设计模板和持续更新的资源。不同等级提供不同的访问权限和功能。</p>
            </div>
            
            <div className="rounded-lg bg-[#1A1A1A] p-6">
              <h3 className="mb-2 font-medium text-white">我可以随时取消吗？</h3>
              <p className="text-gray-400">是的，您可以随时取消您的会员资格。在当前账单周期结束后，您将不再被收费。</p>
            </div>
            
            <div className="rounded-lg bg-[#1A1A1A] p-6">
              <h3 className="mb-2 font-medium text-white">会员资格是否包括商业用途？</h3>
              <p className="text-gray-400">是的，所有会员等级都包括商业用途许可，允许您在客户项目和商业产品中使用我们的资源。</p>
            </div>
            
            <div className="rounded-lg bg-[#1A1A1A] p-6">
              <h3 className="mb-2 font-medium text-white">你们支持哪些设计工具？</h3>
              <p className="text-gray-400">我们的资源支持Figma、Sketch、Adobe XD等主流设计工具。大多数资源提供多种格式版本。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 