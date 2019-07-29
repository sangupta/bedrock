import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

/**
 * Used to render a column inside a container.
 */
export default class Column extends React.Component<BaseProps, any> {
    render() {
        const css: string = mergeCSS('col', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
