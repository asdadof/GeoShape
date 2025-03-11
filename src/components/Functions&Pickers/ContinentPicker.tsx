import React from "react";

interface ContinentPickerProps {
    onContinentChange: (continent: string | null) => void;
    selectedContinent: string | null;
}

const ContinentPicker = ({onContinentChange, selectedContinent}: ContinentPickerProps) => {

    //Changes the state of the selectedContinent
    const handleContinentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onContinentChange(event.target.value);
    };

    //The drop-down menu for selecting a continent, set to "all" by default
    return (
        <select className="form-select" value={selectedContinent || "all"} onChange={handleContinentChange}>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="all">All!</option>
        </select>
    );
}


export default ContinentPicker;
