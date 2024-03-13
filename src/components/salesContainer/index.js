import React from 'react'
import Locations from './locations'
import { Countries, Country, GlobalSales, Location, MiniContainer, SalesContainerWrapper, TopContainer, TopContaierText, Name, Stats } from '../../styles/salesContainer'
import { TbWorld } from "react-icons/tb";
import dashboard1 from '../../images/dashboard1.png'; 
import dashboard2 from '../../images/dashboard2.png'; 
import dashboard3 from '../../images/dashboard3.png'; 
import dashboard4 from '../../images/dashboard4.png'; 
import dashboard5 from '../../images/dashboard5.png'; 


export default function SalesContainer() {

    const CountriesData = [
        { name: 'USA', image: dashboard1, total: '2.920', percentage: '53.23%'},
        { name: 'Germany', image: dashboard2, total: '1.300', percentage: '20.43%'},
        { name: 'Australia', image: dashboard3, total: '760', percentage: '10.35%'},
        { name: 'United Kingdom', image: dashboard4, total: '690', percentage: '7.87%'},
        { name: 'Romania', image: dashboard5, total: '600', percentage: '5.94%'},
        { name: 'Brasil', image: dashboard5, total: '550', percentage: '4.34%'},
    ]
  return (
    <div style={{margin: '0px 15px'}}>
            <SalesContainerWrapper>
        <GlobalSales>
            <TopContainer>
                <MiniContainer>
                    <TbWorld style={{ color: '#fff', fontSize: 'xxx-large'}}/>
                </MiniContainer>
                <TopContaierText>Global Sales by Top Locations</TopContaierText>
            </TopContainer>
            <Countries>
                {CountriesData.map((country, index) => (
                    <Country key={index}>
                    <Name style={{paddingTop: '10px'}}>
                    <img src={country.image} alt="Description of the image" />
                    <span>{country.name}</span>
                    </Name>
                    <Stats>
                        <span>{country.total}</span>
                        <span>{country.percentage}</span>          
                    </Stats>
                </Country>

                ))}
     
            </Countries>
        </GlobalSales>
        <Location>
        <Locations />
        </Location>
    </SalesContainerWrapper>

    </div>

  )
}
