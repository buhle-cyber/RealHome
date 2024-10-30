import React from 'react';
import maryImage from '../assets/mary.jpeg';
import janeImage from '../assets/jane.jpeg';

export default function About() {
  return (
    <div className='max-w-6xl mx-auto p-5'>
      <h1 className='text-3xl font-bold mb-8'>About Us</h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Our Purpose</h2>
        <p className='text-gray-600'>
          RealHome is an online platform designed to connect real estate agents and homeowners, facilitating the listing of properties for sale or rent. Our mission is to streamline the real estate process, making it easier for buyers and renters to find suitable properties while providing agents and homeowners a robust tool to showcase their listings.
        </p>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Who We Are</h2>
        <p className='text-gray-600'>
          RealHome was designed and developed by World Tech, a leading tech company specializing in innovative real estate solutions. With a deep understanding of the real estate market and a commitment to excellence, World Tech aims to enhance the property search experience through cutting-edge technology and user-friendly designs.
        </p>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col items-center'>
            <img src={maryImage} alt='Mary Developer' className='w-32 h-32 rounded-full mb-4' />
            <h3 className='text-xl font-semibold'>Mary Developer</h3>
            <p className='text-gray-500'>Lead Developer</p>
            <p className='text-gray-600 text-center'>
              Mary is the tech wizard behind RealHome, ensuring seamless functionality and user experience.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={janeImage} alt='Jane Checker' className='w-32 h-32 rounded-full mb-4' />
            <h3 className='text-xl font-semibold'>Jane Checker</h3>
            <p className='text-gray-500'>Database Checker</p>
            <p className='text-gray-600 text-center'>
              Jane meticulously handles the database, ensuring all property listings are accurate and up-to-date.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>What We Specialize In</h2>
        <p className='text-gray-600'>
          We help you sell and buy, and also rent properties. We specialize in:
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {['Houses', 'Luxury Houses', 'Villas', 'Cottages', 'Beach Houses', 'Townhouses', 'Apartments', 'Flats', 'Rooms'].map((item) => (
            <div key={item} className='border rounded-lg p-3 text-center hover:scale-105 transition-transform'>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



