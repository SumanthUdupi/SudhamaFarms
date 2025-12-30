import React from 'react';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-20">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <div className="inline-block p-2 bg-stone-100 rounded-full mx-auto mb-4">
          <a href="#" data-page="home"><img src={Logo} alt="SuDhama Logo" className="h-16 w-auto"></a>
        </div>
        <p className="text-stone-400">Where peace meets purpose. Where nature nurtures the soul.</p>
        <div className="mt-8 space-x-6 text-sm">
          <a href="#" className="hover:text-white transition" data-page="farmhouse">Our Farmhouse</a>
          <a href="#" className="hover:text-white transition" data-page="farm">The Farm</a>
          <a href="#" className="hover:text-white transition" data-page="cows">Our Cows</a>
          <a href="#" className="hover:text-white transition" data-page="story">Our Journey</a>
          <a href="#" className="hover:text-white transition" data-page="location">Visit Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;