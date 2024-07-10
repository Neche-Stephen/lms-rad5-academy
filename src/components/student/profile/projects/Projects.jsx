import React from 'react';
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={`${styles.experience} bg-white rounded py-3 px-3`}>
      <div className='title_text mb-2 fw-bold'>Projects</div>
      <div className={`${styles.default_experience_view} d-flex flex-wrap px-3 py-3 rounded border justify-content-between`}>
        <div className='col-9 small_text'>
          <div className='m_color'>Showcase your skills with job-relevant projects</div>
          <div className='sm_color'>
            Add projects here to demonstrate your technical expertise and ability to solve real-world problems.
          </div>
        </div>

        <div className='col-3 small_text text-end p_color'>
          <div className=''>Add Project</div>
          <div>Browse Projects</div>
        </div> 

      </div>

    </div>
  )
}
