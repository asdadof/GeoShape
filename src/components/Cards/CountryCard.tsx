import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import {getCountryShape} from '../../CountryShape';

function CountryCard({ selectedCountry }: { selectedCountry: { cca3: string; name: { common: string } } }) {
    useEffect(() => {
        if (selectedCountry && selectedCountry.cca3) {
            getCountryShape(selectedCountry.cca3).then(() => null);
        }
    }, [selectedCountry]);

    //Displays the map
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '500px', width: '100%'}}>
            <div id="map" style={{height: '100%', width: '100%'}}></div>
        </div>
    );
}

export default CountryCard;
