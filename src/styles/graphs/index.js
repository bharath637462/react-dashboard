import React from 'react';
import styled from 'styled-components';


export const GraphContainerSet = styled.div`
    display: flex;
    margin-top: 60px;
    padding: 0px 15px 0px;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export const OuterDiv = styled.div`
    width: calc(100%/3 - 20px); 
    height: 288px;
    background-color: #fff;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        width: calc(100% - 20px);
        justify-content: center;
    }

    @media (min-width: 769px) and (max-width: 1200px) {
        width: calc(100% / 2 - 20px);
        justify-content: center;
    }

    @media (min-width: 1201px) {
        width: calc(100% / 3 - 20px);
    }
   
    
`;

export const GraphContainer = styled.div`
    width: 95%;
    height: 158px;
    background-color:  ${props => props.bgcolor || '#00acc1'};;
    margin: -20px 10px 0px;
    overflow-y: auto;
    overflow-x: auto;

`;  

export const Topic = styled.div`
    color: #3C4858;
    margin-top: 10px;
    min-height: auto;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    margin-bottom: 3px;
    font-size: 1.3em;
    padding-left: 20px;
    text-align: left;

`;

export const Content = styled.div`
font-family: roboto,helvetica,arial,sans-serif;
text-align: left;
padding-left: 20px;
font-size: 14px;



`;

export const Highlight = styled.span`
color: #4caf50;


`;

export const NormalText = styled.span`
color: #999;
`;