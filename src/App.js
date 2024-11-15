import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [goal, setGoal] = useState(0);
  const {id, image, wish} = data[goal]

  const previousGoal =() => {
    setGoal ((goal =>{
      goal --;
      if(goal < 0){
        return data.length -1;
        
      }
      return goal;
    }))
  }
  const nextGoal =() =>{
    setGoal ((goal => {
      goal ++;
      if (goal > data.length -1) {
        goal = 0;
      }
      return goal;
    }))
  }
  return (
    <div>
      <div className='container'>
        <img src ={image} width="900px" alt="view"/>
      </div>
      <div className='container '>
        <h1>{id}-{ wish }</h1>
      </div>
      <div className='container btn'>
      <button onClick = {previousGoal}>Previous</button>
      <button onClick = {nextGoal}>Next</button>
      </div>
    </div>
  );
}

export default App;
