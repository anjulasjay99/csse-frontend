import React from "react";
import styles from '../CSS/sidebar.module.css'
import { NavLink } from "react-router-dom";
function Sidebar(){
    return(
    <>
     <div className= {styles.nav_main_container}>


      <div className= {styles.nav_body}>

        <NavLink to="/customer-profile" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-th" aria-hidden="true"></i>
            <p className= {styles.nav_text}>DASHBOARD</p>
          </div>
        </NavLink>
        <NavLink to="/ViewSuppliers" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-user" aria-hidden="true"></i>
            <p className= {styles.nav_text}>Supplier MANAGEMENT</p>
          </div>
        </NavLink>
        <NavLink to="/customer-report" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-truck" aria-hidden="true"></i>
            <p className= {styles.nav_text}>Order MANAGEMENT</p>
          </div>
        </NavLink>
        <NavLink to="/viewProducts" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-archive" aria-hidden="true"></i>
            <p className= {styles.nav_text}>Product MANAGEMENT</p>
          </div>
        </NavLink>
        <NavLink to="/customer-report" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-credit-card" aria-hidden="true"></i>
            <p className= {styles.nav_text}>Delivery MANAGEMENT</p>
          </div>
        </NavLink>
        <NavLink to="/customer-report" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-cog" aria-hidden="true"></i>
            <p className= {styles.nav_text}>Transaction MANAGEMENT</p>
          </div>
        </NavLink>
        <div className={styles.signOut}>
        <NavLink to="/customer-report" className= {styles.link_styles}>
          <div className= {styles.nav_link_wrapper}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <p className= {styles.nav_text}>SIGN OUT</p>
          </div>
        </NavLink>
        </div>

      </div>

    </div>
        </>
    )
}

export default Sidebar;