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
interface LinkProps extends BaseProps {
    variant?: Variant;

    href?: string;

    active?: boolean;
}

/**
 * The `anchor` or a simple hyperlink component.
 * 
 * @author sangupta
 */
export default class Link extends React.PureComponent<LinkProps> {

    /**
     * the default properties
     */
    static defaultProps: LinkProps = {
        variant: 'primary',
        href: '#',
        active: false
    }

    render(): React.ReactNode {
        const { variant, href, active, children, className, ...extraProps } = this.props;
        const css = buildCss({
            'link-': variant,
            'active': active,
        }, className);

        return <a href={href} className={css} {...extraProps}>{children}</a>;
    }

}
