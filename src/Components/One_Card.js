import { useState } from "react";
import {FcLike,FcLikePlaceholder} from  "react-icons/fc" ;
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function One_Card({course}){
   
    const [Liked,SetLiked]=useState([]);
   function LikeHandler(){
   
    if(Liked.includes(course.id))
    {
       SetLiked((prev)=>(prev.filter((cid)=>(cid!==course.id))));
       toast.warning("Like Removed");
        }
        else{
            if(Liked.length===0){
                SetLiked([course.id]);
            }
            else{
                SetLiked((prev)=>{return [...prev,course.id]})
            }
            toast.success("Liked");
        }
    }
     

    return(
        <div className="h-[300px] w-[250px]  rounded-lg relative space-y-2 bg-gray-800 text-white">
            <img className=" border-t-0  rounded-t-lg" src={course.image.url} width="300px"></img>
            
            <div className="space-y-2 p-2">

            <button className="absolute top-[37%] left-[80%] bg-white border rounded-full w-[2.4rem] h-[2.4rem] flex justify-center items-center"
                onClick={()=>LikeHandler()}>
                    {Liked.includes(course.id) ? (<FcLike fontSize="1.75rem"></FcLike>):(<FcLikePlaceholder fontSize="1.75rem" />)}</button>
            <div className="font-bold text-l text-start">{course.title}</div>
            <div className="text-start text-[0.9rem]">
                {course.description.substring(0,90)+ "..."}
            </div>
            </div>
        </div>
       
    );
}
export default One_Card;