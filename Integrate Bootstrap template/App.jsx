import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="">
     <Container>
      <div className="row mt-5 pt-5 col-12">
     <div className="col-6 mt-5 pt-5 mb-5">
      <h1 className='fw-bold'>Hi, Hi, I'm John Deo.</h1>
       <h5 className='col-6'>In publishing and graphic design, Lorem ipsum is a placeholder </h5>
       <p> Lorem ipsum may be used as a</p>
       <Button variant="primary" style={{borderRadius:"18px"}}>I'M AVAILABLE</Button>
     </div>
     <div className="col-6">
      <img src="https://images.unsplash.com/photo-1720188228786-e6cb3b668aef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" className='col-12 mt-5' />
     </div>
     </div>
    </Container>
     </div>
    </>
  )
}

export default App