import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

/**
 * If you need a CSS styled `variant`-aware well to display
 * content, consider using `Alert` component.
 * 
 */
export default class Well extends React.Component<BaseProps, any> {
    render() {
        return <div className='card card-body'>
            {this.props.children}
        </div>;
    }
}
