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
interface ButtonProps extends BaseProps {
    /**
     * Look and feel variant of the button
     */
    variant?: Variant | 'link';

    /**
     * Whether the button displays as outline
     */
    isOutline?: boolean;

    /**
     * The size of the button
     */
    size?: ComponentSize;

    /**
     * Label for the button. If provided, it will override the
     * `child` components for the button.
     */
    label?: string;

    /**
     * Whether the button is disabled or not?
     */
    disabled?: boolean;

    /**
     * The `type` of button as per HTML specs. If button is being
     * rendered using `asLink`, the `type` value will be emmitted
     * as `role` attribute.
     */
    type?: ButtonType;

    /**
     * If we should render an `anchor` instead of a `button` tag.
     */
    asLink?: boolean;

    /**
     * The `href` associated with the `anchor` tag. Only applies if
     * the Button is rendered `asLink`.
     */
    href?: string;

    /**
     * Whether the button is active or not?
     */
    active?: boolean;
}

/**
 * The `button` component. Use custom button styles for actions in 
 * forms, dialogs, and more with support for multiple sizes, states, 
 * and more. Bedrock includes several predefined button styles, each 
 * serving its own semantic purpose, with a few extras thrown in for 
 * more control.
 * 
 * ## Conveying meaning to assistive technologies 
 * Using color to add meaning only provides a visual indication, which 
 * will not be conveyed to users of assistive technologies – such as 
 * screen readers. Ensure that information denoted by the color is either 
 * obvious from the content itself (e.g. the visible text), or is included 
 * through alternative means, such as additional text hidden with the 
 * `.visually-hidden` class.
 * 
 * @author sangupta
 */
export default class Button extends React.PureComponent<ButtonProps> {

    /**
     * the default properties
     */
    static defaultProps: ButtonProps = {
        variant: 'primary',
        isOutline: false,
        size: 'default',
        disabled: false,
        type: 'button',
        asLink: false,
        href: '#',
        active: false
    }

    render(): React.ReactNode {
        const { variant, isOutline, size, label, disabled, type, asLink, children, href, className, active, ...extraProps } = this.props;
        const btnVariant = (isOutline ? 'btn-outline-' : 'btn-') + variant;

        const css = buildCss('btn', btnVariant, {
            'btn-lg': size === 'large',
            'btn-sm': size === 'small',
            'active': active,
            'disabled': asLink && disabled
        }, className);

        if (disabled) {
            if (asLink) {
                extraProps['aria-disabled'] = true;
            } else {
                extraProps['disabled'] = 'disabled';
            }
        }

        // render as normal button
        if (!asLink) {
            return <button type={type} className={css} {...extraProps}>
                {label ? label : children}
            </button>
        }

        // render as link
        return <a href={href} className={css} {...extraProps} role={type}>
            {label ? label : children}
        </a>;
    }

}
