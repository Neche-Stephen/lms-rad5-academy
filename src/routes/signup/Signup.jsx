import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./Signup.module.css";
import ASSETS from '../../assets';

export default function Signup({role}) {
    const navigate = useNavigate();

    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        navigate(`/student/dashboard`);
      };
  return (
       <>
         <Container className={`${styles.signup_form_container} d-none d-lg-block`}>
            <Row className='justify-content-center'>
                <Col xl = '11' className=''>
                    <Row className='py-4'>
                    <Col>
                        <div >
                            <img src={ASSETS.RAD5_LOGO} alt="" />
                    
                        </div>
                    </Col>
                    </Row>

                    <Row className='align-items-stretch'>
                        <Col className='p-0'>
                            <div className={`${styles.signup_img_div}`}>
                                {/* <img className='img-fluid' src={SIGNUP_BG} alt="" /> */}
                            </div>
                        </Col>

                        <Col className={`${styles.signup_form_col} py-4`}>
                            <Row className='justify-content-center'>
                                <Col className='' xs = '9'>
                                    <Row className='mb-5'>
                                        <Col xs = "12"><div className='big_text fw-semibold'>Welcome to RAD5</div></Col>

                                        <Col xs = "12"><div className='normal_text'>Sign up now to create your account.</div></Col>
                                    </Row>
                                    <form onSubmit={handleStudentSubmit} className={`${styles.signup_form} row`}>
                                        <div>
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" className={`${styles.dont_fool}`}/>
                                        </div>
                                        <div>
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" className={`${styles.inp}`}/>
                                        </div>
                                        <div>
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Password</label>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Confirm Password</label>
                                            <input type="text" />
                                        </div>
                                        <div className='mt-4'>
                                            <button className='py-2'>Sign up</button>
                                        </div>
                                        <div className='text-center mt-3 small_text'>
                                            Already have an account? <Link to = {`/login`}  className={`${styles.log_in}`}>Log In</Link>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        {/* Small Devices */}
        <Container fluid className={`${styles.signup_form_small_device_container} d-block d-lg-none`}>
            <Row>
                <div className={`${styles.signup_form_bg_small_devices}`}>

                </div>
                <div className={`${styles.signup_form_small_devices} py-5`}>
                         <Row className='justify-content-center'>
                                <Col className='' xs = '9'>
                                    <Row className='mb-5'>
                                        <Col xs = "12"><div className='big_text fw-semibold '>Welcome to RAD5</div></Col>
                                        <Col xs = "12"><div className='normal_text'>Sign up now to create your account.</div></Col>
                                    </Row>
                                    <form onSubmit={handleStudentSubmit} className={`${styles.signup_form} row`}>
                                        <div>
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" className={`${styles.dont_fool}`}/>
                                        </div>
                                        <div>
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" className={`${styles.inp}`}/>
                                        </div>
                                        <div>
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Password</label>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Confirm Password</label>
                                            <input type="text" />
                                        </div>
                                        <div className='mt-4'>
                                            <button className='py-2'>Sign up</button>
                                        </div>
                                        <div className='text-center mt-3 small_text'>
                                            Already have an account? <Link to = {`/login`}  className={`${styles.log_in}`}>Log In</Link>
                                        </div>
                                    </form>
                                </Col>
                        </Row>
                </div>
            </Row>

        </Container>
       </>
  )
}
