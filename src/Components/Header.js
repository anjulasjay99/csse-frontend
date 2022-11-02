import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import styles from "../CSS/common.module.css";
import { IoIosNotifications } from "react-icons/io";

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
    <div className={styles.icon_notification}>
            <span><IoIosNotifications size= {30}/></span>
    </div>
      <div style={{marginRight:"30px"}} className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            className="rounded-circle"
            height="29"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
        </ul>
      </div>
    </div>
  </div>

</nav>
</div>
</>
    )
}
export default Header