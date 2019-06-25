import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface JumbotronProps extends BaseProps {
    /**
     * Use full-width for the jumbotron without rounded corners.
     */
    fluid?: boolean;
}

/**
 * Jumbotron component is used to focus visitor's attention
 * or highlight special piece of information.
 * 
 */
export default class Jumbotron extends React.Component<JumbotronProps, any> {

    static defaultProps = {
        fluid: false
    }

    render() {
        const css: string = mergeCSS('jumbotron', {
            'jumbotron-fluid': this.props.fluid
        }, this.props.className);

        return <div className={css}>
            {this.props.children}
        </div>;
    }

}
