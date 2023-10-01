import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/image/banner/banner11.avif'
// import img2 from '../../assets/image/banner/banner12.avif'
import img3 from '../../assets/image/banner/banner13.avif'
import img4 from '../../assets/image/banner/banner14.avif'

const Banner = () => {
    return (
        <div className='h-2/4'>
            <Carousel>
                <div>
                    <img src={img1} />
                </div>

                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;