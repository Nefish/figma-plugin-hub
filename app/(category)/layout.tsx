import { ReactNode } from 'react';
import { CategoryLayout } from '../components/layout/CategoryLayout';

interface CategoryLayoutWrapperProps {
  children: ReactNode;
}

export default function CategoryLayoutWrapper({
  children,
}: CategoryLayoutWrapperProps) {
  return (
    <CategoryLayout
      title="分类浏览"
      description="浏览我们的UI工具包分类"
    >
      {children}
    </CategoryLayout>
  );
} 