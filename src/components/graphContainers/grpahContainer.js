import React from 'react'
import { GraphContainer, Highlight, NormalText, OuterDiv, Topic, Content } from '../../styles/graphs'
import { Line as Hline } from '../../styles/container'
import { IoIosTimer } from "react-icons/io";
import { ContainerSpaceWrapper, ContainerSpace } from '../../styles/container';


export default function GraphContainerBox(props) {
  const { topic, percentage, bottomContent, lastupdated, bgcolor, graph } = props
   
  return (
    <OuterDiv>
        <GraphContainer bgcolor={bgcolor}>
          { graph }
        </GraphContainer>
        <Topic>{ topic }</Topic>
        <Content>
            <Highlight> {percentage} </Highlight>
            <NormalText> {bottomContent} </NormalText>
        </Content>
        <Hline></Hline>
        <ContainerSpaceWrapper>
            <IoIosTimer style={{ paddingRight: '10px', color: '#999'}}/>
            <ContainerSpace> {lastupdated} </ContainerSpace>
        </ContainerSpaceWrapper>
    </OuterDiv>
    
  )
}
