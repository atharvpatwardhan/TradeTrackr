import React, { useContext } from 'react'
import Card from './Card'
import themeContext from '../context/themeContext'
// import categoryContext from '../context/categoryContext';

const Details = ({details}) => {

    const {darkMode} = useContext(themeContext);
    // const {setCategory} = useContext(categoryContext);

    const detailsList = {
        name : "Name",
        country : "Country",
        currency : "Currency",
        exchange : "Exchange",
        ipo : "IPO Date",
        marketCapitalization : "Market Capitalization",
        finnhubIndustry : "Industry",
    }
    // setCategory(detailsList[6]);


    const convertMillionToBillion = (number) => {
        return (number/1000).toFixed(2);
    }
    return (
        <Card>
            <ul className={`w-full h-full flex flex-col justify-between divide-y-1 ${darkMode ? "divide-gray-800":null}`}> 
                {Object.keys(detailsList).map((item)=>{
                    return (
                        <li key={item} className='flex-1 flex justify-between items-center'>
                            <span>{detailsList[item]}</span>
                            <span>{item === "marketCapitalization" ? `${convertMillionToBillion(details[item])}B` : (
                                details[item]
                            )}</span>
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default Details