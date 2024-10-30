import React from 'react';

const SellingGuide = () => {
  const steps = [
    {
      title: "Research the Market",
      tip: "Look at recent sales in your area to gauge pricing."
    },
    {
      title: "Prepare Your Home",
      tip: "Declutter and stage your home to attract buyers."
    },
    {
      title: "Hire a Real Estate Agent",
      tip: "Choose an agent with a strong track record in your area."
    },
    {
      title: "Set the Right Price",
      tip: "Use a comparative market analysis to avoid overpricing."
    },
    {
      title: "Market Your Property",
      tip: "Utilize professional photos and social media to reach more buyers."
    },
    {
      title: "Show Your Home",
      tip: "Make sure your home is always clean and presentable for viewings."
    },
    {
      title: "Negotiate Offers",
      tip: "Don’t rush; evaluate offers and negotiate effectively."
    },
    {
      title: "Complete Legal Requirements",
      tip: "Ensure all disclosures and paperwork are accurate and complete."
    },
    {
      title: "Close the Sale",
      tip: "Review all documents carefully before signing."
    },
    {
      title: "Move Out",
      tip: "Leave the property clean and in good condition for the new owners."
    }
  ];

  return (
    <div className='max-w-6xl mx-auto p-5'>
      <h1 className='text-4xl font-bold mb-8 text-center text-slate-700'>Selling Guide</h1>
      <div className='bg-slate-400 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 overflow-hidden rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4 text-white'>Steps to Sell Your Property</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {steps.map((step, index) => (
            <div key={index} className='bg-slate-300 rounded-lg p-4 shadow transition-transform transform hover:scale-105'>
              <h3 className='font-bold text-lg text-slate-700'>{step.title}</h3>
              <p className='text-gray-700'>{step.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellingGuide;


