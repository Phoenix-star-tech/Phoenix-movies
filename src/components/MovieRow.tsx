import React from 'react';
import { MovieCard } from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Array<{ id: number; imageUrl: string; title: string }>;
}

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imageUrl={movie.imageUrl}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}