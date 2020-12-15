import React from 'react'
import './Coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className='coin-cointainer'>
        <div className= 'coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price.toLocaleString()}</p>
                <p className='coin-volume'>${volume.toLocaleString()}</p>
            </div>
            <div className='coin-data'>
                {priceChange < 0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                <p className='coin-percent green'>{priceChange}%</p>
                )}
            </div>
            <div className='coin-marketcap'>
                 <p>
                 Market Cap: ${marketcap.toLocaleString()} 
                 </p>
            </div>
        </div>
        </div>

    );
};

export default Coin;

