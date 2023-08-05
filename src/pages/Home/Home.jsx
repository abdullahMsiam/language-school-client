import React from 'react';
import Banner from './Banner';
import Popular from './Popular';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor> </PopularInstructor>
        </div>
    );
};

export default Home;