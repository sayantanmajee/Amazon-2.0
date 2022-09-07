import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


function Banner() {
  return (
    <div className="relative">
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
        <div >
            <img loading='lazy' src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61APECgWhOL._SX3000_.jpg" alt="img-1" />
        </div>
        <div>
        <img loading='lazy' src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ttyU85R6L._SX3000_.jpg" alt="img-2" />
        </div>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/7196c42C9-L._SX3000_.jpg" alt="img-3" />
        </div>
        <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71zkiRVAEUL._SX3000_.jpg" alt="img-4" />
        </div>
        </Carousel>
        
    </div>
  )
}

export default Banner