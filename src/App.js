// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import themeContext from './context/themeContext';
import stockContext from './context/stockContext';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
// import categoryContext from './context/categoryContext';

function App() {
  const [darkMode,setDarkMode] = useState(true);
  const [stockSymbol,setStockSymbol] = useState("AAPL");
  // const [category,setCategory] = useState("Technology")

  return (
    <div className=''>
       <themeContext.Provider value={{darkMode,setDarkMode}}>
        <stockContext.Provider value={{stockSymbol,setStockSymbol}}>
            <MainHeader />
            <Dashboard />
            <Footer />
        </stockContext.Provider>
       </themeContext.Provider>
    </div>
  );
}

export default App;
