import { useState, useEffect } from "react";
import axios from "axios";

import sendIcon from "../assets/send-icon.svg";

const ChatBot = () => {
  const proxy = "http://localhost:4000/";

  const [userMessage, setUserMessage] = useState("");
  const [aiMessage, setAiMessage] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [title, setTitle] = useState(null);

  const getMessage = (event) => {
    setUserMessage(event.target.value);
  };

  const handleNewChat = () => {
    setTitle(null);
    setAiMessage(null);
    setUserMessage("");
  };

  const handleChatHistory = (chatHistoryTitle) => {
    setTitle(chatHistoryTitle);
    setAiMessage(null);
    setUserMessage("");
  };

  const handleChats = async () => {
    const requestData = { message: userMessage };
    const response = await axios.post(`${proxy}chatbot`, requestData);
    const responseData = await response.data;
    const newAiMessage = responseData.choices[0].message;
    setAiMessage(newAiMessage);

    const newTitle = title || newAiMessage.content.substring(0, 50);
    setTitle(newTitle);

    setChatHistory((prevChat) => [
      ...prevChat,
      {
        title: newTitle,
        role: "user",
        content: userMessage,
      },
      {
        title: newTitle,
        role: "AI Asissitant",
        content: newAiMessage.content,
      },
    ]);

  };


  const currentChat = chatHistory.filter(
    (prevChat) => prevChat.title === title
  );

  const chatHistoryTitles = Array.from(
    new Set(chatHistory.map((prevChat) => prevChat.title))
  );

  return (
    <>
      <div className=" w-[1270px] h-[100vh] ">
        <section className=" historybar mt-[80px] w-[200px] h-[730px] rounded-[5px] border-black border-[3px] shadow-[20px_20px_0px_0px_#000000] mx-[20px] flex-col justify-between my-[20px] fixed ">
          <button
            onClick={handleNewChat}
            className="  bg-black border-[0.5px] border-transparent rounded-[5px] p-[10px] m-[10px] w-[170px]
       text-white text-center "
          >
            + New Chat
          </button>

          <ul className=" py-[5px] m-[10px] h-[100%] ">
            {chatHistoryTitles?.map((chatHistoryTitle, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleChatHistory(chatHistoryTitle)}
                  className=" p-[5px] cursor-pointer   bg-black border-[2px] text-white rounded-[10px] list-none text-start focus:outline-none "
                >
                  {chatHistoryTitle}
                </li>
              );
            })}
          </ul>
        </section>

        <section className=" flex flex-col justify-between w-[1100px] h-[700px] mx-[50px] rounded-[5px] bg-white border-[6px] border-black shadow-[30px_30px_0px_0px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="  mx-[20px]  my-[10px] text-center ">
            {!title && <h1> BRAINSTORM WITH AI </h1>}
            {title && <h1>{title}</h1>}
          </div>

          <ul className=" chatdalog text-black overflow-y-auto flex-grow ">
            {currentChat.map((chat, index) => {
              return (
                <li key={index} className=" mb-5 mx-1 ">
                  <p className=""> {chat.role}: </p>
                  <p className="font-['Lato']"> {chat.content} </p>
                </li>
              );
            })}
          </ul>

          <div className=" userMessage relative flex justify-start items-center min-h-[60px] mx-[20px] mb-[20px] bg-black border-[2px] border-white rounded-[10px] shadow-[0px_5px_0px_0px_#000000] ">
            <input
              placeholder="Ask me anything..."
              onChange={getMessage}
              className="w-[1000px] p-1 bg-black text-white placeholder:italic placeholder:text-slate-400 font-['Lato'] focus:outline-none "
            />
            <div
              onClick={handleChats}
              className="absolute right-2 text-white cursor-pointer"
            >
              send
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatBot;
