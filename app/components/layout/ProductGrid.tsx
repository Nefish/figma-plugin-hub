'use client';

import { ProductCard } from '../features/ProductCard';
import { products } from '@/app/data/products';

export function ProductGrid({ 
  platform = 'all',
  category = 'all',
  viewMode = 'grid'
}: { 
  platform?: string;
  category?: string;
  viewMode?: 'grid' | 'list';
}) {
  // Filter products based on platform and category
  let filteredProducts = products;
  
  // 先按平台筛选
  if (platform !== 'all') {
    filteredProducts = filteredProducts.filter(product => 
      product.platform === platform.toLowerCase()
    );
  }
  
  // 再按分类筛选
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(product => 
      product.category === category
    );
  }

  return (
    <div className={`grid gap-4 ${
      viewMode === 'grid' 
        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
        : 'grid-cols-1'
    }`}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          image=""
        />
      ))}
    </div>
  );
} 