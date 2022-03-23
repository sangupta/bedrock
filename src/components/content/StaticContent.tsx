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
 * A component that will never ever re-render. The `shouldComponentUpdate`
 * method always returns `false`.
 * 
 * @author sangupta
 */
export default class StaticContent extends React.PureComponent<BaseProps> {

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
