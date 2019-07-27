import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

export default class TableBody extends React.Component<BaseProps, any> {

    render() {
        return <tbody className={this.props.className}>
            {this.props.children}
        </tbody>;
    }

}
