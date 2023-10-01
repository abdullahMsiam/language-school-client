import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from '../../assets/image/icons/img4.jpg'

const Review = () => {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 0,
        },
    })
    return (
        <div className='mx-auto md:mx-28 mt-6 mb-4'>
            <p className="font-bold text-4xl text-center mb-3">Review From Students</p>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-amber-200 text-black h-52 w-full md:p-8">
                            <div>
                                <img className='w-14 rounded-full' src={img1} alt="" />
                                <p className='font-semibold'>Abdullah Muhammad Siam</p>
                                <p>This institute provide a real learning environment for different categories student. Well wishes for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-blue-200 text-black h-52 w-full md:p-8">
                            <div>
                                <img className='w-14 rounded-full' src={img1} alt="" />
                                <p className='font-semibold'>Akaser Surjo</p>
                                <p>This institute provide a real learning environment for different categories student. Well wishes for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-pink-200 text-black h-52 w-full md:p-8">
                            <div>
                                <img className='w-14 rounded-full' src={img1} alt="" />
                                <p className='font-semibold'>Boner Pakhi</p>
                                <p>This institute provide a real learning environment for different categories student. Well wishes for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-red-200 text-black h-52 w-full md:p-8">
                            <div>
                                <img className='w-14 rounded-full' src={img1} alt="" />
                                <p className='font-semibold'>Ghum Tara</p>
                                <p>This institute provide a real learning environment for different categories student. Well wishes for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-pink-200 text-black h-52 w-full md:p-8">
                            <div>
                                <img className='w-14 rounded-full' src={img1} alt="" />
                                <p className='font-semibold'>Atos Baji</p>
                                <p>This institute provide a real learning environment for different categories student. Well wishes for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide6">
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-blue-200 text-black h-52 w-full md:p-8">
                            <div>
                                <img className='w-14 rounded-full' src={img1} alt="" />
                                <p className='font-semibold'>Abdullah N?a</p>
                                <p>This institute provide a real learning environment for different categories student. Well wishes for them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;