function Info({handleHide}: { handleHide: () => void }) {
    return (
        <div className="modal fade show d-block" role="dialog" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Info</h5>
                    </div>
                    <div className="modal-body">
                        <p>Welcome to this geography game! In this game, your goal is to navigate the map and identify
                            the correct country from the marked location. You can adjust the difficulty and the range of
                            possible countries by clicking the "Difficulty" button.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleHide}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
