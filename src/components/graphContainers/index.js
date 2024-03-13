import React from 'react'
import { GraphContainerSet } from '../../styles/graphs'
import GraphContainerBox from './grpahContainer'
import { DailySalesGraph, EmailSubscriptionGraph, CompletedTasksGraph } from '../graphs'

export default function GraphContainers() {
  return (
    <GraphContainerSet>
        {[
        { topic:'Daily Sales', percentage: '55%', bottomContent: 'increase in today sales.', lastupdated: 'updated 4 minutes ago', bgcolor: '#00acc1', graph: <DailySalesGraph /> },
        { topic:'Email Subscriptions', percentage: '', bottomContent: 'Last Campaign Performance', lastupdated: 'campaign sent 2 days ago', bgcolor: '#fb8c00', graph: <EmailSubscriptionGraph /> },
        { topic:'Completed Tasks', percentage: '', bottomContent: 'Last Campaign Performance', lastupdated: 'campaign sent 2 days ago', bgcolor: '#e53935', graph: <CompletedTasksGraph />},
      ].map((item, index) => (
        <GraphContainerBox key={index} topic={item.topic} percentage={item.percentage} bottomContent={item.bottomContent} lastupdated={item.lastupdated} bgcolor={item.bgcolor} graph={item.graph}/>
      ))}
    </GraphContainerSet>
  )
}
