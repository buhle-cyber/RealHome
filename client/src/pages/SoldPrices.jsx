import React from 'react';
import luxuryVillaImage from '../assets/villa.jpeg';
import modernApartmentImage from '../assets/apartment.jpeg';

const sampleProperties = [
  {
    title: 'Luxury Villa',
    price: 'R1,500,000',
    estimate: 'R1,520,000',
    bond: 'R600,000',
    monthlyPayment: 'R3,500',
    imageUrl: luxuryVillaImage,
    description: 'A beautiful villa with stunning views and luxurious amenities.',
  },
  {
    title: 'Modern Apartment',
    price: 'R800,000',
    estimate: 'R810,000',
    bond: 'R320,000',
    monthlyPayment: 'R2,100',
    imageUrl: modernApartmentImage,
    description: 'A sleek and modern apartment in the heart of the city.',
  },
  // Add more properties as needed
];

const PropertyCard = ({ title, price, estimate, bond, monthlyPayment, imageUrl, description }) => (
  <div className='bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden rounded-lg'>
    <img src={imageUrl} alt={title} className='w-full h-48 object-cover' />
    <div className='p-4'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600 mb-2'><strong>Price:</strong> {price}</p>
      <p className='text-gray-600 mb-2'><strong>Estimate:</strong> {estimate}</p>
      <p className='text-gray-600 mb-2'><strong>Bond:</strong> {bond}</p>
      <p className='text-gray-600 mb-2'><strong>Monthly Payment:</strong> {monthlyPayment}</p>
      <p className='text-gray-600'>{description}</p>
    </div>
  </div>
);

const BuyingProcess = () => (
  <div className='bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h3 className='text-xl font-semibold mb-4'>How the Buying Process Goes</h3>
    <p className='text-gray-600 mb-4'>
      The home buying process includes several steps: getting pre-approved for a loan, finding a property, making an offer, securing financing, and closing the deal. It's important to work with a knowledgeable real estate agent to guide you through each step.
    </p>
  </div>
);

const BondCosts = () => (
  <div className='bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h3 className='text-xl font-semibold mb-4'>Understanding Bond Costs</h3>
    <p className='text-gray-600 mb-4'>
      Bond costs refer to the expenses associated with securing a mortgage. These include the interest rate, bond registration costs, and any insurance premiums. It's crucial to understand these costs to manage your financial planning effectively.
    </p>
  </div>
);

const PropertyLoans = () => (
  <div className='bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h3 className='text-xl font-semibold mb-4'>Getting a Property Loan</h3>
    <p className='text-gray-600 mb-4'>
      To finance a property purchase, you can apply for a loan from a bank or financial institution. Your credit score, income, and existing debts will be considered to determine the loan amount and interest rate. Make sure to shop around for the best loan terms.
    </p>
  </div>
);

const SellingAdvice = () => (
  <div className='bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h3 className='text-xl font-semibold mb-4'>Maximizing Your Home's Sale Value</h3>
    <p className='text-gray-600 mb-4'>
      If you're selling a property, consider making minor renovations to increase its market value. Understand the current market trends and set a competitive price. Hiring a professional real estate agent can also help you negotiate better deals.
    </p>
  </div>
);

const CalculationDetails = () => (
  <div className='bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden rounded-lg p-4'>
    <h3 className='text-xl font-semibold mb-4'>How These Amounts Are Calculated</h3>
    <p className='text-gray-600 mb-4'>
      <strong>Price:</strong> This is the listed price of the property.
    </p>
    <p className='text-gray-600 mb-4'>
      <strong>Estimate:</strong> This is an approximation of the property's value based on market trends and comparisons with similar properties.
    </p>
    <p className='text-gray-600 mb-4'>
      <strong>Bond:</strong> The bond amount is typically a percentage of the property's price, influenced by factors like down payment and credit score.
    </p>
    <p className='text-gray-600 mb-4'>
      <strong>Monthly Payment:</strong> This is calculated based on the bond amount, interest rate, and repayment period. It includes both principal and interest components.
    </p>
  </div>
);

export default function SoldPrices() {
  return (
    <div className='max-w-6xl mx-auto p-5'>
      <h1 className='text-3xl font-bold mb-8'>Sold Prices</h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Property Prices</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sampleProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>
      <section className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <BuyingProcess />
        <BondCosts />
      </section>
      <section className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <PropertyLoans />
        <SellingAdvice />
      </section>
      <section className='mb-8'>
        <CalculationDetails />
      </section>
    </div>
  );
}



