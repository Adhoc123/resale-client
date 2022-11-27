import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MicroData from './MicroData';
import BookingModal from '../../../BookingModal/BookingModal';

const Microbus = () => {
    const [microbusData, setMicrobusData] = useState(null);

    const { data: microbus = [] } = useQuery({
        queryKey: ['microbus'],
        queryFn: () => fetch('http://localhost:5000/microbus')
            .then(res => res.json())
    })
    return (
        <section>
            <div className='grid gap-5 grid-cols-1 mb-10 md:grid-cols-2 ml-10 lg:grid-cols-3 mt-10 mb-10'>
                {
                    microbus.map(microData => <MicroData
                        key={microData._id}
                        microData={microData}
                        setMicrobusData={setMicrobusData}
                    ></MicroData>)
                }
            </div>
        {
            microbusData&&
            <BookingModal
            microbusData={microbusData}
            ></BookingModal>
        }
        </section>

    );
};

export default Microbus;