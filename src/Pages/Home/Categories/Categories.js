import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='mx-5'>
            <h2 className='text-3xl  mb-5 font-bold'>Select Your Category</h2>
            <div className='flex justify-around'>
                <Link to='/microbus'><button className='w-96 text-white btn btn-secondary'>Microbus</button></Link>
                <Link to='/luxurycar'><button className='w-96 text-white btn btn-secondary'>Luxury Car</button></Link>
                <Link to='/electriccar'><button className='w-96 text-white btn btn-secondary'>Electic Car</button></Link>
            </div>

        </div>
    );
};

export default Categories;