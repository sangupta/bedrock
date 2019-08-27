import * as React from 'react';
import { mergeCSS, BaseProps, getProps } from './../../BedrockUtils';

interface SelectProps extends BaseProps {
    /**
     * Handler called when a value is selected
     */
    onSelect?: Function;
};

export default class Select extends React.Component<SelectProps, any> {

    handleChange = (e) => {
        console.log(e.target.value);
        if(this.props.onSelect) {
            console.log(e);
            this.props.onSelect(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        const extra:any = getProps(this.props);
        
        return <select {...extra} className={css} onChange={this.handleChange}>
            {this.props.children}
        </select>;
    }

}
