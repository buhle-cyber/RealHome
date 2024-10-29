import React from 'react';
import robertImage from '../assets/robert.jpeg'
import modricImage from '../assets/modric.jpg'
import messiImage from '../assets/messi.jpg'
import judeImage from '../assets/jude.jpeg'
import jobeImage from '../assets/jobe.jpg'
import haalandImage from '../assets/haaland.jpeg'
import mbappeImage from '../assets/mbappe.jpg'


const agents = [
  {
    name: 'Robert Lewandowski',
    age: 36,
    company: 'Barcelona Estates',
    type: 'Sale',
    propertyTypes: ['Villas', 'Mansions', 'Estates'],
    quote: 'I chose real estate because I believe in the power of finding the perfect home for every family.',
    imageUrl: robertImage,
    cell: '+27 82 364 9856',
    office: '051 856 3452',
    email: 'robertlewandowski@icloud.com',
  },
  {
    name: 'Kylian Mbappé Lottin',
    age: 25,
    company: 'Real Madrid Housing',
    type: 'Rent',
    propertyTypes: ['Apartments', 'Flats', 'Houses'],
    quote: 'In every challenge lies an opportunity. The perfect property is waiting for you, and Im dedicated to helping you seize that chance to create a life you love.',
    imageUrl: mbappeImage,
    cell: '+27 73 219 4524',
    office: '051 555 4321',
    email: 'lottinmbapp@gmail.com',
  },
  {
    name: 'Luka Modrić',
    age: 39,
    company: 'Madrista Housing',
    type: 'Rent',
    propertyTypes: ['Houses'],
    quote: 'Every house has a story, but its the memories we create within those walls that truly make it a home. Let me help you find that perfect place where your next chapter begins',
    imageUrl: modricImage,
    cell: '+27 78 652 9635',
    office: '051 653 6253',
    email: 'luka@gmail.com',
  },
  {
    name: 'Lionel Messi',
    age: 37,
    company: 'Inter Miami Properties',
    type: 'Sell',
    propertyTypes: ['Apartments', 'Flats', 'Townhouses'],
    quote: 'In real estate, we dont just sell properties; we turn dreams into reality. Every client is a vision waiting to be realized. Together, we’ll navigate the journey to your dream home.',
    imageUrl: messiImage,
    cell: '+27 65 857 6354',
    office: '051 354 1287',
    email: 'messilionel@icloud.com',
  },
  {
    name: 'Jude Victor William Bellingham',
    age: 21,
    company: 'Real Madrid Estates',
    type: 'Sell',
    propertyTypes: ['Apartments', 'Flats', 'Apartments', 'Cottages', 'Estates'],
    quote: 'Real estate is more than transactions; it’s about building futures. Each property we explore holds the potential for new beginnings, and Im here to guide you every step of the way.',
    imageUrl: judeImage,
    cell: '+27 81 632 6524',
    office: '051 550 3289',
    email: 'bellinghamjude@icloud.com',
  },
  {
    name: 'Jobe Samuel Patrick Bellingham',
    age: 19,
    company: ' Sunderland Properties',
    type: 'Rent',
    propertyTypes: ['Apartments', 'Houses', 'Apartments', 'Mansions'],
    quote: 'Finding the right home isn’t just about the bricks and mortar; it’s about community. Let’s discover a place where you can thrive and feel truly connected.',
    imageUrl: jobeImage,
    cell: '+27 64 587 3642',
    office: '051 653 0012',
    email: 'bellinghamjobe@icloud.com',
  },
  {
    name: 'Erling Braut Haaland',
    age: 24,
    company: 'Manchester City Housing',
    type: 'Sell',
    propertyTypes: ['Flats', 'Houses', 'Townhouses', 'Mansions'],
    quote: 'Change can be daunting, but it’s also the catalyst for growth. Whether you are moving up, down, or sideways, I’m here to support you in embracing the new adventures that lie ahead',
    imageUrl: haalandImage,
    cell: '+27 83 654 3521',
    office: '051 956 6235',
    email: 'erlinghaaland@gmail.com',
  },
  
  // Add more agents as needed
];

export default function Agents() { 
    return ( 
    <div className='max-w-6xl mx-auto p-5'> 
    <h1 className='text-3xl font-bold mb-8'>Agents</h1> 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> 
        {agents.map((agent, index) => ( 
            <div key={index} className='border rounded-lg p-4 shadow-md transform transition duration-300 hover:scale-105'> 
            <img src={agent.imageUrl} alt={`${agent.name}`} className='w-full h-48 object-cover rounded-lg mb-4' /> 
            <h2 className='text-xl font-semibold mb-2'>{agent.name}</h2> 
            <p className='text-gray-600'><strong>Age:</strong> {agent.age}</p>
             <p className='text-gray-600'><strong>Company:</strong> {agent.company}</p> 
             <p className='text-gray-600'><strong>Type:</strong> {agent.type}</p> 
             <p className='text-gray-600'><strong>Property Types:</strong> 
             {agent.propertyTypes.join(', ')}</p> 
             <p className='text-gray-600'><strong>Cell:</strong> {agent.cell}</p> 
             <p className='text-gray-600'><strong>Office:</strong> {agent.office}</p> 
             <p className='text-gray-600'><strong>Email:</strong> 
<a href={`mailto:${agent.email}`} className='text-blue-500 hover:underline'>{agent.email}</a>
</p> 
<blockquote className='italic text-gray-500 mt-4'>{agent.quote}</blockquote> 
</div> 
))} 
</div> 
</div> 
); 
}


