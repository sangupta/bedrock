import * as React from 'react';
import { mergeCSS, BaseProps } from './../../BedrockUtils';

interface SelectProps extends BaseProps {

};

export default class Select extends React.Component<SelectProps, any> {

    render() {
        const css: string = mergeCSS('form-control', this.props.className);

        return <select className={css}>
            {this.props.children}
        </select>;
    }

}
