import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

export default class Form extends React.Component<BaseProps, any> {

    render() {
        const css: string = mergeCSS(this.props.className);
        return <form className={css}>
            {this.props.children}
        </form>;
    }

}
