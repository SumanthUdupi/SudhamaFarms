import React from 'react';

const FeatureCard = ({ title, description, imageSrc, linkText, dataPage }) => {
  return (
    <div className="group feature-card fade-in-up" style={{ transitionDelay: '100ms' }}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
        <img src={imageSrc} alt={title} className="w-full h-80 object-cover" />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-stone-600 mb-6">{description}</p>
          <button className="font-semibold text-amber-700 hover:underline" data-page={dataPage}>{linkText}</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;