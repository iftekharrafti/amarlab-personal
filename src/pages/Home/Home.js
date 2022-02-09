import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeAbout from './HomeAbout/HomeAbout';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeAbout />
            <Contact />
        </div>
    );
};

export default Home;