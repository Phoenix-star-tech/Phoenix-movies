import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';

const TRENDING_MOVIES = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    title: "Movie 1"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&w=800&q=80",
    title: "Movie 2"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=800&q=80",
    title: "Movie 3"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=800&q=80",
    title: "Movie 4"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80",
    title: "Movie 5"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    title: "Movie 6"
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <div className="px-4 md:px-16 pb-16 -mt-16 relative z-10">
        <MovieRow title="Trending Now" movies={TRENDING_MOVIES} />
      </div>
    </div>
  );
}

export default App;