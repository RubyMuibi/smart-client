import closeAddPostIcon from "../assets/closeaddpost-icon.svg";

const AddPost = ( {post, categories, handleGetCategory, handleGetName, handleGetPost, createPost,handleCloseAddPost}) => {
  return (
    <>
      <form className="fixed inset-0 flex items-center justify-center z-10 ">
        <section className=" w-[713px] h-[400px] rounded-[10px] bg-white border-[2.5px] border-black flex-col items-center  ">
          <div className="  mx-[20px]  my-[10px] flex  ">
            <label htmlFor="category">Choose a category:</label>

            <select id="category" name="category" onChange={handleGetCategory}>
              {categories.map((category) => {
                return (
                  <option key={category.value} value={category.value}>
                    {" "}
                    {category.label}{" "}
                  </option>
                );
              })}
            </select>
            <img
              src={closeAddPostIcon}
              onClick={handleCloseAddPost}
              className=" right-0 transform translate-x-[400px] cursor-pointer "
            />
          </div>

          <div className=" flex-col items-end my-[20px] mx-[80px]  ">
            <label htmlFor="name">Your name *</label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength="200"
              onChange={handleGetName}
              className="w-[491px] h-[66px] mb-5 bg-white border-[2px] font-['Lato'] border-black rounded-[10px] shadow-[0px_5px_0px_0px_#000000] text-start flex items-start focus:outline-none "
            ></input>

            <label htmlFor="post">Post *</label>
            <textarea
              id="post"
              name="post"
              type="text"
              required
              onChange={handleGetPost}
              className="w-[491px] h-[125px] mb-10 bg-white border-[2px] font-['Lato'] border-black rounded-[10px] shadow-[0px_5px_0px_0px_#000000] text-start flex items-start focus:outline-none"
            ></textarea>

            <div className=" flex justify-center ">
              <button
                type="submit"
                onClick={() => {
                  createPost();
                  handleCloseAddPost();
                }}
                className=" w-[100px] h-[37px] rounded [20px] bg-black text-white border-[1px] border-black"
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default AddPost;


