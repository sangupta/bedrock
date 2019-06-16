import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ColorBoxProps extends BaseProps {
    /**
     * The color to fill the box with
     */
    color: string;

    /**
     * Optional label to display within the color box
     */
    label?: string;
}

export default class ColorBox extends React.Component<ColorBoxProps, any> {

    static defaultProps = {
        label: ''
    }

    render() {
        const css: string = mergeCSS('color-box', this.props.className);
        return <div className={css} style={{ 'backgroundColor': this.props.color }} >{this.props.label}</div>;
    }

}
