import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import styles from "./Login.module.css";
import ASSETS from '../../assets';

export default function Login({role}) {
    const navigate = useNavigate();

    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        navigate(`/student/dashboard`);
      };

    const RememberMeComp = () => <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <div className='d-flex flex-wrap align-items-center'> 
                                    <div className=''><img className='img-fluid' src={ASSETS.TICK} alt="" /></div>
                                    <span className='mt-1 mt-lg-1 ms-2 small_text m_color'>Remember me</span>  
                                </div>

                                <div className='small_text p_color mt-1 mt-lg-0 '>Forgot password?</div>
                            </div>

  return (
       <>
         <Container className={`${styles.login_form_container} d-none d-lg-block`}>
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
                        <Col className=' p-0'>
                            <div className={`${styles.login_img_div}`}>
                                {/* <img className='img-fluid' src={login_BG} alt="" /> */}
                            </div>
                        </Col>

                        <Col className={`${styles.login_form_col} py-5`}>
                            <Row className='justify-content-center'>
                                <Col className='' xs = '9'>
                                    <Row className='mb-5'>
                                        <Col xs = "12"><div className='big_text fw-semibold'>Welcome to RAD5</div></Col>

                                        <Col xs = "12"><div className='normal_text'>Sign up now to create your account.</div></Col>
                                    </Row>
                                    <form onSubmit={handleStudentSubmit} className={`${styles.login_form} row`}>
                    
                                        <div>
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" className={`${styles.inp}`}/>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="">Password</label>
                                            <input type="text" />
                                        </div>
                                     
                                        <RememberMeComp />

                                        <div className='mt-4'>
                                            <button className='py-2'>Sign up</button>
                                        </div>
                                        <div className='text-center mt-3 small_text'>
                                            Already have an account? <Link to = {`/signup`} className={`${styles.signup_in}`}>Sign Up</Link>
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
        <Container fluid className={`${styles.login_form_small_device_container} d-block d-lg-none`}>
            <Row>
                <div className={`${styles.login_form_bg_small_devices}`}>

                </div>
                <div className={`${styles.login_form_small_devices} py-5`}>
                         <Row className='justify-content-center'>
                                <Col xs = '9'>
                                    <Row className='mb-5'>
                                        <Col xs = "12"><div className='big_text fw-semibold '>Welcome to RAD5</div></Col>
                                        <Col xs = "12"><div className='normal_text'>Sign up now to create your account.</div></Col>
                                    </Row>
                                    <form onSubmit={handleStudentSubmit} className={`${styles.login_form} row`}>
                                    
                                        <div>
                                            <label htmlFor="">Email Address</label>
                                            <input type="text" className={`${styles.inp}`}/>
                                        </div>
                                       
                                        <div>
                                            <label htmlFor="">Password</label>
                                            <input type="text" />
                                        </div>
                                       
                                        <div className='mt-4'>
                                            <button className='py-2'>Login</button>
                                        </div>

                                       <RememberMeComp />
                                        <div className='text-center mt-3 small_text'>
                                            Already have an account? <Link to = {`/signup`} className={`${styles.signup_in}`}>Sign Up</Link>
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
