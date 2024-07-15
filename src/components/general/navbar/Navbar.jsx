import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import styles from "./Navbar.module.css";

import notification_icon from './icons/notification.svg';
import profile_icon from './icons/profile.svg'
import hamburger_icon from './icons/hamburger.svg';
import rad5_logo from './icons/rad5_2.png';


export default function Navbar({handleShow}) {
  return (
   
      <div className={`d-flex flex-wrap mt-2 align-items-center px-3`}>
        <div className='col-2 d-sm-none'><img src={rad5_logo} alt="" className='w-100'/></div>

        <div style = {{cursor:"pointer"}} onClick={handleShow} className='col-1 ms-4 d-sm-none'><img src={hamburger_icon} alt="" className='w-100' /></div>

        <div className={`${styles.navbar_icon} ms-auto me-4`}><img src={notification_icon} alt="" className='w-100'/></div>

        <div className={`${styles.navbar_icon}`}>
              <div className=''><Link to="/student/profile"><img src={profile_icon} alt="" className='w-100'/></Link></div>
        </div>

        <div className='col-1 d-none ms-2 d-sm-block'>
                  <p className={`${styles.navbar_name} fw-semibold`}>Claire</p>
                  <small className={`${styles.navbar_role}`}>Student</small>
        </div>

      </div>
        // <button onClick={handleShow}>click</button>

  )
}
