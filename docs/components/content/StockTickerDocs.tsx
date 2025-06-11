import React from 'react';
import { StockTicker } from '../../../src';

export default function StockTickerDocs() {
    return (
        <div>
            <h1>StockTicker</h1>
            <p>
                A simple stock ticker component that displays stock information including 
                symbol, current price, currency, and price change with appropriate visual 
                indicators for gains or losses.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Stock Ticker (Gain)</h3>
            <p>Stock showing a price increase:</p>
            <div className='bedrock-docs-bar'>
                <StockTicker 
                    symbol="AAPL" 
                    currency="USD" 
                    currentPrice={150.75} 
                    prevClosingPrice={148.50} 
                />
            </div>

            <h3>Stock Ticker with Loss</h3>
            <p>Stock showing a price decrease:</p>
            <div className='bedrock-docs-bar'>
                <StockTicker 
                    symbol="TSLA" 
                    currency="USD" 
                    currentPrice={245.30} 
                    prevClosingPrice={250.80} 
                />
            </div>

            <h3>Stock Ticker with No Change</h3>
            <p>Stock with no price change:</p>
            <div className='bedrock-docs-bar'>
                <StockTicker 
                    symbol="MSFT" 
                    currency="USD" 
                    currentPrice={335.00} 
                    prevClosingPrice={335.00} 
                />
            </div>

            <h3>Stock Ticker with Additional Info</h3>
            <p>Stock ticker with day high and low values:</p>
            <div className='bedrock-docs-bar'>
                <StockTicker 
                    symbol="GOOGL" 
                    currency="USD" 
                    currentPrice={2750.25} 
                    prevClosingPrice={2720.15} 
                    dayHigh={2755.00}
                    dayLow={2710.50}
                    name="Google"
                    longName="Alphabet Inc."
                />
            </div>

            <h3>International Stock</h3>
            <p>Stock with different currency:</p>
            <div className='bedrock-docs-bar'>
                <StockTicker 
                    symbol="SAP" 
                    currency="EUR" 
                    currentPrice={102.45} 
                    prevClosingPrice={101.20} 
                />
            </div>

            <h3>Multiple Stock Tickers</h3>
            <p>Showcasing various stock statuses:</p>
            <div className='bedrock-docs-bar'>
                <StockTicker symbol="AMZN" currency="USD" currentPrice={3250.15} prevClosingPrice={3180.25} />
                <StockTicker symbol="NFLX" currency="USD" currentPrice={420.30} prevClosingPrice={425.75} />
                <StockTicker symbol="META" currency="USD" currentPrice={312.85} prevClosingPrice={315.40} />
                <StockTicker symbol="NVDA" currency="USD" currentPrice={875.60} prevClosingPrice={850.20} />
            </div>

            <h2>Behavior</h2>
            <ul>
                <li>Displays stock symbol, current price, and currency</li>
                <li>Shows price change with appropriate visual indicators:</li>
                <li>- Green up arrow for gains</li>
                <li>- Red down arrow for losses</li>
                <li>- Neutral dash for no change</li>
                <li>Price changes are calculated automatically from current and previous closing prices</li>
                <li>All prices are formatted to 2 decimal places</li>
                <li>Supports optional day high/low values and stock names</li>
                <li>Uses Bootstrap icons for visual indicators (bi-arrow-up, bi-arrow-down, bi-dash)</li>
            </ul>
        </div>
    );
} 