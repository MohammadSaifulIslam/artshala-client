const FeedbackModal = ({id, handleFeedback }) => {
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={()=>handleFeedback(id)}>
                        <div>
                            <textarea name="feedback" id="" cols="30" rows="8" className="my-input text-sm font-normal" placeholder="Your Feedback..." required></textarea>

                        </div>
                        <button className="my-btn mt-5">Send Feedback</button>
                    </form>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedbackModal;