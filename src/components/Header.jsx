import { Link } from "react-router-dom"

import addPostIcon from "../assets/addpost-icon.svg";
import circleIcon from "../assets/circle-icon.svg";

import searchIcon from "../assets/search-icon.svg";


const Header = ({ handleAddPost, handleSearch } ) => {
  return (
    <>


      <div className=" fixed top-0 flex justify-between items-center my-[5px] w-[1200px] ">
        <Link to="/" className="relative text-center">
          <img src={circleIcon} />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[29px]">
            Explore
          </p>
        </Link>

        <div className="relative  ">
          <input
            type="search"
            onChange={handleSearch}
            placeholder="Search for projects or ideas..."
            className=" w-[380px] h-[52px] bg-white border-[2px] border-black shadow-[4px_4px_0px_0px_#000000] pl-[10] text-center focus:outline-none "
          />
          <img
            src={searchIcon}
            onClick={handleSearch}
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
          />
        </div>

        <div className=" mx-[-150px]  cursor-pointer ">
        <img src={addPostIcon} onClick={handleAddPost} />
        </div>
        </div>

    </>
  );
};

export default Header;
