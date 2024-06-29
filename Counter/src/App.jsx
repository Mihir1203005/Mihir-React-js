import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function isEven(num) {
    return num % 2 === 0;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return (
    <>
      <div className="App" style={{color:"brown",border:"2px solid black",borderRadius:"20px", padding:"30px",backgroundColor:"#D2BAB0"}}>
        <h1>Welcome To Counter 2.0</h1>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>
          -1
        </button>
        <button onClick={() => setCount(0)}>RESET</button>

        <h3>Even number is: {isEven(count) ? "even" : "odd"}</h3>
        <h3>Prime number is: {isPrime(count) ? "true" : "false"}</h3>
      </div>
    </>
  )
}

export default App
