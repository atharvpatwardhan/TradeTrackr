const basePath = "https://finnhub.io/api/v1"

export const searchSymbols = async(query) => {
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occurred : ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};

export const fetchStock = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occurred : ${response.status}`;
        throw new Error(message);
    }

    return await response.json();

};


export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occurred : ${response.status}`;
        throw new Error(message);
    }

    return await response.json();

};


export const fetchHistoricalData = async (stockSymbol,resolution,start,end) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${start}&to=${end}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occurred : ${response.status}`;
        throw new Error(message);
    }

    return await response.json();

};

export const fetchNews = async (category) => {
    const url = `${basePath}/news?category=${category}token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error occurred : ${response.status}`;
        throw new Error(message);
    }

    return await response.json();

};
