import React from "react";

interface MinSizePickerProps {
    onMinSizeChange: (minSize: number) => void;
    selectedMinSize: number | null;
}

const MinSizePicker = ({ onMinSizeChange, selectedMinSize }: MinSizePickerProps) => {

    //Changes the state of the selectedMinSize
    const handleMinSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const chosenMinSize = Number(event.target.value);
        onMinSizeChange(chosenMinSize);
    }

    //The drop-down menu for selecting a minimum size
    return (
    <select
        className="form-select"
        value={selectedMinSize || ''}
        onChange={handleMinSizeChange}
    >
        <option value="0">0 km^2</option>
        <option value="1000000">1 mil km^2</option>
        <option value="5000000">5 mil km^"</option>
        <option value="10000000">10 mil km^2</option>
        <option value="15000000">15 mil km^2</option>
    </select>
)
    ;
}

export default MinSizePicker;
