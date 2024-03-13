import React from 'react'
import { MdOutlineContentCopy } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";
import ContainerComponent from './container.js';
import { Container } from '../../styles/container'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaTag } from "react-icons/fa";


export default function Containers() {
  return  (
    <Container>
      {[
        { backgroundcolor: 'linear-gradient(60deg, #ffa726, #fb8c00)', boxIcon: <MdOutlineContentCopy  style={{ width:'35px', height:'35px'}}/>, content1:'Used Space', content2: '49/50 GB', bottomIcon: <BsExclamationTriangleFill style={{ paddingRight: '10px', color: 'red'}}/>, bottomContent: 'Get more space' },
        { backgroundcolor: 'linear-gradient(60deg, #66bb6a, #43a047)', boxIcon: <SiHomeassistantcommunitystore  style={{ width:'35px', height:'35px'}}/>, content1:'Revenue', content2: '$34,245', bottomIcon: <FaRegCalendarAlt style={{ paddingRight: '10px', color: '#999'}}/>, bottomContent: 'Last 24 Hours'},
        { backgroundcolor: 'linear-gradient(60deg, #ef5350, #e53935)', boxIcon: <AiOutlineExclamationCircle  style={{ width:'35px', height:'35px'}}/>, content1:'Fixed Issues', content2: '75', bottomIcon: <FaTag style={{ paddingRight: '10px', color: '#999'}}/>, bottomContent: 'Tracked from Github'},
        { backgroundcolor: 'linear-gradient(60deg, #26c6da, #00acc1)', boxIcon: <FaTwitter  style={{ width:'35px', height:'35px'}}/>, content1:'Followers', content2: '+245', bottomIcon: <IoIosTimer style={{ paddingRight: '10px', color: '#999'}}/>, bottomContent: 'Just Updated'}
      ].map((item, index) => (
        <ContainerComponent key={index} backgroundcolor={item.backgroundcolor} boxIcon={item.boxIcon} content1={item.content1} content2={item.content2} bottomIcon={item.bottomIcon} bottomContent={item.bottomContent}  />
      ))}
    </Container>
    
  );
}
