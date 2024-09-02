import { NavLink } from 'react-router-dom'
import GoogleButton from 'react-google-button';
import { auth, provider } from '../Service/Firebase';
import { signInWithPopup } from 'firebase/auth';

const Navbar = () => {
  const handlegoogleclick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("You are logged in");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
      <div style={{backgroundColor:"#28282B",height:"70px",padding:"10px 150px"}}>
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
      <div className="google-btn">
         <GoogleButton onClick={(e) => handlegoogleclick(e)} />
       </div>

     </nav>
    </div>
  )
}

export default Navbar
