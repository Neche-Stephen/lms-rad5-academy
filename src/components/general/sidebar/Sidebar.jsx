import React, {useState} from 'react';
import { Offcanvas, Col, Container, Row } from 'react-bootstrap';

import styles from './Sidebar.module.css';
import ASSETS from '../../../assets';

export default function Sidebar({SidebarItems, showOffcanvas, handleClose, currentItem}) {
    const [sidebarItems, setSidebarItems] = useState(SidebarItems);
  return (
    <>
          <Col className={`${styles.offcanvas_wrapper} d-none d-sm-block p-0 position-relative`} style = {{backgroundColor:'var(--softWhite)'}} xs = '2'>
            <Offcanvas className={`${styles.offcanvas_container}`} show={showOffcanvas} onHide={handleClose} responsive="sm">
                <Offcanvas.Body>
                    <Container fluid className=''>
                       <div className={`${styles.sidebar_logo_row} d-none d-sm-flex flex-wrap justify-content-center mt-5`}>

                            <div className=''>
                                <img src={ASSETS.RAD5_LOGO} alt="" className='w-100'/>
                            </div>

                       </div>

                       <div className='d-flex flex-wrap justify-content-end mb-4'>
                          <div style = {{cursor:"pointer"}} onClick={handleClose}  className='d-sm-none'><img src={ASSETS.CANCEL} alt="" /></div>
                       </div>

                       {
                         sidebarItems.map((item, index) => {
                            return(
                              
                                <div key={index} className={`${styles.siderbar_item_row} d-flex flex-wrap justify-content-center`}>
                                    <div className={`${styles.sidebar_item_col}`}>
                                        <div className='d-flex flex-wrap align-items-center justify-content-center'>
                                            {/* Item Image column */}
                                            <div className='col-sm-7 col-md-5 col-lg-3'>
                                              <img src={item.icon} alt="" className={`${styles.sidebar_icon}`} />
                                            </div>
                                            {/* Item Name column */}
                                            <div className={`ms-2 col d-sm-none d-lg-block`}>
                                                <div className='d-flex flex-wrap'>
                                                    <div className={`${styles.normal_text}`}>
                                                      {item.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                         })

                       }

                       <div className={`${styles.logout_btn_wrapper} d-flex flex-wrap justify-content-center`}>
                          <button className={`${styles.siderbar_logout_btn} normal_text px-5 py-2`}>Log Out</button>
                       </div>
                    

                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
         </Col>
    </>
  )
}
