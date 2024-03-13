import React from 'react'
import { MdOutlineContentCopy } from "react-icons/md";
import { Container, ContainerBox, Container1, Container2,
  Content1, Content, Content2, ContainerSpace, Line, ContainerSpaceWrapper } from '../../styles/container'



export default function ContainerComponent(props) {
    const {backgroundcolor, boxIcon, content1, content2, bottomIcon, bottomContent } = props
  return (
    <Container>
      <ContainerBox>
        <Container1>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Container2 color={ backgroundcolor } >
                { boxIcon }
            </Container2>
            <Content>
              <Content1> { content1 } </Content1>
              <Content2> { content2 } </Content2>
            </Content>
          </div>
          <div>
            <Line></Line>
            <ContainerSpaceWrapper>
                { bottomIcon }
              <ContainerSpace> { bottomContent } </ContainerSpace>
            </ContainerSpaceWrapper>
          </div>
        </Container1>
      </ContainerBox>
    </Container>
  )
}
