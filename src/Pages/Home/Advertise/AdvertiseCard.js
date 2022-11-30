import React from 'react';

const AdvertiseCard = ({advertise}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><strong>Title: </strong>{advertise.name}</h2>
                <p><strong>Description: </strong>{advertise.description}</p>
                <p><strong>Category: </strong>{advertise.category}</p>
                <p><strong>Available Stocks: </strong>{advertise.available}</p>
                <p><strong>Mobile: </strong>{advertise.phones}</p>
                <p><strong>Location: </strong>{advertise.location}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-xs btn-info text-white">Available</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;