import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface RangeInputProps extends BaseProps {
    /**
     * Property name to be used inside a form
     */
    name?: string;

    /**
     * The minimum value of the range
     */
    min?: number;

    /**
     * The maximum value of the range
     */
    max?: number;

    /**
     * Increment/decrement step value
     */
    step?: number;

    /**
     * Color value represented as RGB Hex to use
     */
    value?: string;

    /**
     * Handler fired when the value changes
     */
    onChange?: Function;
}

export default class RangeInput extends React.Component<RangeInputProps, any> {

    static defaultProps = {
        min: 0,
        max: 100,
        value: 50
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control-range', this.props.className);
        const extra: any = getProps(this.props, ['name', 'min', 'max', 'step'])
        if (this.props.value) {
            extra.defaultValue = this.props.value;
        }
        return <input {...extra} type='range' className={css} onChange={this.handleChange} />;
    }
}
