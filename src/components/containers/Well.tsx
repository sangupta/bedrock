import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

/**
 * If you need a CSS styled `variant`-aware well to display
 * content, consider using `Alert` component.
 * 
 */
export default class Well extends React.Component<BaseProps, any> {
    render() {
        const css: string = mergeCSS('card', 'card-body', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
