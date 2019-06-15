import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface VBoxProps extends BaseProps {
}

export default class VBox extends React.Component<VBoxProps, any> {

    render() {
        let clazz: string = 'd-flex flex-column'
        if (this.props.className) {
            clazz += ' ' + this.props.className;
        }
        
        return <div className={clazz}>
            {this.props.children}
        </div>;
    }
}
