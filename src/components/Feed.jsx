import { useState, useEffect } from "react";
import axios from "axios";

import { AddPost, Header, Category } from "../components";

import optionsIcon from "../assets/options-icon.svg";
import likeIcon from "../assets/like-icon.svg";
import commentIcon from "../assets/comment-icon.svg";

const Feed = ( { categoryFilter} ) => {
  const proxy = "https://smart-server-8ssp.onrender.com/";

  const [feed, setFeed] = useState([{}]);

  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [isAddPostVisible, setIsAddPostVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${proxy}feed`).then((response) => {
      setFeed(response.data);
    });
  }, []);



  const createPost = async () => {
    const requestData = { name: name, post: post, category: category};
    const response = await axios.post(`${proxy}addpost`, requestData)
    const responseData = await response.data
    setFeed([...feed, responseData])
  
  };

  const increaseLikes = async (id) => {
    
    const likesFeedUpdated = feed.map((item) => item._id === id ? { ...item, likes: item.likes + 1 } : item);

    setFeed(likesFeedUpdated); 

   await axios.put(`${proxy}post/${id}/like`);
  }


  const handleGetName = (event) => {
    setName(event.target.value);
  };
  const handleGetPost = (event) => {
    setPost(event.target.value);
  };

  const handleGetCategory = (event) => setCategory(event.target.value)

  const handleAddPost = () => {
    setIsAddPostVisible(true);
  };

  const handleCloseAddPost = () => {
    setIsAddPostVisible(false);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };


  const categories = [
    { value: "", label: "" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Social", label: "Social" },
    { value: "Finance", label: "Finance" },
    { value: "Health & Fitness", label: "Health & Fitness" },
  ];

  return (
    <>
      <Header handleAddPost={handleAddPost} handleSearch={handleSearch} />
      {isAddPostVisible && (
        <AddPost
          categories={categories}
          handleGetCategory={handleGetCategory}
          handleGetName={handleGetName}
          handleGetPost={handleGetPost}
          createPost={createPost}
          handleCloseAddPost={handleCloseAddPost}
        />
      )}
      <section className=" flex flex-col justify-center items-center  ">
        {feed
          .filter((item) => {
            return search === ""
              ? feed
              : item.post.includes(search);
          })
          .filter((post) => {
             return !categoryFilter || categoryFilter === "All" ? feed : post.category === categoryFilter;
          })
          .map((post) => {
            return (
              <>
                <div
                  key={post._id}
                  className=" w-[1200px] p-[14px]  rounded-[8px] bg-white border-[2px] border-black shadow-[4px_4px_0px_0px_#000000] my-[16px] mx-[16px] "
                >
                  <div className=" flex justify-between ">
                    <h1 className=" mx-[5px] "> {post.name} </h1>{" "}
                    <img src={optionsIcon} />
                  </div>

                  <div className=" p-[20px] ">
                    <p className=" whitespace-normal font-['Lato'] text-sm rgba(0, 0, 0, 0.8) ">
                      {" "}
                      {post.post}{" "}
                    </p>
                  </div>

                  <div className="flex justify-end  gap-[60px] ">
                    <img src={likeIcon} 
                    onClick={() => increaseLikes(post._id)}
                     />
                    <p> { `${post.likes} likes`  } </p>
                    <img src={commentIcon} />
                  </div>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default Feed;
