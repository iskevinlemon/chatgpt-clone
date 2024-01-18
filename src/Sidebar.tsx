import SmallSvg from "./SmallSvg";

const Sidebar = () => {
    return (
        <>
            <div className="p-1 text-white">

                <div className="gpt-new-chat-btn px-4 py-2 mt-2 mb-1 ml-2">
                    <span className="d-flex">
                        <span className="gpt-circle-2 text-dark">
                            <SmallSvg/>
                        </span>
                        <div className="ml-2 mt-1 d-flex">
                            New chat
                            <div className="ml-5">
                                <i className="far fa-pen-to-square"></i>
                            </div>
                        </div>
                    </span>
                </div>

                <div className="px-4 mt-3">
                <small className="text-secondary">Today</small>
                </div>

            </div>
        </>
    );
}
 
export default Sidebar;