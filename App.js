import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState ('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

    
  return (
  <div className='coin-app'>
      <div className = 'coin-search'> 
        <h1 className = 'coin-text'> Crypotocurrency Price Tracker</h1>
        <form>
          <input 
          className='coin-input'
          type='text' 
          onChange= {handleChange}
          placeholder='Search a Currency'  
          />
        </form>
      </div>
    
    
  <div className='coin-cointainer'>
    <table>

    <thead className='coin-header'>
      <tr>
        <th>NAME</th>
        <th>SYMBOL</th>
        <th>CURRENT PRICE</th>
        <th>VOLUME</th>
        <th>PRICE CHANGE</th>
        <th>MARKET CAP</th>
      </tr>
    </thead>

    <tbody className='coin-body'>

      {filteredCoins.map(coin => {
      return (
        <tr>
        
          <td className='coin'>
       
                <img src={coin.image} alt='crypto'/>
                <h1>{coin.name}</h1>
   
          </td>

        <td>
          <div>
          <p className='coin-symbol'>{coin.symbol}</p>
          </div>
        </td>
        
        <td>
          <div>
            <p className='coin-price'>${coin.current_price.toLocaleString()}</p>
          </div>
        </td>

        <td className='coin-volume'>
          <div>
            ${coin.total_volume.toLocaleString()}
          </div>
        </td>

        <td>
          <div>
            {coin.price_change_percentage_24h < 0 ? (
              <p className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              ) : (
              <p className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            )}
          </div>
        </td>

        <td>
          <div>
          < p> ${coin.market_cap.toLocaleString()}</p>
          </div>
        </td>
        
    </tr>     
      )})}              
      </tbody>
  
    </table>
    </div>
</div>
  );
}

export default App;


