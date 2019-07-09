import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface UnderlayProps extends BaseProps {
    /**
     * Whether to display the underlay or not
     */
    show?: boolean;
}
export default class Underlay extends React.Component<UnderlayProps, any> {

    static defaultProps = {
        show: true
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        const css: string = mergeCSS('bedrock-underlay', this.props.className);
        return <div className={css}>
            {this.props.children}
        </div>;
    }

}