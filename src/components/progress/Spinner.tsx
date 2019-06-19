import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface SpinnerProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Type of spinner to display
     */
    type?: 'border' | 'grow';

    /**
     * Size of the spinner
     */
    size?: 'large' | 'small' | 'default';

    /**
     * Role value to use
     */
    role?: string;
}

export default class Spinner extends React.PureComponent<SpinnerProps, any> {

    static defaultProps = {
        variant: 'primary',
        type: 'border',
        role: 'status'
    }

    render() {
        const css: string = mergeCSS({
            'spinner-': this.props.type,
            'text-': this.props.variant,
            'spinner-border': this.props.size === 'small' && this.props.type === 'border',
            'spinner-border-sm': this.props.size === 'small' && this.props.type === 'border',
            'spinner-grow-sm': this.props.size === 'small' && this.props.type === 'grow'
        }, this.props.className);

        return <div className={css} role={this.props.role}>
            <span className="sr-only">Loading...</span>
        </div>;
    }

}
