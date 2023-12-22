import { Link } from "react-router-dom"

import homeIcon from "../assets/home-icon.svg";
import chatbotIcon from "../assets/chatbot-icon.svg";


const SideBar = () => {
  return (
    <>
      <div
        className="inline-flex flex-col items-center h-[860px] w-[73px]  flex-shrink-0 
        rounded-[5px] border-[5px] border-black bg-white shadow-[-5px_4px_0px_0px_#000000] 
        gap-[10px] fixed top-0 right-[10px]  ">
        <Link to="/" className=" my-[35px] ">
          <img src={homeIcon} alt="Home Icon" />
        </Link>
        
        <Link to="../ChatBot">
          <img src={chatbotIcon} alt="A Robot Icon" />
        </Link>
      </div>
    </>
  );
};

export default SideBar;
