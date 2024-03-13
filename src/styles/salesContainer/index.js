import React from 'react';
import styled from 'styled-components'


export const SalesContainerWrapper = styled.div`
  height: 366px;
  padding-left: 20px;
  background-color: #fff;
`;

export const GlobalSales = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

export const Location = styled.div`

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
    width: 35px;
    height: 40px;
`;
export const Countries = styled.div`

`;
export const Country = styled.div`
    margin-top: 20px;
    border-top: 1px solid#eee;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    textAlign: 'left' 


`;

export const Name = styled.div`
padding-top: 10px;
display: flex;
width: 50%;
gap: 100px;

`;

export const Stats = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 30%;

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