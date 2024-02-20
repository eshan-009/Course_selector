import React from "react";
import Filter_Button from "./Filter_Button";
function NavBar(props){
    const filter = props.filterData;
    const Category = props.Category;
    const SetCategory = props.SetCategory
    return(
        <div >
            <div className="bg-black  text-white font-bold h-[4rem] flex justify-center items-center "><h2 className="text-2xl">Pick Your course</h2></div>
            <div className="text-white flex justify-center gap-4 bg-gray-700">
            {
                filter.map((obj)=>{
                    return(<Filter_Button key={obj.id} obj={obj} Category = {Category} SetCategory={SetCategory}></Filter_Button>);
                })
            }
            </div>
        </div>
    );
}
export default NavBar;