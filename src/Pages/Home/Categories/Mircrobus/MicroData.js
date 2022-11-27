import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';

const MicroData = ({ microData, setMicrobusData }) => {
    const { resalePrice, originalPrice, picture, sellerName, location, postTime, usedYear, itemName } = microData;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="micros" /></figure>
            <div className="card-body">
                <h2 className="text-3xl card-title">{itemName}</h2>
                <p><strong>Resale Price: </strong>{resalePrice}</p>
                <p><strong>Original Price: </strong>{originalPrice}</p>
                <p><strong>Seller Name: </strong>{sellerName}</p>
                <p><strong>Location: </strong>{location}</p>
                <p><strong>Post Time: </strong>{postTime}</p>
                <p><strong>Used Year: </strong>{usedYear}</p>       
                <div className="card-actions justify-end">
                    <label onClick={()=>setMicrobusData(microData)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default MicroData;