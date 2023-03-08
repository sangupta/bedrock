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

export type StaticContentProps = BaseProps & React.HTMLProps<HTMLDivElement>;

/**
 * A component that will never ever re-render. The `shouldComponentUpdate`
 * method always returns `false`.
 * 
 * @author sangupta
 */
export default class StaticContent extends React.PureComponent<StaticContentProps> {

    /**
     * As this component should never ever re-render, this returns
     * a hard-coded `false`.
     * @returns 
     */
    shouldComponentUpdate() {
        return false;
    }

    render(): React.ReactNode {
        const { children, className, ...extraProps } = this.props;
        const css = buildCss('static-content', className);

        return <div className={css} {...extraProps}>
            {children}
        </div>
    }

}
