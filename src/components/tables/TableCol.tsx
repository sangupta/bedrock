import * as React from 'react';
import { BaseProps, getProps, NoProps } from './../../BedrockUtils';

interface TableColProps extends BaseProps {
    head?: any;
}

export default class TableCol extends React.Component<TableColProps, NoProps> {

    render() {
        const extra:any = getProps(this.props);
        let Element:any = 'td';

        if (this.props.head) {
            Element = 'th';
        }
        return <Element {...extra} className={this.props.className}>{this.props.children}</Element>
    }
}
