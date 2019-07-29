import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface HBoxProps extends BaseProps {

}

export default class HBox extends React.Component<HBoxProps, any> {

    render() {
        const css:string = mergeCSS('d-flex', 'flex-row', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
