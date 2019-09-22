import * as React from 'react';
import { BaseProps, getProps, NoProps } from './../../BedrockUtils';

interface TableRowProps extends BaseProps {
}

export default class TableRow extends React.Component<TableRowProps, NoProps> {

    render() {
        const extra:any = getProps(this.props);
        
        return <tr {...extra} className={this.props.className}>{this.props.children}</tr>;
    }
}
