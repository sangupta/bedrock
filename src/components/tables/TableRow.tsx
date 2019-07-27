import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface TableRowProps extends BaseProps {
}

export default class TableRow extends React.Component<TableRowProps, any> {

    render() {
        return <tr className={this.props.className}>{this.props.children}</tr>;
    }
}
