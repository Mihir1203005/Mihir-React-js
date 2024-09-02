import axios from 'axios'
import React, { useState } from 'react'
import Swal from "sweetalert2"


const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const isFormValid=()=>{
    return email == "eve.holt@reqres.in";
  }

  const handleclick=(e)=>{
    e.preventDefault()
    let userdata={
      email,
      password
    }

    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
    let tokenfromrequre = res.data.token
    localStorage.setItem("token",tokenfromrequre)
    })
    .catch((err)=>console.log(err))

    Swal.fire({
      title: "Account its done✔️",
      text: "Your Account is Login",
      icon: "success"
    }).then(function () {
      window.location.href = "/product"
    })
  }

  const Logout=()=>{
    localStorage.removeItem("token")
    Swal.fire({
      title: "Account logged out",
      text: "Your account has been logged out",
      icon: "success"
    }).then(function () {
      window.location.href = "/login"
    })
  }

  return (
    <div className='head'>
      <form action="" style={{boxShadow:"rgba(20, 100, 111, 0.2) 0px 7px 29px 0px",height:"420px",width:"380px",margin:"50px auto"}}><br /><br /><br />
        <h1 style={{fontSize:"38px"}}>Login Form</h1><br /><br /><br />
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Please Enter Your Email' required/><br /><br />
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Please Enter Your Password'  required/><br /><br /><br />
        <button className='button' disabled={!isFormValid()} onClick={handleclick} style={{margin:"0 2px",backgroundColor:"#007bff",color:"white",padding:"10px 30px"}}>Submit</button>
        <button className='button' onClick={Logout} style={{margin:"0 2px",backgroundColor:"#dc3545",color:"white",padding:"10px 30px"}}>Logout</button>
    </form>
    </div>
  )
}
export default Login








// import axios from 'axios'
// import React, { useState } from 'react'

// const Login = () => {
//     const [email,setemail]=useState("")
//     const [password,setpassword]=useState("")

//     const handleclick=(e)=>{
//         e.preventDefault()
//         let userdata={
//             email,
//             password
//         }

//         axios.post("https://reqres.in/api/login",userdata)
//         .then((res)=>{
//             let tokenfromreqres= res.data.token
//             localStorage.setItem("token",tokenfromreqres)
//         })
//         .catch((err)=>console.log(err))
//     }
//     const logOut=()=>{
//       localStorage.removeItem("token")
//     }

//   return (
//     <div>
//      <form action="" style={{boxShadow:"rgba(20, 100, 111, 0.2) 0px 7px 29px 0px",height:"450px",width:"380px",margin:"6% auto"}}><br />
//       <h1>Login Form</h1><br /><br /><br />
//      <input type="email" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}  style={{padding:"10px 22px",borderRadius:"5px",border:"1px solid grey"}} required/><br /><br />
//       <input type="password" onChange={(e)=>setpassword(e.target.value)}   placeholder='Enter Your Password' style={{padding:"10px 22px",borderRadius:"5px",border:"1px solid grey"}} required/><br /><br /><br />
//       <button onClick={handleclick} style={{margin:"0 10px"}}>Submit</button>
//       <button onClick={logOut} style={{margin:"0 10px"}}>Logout</button>
//      </form>
//     </div>
//   )
// }

// export default Login



// #dc3545
// #007bff