import * as React from 'react';
import { BaseProps, getProps, NoProps } from '../../BedrockUtils';

export default class Pre extends React.Component<BaseProps, NoProps> {

    render() {
        const extra:any = getProps(this.props);
        
        return <pre {...extra} className={this.props.className}>{this.props.children}</pre>;
    }

}
