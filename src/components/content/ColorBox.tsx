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
    onClick?: (e: React.MouseEvent, eventID: string) => void;

    /**
     * Function called when the color is selected with the selected
     * color value
     */
    onSelect?: (color: string, eventID: string) => void;
}

export default class ColorBox extends React.Component<ColorBoxProps, any> {

    static defaultProps = {
        label: ''
    }

    handleClick = (e) => {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }

        if (this.props.onSelect) {
            this.props.onSelect(this.props.color, this.props.eventID);
        }
    }

    render() {
        const hasHandlers = !!!(this.props.onClick || this.props.onSelect);
        const css: string = mergeCSS('color-box', {
            'cursor-pointer': !hasHandlers
        }, this.props.className);
        const extra: any = getProps(this.props);

        return <div {...extra} className={css} style={{ 'backgroundColor': this.props.color }} onClick={this.handleClick}>{this.props.label || this.props.color}</div>;
    }

}
