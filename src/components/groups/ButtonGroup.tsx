import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface ButtonGroupProps extends BaseProps {

    /**
     * The ARIA label to use
     */
    ariaLabel?: string;

    /**
     * The ARIA role
     */
    role?: string;

    /**
     * Size of the button group
     */
    size?: 'large' | 'small' | 'default';
}

export default class ButtonGroup extends React.Component<ButtonGroupProps, NoProps> {

    static defaultProps = {
        role: 'group',
        size: 'default'
    }

    render() {
        const css: string = mergeCSS('btn-group', {
            'btn-group-lg': this.props.size === 'large',
            'btn-group-sm': this.props.size === 'small'
        }, this.props.className);

        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css} role={this.props.role} aria-label={this.props.ariaLabel}>
            {this.props.children}
        </div>;
    }
}