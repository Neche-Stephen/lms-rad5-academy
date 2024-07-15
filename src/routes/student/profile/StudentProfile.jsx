import React, {useState} from 'react';


import { Container, Row, Col} from "react-bootstrap";

import styles from './StudentProfile.module.css';

import ProfileComponents from '../../../components/student/profile';

import StudentSidebar from '../../../components/student/student-sidebar/StudentSidebar';

import Navbar from '../../../components/general/navbar/Navbar';

export default function StudentProfile() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  // handle

  return (
   

      <Container fluid >
        <Row >
          <StudentSidebar showOffcanvas = {showOffcanvas} handleClose = {handleClose} currentItem='Dashboard'/>

          <Col className='p-0'>
            <div className={`${styles.profile_dashboard}`}>
                <Navbar handleShow={handleShow} />

                {/* Welcome Widget */}
                <div className={`${styles.welcome_widget} ps-5 pt-4 pb-3 mt-4 mb-5`}>
                  <div className={`normal_text text-white fw-bold`}>Profile</div>
                </div>


                {/* Main Profile Section */}

                <div className={`${styles.profile_section_wrapper}`}> 

                  <div className={`${styles.profile_section} d-flex flex-wrap mx-auto justify-content-center justify-content-sm-start`}>
                        {/* Section One */}
                      <div className={`${styles.profile_section_one}`}>
                            {/* Personal Details */}
                            <div className='mb-4'>
                                <ProfileComponents.PersonalDetails setShowEditProfileModal = {setShowEditProfileModal} showEditProfileModal={showEditProfileModal} />
                            </div>

                            {/* Additional Info */}
                            <div className='mb-4'>
                              <ProfileComponents.Additional />
                            </div>

                      </div>

                        {/* Section Two */}
                        <div className={`${styles.profile_section_two}`}>
                            {/* Experience */}
                            <div className='mb-3 title_text fw-bold'>Experience</div>

                              {/* Projects */}
                              <div className='mb-4'>
                                <ProfileComponents.Projects />
                              </div>

                              {/* Work History */}
                              <div className='mb-4'>
                                <ProfileComponents.WorkHistory />
                              </div>

                              {/* Education */}
                              <div className='mb-4 mb-sm-0'>
                                <ProfileComponents.Education />
                              </div>

                            <div>

                            </div>
                      </div>


                    


                </div>


                </div>

                {/* EditPersonalDetailsModal - set to absolute, closest parent relative is profile_dashboard in css */}

                {
                  showEditProfileModal && <div className={`${styles.editPersonalDetailsModal}`}>
                  <ProfileComponents.EditPersonalDetailsModal setShowEditProfileModal = {setShowEditProfileModal} showEditProfileModal={showEditProfileModal} />
                  </div>
                }
                

            </div>

          </Col>


        </Row>

      </Container>

   
   
  )
}
