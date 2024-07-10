import React, {useState} from 'react';


import { Container, Row, Col} from "react-bootstrap";

import styles from './StudentDashboard.module.css';

import StudentSidebar from '../../../components/student/student-sidebar/StudentSidebar';
import Navbar from '../../../components/general/navbar/Navbar';

export default function StudentDashboard() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  return (
   <>

      <Container fluid>
        <Row>
          <StudentSidebar showOffcanvas = {showOffcanvas} handleClose = {handleClose} currentItem='Dashboard'/>

          <Col className={`${styles.student_dashboard} p-0`}>
           <Navbar handleShow={handleShow} />

          {/* Welcome Widget */}
          <div className={`${styles.welcome_widget} ps-5 pt-4 pb-3 mt-4`}>
            <div className={`normal_text text-white fw-bold`}>Welcome Back Esther,</div>
            <div className={`small_text text-white`}>Tuesday, 7th march 2023</div>
          </div>


          </Col>


        </Row>

      </Container>

   
   </>
  )
}
