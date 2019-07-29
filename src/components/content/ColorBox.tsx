import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface ColorBoxProps extends BaseProps {
    /**
     * The color to fill the box with
     */
    color: string;

    /**
     * Optional label to display within the color box
     */
    label?: string;

    /**
     * Handler called when the color box is clicked
     */
    onClick?: React.MouseEventHandler;

    /**
     * Function called when the color is selected with the selected
     * color value
     */
    onSelect?: Function;
}

export default class ColorBox extends React.Component<ColorBoxProps, any> {

    static defaultProps = {
        label: ''
    }

    handleClick = (e) => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }

        if (this.props.onSelect) {
            this.props.onSelect(this.props.color);
        }
    }

    render() {
        const css: string = mergeCSS('color-box', this.props.className);
        const extra:any = getProps(this.props);

        return <div {...extra} className={css} style={{ 'backgroundColor': this.props.color }} onClick={this.handleClick}>{this.props.label}</div>;
    }

}
