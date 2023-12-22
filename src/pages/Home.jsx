import { useState } from "react";
import { Category, Feed } from "../components";

const Home = () => {
  const [categoryFilter, setCategoryFilter] = useState("");


  return (
    <>
      <div className=" w-[1400px] h-[100vh] mt-[80px] " >

        <div><Category setCategoryFilter={setCategoryFilter} /></div>

        <div className="feed"><div className="box"><Feed categoryFilter={categoryFilter} /></div></div>
      </div>

    
    </>
  );
};

export default Home;
