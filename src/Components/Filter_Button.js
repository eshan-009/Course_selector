import { useState } from "react";
import React from "react";

function Filter_Button({obj,Category,SetCategory}){
    
    function FilterHandler(category){
        SetCategory(category); 
    }
   
    return(
        <div >
            <button className={`border-slate-600 rounded-lg px-2 bg-slate-900 my-4  hover:bg-opacity-50 border-2 transition-all duration-300
             ${Category===obj.title?"bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`} 
             onClick={()=>FilterHandler(obj.title)}>{obj.title}</button>
        </div>
    );
}
export default Filter_Button;