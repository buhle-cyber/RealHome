import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import logo from '../assets/symbol.png';
import chartImage from '../assets/charts.jpeg';
import propertyGuidesImage from '../assets/guides.jpeg';
import rentalAdviceImage from '../assets/advice.jpg';
import referredImage from '../assets/referred.jpeg';
import soldPricesImage from '../assets/price.jpeg';
import sellingGuideImage from '../assets/guide.jpg';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Discover your <span className='text-slate-500'>dream</span>
          <br />
          space effortlessly
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          RealHome is your ultimate destination for discovering ideal living spaces.
          <br />
          Explore an extensive selection of properties tailored to your needs.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Click here to get started with your dream...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div
              style={{
                background: `url(${listing.imageUrls[0]}) center no-repeat`,
                backgroundSize: 'cover',
              }}
              className='h-[500px]'
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Discover all things property */}
      <div className='max-w-6xl mx-auto p-3 my-10 text-center'>
        <h2 className='text-2xl font-semibold text-slate-600 mb-4'>Discover all things property</h2>
        <div className='flex justify-around'>
          {['Buying', 'Renting', 'Selling'].map((title) => (
            <div
              key={title}
              className='relative text-center cursor-pointer hover:bg-slate-200 transition duration-300 p-2'
              onClick={() => toggleSection(title)}
            >
              <h3 className='text-xl font-medium'>{title}</h3>
              {activeSection === title && (
                <div className='absolute inset-0 border-2 border-blue-500 rounded-md'></div>
              )}
            </div>
          ))}
        </div>

        {activeSection && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
            {activeSection === 'Buying' && (
              <>
                <div className='border p-4 flex flex-col items-center rounded-md'>
                  <img src={chartImage} alt='Chart' className='w-full h-32 object-cover rounded' />
                  <p className='my-2'>Explore sold prices of properties.</p>
                  <Link to='/sold-prices' className='text-blue-800 hover:underline'>View Sold Prices</Link>
                </div>
                <div className='border p-4 flex flex-col items-center rounded-md'>
                  <img src={propertyGuidesImage} alt='Property Guides' className='w-full h-32 object-cover rounded' />
                  <p className='my-2'>Get insights on buying properties.</p>
                  <Link to='/property-guides' className='text-blue-800 hover:underline'>View Property Guides</Link>
                </div>
              </>
            )}

            {activeSection === 'Renting' && (
              <>
                <div className='border p-4 flex flex-col items-center rounded-md'>
                  <img src={rentalAdviceImage} alt='Rental Advice' className='w-full h-32 object-cover rounded' />
                  <p className='my-2'>Get expert rental advice.</p>
                  <Link to='/rental-advice' className='text-blue-800 hover:underline'>Explore</Link>
                </div>
                <div className='border p-4 flex flex-col items-center rounded-md'>
                  <img src={referredImage} alt='Referred' className='w-full h-32 object-cover rounded' />
                  <p className='my-2'>Connect with referred agents.</p>
                  <Link to='/agents' className='text-blue-800 hover:underline'>Explore</Link>
                </div>
              </>
            )}

            {activeSection === 'Selling' && (
              <>
                <div className='border p-4 flex flex-col items-center rounded-md'>
                  <img src={soldPricesImage} alt='Sold Prices' className='w-full h-32 object-cover rounded' />
                  <p className='my-2'>Understand sold prices.</p>
                  <Link to='/sold-prices' className='text-blue-800 hover:underline'>View Sold Prices</Link>
                </div>
                <div className='border p-4 flex flex-col items-center rounded-md'>
                  <img src={sellingGuideImage} alt='Selling Guide' className='w-full h-32 object-cover rounded' />
                  <p className='my-2'>Learn about selling your property.</p>
                  <Link to='/selling-guide' className='text-blue-800 hover:underline'>View Selling Guide</Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* listing results for offer, sale and rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className='bg-slate-800 text-white py-8'>
        <div className='max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8 px-4'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>RealHome</h2>
            <img src={logo} alt='PrimePropertyHub Logo' className='h-30 w-80' />
            <p className='text-sm text-slate-400'>Connecting you with your dream home.</p>
            <div className='flex gap-4'>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-facebook fa-2x'></i>
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitter fa-2x'></i>
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram fa-2x'></i>
              </a>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin fa-2x'></i>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='text-sm text-slate-400'>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact-us'>Contact Us</Link></li>
              <li><Link to='/search'>All Listings</Link></li>
              <li><Link to='/faqs'>FAQs</Link></li>
              <li><Link to='/agents'>Need an Agent?</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-semibold'>Contact Information</h3>
            <ul className='text-sm text-slate-400'>
              <li>1687 Market Street Johannesburg, 2000 Gauteng, South Africa</li>
              <li>Phone: 051 430 9845</li>
              <li>Email: realhome@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center text-sm text-slate-400'>
          &copy; {new Date().getFullYear()} RealHome. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


