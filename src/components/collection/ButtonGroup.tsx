import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ButtonGroupProps extends BaseProps {
    ariaLabel?: string;
    role?: string;

    /**
     * Size of the button group
     */
    size?: 'large' | 'small' | 'default';
}

export default class ButtonGroup extends React.Component<ButtonGroupProps, any> {

    static defaultProps = {
        role: 'group',
        size: 'default'
    }

    render() {
        const css: string = mergeCSS('btn-group', {
            'btn-group-lg': this.props.size === 'large',
            'btn-group-sm': this.props.size === 'small'
        }, this.props.className);

        return <div className={css} role={this.props.role} aria-label={this.props.ariaLabel}>
            {this.props.children}
        </div>;
    }
}