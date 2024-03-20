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



export default function MenuBar() {
  const { isExpanded, setIsExpanded } = useContext(AuthContext);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='menubar'>
      
        <div className='creative-tim'><FaReact style={{ paddingRight: '12px', fontSize: '35px'}}/>CREATIVE TIM</div>
        <div className={`taniaandrew ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion} >
          <div>
          <div className='jss59'>
            <img src='https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/static/media/avatar.6ea8c10a.jpg' className='jss61'></img>
          </div>
        Tania Andrew
        <b class="jss1257" ></b>
          </div>
      {isExpanded && (
        <div className='js12'>
          <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}><div style={{width: '40px'}}>MP</div><span>My Profile</span></div>
          <div style={{display: 'flex',  alignItems: 'center', marginTop: '10px'}}><div style={{width: '40px'}}>EP</div><span>Edit Profile</span></div>
          <div style={{display: 'flex',  alignItems: 'center', marginTop: '10px'}}><div style={{width: '40px'}}>S</div><span>Settings</span></div>
        </div>
      )}
    </div>
        <div className='menubarlist'>
            <div className='dashboard'><MdDashboard className='icon-padding'/>Dashboard</div>
            <div className='others'><BiImageAlt className='icon-padding'/>Pages<b class="jss1257"></b></div>
            <div className='others'><BiSolidGrid className='icon-padding'/>Components<b class="jss1257"></b></div>
            <div className='others'><LiaNotesMedicalSolid className='icon-padding'/>Forms<b class="jss1257"></b></div>
            <div className='others'><MdGridOn className='icon-padding'/>Tables<b class="jss1257"></b></div>
            <div className='others'><IoLocationSharp className='icon-padding'/>Maps<b class="jss1257"></b></div>
            <div className='others'><MdWidgets className='icon-padding'/>Widgets</div>
            <div className='others'><SlGraph className='icon-padding' />Charts</div>
            <div className='others'><MdDateRange className='icon-padding'/>Calender</div>
        </div>

    </div>
  )
}
