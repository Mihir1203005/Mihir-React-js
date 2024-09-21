import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {loginUser}=useContext(AuthContext)
  const Navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()

    let userdata={
      email,password
    }

    console.log(userdata)

    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
      alert("Login Succesfully...")
      console.log(res.data.token)
      loginUser(res.data.token)
      Navigate("/dashboard")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit} >
        <div>
          <label>
            
            <input data-testid="email-input" value={email} onChange={(e)=>setemail(e.target.value)}  type="email" placeholder="email" />
          </label>
        </div><br></br>
        <div>
          <label>
            
            <input
              data-testid="password-input"
              type="password"
            
              value={password} onChange={(e)=>setpassword(e.target.value)}
              placeholder="password"
            />
          </label>
        </div><br></br>
        <div>
          <input data-testid="form-submit" type="submit"  value="SUBMIT" />
        </div>
       
      </form>
      <div >
        <Link  to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
