import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[56.25vw] min-h-[400px] max-h-[800px]">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
        className="w-full h-full object-cover"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Featured Title
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
          Watch the latest blockbuster movies and TV shows. Stream exclusive content only on Phoenix Movies.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition">
            Play Now
          </button>
          <button className="px-6 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-md transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}