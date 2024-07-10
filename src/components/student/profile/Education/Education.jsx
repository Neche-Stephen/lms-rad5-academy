import React from 'react';
import styles from "./Education.module.css";

export default function Education() {
  return (
    <div className={`${styles.education} bg-white rounded py-3 px-3`}>
      <div className='title_text mb-3 fw-bold'>Credentials</div>

      <div className={`${styles.default_education_view} d-flex flex-wrap px-3 py-3 rounded justify-content-between`}>
        <div className='col-9 small_text'>
            <div className='normal_text fw-bold'>University of Nigeria Nsukka</div>
          <div className=' m_color'>Bachelor's degree in Engineering, graduated August 2023</div>
          <div className='sm_color'>
           October 2017 - August 2023
          </div>
        </div>

        <div className='col-3 small_text text-end p_color'>
          <div className=''>Add Project</div>
          {/* <div>Browse Projects</div> */}
        </div> 

      </div>

    </div>
  )
}
