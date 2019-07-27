import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface TableColProps extends BaseProps {
    head?: any;
}

export default class TableCol extends React.Component<TableColProps, any> {

    render() {
        let Element:any = 'td';

        if (this.props.head) {
            Element = 'th';
        }
        return <Element className={this.props.className}>{this.props.children}</Element>
    }
}
