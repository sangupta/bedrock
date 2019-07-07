import * as React from 'react';
import HBox from '../layout/HBox';
import ColorBox from '../content/ColorBox';
import { BaseProps } from './../../BedrockUtils';

interface ColorBarProps extends BaseProps {
    /**
     * An array of colors specified as a string, or an object
     */
    colors?: Array<any>;

    /**
     * Click handler to be invoked when any color is clicked on
     */
    onSelect?: React.MouseEventHandler;

    /**
     * CSS to be applied to each color box
     */
    boxCSS?: string;
}

export default class ColorBar extends React.Component<ColorBarProps, any> {

    handleSelect = (selected) => {
        if (this.props.onSelect) {
            this.props.onSelect(selected);
        }
    }

    getColors = () => {
        let colors = this.props.colors;
        let result = [];

        for (let index = 0; index < colors.length; index++) {
            const item = colors[index];

            let color: string = '';
            let label = '';
            if (typeof item === 'string') {
                color = item;
            }
            if (typeof item === 'object') {
                color = item.color || '';
                label = item.label || '';
            }

            result.push(<ColorBox key={'colorbox-' + color} className={this.props.boxCSS} color={color} label={label} onSelect={this.handleSelect} />);
        }

        return result;
    }

    render() {
        if (!this.props.colors) {
            return null;
        }

        return <HBox className={this.props.className}>{this.getColors()}</HBox>;
    }
}
