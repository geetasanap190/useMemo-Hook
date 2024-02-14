import React from "react";
import { useState, useMemo } from 'react';
export default function UseMemoHook(){

    const[add, setAdd] = useState(0);
  const[minus, setMinus] = useState(100);
  let mul = useMemo(function multify(){
    console.log("*******");
    return add *10;
  }, [add]);

  return (
    <div >
      {mul} <br></br>
     <button onClick={()=> setAdd(add + 1)}> Add</button>
     <span>{add}</span>
     <button onClick={()=> setMinus(minus -1)}> 
      Subscribe
     </button >
     <span>{minus}</span>
    </div>
  ); 
}