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

import * as React from 'react';
import { buildCss } from '../../Utils';

/**
 * Displays animated dots that represent the loading
 * status in a page. 
 * 
 * @author sangupta
 */
export default class LoadingDots extends React.Component<BaseProps> {

    render(): React.ReactNode {
        const { className, ...extraProps } = this.props;
        const css: string = buildCss('loading-dots', this.props.className);

        return <div {...extraProps} className={css}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>;
    }

}
