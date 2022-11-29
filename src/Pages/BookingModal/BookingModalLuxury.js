import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const BookingModalLuxury = ({ luxurycarData, setLuxurycarData }) => {
    const {user} = useContext(AuthContext);
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
          console.log(booking)
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
        setLuxurycarData(null);
    }
    const { itemName, resalePrice } = luxurycarData;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={handledata} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{itemName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input name='name'     type="text" defaultValue={itemName} disabled className="input input-bordered w-full" />
                        <input name='email'    type="text" defaultValue={user?.email} className="input input-bordered w-full" />
                        <input name='price'    type="text" defaultValue={resalePrice} disabled className="input input-bordered w-full font-bold" />
                        <input name='phone'    placeholder='Phone' type="text" className="input input-bordered w-full font-bold" />
                        <input name='location' placeholder='Location' type="text" className="input input-bordered w-full font-bold" />
                        <input className='btn btn-accent w-full text-white' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModalLuxury;