import React, {useState} from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(10);
function decreseCount(){
    setCount(prevCount => prevCount -1);
}
function increseCount(){
    setCount(prevCount => prevCount+1);
}
  return (
  <>
      <button onClick={decreseCount}>Remove</button>
      <span>{count}</span>
      <button onClick={increseCount}>Add</button>
      </>
  )

}

export default App;
