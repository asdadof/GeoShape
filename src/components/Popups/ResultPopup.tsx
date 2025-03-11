import React from "react";
import SuccessPopup from "./SuccessPopup";
import FailPopup from "./FailPopup";

type ResultPopupProps = {
    success: boolean;
};

//Renders the correct result pop-up based on whether the user guessed correctly or not
const ResultPopup: React.FC<ResultPopupProps> = ({success}) => {
    return (
        <>
            {success ? <SuccessPopup/> : <FailPopup/>}
        </>
    );
};

export default ResultPopup;
