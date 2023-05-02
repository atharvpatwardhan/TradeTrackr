import React, { useContext, useState } from 'react'
import themeContext from '../context/themeContext';
import { searchSymbols } from '../api/stockApi';
import { Icon } from '@iconify/react';
import stockContext from '../context/stockContext';


const Search = () => {

    const {darkMode} = useContext(themeContext);
    const {setStockSymbol} = useContext(stockContext)

    
    const [input,setInput] = useState("");
    const [bestmatches,setBestMatches] = useState([]);
    
    const clear = () =>{
        setInput("");
        setBestMatches([]);
    }


    const updateBestMatches = async () => {
        try{
            if(input){
                const searchResults = await searchSymbols(input);
                const result = searchResults.result;
                setBestMatches(result);
            }


        }catch(err){
            setBestMatches([]);
            console.log(err);
        }
    }

    return (
        <div className={`flex items-center my-4 border-2 rounded-md relative z-50 sm:w-96  ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}`}>

        <input 
        type='text' 
        value={input} 
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${darkMode ? "bg-gray-900 border-gray-800":null}`} 
        placeholder='Search a stock' 
        onChange={(event)=>{
            setInput(event.target.value) 
            
            updateBestMatches();
        }
        } 

        onKeyPress={(event)=>{
            if(event.key==="Enter"){
                updateBestMatches();
            }
        }} />

        {input&&(
                    <button onClick={clear} className='h-4 w-4 fill-gray-500'>
                        <Icon icon="ic:outline-clear" />
                    </button>
        )}

        <button onClick={updateBestMatches} className={`h-8 w-8 rounded flex justify-center items-center m-1 p-2 hover:scale-105 hover:ring-2 transition duration-500 ${darkMode ? "bg-orange-600" : "bg-indigo-600"}`}>
            <Icon icon="ph:magnifying-glass-bold" />
        </button>

        {input && bestmatches.length > 0 ? (
             <ul className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll justify-between custom-scrollbar ${darkMode ? "bg-gray-900 border-gray-800":"bg-white border-neutral-200"}`}>
             {bestmatches.map((item)=>{
                 return (
                     <li 
                     key={item.symbol} 
                     className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded ${darkMode ? "bg-gray-900 border-gray-800 hover:bg-indigo-700":"hover:bg-indigo-200"}`}
                     onClick={()=>{
                       setStockSymbol(item.symbol)
                       setBestMatches([]);
                       setInput("");
                     }}
                     >
                         <span>{item.symbol}</span>
                         <span>{item.description}</span>
                     </li>
                 );
             })}
         </ul>
        ):null}
        </div>
    )
}

export default Search
