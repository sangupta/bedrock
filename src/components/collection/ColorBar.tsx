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
    onClick?: React.MouseEventHandler;
}

export default class ColorBar extends React.Component<ColorBarProps, any> {

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

            result.push(<ColorBox color={color} label={label} />);
        }

        return result;
    }

    render() {
        if (!this.props.colors) {
            return null;
        }

        return <HBox>{this.getColors()}</HBox>;
    }
}
