import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import styles from "../CSS/common.module.css";
import { IoIosNotifications,IoIosArrowDropdownCircle ,IoMdPerson} from "react-icons/io";
function Header({ HeadTitle }){
    return(
        <>
<div className={styles.maincontainer}>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
  <div   className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{color:"yellow" , fontSize:"40px"}}className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
          {HeadTitle}
        </li>
         <li className="nav-item">
          
        </li>
      </ul>  
    </div>
    <div className="d-flex align-items-center">
    <div style={{display:"flex",marginTop:"10px"}}>
    <div className={styles.icon_notification}>
      <ul style={{display:"flex",alignItems:"center"}}>           
        <li style={{marginRight:"15px"}}><span><IoIosNotifications size= {26}/></span></li> 
        <li style={{marginRight:"15px"}}><span><IoMdPerson size= {26}/></span></li> 
        <li style={{marginRight:"3px"}}><span><IoIosArrowDropdownCircle size= {18}/></span></li> 
        </ul>
    </div>
    </div>
     
    </div>
  </div>

</nav>
</div>
</>
    )
}
export default Header