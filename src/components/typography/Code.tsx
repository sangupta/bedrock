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

/**
 * The `code` component.
 * 
 * @author sangupta
 */
export default class Code extends React.PureComponent<BaseProps> {

    render(): React.ReactNode {
        const { className, children, ...extraProps } = this.props;

        return <code {...extraProps} className={buildCss(className)}>{children}</code>
    }

}
