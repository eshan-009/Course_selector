import './App.css';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import {filterData,apiUrl} from './data';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [Courses,SetCourses] = useState('');
  const [Category,SetCategory] = useState(filterData[0].title);
 

    async function fetchData() {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        SetCourses(output.data);
        
      }
     catch(err){
      console.log(err);
     }
    }
useEffect(()=>{
fetchData();
},[]);
  return (
    <div className="App bg-gray-700  min-h-screen">
      <NavBar filterData ={filterData}  Category = {Category} SetCategory ={SetCategory}></NavBar>
      <Cards Courses ={Courses} Category = {Category} ></Cards>
    </div>
  );
}

export default App;
