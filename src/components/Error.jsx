import React from 'react';
import errImg from '../assets/image/icons/error.avif'
import UseTitle from '../hooks/UseTitle';

const Error = () => {
    UseTitle('Error Page')
    return (
        <div className='flex justify-center items-center'>
            <img src={errImg} alt="" />
        </div>
    );
};

export default Error;