function SuccessPopup() {

    function reloadGame() {
        window.location.reload();
    }

    return (
        <>
            <div className="alert alert-success" role="alert">
                Good job! You guessed correct!
            </div>

            <button className="btn btn-outline-primary" onClick={reloadGame}>Play again?</button>
        </>
    )
}

export default SuccessPopup;