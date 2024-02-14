
import './App.css';
import UseMemoHook from './UseMemoHook';

import { useState, useMemo } from 'react';

function App() {

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

export default App;
