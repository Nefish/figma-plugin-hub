'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  // 模拟购物车商品
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: '仪表盘UI工具包',
      price: 79,
      discountedPrice: 59,
      quantity: 1,
      image: 'https://picsum.photos/id/1/300/200',
    },
    {
      id: '2',
      title: '移动应用UI套件',
      price: 89,
      quantity: 1,
      image: 'https://picsum.photos/id/20/300/200',
    },
  ]);
  
  // 移除商品
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // 更改数量
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // 计算总价
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discountedPrice || item.price;
    return total + itemPrice * item.quantity;
  }, 0);
  
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">购物车</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* 购物车商品 */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-[#1A1A1A] p-6">
                <h2 className="mb-4 text-xl font-medium text-white">购物车商品</h2>
                
                <div className="divide-y divide-gray-800">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-white">
                            <h3>{item.title}</h3>
                            <p className="ml-4">
                              {item.discountedPrice ? (
                                <>
                                  <span className="text-sm text-gray-400 line-through">${item.price}</span>
                                  <span className="ml-2">${item.discountedPrice}</span>
                                </>
                              ) : (
                                <span>${item.price}</span>
                              )}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="rounded-full bg-[#2A2A2A] p-1 text-white hover:bg-gray-700"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2 min-w-8 text-center text-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="rounded-full bg-[#2A2A2A] p-1 text-white hover:bg-gray-700"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="font-medium text-[#0066FF] hover:text-blue-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 订单摘要 */}
            <div className="lg:col-span-1">
              <div className="rounded-lg bg-[#1A1A1A] p-6">
                <h2 className="mb-4 text-xl font-medium text-white">订单摘要</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-800 pb-4">
                    <p className="text-gray-300">小计</p>
                    <p className="font-medium text-white">${subtotal.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between border-b border-gray-800 pb-4">
                    <p className="text-gray-300">税费 (5%)</p>
                    <p className="font-medium text-white">${tax.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between pt-2">
                    <p className="text-lg font-medium text-white">总计</p>
                    <p className="text-lg font-bold text-white">${total.toFixed(2)}</p>
                  </div>
                  
                  <button className="mt-6 w-full rounded-lg bg-[#0066FF] py-3 font-medium text-white hover:bg-blue-600">
                    结账
                  </button>
                  
                  <div className="mt-4 text-center">
                    <Link
                      href="/browse"
                      className="text-sm font-medium text-[#0066FF] hover:underline"
                    >
                      继续购物
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* 相关产品 */}
              <div className="mt-8 rounded-lg bg-[#1A1A1A] p-6">
                <h2 className="mb-4 text-xl font-medium text-white">你可能也喜欢</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src="https://picsum.photos/id/26/300/200"
                        alt="AI Dashboard Templates"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-white">AI仪表盘模板</h3>
                      <p className="text-sm text-gray-400">$99</p>
                    </div>
                    <button className="ml-auto rounded-lg bg-[#2A2A2A] px-3 py-1 text-sm text-white hover:bg-gray-700">
                      添加
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src="https://picsum.photos/id/42/300/200"
                        alt="Travel App UI Kit"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-white">旅行应用UI工具包</h3>
                      <p className="text-sm text-gray-400">$69</p>
                    </div>
                    <button className="ml-auto rounded-lg bg-[#2A2A2A] px-3 py-1 text-sm text-white hover:bg-gray-700">
                      添加
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg bg-[#1A1A1A] p-16">
            <div className="mb-4 rounded-full bg-[#2A2A2A] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-xl font-medium text-white">购物车为空</h2>
            <p className="mb-6 text-center text-gray-400">
              看起来您的购物车中还没有任何商品。
            </p>
            <Link
              href="/browse"
              className="rounded-lg bg-[#0066FF] px-6 py-2 font-medium text-white hover:bg-blue-600"
            >
              浏览UI工具包
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 