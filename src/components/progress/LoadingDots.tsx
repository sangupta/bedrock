import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

export default class LoadingDots extends React.Component<BaseProps, any> {
    render() {
        const css: string = mergeCSS('loading-dots', this.props.className);
        const extra: any = getProps(this.props);

        return <div {...extra} className={css}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>;
    }
}