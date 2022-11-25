import React from 'react';

const MicroData = ({microData}) => {
    const {itemName, picture} = microData
    console.log(microData);
    return (
        <div>
           <h2>{itemName}</h2>
        </div>
    );
};

export default MicroData;