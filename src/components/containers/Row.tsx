import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

/**
 * Used to render a row inside a Container.
 */
export default class Row extends React.Component<BaseProps, any> {
    render() {
        return <div className='row'>
            {this.props.children}
        </div>;
    }
}
