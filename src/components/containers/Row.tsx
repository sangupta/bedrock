import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

/**
 * Used to render a row inside a Container.
 */
export default class Row extends React.Component<BaseProps, any> {

    render() {
        const css: string = mergeCSS('row', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
