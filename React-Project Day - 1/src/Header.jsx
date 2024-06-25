import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Header()
{
    return(
        <div className="main">
            <div className="container" style={{display: "flex", justifyContent: "space-between",alignItems: "center", height: "70px"}}>
            <div className="logo">
                <h5>Logo.</h5>
            </div>
            <div className="nav">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="icon">
            <div className="mx-1"><FaFacebook /></div>
            <div className="mx-1"><FaTwitter /></div>
            <div className="mx-1"><FaInstagramSquare /></div>
            </div>
        </div>
        </div>
    )
}

export default Header;