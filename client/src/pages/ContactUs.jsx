import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import backgroundImage from '../assets/handing.jpg';

export default function ContactUs() {
  return (
    <div
      className='max-w-6xl mx-auto p-5'
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className='text-3xl font-bold mb-8 text-center text-white'>Contact Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='border rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white bg-opacity-80'>
          <FaPhone className='text-3xl text-blue-600 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Phone</h2>
          <p className='text-gray-600'>051 430 9845</p>
        </div>
        <div className='border rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white bg-opacity-80'>
          <FaEnvelope className='text-3xl text-blue-600 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Email</h2>
          <p className='text-gray-600'><a href='mailto:contact@primepropertyhub.com' className='text-blue-500 hover:underline'>realhome@gmail.com</a></p>
        </div>
        <div className='border rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white bg-opacity-80'>
          <FaMapMarkerAlt className='text-3xl text-blue-600 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Address</h2>
          <p className='text-gray-600'>1687 Market Street Johannesburg, 2000 Gauteng, South Africa</p>
        </div>
        <div className='border rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white bg-opacity-80'>
          <FaClock className='text-3xl text-blue-600 mb-4' />
          <h2 className='text-xl font-semibold mb-2'>Office Hours</h2>
          <p className='text-gray-600'>Monday: 7am - 6pm</p>
          <p className='text-gray-600'>Tuesday: 8am - 8pm</p>
          <p className='text-gray-600'>Wednesday: 9am - 7pm</p>
          <p className='text-gray-600'>Thursday: 9am - 6pm</p>
          <p className='text-gray-600'>Friday: 9am - 6pm</p>
          <p className='text-gray-600'>Saturday: 10am - 2pm</p>
          <p className='text-gray-600'>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}



