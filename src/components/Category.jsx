import allIcon from "../assets/all-icon.svg"
import aiIcon from "../assets/ai-icon.svg"
import socialIcon from "../assets/social-icon.svg"
import financeIcon from "../assets/finance-icon.svg"
import healthIcon from "../assets/health-icon.svg"



const Category = ( {setCategoryFilter}) => {
  const categoryList =  [ 
    {imgIcon : allIcon, categoryName : "All"},
    {imgIcon : aiIcon, categoryName : "Artificial Intelligence"},
    {imgIcon : socialIcon, categoryName : "Social"},
    {imgIcon : financeIcon, categoryName : "Finance"},
    {imgIcon : healthIcon, categoryName : "Health & Fitness"}
    
  ]
  

  return (
    <>
    <section className="flex justify-around items-center my-[55px] ">

    { categoryList.map( (category, index) => {
      return (
        <div key={index} onClick={() => {setCategoryFilter(category.categoryName)}}
        className=" w-[216px] h-[60px] bg-white border-[2px] border-black shadow-[4px_4px_0px_0px_#000000] flex text-center items-center cursor-pointer "> 
         <img src={category.imgIcon} className="mx-[20px]" />
         <h1> {category.categoryName} </h1> 
       </div>
      )
    } ) }
    </section>
    </>
  )
};

export default Category;