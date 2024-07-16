import React from 'react';
import styles from "./Education.module.css";
import INFO from "./images/info.svg";
import EDIT from "./images/edit.svg";


export default function Education() {
  return (
    <div className={`${styles.education} bg-white py-3 px-3`}>
      <div className='title_text mb-2  fw-bold d-flex align-items-center flex-wrap'>
        <span className='me-2'>Credentials</span>
        <span><img src={INFO} alt="" /></span>
      </div>

      <div className={`${styles.default_education_view} d-flex flex-wrap px-3 py-3 rounded justify-content-between`}>
      <div className='d-flex flex-wrap justify-content-end d-lg-none w-100'><img src={EDIT} className="img-fluid" alt="" /></div>
        <div className='col-12 col-lg-9 small_text'>
            <div className='normal_text fw-bold'>University of Nigeria Nsukka</div>
          <div className=' m_color'>Bachelor's degree in Engineering, graduated August 2023</div>
          <div className='sm_color'>
           October 2017 - August 2023
          </div>
        </div>

        <div className='col-12 col-lg-3 small_text text-end p_color'>
          <div className='d-none d-lg-block'>Add Project</div>
          {/* <div>Browse Projects</div> */}
        </div> 

      </div>

    </div>
  )
}
