
import {useState} from "react";
import "./App.css";

function App() {
  const [count,setCount] =useState(0);
  const addOne = (value) =>{
    if(count<10){
      setCount(count+value);
    }
    

  };
  const dOuble = (value) =>{
    setCount(count*value);
  }
  return(
    <div className="App">
    <h3>counter:{count}</h3>
    <button onClick={()=>addOne(1)}>add1</button>
    <button onClick={ ()  =>  addOne(-1)}>sub1</button>
    <button onClick={()=>dOuble(2)}>double</button>
    </div>
  );
}

export default App;
