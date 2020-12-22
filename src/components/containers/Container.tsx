import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface ContainerProps extends BaseProps {

    /**
     * Use full-width for the jumbotron without rounded corners.
     */
    fluid?: boolean;

    /**
     * Fluid breakpoints
     */
    breakpoint?: 'small' | 'medium' | 'large' | 'xl' | 'xxl'

}

export default class Container extends React.Component<ContainerProps, NoProps> {

    static defaultProps = {
        fluid: false,
        breakpoint: ''
    }

    render() {
        const bp: string = this.props.breakpoint;

        const css: string = mergeCSS(this.props.fluid ? 'container-fluid' : 'container', {
            'container-sm': bp === 'small',
            'container-md': bp === 'medium',
            'container-lg': bp === 'large',
            'container-xl': bp === 'xl',
            'container-xxl': bp === 'xxl',
        }, this.props.className);
        const extra: any = getProps(this.props);

        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }

}
