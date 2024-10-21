import React from 'react';


export default function CreateListing() {
 
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg'
            id='description'
            required
          />
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg'
            id='address'
            required
          />
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input type='checkbox' id='sale' className='w-5 rounded-full border border-gray-400' />
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='rent' className='w-5 rounded-full border border-gray-400' />
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='parking' className='w-5 rounded-full border border-gray-400' />
              <span>Parking</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='furnished' className='w-5 rounded-full border border-gray-400' />
              <span>Pet-Friendly</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='furnished' className='w-5 rounded-full border border-gray-400' />
              <span>Wifi</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='accessibility' className='w-5 rounded-full border border-gray-400' />
              <span>Accessibility</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='boreholwatersystem' className='w-5 rounded-full border border-gray-400' />
              <span>Borehole/Water System</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='pool' className='w-5 rounded-full border border-gray-400' />
              <span>Pool</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='garden' className='w-5 rounded-full border border-gray-400' />
              <span>Garden</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='furnished' className='w-5 rounded-full border border-gray-400' />
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='offer' required className='w-5 rounded-full border border-gray-400' />
              <span>Offer</span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
  <p>Security</p>
  <label>
    <input type='checkbox' value="community-security" className='mr-2' />
    Community Security
  </label>
  <label>
    <input type='checkbox' value="cameras" className='mr-2' />
    Cameras
  </label>
  <label>
    <input type='checkbox' value="alarm-system" className='mr-2' />
    Alarm system
  </label>
  <label>
    <input type='checkbox' value="sensor" className='mr-2' />
    Sensor
  </label>
  <label>
    <input type='checkbox' value="access-cards" className='mr-2' />
    Access cards
  </label>
</div>
          <div className='flex items-center gap-2'>
            <input type='number' id='bedrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' />
            <p>Bedrooms</p>
          </div>
          <div className='flex items-center gap-2'>
            <input type='number' id='bathrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg' />
            <p>Bathrooms</p>
          </div>
          <div className='flex items-center gap-2'>
            <input type='number' id='regularPrice' min='120000' max='10000000' required className='p-3 border border-gray-300 rounded-lg' />
            <div className='flex flex-col items-center'>
              <p>Regular Price</p>
              <span className='text-xs'>(R / full price/ month)</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <input type='number' id='discountPrice' min='0' max='10000000' required className='p-3 border border-gray-300 rounded-lg' />
            <div className='flex flex-col items-center'>
              <p>Discount Price</p>
              <span className='text-xs'>(R / full price/ month)</span>
            </div>
          </div>
          </div>
        <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold'>
            Images:
            <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
          </p>
          <div className='flex gap-4'>
            <input
              className='p-3 border border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
            <button type='button' className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>
              Upload
            </button>
          </div>
        </div>
        </form>
    </main>
  );
}

