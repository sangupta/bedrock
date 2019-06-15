import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface ColorBoxProps extends BaseProps {
    /**
     * The color to fill the box with
     */
    color:string;

    /**
     * Optional label to display within the color box
     */
    label?:string;
}

export default class ColorBox extends React.Component<ColorBoxProps, any> {

    static defaultProps = {
        label : ''
    }

    render() {
        return <div className='color-box' style={{'backgroundColor':this.props.color}} >{this.props.label}</div>;
    }

}
