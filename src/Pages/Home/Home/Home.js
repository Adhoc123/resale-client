import React from 'react';
import Adverise from '../Advertise/Adverise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Adverise></Adverise>
        </div>
    );
};

export default Home;