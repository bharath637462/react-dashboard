import React from 'react';
import styled from 'styled-components'


export const SalesContainerWrapper = styled.div`
  height: 366px;
  padding-left: 20px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
`;

export const GlobalSales = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px) {
        width: calc(95% - 20px)
      }
    
      @media (min-width: 769px) and (max-width: 1280px) {
        width: calc(95% - 20px)
      }
    
      @media (min-width: 1281px) {
        width: calc(45% - 20px)

      }
`;

export const Location = styled.div`
      width: 55%;
      padding: 20px 0px;

`;

export const TopContainer =  styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const MiniContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top: -20px;
    margin-right: 15px;
    border-radius: 3px;
    background: linear-gradient(60deg, #66bb6a, #43a047);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4);
    width: 62px;
    height: 65px;
`;
export const Countries = styled.div`

`;
export const Country = styled.div`
    margin-top: 15px;
    border-top: 1px solid#eee;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    text-align: 'left' 

`;

export const Name = styled.div`
padding-top: 10px;
display: flex;
width:40%;
gap: 35%;
text-align:left;
`;

export const Stats = styled.div`
    padding-top: 10px;
    display: flex;
    // justify-content: space-between;
    width: 40%;
    gap:35%;
    text-align:left;
`;


export const TopContaierText = styled.div`
    padding-left: 10px;
    min-height: auto;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    margin-top: 10px;
    text-decoration: none;
    color: #3C4858;
`;