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
import Indicator from '../components/content/Indicator';
import { BaseProps, Variant } from '../types';
import { buildCss } from '../Utils';

export interface LegendItem {
    /**
     * The label to display
     */
    label: string;

    /**
     * The built-in color variant to use.
     */
    variant?: Variant;

    /**
     * The actual CSS color value/name that is used via `style` attribute.
     * This value will supersede any `variant` value that may be specified.
     */
    color?: string;
}

export interface LegendProps extends BaseProps {

    /**
     * The legend items that need to be displayed.
     * If the array is `undefined`, `null`, or `empty`
     * no DOM element shall be rendered.
     */
    items: Array<LegendItem>;

}

/**
 * The legend component.
 * 
 * @author sangupta
 */
export default class Legend extends React.Component<LegendProps> {

    render() {
        const { className, items } = this.props;
        if(!items || items.length === 0) {
            return null;
        }

        const css = buildCss('legend', className);

        return <div className={css}>
            {items.map(legendItem => {
                return <Indicator className='px-2' variant={legendItem.variant} label={legendItem.label} color={legendItem.color} />
            })}
        </div>
    }

}
