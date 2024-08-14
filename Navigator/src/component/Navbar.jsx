import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto",backgroundColor:"#D2BAB0",color:"black",padding:"10px"}}>
            <NavLink to={"/home"} style={{color:"black",textDecoration:"none"}}>HOME</NavLink>
            <NavLink to={"/about"}  style={{color:"black",textDecoration:"none"}}>ABOUT</NavLink>
            <NavLink to={"/product"}  style={{color:"black",textDecoration:"none"}}>PRODUCT</NavLink>
            <NavLink to={"/login"}  style={{color:"black",textDecoration:"none"}}>LOGIN</NavLink>
            
        </div>
  )
}

export default Navbar
