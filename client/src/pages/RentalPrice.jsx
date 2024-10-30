import React from 'react';

const RentalAdvice = () => {
  const tips = [
    "Determine your budget and stick to it.",
    "Research neighborhoods to find the best fit for your lifestyle.",
    "Consider the property's proximity to work, schools, and amenities.",
    "Inspect the property thoroughly before signing a lease.",
    "Read the lease agreement carefully and understand your rights.",
    "Ask about included utilities and other fees.",
    "Communicate openly with your landlord or property manager.",
    "Document the condition of the property before moving in.",
    "Know your lease terms and notice periods for moving out.",
    "Stay informed about local rental laws and regulations."
  ];

  return (
    <div className='max-w-6xl mx-auto p-5'>
      <h1 className='text-4xl font-bold mb-8 text-center text-slate-700'>Rental Advice</h1>
      <div className='bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 overflow-hidden rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4 text-white'>Top Tips for Renting a Property</h2>
        <ul className='list-disc list-inside text-gray-100'>
          {tips.map((tip, index) => (
            <li key={index} className='mb-2'>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RentalAdvice;

