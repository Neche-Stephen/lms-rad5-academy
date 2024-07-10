import React from 'react';

import styles from './EditPersonalDetailsModal.module.css'
import CustomSelect from '../../../general/select-element/CustomSelect';
import PROFILE_IMG from './images/profile.png';
import PROFILE_EDIT from './images/edit.svg';
import PROFILE_LINK from './images/link.svg';



export default function EditPersonalDetailsModal({showEditProfileModal, setShowEditProfileModal}) {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    // This function will handle the click to toggle the modal
    const handleEditClick = () => {
      setShowEditProfileModal(!showEditProfileModal);
    };
   
  return (
    <div className={`${styles.personal_details} bg-white pt-3 pb-5 px-4 shadow d-fle flex-wrap`}>

        <div className=''>
          <div className={`${styles.edit_close} d-flex flex-wrap justify-content-end`} style={{cursor:"pointer"}} onClick={handleEditClick} >
            <div className='p_color normal_text me-3'>Close</div>
            <img src={PROFILE_EDIT} alt="" />
          </div>

          <div className={`title_text fw-semibold d-flex flex-wrap mb-3`}>Personal details</div>
          <div className='normal_text mb-3'>Add your personal details as you would like it to appear on your profile</div>

          <div className='normal_text fw-semibold mb-2'>Profile photo</div>
          <div className='d-flex flex-wrap mb-3'>
              <img src={PROFILE_IMG} alt="" className='img-fluid rounded-circle'/>
          </div>

        

          <div className={`d-flex flex-wrap gap-3 mb-2`}>
              <button className={`${styles.editProfile_changebtn} px-3 py-2 small_text`}>Change Photo</button>
              <button className={`${styles.editProfile_removebtn} px-3 py-2 small_text`}>Remove Photo</button>
          </div>

          <div className='small_text fw-semibold mb-4'>Maximum size: 1MB. Supported formats: JPG, GIF, or PNG.</div>

          <form className={`${styles.editProfileForm}`}>
            <div className='mb-4'>
              <label htmlFor="" className='d-block fw-semibold mb-1'>First and Last name <span className='sm_color'>(Required)</span></label>
              <input type="text" placeholder='Chinecherem Ubawike' />
            </div>

            <div className='mb-5'>
              <label htmlFor="" className='d-block fw-semibold mb-1'>Demographic Information</label>
              <select name="" id="">
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className='mb-5'>
                  <CustomSelect options={options} placeholder="Select an option" />
            </div>
            <div>
              <button className='px-4 py-1'>Save</button>
            </div>
          </form>

        </div>

       
    </div>
  )
}
