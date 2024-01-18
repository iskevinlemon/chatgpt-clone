import { useState } from "react";
import Caution from "./Caution";
// import MessageBox from "./MessageBox";
import Prompt from "./Prompt";
import Sidebar from "./Sidebar";
// import Svg from "./Svg";

function App() {

  const promptBoxes = [
    {
      id: 1,
      title: "Brainstorm incentives",
      subtitle: "for a customer royalty program in a small bookstore"
    },
    {
      id: 2,
      title: "Compare storytelling techniques",
      subtitle: "in novels and in films"
    },
    {
      id: 3,
      title: "Write a message",
      subtitle: "that goes with a kitten gif for a friend on a..."
    },
    {
      id: 4,
      title: "Give me ideas",
      subtitle: "for what to do with my kids' art"
    }
  ];

  const [userMessage, setUserMessage] = useState("");

  return (
    <>
      <div className="row vh-100">

        <div className="col-lg-2 gpt-sidebar">
          <Sidebar/>
        </div>

        <div className="col-lg-10 gpt-chat-area text-white">

          <Prompt/>

          <div className="container px-6">
            
            <div className="row">
              {promptBoxes.map((item) => (
                <div className="col-lg-6 gpt-sample-prompt-title pr-10 pl-10" key={item.id}>
                  <div className="card gpt-prompt-card px-4 py-3 mt-2">
                    {item.title}
                    <div className="text-secondary">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* <MessageBox/> */}

            <div className="input-group input-group-lg mb-3 gpt-message-box">
              <input type="text" 
                className="form-control gpt-form-control" 
                placeholder="Message ChatGPT..." 
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <div className="input-group-append gpt-submit">
                <button 
                  className={`btn gpt-btn-gray ${userMessage == "" ? "" : "bg-white"}`}
                  type="button">
                    <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          
            <Caution/>

          </div>

        </div>

      </div>
    </>
  )
}

export default App;
