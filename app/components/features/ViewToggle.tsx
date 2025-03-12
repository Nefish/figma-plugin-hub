'use client';

import { Grid, List } from 'lucide-react';

export function ViewToggle({ 
  viewMode, 
  onViewChange 
}: { 
  viewMode: 'grid' | 'list'; 
  onViewChange: (mode: 'grid' | 'list') => void;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-[#2A2A2A] p-1">
      <button
        onClick={() => onViewChange('grid')}
        className={`rounded p-1.5 transition-colors ${
          viewMode === 'grid' ? 'bg-[#0066FF] text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Grid view"
      >
        <Grid className="h-5 w-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`rounded p-1.5 transition-colors ${
          viewMode === 'list' ? 'bg-[#0066FF] text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="List view"
      >
        <List className="h-5 w-5" />
      </button>
    </div>
  );
} 