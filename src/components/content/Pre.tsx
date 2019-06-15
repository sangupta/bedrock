import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

export default class Pre extends React.Component<BaseProps, any> {

    render() {
        return <pre className={this.props.className || ''}>{this.props.children}</pre>;
    }

}
