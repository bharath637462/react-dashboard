import React, { useContext } from 'react';
import './index.css'
import { FaReact } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { BiSolidGrid } from "react-icons/bi";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { MdGridOn } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdWidgets } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { AuthContext } from "../../context/Authcontext";


export default function MenubarLite() {
  const { isExpanded, setIsExpanded } = useContext(AuthContext);
  return (
    <div className='menubar' style={{width: '80px'}}>
      
    <div className='creative-tim'><FaReact style={{ fontSize: '25px'}}/></div>
    <div className='taniaandrew'  >
      <div>
      <div className='jss59'>
        <img src='https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/static/media/avatar.6ea8c10a.jpg' className='jss61'></img>
      </div>
      </div>
      {isExpanded && (
        <div className='js12'>
          <div style={{width: '40px'}}>MP</div>
          <div style={{width: '40px'}}>EP</div>
          <div style={{width: '40px'}}>S</div>
        </div>
      )}
</div>
    <div className='menubarlist'>
        <div className='dashboard'><MdDashboard className='icon-padding'/></div>
        <div className='others'><BiImageAlt className='icon-padding'/></div>
        <div className='others'><BiSolidGrid className='icon-padding'/></div>
        <div className='others'><LiaNotesMedicalSolid className='icon-padding'/></div>
        <div className='others'><MdGridOn className='icon-padding'/></div>
        <div className='others'><IoLocationSharp className='icon-padding'/></div>
        <div className='others'><MdWidgets className='icon-padding'/></div>
        <div className='others'><SlGraph className='icon-padding' /></div>
        <div className='others'><MdDateRange className='icon-padding'/></div>
    </div>

</div>
  )
}
