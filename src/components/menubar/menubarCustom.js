import React, { useContext } from 'react';
import Menubar from './index.js'
import MenubarLite from './menubarlite.js'
import { AuthContext } from "../../context/Authcontext";
import { OuterMenubar } from '../../styles/menubar/menubar';


export default function MenubarCustom() {
  const { showAltIcon, setShowAltIcon } = useContext(AuthContext);

  return (
    <OuterMenubar>
    {showAltIcon ?   <MenubarLite />: <Menubar />}
    
    </ OuterMenubar>
  )
}
