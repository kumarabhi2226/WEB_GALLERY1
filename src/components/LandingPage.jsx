
import { Link } from 'react-router-dom';
import './gallery.css'
import { useState } from 'react';

function LandingPage() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="landing-page relative h-screen">
      {/* Cover image */}
      <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-11-23/64e8e750-2d79-11eb-9dcd-8b2ef5358591.jpg" alt="cover" className="w-full h-full object-cover"/>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-italian font-bold mt-5 text-blue-600">Welcome to my gallery</h1>
        
       
        <button 
          className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10"
          onClick={() => setShowLinks(true)}
        >
          Select Your Choice
        </button>

        {showLinks && (
          <div className="flex flex-col">
            <div className="bg-purple-500 hover:bg-blue-700 mt-2 px-3">
            <Link to="/mosaic" className="btn  hover:text-red-300">Mosaic Images</Link>
            </div>
            <div className="bg-purple-500 hover:bg-blue-700 mt-2 px-3">
            <Link to="/rolling" className="btn  hover:text-red-300">Rolling Images</Link>
            </div>
            <div className="bg-purple-500 hover:bg-blue-700 mt-2 mb-3 px-3">
            <Link to="/sliding" className="btn hover:text-red-300">Sliding Images</Link>
            </div>
        
            <button 
            className="bg-green-500 hover:bg-red-700 text-white justify-center px-4 font-bold rounded"
            onClick={() => setShowLinks(false)}
            >
              Close
            </button>

          </div>
        )}
       
      </div>
    </div>
  );
}

export default LandingPage;

