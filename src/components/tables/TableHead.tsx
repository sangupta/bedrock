import * as React from 'react';
import { BaseProps, getProps, NoProps } from './../../BedrockUtils';

/**
 * Used to display the `thead` section of a table.
 */
export default class TableHead extends React.Component<BaseProps, NoProps> {

    render() {
        const extra:any = getProps(this.props);
        
        return <thead {...extra} className={this.props.className}>
            <tr>
                {this.props.children}
            </tr>
        </thead>
    }
}

