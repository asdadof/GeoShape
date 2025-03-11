function GiveUp({handleHide}: { handleHide: () => void }) {

    //Reloads the current page and hides the modal
    function closeGiveUp() {
        window.location.reload();
        handleHide()
    }

    //Lets player give up or regret and go back to the current game
    return (
        <div className="modal fade show d-block" role="dialog" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Whomp Whomp</h5>
                    </div>
                    <div className="modal-body">
                        <p>You gave up. Better luck next time, I guess</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleHide}>Cancel</button>
                        <button type="button" className="btn btn-secondary" onClick={closeGiveUp}>Give Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiveUp;
