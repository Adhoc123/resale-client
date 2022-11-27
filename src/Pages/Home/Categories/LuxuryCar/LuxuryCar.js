import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../../BookingModal/BookingModal';
import LuxuryData from '../LuxuryCar/LuxuryData';

const LuxuryCar = () => {
    const [luxurycarData, setLuxurycarData] = useState(null)
    const { data: luxurycar = [] } = useQuery({
        queryKey: ['luxurycar'],
        queryFn: () => fetch('http://localhost:5000/luxurycar')
            .then(res => res.json())
    })
    return (
        <section>
            <div className='grid gap-5 grid-cols-1 mb-10 md:grid-cols-2 ml-10 lg:grid-cols-3 mt-10 mb-10'>
                {
                    luxurycar.map(luxuryData => <LuxuryData
                        key={luxuryData._id}
                        luxuryData={luxuryData}
                        setLuxurycarData={setLuxurycarData}
                    ></LuxuryData>)
                }
            </div>
            {
                luxurycarData &&
                <BookingModal
                    luxurycarData={luxurycarData}
                ></BookingModal>
            }
        </section>
    );
};

export default LuxuryCar;