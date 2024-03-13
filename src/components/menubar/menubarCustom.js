import React, { useContext } from 'react';
import Menubar from './index.js'
import MenubarLite from './menubarlite.js'
import { AuthContext } from "../../context/Authcontext";


export default function MenubarCustom() {
  const { showAltIcon, setShowAltIcon } = useContext(AuthContext);

  return (
    <>
    {showAltIcon ?   <MenubarLite />: <Menubar />}
    
    </>
  )
}
