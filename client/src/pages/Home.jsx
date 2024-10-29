import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import logo from '../assets/symbol.png'

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
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
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
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
        {rentListings && rentListings.length > 0 && (
          <div className=''>
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
        {saleListings && saleListings.length > 0 && (
          <div className=''>
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
            <img src={logo} alt='PrimePropertyHub Logo' className='h-30 w-80'></img>
          <p className='text-sm text-slate-400'>Connecting you with your dream home.</p> 
          <div className='flex gap-4'> <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'> 
          <i className='fab fa-facebook fa-2x'></i> </a> <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'> 
          <i className='fab fa-twitter fa-2x'></i> </a> <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'> 
          <i className='fab fa-instagram fa-2x'></i> </a> <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'> <i className='fab fa-linkedin fa-2x'></i> </a> </div> </div> <div className='flex flex-col gap-4'> 
            <h3 className='text-xl font-semibold'>Quick Links</h3> 
            <ul className='text-sm text-slate-400'> 
              <li>
                <Link to='/about'>About Us</Link>
                </li> 
                <li><Link to='/contact-us'>Contact Us</Link>
                </li> 
            <li>
              <Link to='/search'>All Listings</Link>
              </li> 
              <li><Link to='/faqs'>FAQs</Link>
              </li> 
              <li><Link to='/agents'>Need an Agent?</Link>
                </li> 
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
          <div className='mt-8 text-center text-sm text-slate-400'> &copy; {new Date().getFullYear()} RealHome. All rights reserved. 
            </div> 
      </footer>
    </div>
    
  );
}