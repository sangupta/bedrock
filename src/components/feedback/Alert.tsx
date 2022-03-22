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
interface AlertProps extends BaseProps {
    /**
     * Look and feel variant of the button
     */
    variant?: Variant;

    role?: string;

    /**
     * Add a close button to the alert. The button manages an internal
     * state to hide the content when closed. It does not remove the
     * alert from component hierarchy. To achieve the same, add a close
     * button as a child and then remove the component from heirarchy
     * in your calling component.
     */
    allowClose?: boolean;

    /**
     * Used to control show/hide state outside of component.
     * Recommended to be paired with `allowClose` prop.
     */
    show?: boolean;

    closeButtonAriaLabel?: string;
}

interface AlertState {
    show: boolean;
}

/**
 * An `alert` or informational component, also called as `MessageBar`.
 * 
 * @author sangupta
 */
export default class Alert extends React.PureComponent<AlertProps, AlertState> {

    constructor(props: AlertProps) {
        super(props);

        this.state = {
            show: props.show
        }
    }

    /**
     * the default properties
     */
    static defaultProps: AlertProps = {
        variant: 'primary',
        role: 'alert',
        allowClose: false,
        closeButtonAriaLabel: 'close'
    }

    /**
     * Handler called when close button is clicked.
     */
    handleCloseButtonClick = () => {
        this.setState({ show: false });
    }

    /**
     * Adds a close button to the `alert`, if required.
     * 
     * @param allowClose 
     * @param closeButtonAriaLabel 
     * @returns 
     */
    addCloseButton(allowClose: boolean, closeButtonAriaLabel: string) {
        if (!allowClose) {
            return null;
        }

        return <button type='button' className="btn-close"
            aria-label={closeButtonAriaLabel}
            onClick={this.handleCloseButtonClick} />
    }

    render(): React.ReactNode {
        const { variant, role, show, allowClose, closeButtonAriaLabel, children, className, ...extraProps } = this.props;
        if (!show) {
            return null;
        }
        const css = buildCss('alert', {
            'alert-': variant
        });

        return <div className={css} {...extraProps} role={role}>
            {children}
            {this.addCloseButton(allowClose, closeButtonAriaLabel)}
        </div>
    }

}
