import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface HBoxProps extends BaseProps {

}

export default class HBox extends React.Component<HBoxProps, any> {

    render() {
        return <div className='d-flex flex-row'>
            {this.props.children}
        </div>;
    }
}
