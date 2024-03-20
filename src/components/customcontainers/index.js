import React, {useContext, useCallback} from 'react'
import Appbar from '../header';
import MobileAppbar from '../header/headerMobile';
import MenuBar from '../menubar';
import Containers from '../containers';
import SalesContainer from '../salesContainer';
import GraphContainers from '../graphContainers';
import { AuthContext } from "../../context/Authcontext";
import { ContainerCustomWrapper } from '../../styles/container';
import HeaderMeta from '../header/headerMeta';
import '../../App.css'

export default function CustomContainer() {
    const { showAltIcon } = useContext(AuthContext);
    const { isShowMenu, setIsShowMenu } = useContext(AuthContext);


    const handleButtonClick = useCallback(() => {
      if (isShowMenu){
        setIsShowMenu(prevState => !prevState);
      }
    }, [isShowMenu, setIsShowMenu]);
    
  return (
    <ContainerCustomWrapper showAltIcon={showAltIcon} > 
    {
      isShowMenu && <MenuBar />
    }
    <div onClick={handleButtonClick} className={isShowMenu ? 'blur' : ''}>
      <HeaderMeta />
      <div style={{marginTop: '70px',  padding: '0px 15px'}}>
      </div>
      <Containers />
      <SalesContainer />
      <GraphContainers />
    </div>
      </ContainerCustomWrapper>
  )
}
