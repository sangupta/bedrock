import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

/**
 * Used to display the `thead` section of a table.
 */
export default class TableHead extends React.Component<BaseProps, any> {

    render() {
        return <thead className={this.props.className}>
            <tr>
                {this.props.children}
            </tr>
        </thead>
    }
}

