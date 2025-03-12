'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// 为不同分类定义背景颜色和emoji
const categoryStyleMap: Record<string, { color: string; emoji: string }> = {
  '文本处理': { color: '#FF5757', emoji: '📝' },
  '图像处理': { color: '#4CAF50', emoji: '🖼️' },
  '设计延展': { color: '#2196F3', emoji: '🎨' },
  '规范化': { color: '#FF9800', emoji: '📏' },
  '动效': { color: '#E91E63', emoji: '✨' },
  '沟通&协作': { color: '#9C27B0', emoji: '🤝' },
  '知识库': { color: '#3F51B5', emoji: '📚' },
};

// 为产品添加视频预览(目前只有图像处理助手有视频)
const productVideos: Record<string, string> = {
  '7': '/videos/image-processor-demo.mp4', // 图像处理助手的视频
  '9': '/videos/frame-checker-demo.mp4',   // frame检查的视频
};

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  author: {
    name: string;
    verified: boolean;
  };
  platform: string;
  category: string;
  description: string;
  image: string;
}

export function ProductCard({
  id,
  title,
  price,
  author,
  platform,
  category,
  description,
  image,
}: ProductCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = id in productVideos;
  
  // 获取分类的样式，如果没有则使用默认样式
  const categoryStyle = categoryStyleMap[category] || { color: '#777777', emoji: '🔌' };
  
  // 当鼠标悬停时播放视频
  useEffect(() => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play().catch(error => {
          console.error('视频播放失败:', error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering]);

  return (
    <div 
      className="group overflow-hidden rounded-lg bg-[#1A1A1A] transition-transform hover:translate-y-[-4px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={`/product/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {/* 纯色背景和emoji封面 */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: categoryStyle.color }}
          >
            <span className="text-5xl">{categoryStyle.emoji}</span>
          </div>
          
          {/* 视频预览 (只有在有视频的情况下显示) */}
          {hasVideo && (
            <video 
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}
              src={productVideos[id]}
              muted
              loop
              playsInline
            />
          )}
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-medium text-white">{title}</h3>
            <div className="text-right">
              {price > 0 ? (
                <span className="font-medium text-white">${price}</span>
              ) : (
                <span className="font-medium text-green-400">免费</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-400">by {author.name}</span>
            {author.verified && (
              <CheckCircle className="h-4 w-4 text-[#00FF00]" />
            )}
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="rounded-full bg-[#2A2A2A] px-2 py-0.5 text-xs text-gray-300"
            >
              {platform.toUpperCase()}
            </span>
            <span
              className="rounded-full bg-[#3A2A4A] px-2 py-0.5 text-xs text-purple-300"
            >
              {category}
            </span>
            
            {/* 视频标识 */}
            {hasVideo && (
              <span className="rounded-full bg-[#E53935] px-2 py-0.5 text-xs text-white">
                演示视频
              </span>
            )}
          </div>
          <div className="mt-2 text-xs text-gray-400 line-clamp-2">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
} 