import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import ForgotPassword from './components/ForgotPassword';
import Search from './pages/Search';
import Agents from './pages/Agents';
import ContactUs from './pages/ContactUs';
import WishList from './components/WishList'; 
import SoldPrices from './pages/SoldPrices';
import PropertyGuide from './pages/PropertyGuide';
import RentalPrice from './pages/RentalPrice';
import Guide from './pages/Guide';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sold-prices' element={<SoldPrices />} /> 
        <Route path='/property-guides' element={<PropertyGuide />} />
        <Route path='/rental-advice' element={<RentalPrice />} />
        <Route path='/selling-guide' element={<Guide />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />} />
            <Route path="/wish-list" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
       