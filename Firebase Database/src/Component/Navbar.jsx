import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
      <div style={{backgroundColor:"#28282B",height:"50px",padding:"15px 150px"}}>
     <nav style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
     <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/"}>Home</NavLink>
      <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/product"}>Product</NavLink>
      <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/addproduct"}>Addproduct</NavLink>
      <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}}
         to={"/login"}>Login</NavLink>
     </nav>
    </div>
  )
}

export default Navbar
