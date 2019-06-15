import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

/**
 * Used to render a row inside a Container.
 */
export default class Row extends React.Component<BaseProps, any> {

    static defaultProps = {
        className : ''
    }
    
    render() {
        return <div className={'row ' + this.props.className}>
            {this.props.children}
        </div>;
    }
}
