import * as React from 'react';
import { BaseProps, getProps } from '../../BedrockUtils';

export default class Code extends React.Component<BaseProps, any> {

    render() {
        const extra:any = getProps(this.props);
        
        return <code {...extra} className={this.props.className}>{this.props.children}</code>;
    }

}
