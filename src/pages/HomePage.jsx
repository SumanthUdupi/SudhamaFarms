import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import FarmhouseImage from '../assets/images/Farmhouse V1.jpg';
import FarmImage from '../assets/images/Farm.jpg';
import CowImage from '../assets/images/Cow.jpg';

const HomePage = () => {
  return (
    <section id="home" className="page-section active">
      <HeroSection />
      <div id="home-features" className="py-32 md:py-40 bg-stone-100">
        <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="The Farmhouse"
            description="Experience authentic rural living in our handcrafted laterite home, where every stone tells a story of tradition and tranquility."
            imageSrc={FarmhouseImage}
            linkText="Discover the House →"
            dataPage="farmhouse"
          />
          <FeatureCard
            title="The Land"
            description="Step into our 3-acre paradise of organic abundance, where nature's bounty thrives in perfect harmony."
            imageSrc={FarmImage}
            linkText="Explore the Farm →"
            dataPage="farm"
          />
          <FeatureCard
            title="The Cows"
            description="Meet our gentle guardians of the farm, rescued souls who bring peace and purpose to every day."
            imageSrc={CowImage}
            linkText="Meet Our Cows →"
            dataPage="cows"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;