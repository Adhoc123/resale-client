import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const BookingModalMicro = ({ microbusData, setMicrobusData }) => {
    const { user } = useContext(AuthContext);
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name, email, price, phone, location);
        const booking = {
          itemName: name, email, price, phone, location
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Booking Confirmed')
        })
    }
    const handledata = () => {
        setMicrobusData(null);
    }
    const { itemName, resalePrice } = microbusData;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={handledata} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{itemName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input name='name'     defaultValue={itemName} disabled className="input input-bordered w-full" />
                        <input name='email'    defaultValue={user?.email} className="input input-bordered w-full" />
                        <input name='price'    defaultValue={resalePrice} disabled className="input input-bordered w-full font-bold" />
                        <input name='phone'    className="input input-bordered w-full font-bold" />
                        <input name='location' className="input input-bordered w-full font-bold" />
                        <input className='btn btn-accent w-full text-white' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModalMicro;