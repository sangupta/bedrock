/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import React from 'react';
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';

export interface StockTickerProps extends BaseProps {
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
