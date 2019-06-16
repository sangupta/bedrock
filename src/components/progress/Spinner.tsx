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
}

export default class Spinner extends React.PureComponent<SpinnerProps, any> {

    static defaultProps = {
        variant: 'primary',
        type: 'border'
    }

    render() {
        const css: string = mergeCSS({
            'spinner-': this.props.type,
            'text-': this.props.variant
        }, this.props.className);
        
        return <div className={css} role="status">
            <span className="sr-only">Loading...</span>
        </div>;
    }

}
