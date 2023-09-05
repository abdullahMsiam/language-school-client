import React from 'react';
import Banner from './Banner';
import Popular from './Popular';
import PopularInstructor from './PopularInstructor';
import UseTitle from '../../hooks/UseTitle';

const Home = () => {
    UseTitle('Home');
    return (
        <div className='container mx-auto pt-16 '>
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor> </PopularInstructor>
        </div>
    );
};

export default Home;