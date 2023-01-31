import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'

function App() {
  const num=useSelector(data=>data.num)
  const dispatch = useDispatch();
  return (
    <div className="cntr">
    <div >
      <p className="text-center" id="num">{num}</p>
     
      <button className=" m-1" id="button1" onClick={() =>dispatch({type:"Incrementer"})}>Incrementer</button>
      <button className=" m-1" id="button2" onClick={() =>dispatch({type:"Decrementer"})}>Decrementer</button>
      <button className=" m-1 " id="button3" onClick={() =>dispatch({type:"Reset"})}>Reset</button>
    </div>
 
    </div>
  );
}

export default App;