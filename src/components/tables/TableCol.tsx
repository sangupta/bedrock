import * as React from 'react';
import { BaseProps, getProps } from './../../BedrockUtils';

interface TableColProps extends BaseProps {
    head?: any;
}

export default class TableCol extends React.Component<TableColProps, any> {

    render() {
        const extra:any = getProps(this.props);
        let Element:any = 'td';

        if (this.props.head) {
            Element = 'th';
        }
        return <Element {...extra} className={this.props.className}>{this.props.children}</Element>
    }
}
