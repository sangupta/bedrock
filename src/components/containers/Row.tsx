import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

/**
 * Used to render a row inside a Container.
 */
export default class Row extends React.Component<BaseProps, any> {

    render() {
        const css: string = mergeCSS('row', this.props.className);
        return <div className={css}>
            {this.props.children}
        </div>;
    }
}
