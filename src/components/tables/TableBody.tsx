import * as React from 'react';
import { BaseProps, getProps } from './../../BedrockUtils';

export default class TableBody extends React.Component<BaseProps, any> {

    render() {
        const extra:any = getProps(this.props);
        
        return <tbody {...extra} className={this.props.className}>
            {this.props.children}
        </tbody>;
    }

}
