import React from 'react';
import "./countries.css"

const Country = ({name, flags, population}) => {
    return (
        <div className='country'>
            <img src={flags} alt="" />
            <h4>{name}</h4>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;