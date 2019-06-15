import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

/**
 * Used to render a column inside a container.
 */
export default class Column extends React.Component<BaseProps, any> {
    render() {
        return <div className='col'>
            {this.props.children}
        </div>;
    }
}
