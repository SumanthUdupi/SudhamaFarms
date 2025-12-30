import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-image flex items-center justify-center text-center text-white relative">
      <div className="hero-content hero-text-parallax fade-in-up px-4 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>SuDhama (सुधाम)</h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto tracking-wide handwriting-text">In Sanskrit, a "Good Home" or a "Good Place." For us, it is a sanctuary in the heart of Udupi, dedicated to reclaiming the slow life, rooted in tradition, nature, and affection for the land.</p>
        <div className="mt-8 space-y-4">
          <a href="#home-features" className="inline-block bg-white/20 backdrop-blur-sm border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-lg font-semibold">Explore Our Sanctuary</a>
          <p className="text-sm text-white/80 max-w-md mx-auto">Escape the ordinary. Discover peace, purpose, and pure connection.</p>
        </div>
      </div>
      <div className="scroll-indicator">
        <svg className="w-8 h-8 text-white/80" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </div>
  );
};

export default HeroSection;