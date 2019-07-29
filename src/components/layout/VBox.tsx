import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface VBoxProps extends BaseProps {
}

export default class VBox extends React.Component<VBoxProps, any> {

    render() {
        const css: string = mergeCSS('d-flex', 'flex-column', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
