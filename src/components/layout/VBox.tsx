import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface VBoxProps extends BaseProps {
}

export default class VBox extends React.Component<VBoxProps, any> {

    render() {
        const css: string = mergeCSS('d-flex', 'flex-column', this.props.className);

        return <div className={css}>
            {this.props.children}
        </div>;
    }
}
