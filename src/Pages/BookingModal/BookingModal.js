import React from 'react';

const BookingModal = ({ microbusData, electriccarData, luxurycarData }) => {
    console.log(luxurycarData)
    const {itemName, resalePrice} = microbusData;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{itemName}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" placeholder="User Name"  className="input input-bordered w-full" />
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full" />
                        <input type="text" defaultValue={resalePrice} disabled className="input input-bordered w-full font-bold" />
                        <input className='btn btn-accent w-full text-white' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;