import { createContext, useState } from "react";

export const AuthContext=createContext()

let initialstate={
    isAuth:false,
    token:null
}
function AuthContextProvider({children}) {

    const [auth,setauth]=useState(initialstate)
    
    const loginUser=(value)=>{
        setauth({isAuth:true,token:value})
    }

    const logoutUser=()=>{
        setauth(initialstate)
        alert("LogOut...")
    }

    return <AuthContext.Provider value={{auth,loginUser,logoutUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
