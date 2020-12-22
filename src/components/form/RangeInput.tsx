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
     * Range value represented as number
     */
    value?: number;

    /**
     * Handler fired when the value changes
     */
    onChange?: (value: number, eventID: string) => void;
}

interface RangeInputState {
    value: number;
}

export default class RangeInput extends React.Component<RangeInputProps, RangeInputState> {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    static defaultProps = {
        min: 0,
        max: 100,
        value: 50
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
        if (this.props.onChange) {
            this.props.onChange(e.target.value, this.props.eventID);
        }
    }

    render() {
        const css: string = mergeCSS('form-control-range', this.props.className);
        const extra: any = getProps(this.props, ['name', 'min', 'max', 'step'])
        if (this.props.value) {
            extra.defaultValue = this.state.value;
        }
        return <input {...extra} type='range' className={css} onChange={this.handleChange} />;
    }
}
