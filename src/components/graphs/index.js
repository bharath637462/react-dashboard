import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    BarChart,
    Bar
  } from "recharts";

export function DailySalesGraph() {
    const data = [
        { day: 'M', sales: 10 },
        { day: 'T', sales: 18 },
        { day: 'W', sales: 8 },
        { day: 'T', sales: 18 },
        { day: 'F', sales: 22 },
        { day: 'S', sales: 19 },
        { day: 'S', sales: 39 },
    ];
  return (
    <LineChart width={400} height={150} data={data} margin={{ top: 20, right: 30, bottom: 5 }}>
        <CartesianGrid stroke="#fff" strokeOpacity={0.4} strokeDasharray="3 3" opacity={0.5}  />
            <XAxis dataKey="day" tick={{ fill: '#fff', strokeOpacity: 0.5, fontSize: 12, opacity: 0.5 }} axisLine={{ stroke: '#fff', strokeOpacity: 0.5, opacity: 0.5 }} tickLine={false} />
            <YAxis tick={{ fill: '#fff', strokeOpacity: 0.5, fontSize: 12, opacity: 0.5 }} axisLine={{ stroke: '#fff', strokeOpacity: 0.5, opacity: 0.5 }} tickLine={false}  tickCount={5} domain={[0, 40]}/>
            <Line type="linear" dataKey="sales" stroke="#fff" fill="#fff" strokeWidth={3} />
    </LineChart>
  )
}

export function EmailSubscriptionGraph() {
    const data = [
        { month: 'J', subscriptions: 500 },
        { month: 'F', subscriptions: 400 },
        { month: 'M', subscriptions: 250 },
        { month: 'A', subscriptions: 700 },
        { month: 'M', subscriptions: 550 },
        { month: 'J', subscriptions: 400 },
        { month: 'J', subscriptions: 450 },
        { month: 'A', subscriptions: 300 },
        { month: 'S', subscriptions: 400 },
        { month: 'A', subscriptions: 450 },
        { month: 'N', subscriptions: 600 },
        { month: 'D', subscriptions: 800 },
    ];  
  return (
<BarChart width={440} height={150} data={data} margin={{ top: 20, right: 30, bottom: 5 }}>
    <CartesianGrid stroke="#fff" strokeOpacity={0.4} strokeDasharray="3 3" opacity={0.5} />
    <XAxis dataKey="month" tick={{ fill: '#fff', strokeOpacity: 0.5, fontSize: 12, opacity: 0.5 }} axisLine={{ stroke: '#fff', strokeOpacity: 0.5, opacity: 0.5 }} tickLine={false} />
    <YAxis tick={{ fill: '#fff', strokeOpacity: 0.5, fontSize: 12, opacity: 0.5 }} axisLine={{ stroke: '#fff', strokeOpacity: 0.5, opacity: 0.5 }} tickLine={false} tickCount={5} domain={[0, 800]} />
    <Bar dataKey="subscriptions" fill="#fff" barSize={12}  />
</BarChart>

  )
}


export function CompletedTasksGraph() {
    const data = [
        { time: '12am', subscriptions: 200 },
        { time: '3pm', subscriptions: 700 },
        { time: '6pm', subscriptions: 450 },
        { time: '9pm', subscriptions: 240 },
        { time: '12pm', subscriptions: 220 },
        { time: '3am', subscriptions: 200 },
        { time: '6am', subscriptions: 190 },
        { time: '9am', subscriptions: 180 },
    ];  
  return (
    <LineChart width={440} height={150} data={data} margin={{ top: 20, right: 30, bottom: 5 }}>
        <CartesianGrid stroke="#fff" strokeOpacity={0.4} strokeDasharray="3 3" opacity={0.5}  />
            <XAxis dataKey="time" tick={{ fill: '#fff', strokeOpacity: 0.5, fontSize: 12, opacity: 0.5 }} axisLine={{ stroke: '#fff', strokeOpacity: 0.5, opacity: 0.5 }} tickLine={false} />
            <YAxis tick={{ fill: '#fff', strokeOpacity: 0.5, fontSize: 12, opacity: 0.5 }} axisLine={{ stroke: '#fff', strokeOpacity: 0.5, opacity: 0.5 }} tickLine={false}  tickCount={5} domain={[0, 800]}/>
            <Line type="linear" dataKey="subscriptions" stroke="#fff" fill="#fff" strokeWidth={3} />
    </LineChart>

  )
}