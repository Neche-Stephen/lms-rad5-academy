import React from 'react';

import styles from './Personal.module.css'
import PROFILE_IMG from './images/profile.png';
import PROFILE_EDIT from './images/edit.svg';
import PROFILE_LINK from './images/link.svg';



export default function PersonalDetails({showEditProfileModal, setShowEditProfileModal}) {
   // This function will handle the click to toggle the modal
   const handleEditClick = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };

  return (
    <div className={`${styles.personal_details} bg-white pt-3 pb-5 px-4 shadow`}>

          {/* Edit Profile */}
        <div className='d-flex flex-wrap justify-content-end' style={{cursor:"pointer"}} onClick={handleEditClick}><img src={PROFILE_EDIT} alt="" /></div>

        <div className={`normal_text fw-semibold d-flex flex-wrap justify-content-center mb-3`}>Personal details</div>

        <div className='d-flex flex-wrap justify-content-center mb-3'>
            <img src={PROFILE_IMG} alt="" className='img-fluid rounded-circle border'/>
        </div>

        <div className={`title_text text-center mb-5 fw-bold`}>Madueme Esther Amaka</div>

        <div className={`${styles.profile_btn_wrapper} d-flex flex-wrap justify-content-center`}>
            <button className={`${styles.profile_btn} d-flex flex-wrap align-items-center`} >
                <span className={`${styles.profile_link}  me-2 col-auto`}><img src={PROFILE_LINK} alt="" className='img-fluid' /></span>
                <span className={`${styles.profile_link_text}  p_color col-auto`}>Share profile link</span>
            </button>
        </div>

    </div>
  )
}
