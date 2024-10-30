import React from 'react';

const BuyingProperty = () => (
  <div className='bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h2 className='text-xl font-semibold mb-4 text-white'>How Easily It Is to Buy Property</h2>
    <p className='text-gray-100 mb-4'>
      Buying property is a streamlined process with the right guidance. From getting pre-approved for a mortgage to finalizing the purchase, each step is designed to be as straightforward as possible. With a dedicated real estate agent, you’ll navigate the process with ease.
    </p>
  </div>
);

const WhatToDo = () => (
  <div className='bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h2 className='text-xl font-semibold mb-4 text-white'>What to Do</h2>
    <ul className='list-disc list-inside text-gray-100'>
      <li className='mb-2'>Get pre-approved for a mortgage to know your budget.</li>
      <li className='mb-2'>Research neighborhoods and make a list of must-haves.</li>
      <li className='mb-2'>Work with a real estate agent to find suitable properties.</li>
      <li className='mb-2'>Visit properties and narrow down your choices.</li>
      <li className='mb-2'>Make an offer and negotiate terms.</li>
      <li className='mb-2'>Secure your financing and close the deal.</li>
    </ul>
  </div>
);

const HowAgentsGetPaid = () => (
  <div className='bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h2 className='text-xl font-semibold mb-4 text-white'>How Agents Get Paid</h2>
    <p className='text-gray-100 mb-4'>
      Real estate agents typically earn a commission based on the sale price of the property. This commission is usually paid by the seller and is a percentage of the final sale price. Agents work hard to ensure that both buyers and sellers get the best deal possible.
    </p>
  </div>
);

const PayingForProperty = () => (
  <div className='bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h2 className='text-xl font-semibold mb-4 text-white'>What to Do When You Want to Pay for a Property</h2>
    <ul className='list-disc list-inside text-gray-100'>
      <li className='mb-2'>Secure your mortgage or financing options.</li>
      <li className='mb-2'>Schedule a property inspection to identify any issues.</li>
      <li className='mb-2'>Review and sign the purchase agreement.</li>
      <li className='mb-2'>Close the deal and transfer the funds.</li>
      <li className='mb-2'>Complete the necessary paperwork and legal requirements.</li>
      <li className='mb-2'>Receive the keys and move into your new home.</li>
    </ul>
  </div>
);

export default function PropertyGuide() {
  return (
    <div className='max-w-6xl mx-auto p-5'>
      <h1 className='text-4xl font-bold mb-8 text-center text-blue-700'>Property Guide</h1>
      <section className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <BuyingProperty />
        <WhatToDo />
      </section>
      <section className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <HowAgentsGetPaid />
        <PayingForProperty />
      </section>
    </div>
  );
}



