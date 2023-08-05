import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

import img1 from '../../assets/image/icons/img1.avif'
import img2 from '../../assets/image/icons/img2.avif'
import img3 from '../../assets/image/icons/img3.avif'


const Animated = () => {

    return (
        <div className='mx-auto w-1/2 p-5'>
            <Slide>
                <h1 className='text-center text-2xl font-bold'>Enjoy!</h1>
            </Slide>
            <Fade delay={1} cascade damping={3}>
                <div>
                    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4">
                        <figure><img src={img1} alt="Album" /></figure>
                        <div className="card-body mx-auto my-auto text-center">
                            <h2 className="card-title text-center">Entertaining</h2>
                            <p>An interesting Part</p>

                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mt-4">
                        <figure><img src={img2} alt="Album" /></figure>
                        <div className="card-body mx-auto my-auto text-center">
                            <h2 className="card-title text-center">Entertaining</h2>
                            <p>An interesting Part</p>

                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mt-5">
                        <figure><img src={img3} alt="Album" /></figure>
                        <div className="card-body mx-auto my-auto text-center">
                            <h2 className="card-title text-center">Entertaining</h2>
                            <p>An interesting Part</p>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Animated;