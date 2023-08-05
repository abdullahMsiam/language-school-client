import React from 'react';
import errImg from '../assets/image/icons/error.avif'

const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errImg} alt="" />
        </div>
    );
};

export default Error;