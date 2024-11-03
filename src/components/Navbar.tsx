import React from 'react';
import { Flame, Search, Bell, ChevronDown, User } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-zinc-900' : 'bg-gradient-to-b from-zinc-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Phoenix Movies
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-orange-500 transition">Home</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">TV Shows</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">Movies</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">New & Popular</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition">My List</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-300 hover:text-orange-500 transition">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-orange-500 transition">
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <ChevronDown className="h-4 w-4 text-gray-300 group-hover:text-orange-500 transition" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}