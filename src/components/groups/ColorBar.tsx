import * as React from 'react';
import HBox from '../layout/HBox';
import ColorBox from '../content/ColorBox';
import { BaseProps, getProps, NoProps } from './../../BedrockUtils';

interface ColorBarProps extends BaseProps {
    /**
     * An array of colors specified as a string, or an object
     */
    colors?: Array<any>;

    /**
     * Click handler to be invoked when any color is clicked on
     */
    onSelect?: (color: string, eventID: string) => void;

    /**
     * CSS to be applied to each color box
     */
    boxCSS?: string;
}

export default class ColorBar extends React.Component<ColorBarProps, NoProps> {

    handleSelect = (selected: string) => {
        if (this.props.onSelect) {
            this.props.onSelect(selected, this.props.eventID);
        }
    }

    getColors = () => {
        let colors = this.props.colors;
        const result = [];

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

        const extra: any = getProps(this.props);

        return <HBox {...extra} className={this.props.className}>{this.getColors()}</HBox>;
    }
}
