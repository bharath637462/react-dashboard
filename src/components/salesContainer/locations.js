import React from 'react'
import { Location } from '../../styles/salesContainer'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Chart } from "react-google-charts";




export default function Locations() {  
   const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];
  const options =  {
    enableRegionInteractivity: true
  }
 

  

  return (
    <Location>
          <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            // const chart = chartWrapper.getChart();
            // const selection = chart.getSelection();
            // if (selection.length === 0) return;
            // const region = data[selection[0].row + 1];
            // console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      region="world"
      width="100%"
      height="326px"
      data={data}
      options={{
        ...options,
        legend: 'none',  // Setting legend to 'none' will remove the range bar
        colorAxis: { colors: ['green']}
      }}
    />

    </Location>
  )
}
