import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

export default class Code extends React.Component<BaseProps, any> {

    render() {
        return <code className={this.props.className}>{this.props.children}</code>;
    }

}
