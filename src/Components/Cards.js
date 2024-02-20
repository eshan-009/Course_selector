import React from "react";
import One_Card from "./One_Card";
function Cards({Courses,Category}){

    function getcourses(){
        let arr =[];
    if(Category==='All')
    {
        Object.values(Courses).forEach((el)=>{
            el.forEach((element)=>{
                arr.push(element);
            });
        });
    }
    else{
        return Courses[Category];
    }
   
    return arr;
    }
    
    
    return(
    <div className="max-w-[60%] mx-auto flex flex-wrap gap-5 justify-center ">
        {getcourses().map((course)=>{
            return(<One_Card key ={course.id} course={course}  ></One_Card>)
        })}
    </div>);
}
export default Cards;