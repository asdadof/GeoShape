import Info from "./Popups/Info";
import {useState} from "react";
import ChangeColor from "./Popups/ChangeColor";
import GiveUp from "./Popups/GiveUp";


function TitleBar() {

    const [showInfo, setShowInfo] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showGiveUp, setShowGiveUp] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(true);
    };

    const handleHideInfo = () => {
        setShowInfo(false);
    };

    const handleShowColor = () => {
        setShowColor(true);
    };

    const handleHideColor = () => {
        setShowColor(false);
    };

    const handleShowGiveUp = () => {
        setShowGiveUp(true);
    };

    const handleHideGiveUp = () => {
        setShowGiveUp(false);
    }

    //Simply displays the modal/ popup for each of the three tabs. Could also have one modal template that could be used for all three
    return (
        <div>
            <div className="btn-group mx-auto p-2 d-flex" role="group">
                <button onClick={handleShowInfo} className="btn btn-outline-primary">Info</button>
                <button onClick={handleShowColor} className="btn btn-outline-primary">Change color</button>
                <button onClick={handleShowGiveUp} className="btn btn-outline-primary">Give Up</button>
            </div>

            {showInfo && (
                <Info handleHide={handleHideInfo}/>
            )}
            {showColor && (
                <ChangeColor handleHide={handleHideColor}/>
            )}
            {showGiveUp && (
                <GiveUp handleHide={handleHideGiveUp}/>
            )}
        </div>
    );
}

export default TitleBar;
