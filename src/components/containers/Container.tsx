import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ContainerProps extends BaseProps {
    /**
     * Use full-width for the jumbotron without rounded corners.
     */
    fluid?: boolean;
}

export default class Jumbotron extends React.Component<ContainerProps, any> {

    static defaultProps = {
        fluid: false
    }

    render() {
        const css: string = mergeCSS(this.props.fluid ? 'container-fluid' : 'container', this.props.className);
        return <div className={css}>
            {this.props.children}
        </div>;
    }

}
