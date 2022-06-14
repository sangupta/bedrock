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

/**
 * Props for the component.
 */
interface IndicatorProps extends BaseProps {

    variant: Variant;

}

/**
 * Renders a traffic light style indicator which can be
 * used as a status in notification area or along with 
 * bulleted items to represent their status.
 * 
 * @author sangupta
 */
export default class Indicator extends React.PureComponent<IndicatorProps> {

    /**
     * the default properties
     */
    static defaultProps = {
        variant: 'primary'
    }

    render(): React.ReactNode {
        const { variant, children, className, ...extraProps } = this.props;
        const css = buildCss('indicator', className);

        return <div className={css} {...extraProps}>
            <span className={'indicator-dot bg-' + variant} />
            {children}
        </div>
    }

}
