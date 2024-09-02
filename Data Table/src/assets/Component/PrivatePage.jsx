import React from 'react'
import Swal from "sweetalert2";


const PrivatePage = ({children}) => {
    const isAuth=localStorage.getItem("token")

    const Alert = () => {
        Swal.fire({
          title: "You Can't Enter In This Page",
          text: "Please Login Your Account",
          icon: "error",
          confirmButtonText: "Okay",
          confirmButtonColor: "rgb(248, 103, 103)"

        }).then(function () {
          window.location.href = "/login";
        });
      };
    
    
    if(!isAuth){
        // alert("You are not login your Account")
        Alert()
        // window.location.href="/login"
    }else{
      return children
    }
}

export default PrivatePage
