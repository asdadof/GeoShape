import ResultPopup from "../Popups/ResultPopup";
import React, {useState} from "react";

function SubmitCard({selectedCountry}: { selectedCountry: { cca3: string; name: { common: string } } }) {

    //Sets a state for the guessed country and whether the user has guessed correctly
    const [guessedCountry, setGuessedCountry] = useState('');
    const [success, setSuccess] = useState<boolean | null>(null);

    //Checks if user has guessed correctly
    function handleSubmit() {
        const checkGuessedCountry = guessedCountry.toLowerCase().trim() === selectedCountry.name.common.toLowerCase().trim();
        setSuccess(checkGuessedCountry);
    }

    //Allows users to submit country using enter key
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && guessedCountry) {
            handleSubmit();
        }
    };

    //When a user has guessed correctly, the inputfield disables
    function disableInputfield(success: boolean | null): boolean {
        return success === true;
    }

    //Returns an inputfield and a button, as well as the result popup based on if the guess was correct
    return (
        <>
            <div className="input-group input-group-lg mx-auto p-2">
                <input
                    type="text"
                    className="form-control"
                    value={guessedCountry}
                    placeholder="Write country here... "
                    onChange={(e) => setGuessedCountry(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    disabled={disableInputfield(success)}
                />
                <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>Submit</button>
            </div>
            {success !== null && <ResultPopup success={success}/>}
        </>
    );
}

export default SubmitCard

