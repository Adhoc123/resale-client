import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.png';
const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg w-1/2 " alt='' />
                <div>
                    <h1 className="text-5xl font-bold">What We Do!</h1>
                    <p className="py-6">Here in <strong>Resale</strong> we are selling older products at lower cost. We show products to customer so that they can buy any product by affordable cost. Explore our other sections to know more . . .</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;