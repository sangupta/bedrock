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
import ReactDOM from 'react-dom/client';
import StockTicker from '../src/components/content/StockTicker';

const playground = <>
    <StockTicker
        symbol='ADBE'
        currency='USD'
        currentPrice={412}
        prevClosingPrice={410}
    />
</>

// render the playground
const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(playground);
}
