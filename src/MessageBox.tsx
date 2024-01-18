const MessageBox = () => {
    return (
        <div className="input-group input-group-lg mb-3 gpt-message-box">
            <input type="text" 
                className="form-control gpt-form-control" 
                placeholder="Message ChatGPT..." 
            />
            <div className="input-group-append gpt-submit">
                <button className="btn gpt-btn-gray" type="button">
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
      </div>
    );
}
 
export default MessageBox;