import { useState } from 'react';
import { data } from './mockData';

function Roling() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <div style={{backgroundColor: 'pink'}}>
      <div className="bg-blue-300 mt-20">
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            onClick={closeImage}
          >
            <img
              className="max-h-full max-w-full"
              src={selectedImage}
              alt="Selected Image"
            />
          </div>
        )}
        <div
          id="slider"
          className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <img
              key={item.id}
              className="w-48 h-48 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
              onClick={() => openImage(item.img)}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Roling;
