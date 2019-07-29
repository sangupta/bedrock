import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface ColorInputProps extends BaseProps {
    name?: string;

    /**
     * Color value represented as RGB Hex to use
     */
    value?: string;

    /**
     * Handler fired when the value changes
     */
    onChange?:Function;
}

export default class ColorInput extends React.Component<ColorInputProps, any> {

    static defaultProps = {
        name: ''
    }

    handleChange = (e) => {
        if(this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        const extra:any = getProps(this.props);
        
        return <input {...extra} className={css} type='color'
            onChange={this.handleChange}
            defaultValue={this.props.value}
            name={this.props.name}>
        </input>;
    }
}