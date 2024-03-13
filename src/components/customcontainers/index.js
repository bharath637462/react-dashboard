import React, {useContext} from 'react'
import Appbar from '../header';
import MenuBar from '../menubar';
import Containers from '../containers';
import SalesContainer from '../salesContainer';
import GraphContainers from '../graphContainers';
import { AuthContext } from "../../context/Authcontext";
import { ContainerCustomWrapper } from '../../styles/container';

export default function CustomContainer() {
    const { showAltIcon } = useContext(AuthContext);
  return (
    <ContainerCustomWrapper showAltIcon={showAltIcon} > 
      <Appbar />
      <div style={{marginTop: '70px',  padding: '0px 15px'}}>
      </div>
      <Containers />
      <SalesContainer />
      <GraphContainers />
      </ContainerCustomWrapper>
  )
}
