import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

export default class CBox extends React.Component<BaseProps, NoProps> {

    render() {
        const css:string = mergeCSS('d-flex', 'flex-center', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
