import React, {useEffect, useState} from 'react';
import CountryCard from './CountryCard';
import SubmitCard from './SubmitCard';
import {randomCountry} from "../Functions&Pickers/RandomCountry"


function GameCard({selectedContinent, selectedMinSize}: { selectedContinent: string | null; selectedMinSize: number }) {
    //Sets a state for the currently selected country
    const [selectedCountry, setSelectedCountry] = useState(null);

    //Asynchronous function that fetches a random country and set the selected country state
    useEffect(() => {
        const fetchCountry = async () => {
            const country = await randomCountry(selectedContinent, selectedMinSize);
            setSelectedCountry(country);
        };

        if (selectedContinent) {
            fetchCountry().then();
        }

    }, [selectedContinent, selectedMinSize]);

    if (!selectedCountry) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <CountryCard selectedCountry={selectedCountry}/>
            <SubmitCard selectedCountry={selectedCountry}/>
        </div>
    );
}

export default GameCard;
