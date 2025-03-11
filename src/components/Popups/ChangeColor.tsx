import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";

function ChangeColor({handleHide}: { handleHide: () => void }) {

    //Sets a state for the currently selected color (for the country on the map)
    const [chosenColor, setChosenColor] = useState('#ffffff');

    //Saves the chosen color in the local storage
    function sendColor(color: string) {
        window.location.reload();
        localStorage.setItem('color', color);
    }

    //When the color is changes it calls the sendColor function then hides the modal
    const handleClick = (chosenColor: string | void) => {
        if (chosenColor) {
            sendColor(chosenColor);
        }
        handleHide();
    }

    return (
        <div className="modal fade show d-block" role="dialog" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Difficulty</h5>
                    </div>
                    <HexColorPicker className="child-div w-100" color={chosenColor} onChange={setChosenColor}/>
                    <button
                        className="p-2 btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleClick(chosenColor)}
                    >
                        Save Color
                    </button>
                    <button
                        className="p-2 btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleClick()}
                    >
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ChangeColor;