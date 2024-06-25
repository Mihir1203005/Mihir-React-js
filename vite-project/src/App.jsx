import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
function prime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

  return (
    <>
      <div className="App">
      <h1>Welcome To Counter 2.0</h1>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -1
      </button>
      <button onClick={() => setCount(0)}>RESET</button>

      <h5>composite number is:</h5>
      <h5>prime number is:{prime(count) ? "true" : "false"}</h5>
    </div>
    </>
  )
}

export default App
