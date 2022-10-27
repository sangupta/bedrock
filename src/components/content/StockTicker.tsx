/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React from 'react';
import { buildCss } from '../../Utils';

interface StockTickerProps extends BaseProps {
    symbol: string;
    currency: string;
    currentPrice: number;
    prevClosingPrice: number;

    dayHigh?: number;
    dayLow?: number;
    name?: string;
    longName?: string;
}

/**
 * A simple stock ticker.
 * 
 * @author sangupta
 */
export default class StockTicker extends React.Component<StockTickerProps> {

    render() {
        const { symbol, currency, currentPrice, prevClosingPrice, className } = this.props;
        const delta = currentPrice - prevClosingPrice;
        const gainOrLoss = delta < 0
            ? (delta == 0 ? ['neutral', 'bi bi-dash'] : ['loss', 'bi bi-arrow-down'])
            : ['gain', 'bi bi-arrow-up'];

        return <div className={buildCss('stock-ticker', className)}>
            <span className='symbol'>{symbol}</span>
            <span className='price'>{currentPrice.toFixed(2)}</span>
            <span className='currency'>{currency}</span>
            <span className={gainOrLoss[0]}> (<i className={gainOrLoss[1]} /> {delta.toFixed(2)})</span>
        </div>
    }

}
