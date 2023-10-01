import React from 'react';
import Banner from './Banner';
import Popular from './Popular';
import PopularInstructor from './PopularInstructor';
import UseTitle from '../../hooks/UseTitle';
import Review from './Review';
import NewsBlogs from './NewsBlogs';

const Home = () => {
    UseTitle('Home');
    return (
        <div className='container mx-auto '>
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor> </PopularInstructor>
            <NewsBlogs></NewsBlogs>
            <Review></Review>
        </div>
    );
};

export default Home;