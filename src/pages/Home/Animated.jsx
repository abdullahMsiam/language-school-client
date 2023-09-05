import React from 'react';
import Bounce from 'react-reveal/Bounce';

import img1 from '../../assets/image/icons/img1.avif'
import img2 from '../../assets/image/icons/img2.avif'
import img3 from '../../assets/image/icons/img3.avif'


const Animated = () => {

    return (
        <div className='mx-auto p-5'>
            <div className=' mx-auto grid justify-items-center content-stretch md:grid-cols-3'>
                <Bounce left cascade>
                    <div>
                        <div className="card lg:card-side bg-base-100 shadow-xl w-5/6">
                            <figure><img src={img1} alt="Album" /></figure>
                            <div className="card-body mx-auto my-auto text-center">
                                <h2 className="card-title text-center">Entertaining</h2>
                                <p>An interesting Part</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mt-4">
                            <figure><img src={img2} alt="Album" /></figure>
                            <div className="card-body mx-auto my-auto text-center">
                                <h2 className="card-title text-center">Entertaining</h2>
                                <p>An interesting Part</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mt-5">
                            <figure><img src={img3} alt="Album" /></figure>
                            <div className="card-body mx-auto my-auto text-center">
                                <h2 className="card-title text-center">Entertaining</h2>
                                <p>An interesting Part</p>

                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default Animated;