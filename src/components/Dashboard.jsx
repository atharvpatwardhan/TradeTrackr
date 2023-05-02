import React, { useContext,useEffect,useState } from 'react'
// import Card from './Card'
// import { mockCompanyDetails } from '../constants/mock'
import Header from './Header'
import Details from './Details'
import Overview from './Overview'
import Chart from './Chart'
import themeContext from '../context/themeContext'
import stockContext from '../context/stockContext'
// import categoryContext from '../context/categoryContext'
import { fetchQuote,fetchStock } from '../api/stockApi'
// import News from './News'

const Dashboard = () => {

  const {darkMode} = useContext(themeContext);
  const {stockSymbol} = useContext(stockContext);
  // const {category} = useContext(categoryContext);

  const [stockDetails,setStockDetails] = useState({});
  const [quote,setQuote] = useState({});
  // const [news,setNews] = useState({});

  useEffect(()=>{
    const updateStockDetails = async() =>{
      try{
        const result = await fetchStock(stockSymbol);
        setStockDetails(result);
      }catch(err){
        setStockDetails({});
        console.log(err);
      }
    };

    // const updateNews = async() => {
      
    //   try{
    //     const result = await fetchNews("Technology");
    //     setNews(result);
    //     console.log(result)
    //   }catch(err){
    //     setNews({});
    //     console.log(err);
    //   }
    // }

    const updateStockOverview = async() =>{
      try{
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      }catch(err){
        setQuote({});
        console.log(err);
      }
    };

    // updateNews();
    updateStockDetails();
    updateStockOverview();



  },[stockSymbol])


  return (
    <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 ${darkMode ? "bg-gray-800 text-white":"bg-white text-black"}`}>
        <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center'>
            <Header name={stockDetails.name} />
        </div>
        <div className='md:col-span-2 row-span-4'>
            <Chart />
        </div>
        <div>
            <Overview symbol={stockSymbol} price={quote.pc} change={quote.d} changePercent={quote.dp} currency={stockDetails.currency} />
        </div>
        <div className='row-span-2 xl:row-span-3'>
           <Details details={stockDetails} />
        </div>
    </div>
  )
}

export default Dashboard