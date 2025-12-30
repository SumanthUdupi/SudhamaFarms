import React from 'react';
import Logo from '../assets/images/Logo.png';

const Header = () => {
  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <nav className="container mx-auto px-6 md:px-10 py-3 flex justify-between items-center">
        <a href="#" className="block" data-page="home">
          <img src={Logo} alt="SuDhama Logo" className="h-16 w-auto transition-all duration-500" />
        </a>
        <div className="hidden md:flex items-center space-x-2 text-sm font-medium tracking-wide">
          <a href="#" className="nav-link active" data-page="home">Home</a>
          <a href="#" className="nav-link" data-page="farmhouse">Our Farmhouse</a>
          <a href="#" className="nav-link" data-page="farm">The Farm</a>
          <a href="#" className="nav-link" data-page="cows">Our Cows</a>
          <a href="#" className="nav-link" data-page="story">Our Journey</a>
          <a href="#" className="nav-link" data-page="location">Visit Us</a>
        </div>
        <div className="hidden md:block">
          <a href="#location" data-page="location" className="px-5 py-2 border border-green-800 text-green-800 rounded-full text-sm hover:bg-green-800 hover:text-white transition-colors font-semibold">Plan Your Visit</a>
        </div>
        <button id="mobile-menu-button" className="md:hidden text-stone-800 z-50">
          <svg id="menu-open-icon" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <svg id="menu-close-icon" className="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </nav>
      <div id="mobile-menu" className="md:hidden fixed top-0 left-0 w-full h-screen bg-stone-100 flex flex-col items-center justify-center space-y-8 text-2xl">
        <a href="#" className="nav-link mobile-nav-link" data-page="home">Home</a>
        <a href="#" className="nav-link mobile-nav-link" data-page="farmhouse">Our Farmhouse</a>
        <a href="#" className="nav-link mobile-nav-link" data-page="farm">The Farm</a>
        <a href="#" className="nav-link mobile-nav-link" data-page="cows">Our Cows</a>
        <a href="#" className="nav-link mobile-nav-link" data-page="story">Our Journey</a>
        <a href="#" className="nav-link mobile-nav-link" data-page="location">Visit Us</a>
      </div>
    </header>
  );
};

export default Header;