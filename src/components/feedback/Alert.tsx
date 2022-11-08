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
import { BaseProps, Variant } from '../../types';
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
 * They are used to provide contextual feedback messages for typical 
 * user actions with the handful of available and flexible alert messages.
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
    static defaultProps = {
        variant: 'primary',
        role: 'alert',
        allowClose: false,
        closeButtonAriaLabel: 'close',
        show: true
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
