import React from 'react';
import styled from 'styled-components';

// Styled components
export const Container = styled.div`
  color: #3c4858;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerBox = styled.div`
  padding-left: 10px;
  width: 350px;
  height: 190px;

  @media max-width:768px {
    width: 300px;
  }

  @media (min-width:768px) and (max-width:1200px){
    width: 400px;
  }

  @media (min-width:1200px){
    width: 350px;
  }


`;

export const Container1 = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column; 
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  height: 130px;
  width: 320px;
`;

export const Container2 = styled.div`
  width: 56px;
  height: 57px;
  margin-top: -20px;
  margin-right: 15px;
  border-radius: 3px;
  background: ${props => props.color};
  padding: 15px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
`;

export const Content1 = styled.div`
  color: #999;
  margin: 0;
  font-size: 18px;
  font-weight: 300px;
  margin-top: 0;
  padding-top: 10px;
  margin-bottom: 0;
`;

export const Content2 = styled.div`
  color: #3c4858;
  margin-top: 0px;
  min-height: auto;
  font-weight: 300;
  line-height: 1.4em;
  font-size: 22px;
`;

export const BottomContainer = styled.div`
  border-top: 1px solid #eee;
  margin-top: 20px;
`;

export const Line = styled.div`
  border-top: 1px solid #eee;
  margin: 20px 15px 10px;
`;

export const ContainerSpace = styled.span`
  font-size: 14px;

`;

export const ContainerSpaceWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const ContainerCustomWrapper = styled.div`
  width: ${props => props.showAltIcon ? '95%' : '85%'}; /* Example usage */
  align-self:end;
`;