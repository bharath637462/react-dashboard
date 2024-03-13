import React from 'react';
import styled from 'styled-components';


export const GraphContainerSet = styled.div`
    display: flex;
    margin-top: 60px;
    padding: 0px 15px 0px;
    justify-content: space-between;
`;

export const OuterDiv = styled.div`
    width: 472px;
    height: 288px;
    background-color: #fff;
`;

export const GraphContainer = styled.div`
    width: 450px;
    height: 158px;
    background-color:  ${props => props.bgcolor || '#00acc1'};;
    margin: -20px 10px 0px;
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