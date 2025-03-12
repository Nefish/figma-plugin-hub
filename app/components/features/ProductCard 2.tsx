'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  author: {
    name: string;
    verified: boolean;
  };
  platform: string;
  description: string;
  image: string;
}

export function ProductCard({
  id,
  title,
  price,
  author,
  platform,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg bg-[#1A1A1A] transition-transform hover:translate-y-[-4px]">
      <Link href={`/product/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            width={600}
            height={400}
          />
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
          <div className="mt-2">
            <span
              className="rounded-full bg-[#2A2A2A] px-2 py-0.5 text-xs text-gray-300"
            >
              {platform.toUpperCase()}
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-400 line-clamp-2">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
} 