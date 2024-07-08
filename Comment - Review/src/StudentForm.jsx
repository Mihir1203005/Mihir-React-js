import React, { useState } from 'react'
const initialinfo={
    name: '',
    email: '',
    password: '',
    grade:'',
    gender:'',
}
const StudentForm = () => {
    const [info,setInfo]=useState(initialinfo)
    function handleform(e){
        e.preventDefault();
        console.log(info)
    }

    function handlechange(e){
        setInfo({...info,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <h2>Student Form</h2>
        <form onSubmit={handleform}>
            <input type="text" name='name' placeholder='enter your full name' onChange={handlechange}/><br />
            <input type="email" name='email' placeholder='enter your email' onChange={handlechange} /><br />
            <input type="password" name='password' placeholder='enter your password' onChange={handlechange}/><br />
            <select name="grade" id="" onChange={handlechange}>
                <option value="">Select Your Grade</option>
                <option value="freshman">freshman</option>
                <option value="sophomore">sophomore</option>
                <option value="junior">junior</option>
                <option value="senior">senior</option>
            </select><br />
            Male:<input type="radio" name='gender' onChange={handlechange}/>
            Female:<input type="radio" name='gender' onChange={handlechange}/>
            other: <input type="radio" name='gender' /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default StudentForm