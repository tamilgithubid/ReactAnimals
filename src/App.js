import './App.css'


import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal(){
  const animals=['cow','bird','cat','dog','horse'];
  return animals[Math.floor(Math.random()*animals.length)]
}
function App() {
  
const [animals,setAnimals]=useState([]);

  const handleClick = () => {
    setAnimals([...animals , getRandomAnimal()])
   
  
  };
  const renderedAnimals =animals.map((animal,index)=>{
    return <AnimalShow type={animal} id={index}/>
  })
  return (
    <div className="app">
      <button className='btn'  onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
      
    </div>
  );
}

export default App;
