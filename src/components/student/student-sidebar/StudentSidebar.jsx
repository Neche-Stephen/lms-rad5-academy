import React from 'react';


import Sidebar from '../../general/sidebar/Sidebar';
import { studentSidebarItems } from '../../../utils/sidebar-items/studentSideBarItems';

export default function StudentSidebar({showOffcanvas, handleClose, currentItem}) {

  return (
   <Sidebar SidebarItems = {studentSidebarItems} showOffcanvas = {showOffcanvas} handleClose = {handleClose} currentItem = {currentItem}/>
  )
}
