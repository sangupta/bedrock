import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface ContainerProps extends BaseProps {
    /**
     * Use full-width for the jumbotron without rounded corners.
     */
    fluid?: boolean;
}

export default class Container extends React.Component<ContainerProps, NoProps> {

    static defaultProps = {
        fluid: false
    }

    render() {
        const css: string = mergeCSS(this.props.fluid ? 'container-fluid' : 'container', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }

}
