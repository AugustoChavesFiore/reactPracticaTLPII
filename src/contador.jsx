import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  }
  const restar = () => {
    setCount(count - 1);
  }
  return (
    <>
    <h1>Count: {count}</h1>
   <button className='btn btn-success' onClick={handleClick}>
    +1
   </button>
   <button className='btn btn-warning' onClick={reset}>
      Reset
   </button>
   <button className='btn btn-danger' onClick={restar}>
    -1
   </button>
    </>
  )
}


export default App
