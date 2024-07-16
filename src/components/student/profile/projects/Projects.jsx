import React from 'react';
import styles from "./Projects.module.css";
import INFO from "./info.svg";


export default function Projects() {
  return (
    <div className={`${styles.experience} bg-white py-3 px-3`}>
      <div className='title_text mb-2 fw-bold d-flex align-items-center flex-wrap'>
        <span className='me-2'>Projects</span>
        <span><img src={INFO} alt="" /></span>
      </div>
      <div className={`${styles.default_experience_view} d-flex flex-wrap px-3 py-3 rounded justify-content-between`}>
        <div className='col-12 col-lg-9 small_text mb-3 mb-lg-0'>
          <div className='m_color'>Showcase your skills with job-relevant projects</div>
          <div className='sm_color'>
            Add projects here to demonstrate your technical expertise and ability to solve real-world problems.
          </div>
        </div>

        <div className='col-12 col-lg-3 small_text text-lg-end p_color'>
          <div className='d-flex d-lg-block flex-wrap justify-content-between'>
            <div className=''>Add Project</div>
            <div className=''>Browse Projects</div>
          </div>
        </div> 

      </div>

    </div>
  )
}
