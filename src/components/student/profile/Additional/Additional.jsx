import React from 'react';
import styles from "./Additional.module.css";
import ADD from './add.svg';

export default function Additional() {
  return (
    <div className={`${styles.additional} bg-white px-4 py-3`}>
        <div className='title_text fw-bold mb-3'>Additional info</div>

        <div className='sm_color mb-3'>
             Help viewers of your profile get to know you better by adding links and a short summary about yourself.
        </div>

        <button className={`${styles.additional_btn} p_color normal_text bg-white px-3 py-3`}>
              <span className='me-2 d-sm-none d-md-inline'><img src={ADD} alt="" /></span>
            <span>Add additional info</span>
        </button>

    </div>
  )
}
