import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data) )
    },[])

    return (
        <div className='countries-container'>
            <h3>Total Countries: {countries.length}</h3>
            <div className='countries'>
                {countries.map(country => 
                    <Country key={country.cca3} name={country.name.common} flags={country.flags.png} population={country.population}></Country>
                )}
            </div>
        </div>
    );
};

export default Countries;