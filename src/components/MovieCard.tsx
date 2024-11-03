import React from 'react';

interface MovieCardProps {
  imageUrl: string;
  title: string;
}

export function MovieCard({ imageUrl, title }: MovieCardProps) {
  return (
    <div className="aspect-video bg-zinc-800 rounded-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}