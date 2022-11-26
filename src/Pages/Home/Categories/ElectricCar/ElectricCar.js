import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../../BookingModal/BookingModal';
import ElectricData from './ElectricData';

const ElectricCar = () => {
    const [electriccarData, setElectricCarData] = useState(null);

    const { data: electriccar = [] } = useQuery({
        queryKey: ['electriccar'],
        queryFn: () => fetch('http://localhost:5000/electriccar')
            .then(res => res.json())
    })
    return (
        <section>
            <div className='grid gap-5 grid-cols-1 mb-10 md:grid-cols-2 ml-10 lg:grid-cols-3 mt-10 mb-10'>
                {
                    electriccar.map(electricData => <ElectricData
                        key={electricData._id}
                        electricData={electricData}
                        setElectricCarData={setElectricCarData}
                    ></ElectricData>)
                }
            </div>
            <BookingModal
                electriccarData={electriccarData}
            ></BookingModal>
        </section>

    );
};

export default ElectricCar;