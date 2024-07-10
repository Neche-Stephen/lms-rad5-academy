import React from 'react';
import styles from "./Additional.module.css";

export default function Additional() {
  return (
    <div className={`${styles.additional} bg-white rounded px-4 py-3`}>
        <div className='title_text fw-bold mb-3'>Additional info</div>

        <div className='sm_color mb-3'>
             Help viewers of your profile get to know you better by adding links and a short summary about yourself.
        </div>

        <button className={`${styles.additional_btn} p_color bg-white`}>
            Add additional info
        </button>

    </div>
  )
}
