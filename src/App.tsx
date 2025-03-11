import TittleBar from "./components/TitleBar";
import GameCard from "./components/Cards/GameCard";
import {useEffect, useState} from "react";
import ContinentPicker from "./components/Functions&Pickers/ContinentPicker";
import MinSizePicker from "./components/Functions&Pickers/MinSizePicker";

function App() {

    //Sets a state for the currently selected continent and minimum size
    const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
    const [selectedMinSize, setSelectedMinSize] = useState<number>(0);

    //Sets the state of both selectedContinent and selectedMinSize to the saved value, if it exists
    useEffect(() => {
        const storedContinent = localStorage.getItem('selectedContinent');
        const storedSelectedMinSize = localStorage.getItem('storedSelectedMinSize');

        if (storedSelectedMinSize !== null) {
            const storedSelectedMinSizeInt = parseInt(storedSelectedMinSize);
            if (storedSelectedMinSize && storedSelectedMinSizeInt !== selectedMinSize) {
                setSelectedMinSize(storedSelectedMinSizeInt);
            }
        }

        if (storedContinent && storedContinent !== selectedContinent) {
            setSelectedContinent(storedContinent);
        }
    }, []);

    //Updates the stored continent
    const handleChangedContinent = (continent: string | null) => {
        if (continent !== selectedContinent) {
            setSelectedContinent(continent);
            if (continent) {
                localStorage.setItem('selectedContinent', continent);
            } else {
                localStorage.removeItem('selectedContinent');
            }
        }
    };

    //Updates the stored minimum size
    const handleChangedMinSize = (minSize: number) => {
        if (minSize !== selectedMinSize) {
            setSelectedMinSize(minSize);
            if (minSize) {
                localStorage.setItem('selectedMinSize', minSize.toString());
            } else {
                localStorage.removeItem('selectedMinSize');
            }
        }
    }

    //Renders the title bar, which is the three tabs at the top, the game card, which is the actual game, and the dropdown where you can choose selected minimum size and continent
    return (<>
            <TittleBar/>

            <div className="dropdown position-relative">
                <button className="btn btn-primary dropdown-toggle w-100 mb-1" type="button" id="customizationDropdown"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Customization
                </button>

                <div className="dropdown-menu p-3 w-25" aria-labelledby="customizationDropdown" style={{ left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                    <h5 className="dropdown-header">Select Continent</h5>
                    <ContinentPicker onContinentChange={handleChangedContinent}
                                     selectedContinent={selectedContinent}/>

                    <div className="dropdown-divider"></div>

                    <h5 className="dropdown-header">Select Minimum Size</h5>
                    <MinSizePicker onMinSizeChange={handleChangedMinSize} selectedMinSize={selectedMinSize}/>
                </div>
            </div>

        <GameCard selectedContinent={selectedContinent} selectedMinSize={selectedMinSize}/>
    </>
);
}

export default App;