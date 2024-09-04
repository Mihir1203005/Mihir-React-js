import { NavLink } from 'react-router-dom'


const Navbar = () => {

  
  return (
      <div style={{backgroundColor:"grey",height:"70px",padding:"10px 150px"}}>
     <nav style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
     <NavLink style={ {color: 'white',fontSize:"18px",fontWeight:"bold"}}  to={"/"}>Home</NavLink>
      <NavLink style={ {color: 'white',fontSize:"18px",fontWeight:"bold"}} to={"/product"}>Product</NavLink>
      <NavLink style={ {color: 'white',fontSize:"18px",fontWeight:"bold"}} to={"/addproduct"}>Addproduct</NavLink>
      <NavLink style={ {color: 'white',fontSize:"18px",fontWeight:"bold"}}
         to={"/login"}>Login</NavLink>
      

     </nav>
    </div>
  )
}

export default Navbar
