'use client';

import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-gray-800 bg-[#121212] text-white">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            FigmaHub
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/all-access" className="hover:text-blue-400">
                  All-Access
                </Link>
              </li>
              <li>
                <Link 
                  href="/become-author" 
                  className="hover:text-blue-400"
                >
                  Become an author
                </Link>
              </li>
              <li>
                <Link 
                  href="/spring-sale" 
                  className="text-[#FF6B00] font-medium hover:text-orange-400"
                >
                  Spring Sale
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1.5 text-sm hover:bg-gray-700"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/signup" 
              className="rounded-full bg-[#0066FF] px-4 py-1.5 text-sm font-medium hover:bg-blue-600"
            >
              Sign up
            </Link>
            <Link 
              href="/login" 
              className="rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium hover:bg-gray-800"
            >
              Log in
            </Link>
          </div>
          
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0066FF] text-xs">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
} 