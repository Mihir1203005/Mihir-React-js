import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Button from './components/Button'
import { themecontext } from './Context/ThemeContext'


function App() {
  const { theme } = useContext(themecontext)

  return (
    <>
      <div className="div" style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white",border:"light"?"2px solid black":"2px solid white",marginTop:"10px"}}>
        <Navbar />
        <Section />
      </div>
      <Button />
    </>
  )
}

export default App
