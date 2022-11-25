import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MicroData from './MicroData';

const Microbus = () => {
    const microData = useLoaderData();
    return (
        <div>
               {
                  microData.map(microData=><MicroData
                  key={microData._id}
                  microData={microData}
                  ></MicroData>)
               }
        </div>
    );
};

export default Microbus;