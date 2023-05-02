import React, { useContext, useEffect, useState } from 'react'
import { convertUnixTimestampToDate,convertDateToUnixTimestamp,createDate } from '../helpers/date-helper';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { mockHistoricData } from '../constants/mock';
import Card from './Card';
import { chartConfig } from '../constants/config';
import ChartFilter from './ChartFilter';
import themeContext from '../context/themeContext';
import {fetchHistoricalData} from '../api/stockApi'
import stockContext from '../context/stockContext';
        //#312e81 #111827

const Chart = () => {

    const {darkMode} = useContext(themeContext);

    const {stockSymbol} = useContext(stockContext);

    const [data,setData] = useState([]);
    const [filter,setFilter] = useState("1W");

    const formatData = (data) => {
        return data.c.map((item,index)=>{
            return {
                value : item.toFixed(2),
                date : convertUnixTimestampToDate(data.t[index]),
            }
        })
    }

    useEffect(()=>{
        const getDateRange = () =>{
            const {days,weeks,months,years} = chartConfig[filter];

            const endDate = new Date();
            const startDate = createDate(endDate,-days,-weeks,-months,-years);

            const startTimestamp = convertDateToUnixTimestamp(startDate);
            const endTimestamp = convertDateToUnixTimestamp(endDate);

            return {startTimestamp,endTimestamp};
        };


        const updateChartData = async () =>{

            try{
                const {startTimestamp,endTimestamp} = getDateRange();
                const resolution = chartConfig[filter].resolution;

                const result = await fetchHistoricalData(stockSymbol,resolution,startTimestamp,endTimestamp);

                setData(formatData(result));
            }catch(err){
                setData([]);
                console.log(err);
            }  
        };

        updateChartData();
    },[stockSymbol,filter])



  return (
    <Card>
        <ul className='flex absolute top-0 right-2 z-40'>
            {Object.keys(chartConfig).map((item)=>{
            return(
            <li key={item}>
                <ChartFilter text={item} active={filter === item} onClick={()=>{
                    setFilter(item);
                }} />
            </li>
                )
            })}
        </ul>
        <ResponsiveContainer>
            <AreaChart data={data}>
            <defs>
                <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={darkMode ? "#fca103" : `#160eed`} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={darkMode ? "#fca103" : `#160eed`} stopOpacity={0}/>
                </linearGradient>
            </defs>
                <Area type="monotone" dataKey="value" stroke={darkMode ? '#b88121' : '#160eed'} fillOpacity={1} strokeWidth={0.5} fill='url(#chartColor)'/>
                <Tooltip 
                contentStyle={darkMode ? {backgroundColor:"#4a3107"}:null}
                itemStyle={darkMode ? {color:"#818cf8"}:null}
                 />
                <XAxis dataKey={"date"} />
                <YAxis domain={["dataMin","dataMax"]} />
            </AreaChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default Chart