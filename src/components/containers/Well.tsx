import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

export default class Well extends React.Component<BaseProps, any> {
    render() {
        return <div className='card card-body'>
            {this.props.children}
        </div>;
    }
}
