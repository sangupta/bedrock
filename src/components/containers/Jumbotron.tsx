import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface JumbotronProps extends BaseProps{
    /**
     * Use full-width for the jumbotron without rounded corners.
     */
    fluid?: boolean;
}

export default class Jumbotron extends React.Component<JumbotronProps, any> {

    static defaultProps = {
        fluid: false
    }

    render() {
        let clazz: string = 'jumbotron';
        if (this.props.fluid) {
            clazz += ' jumbotron-fluid';
        }
        if(this.props.className) {
            clazz = this.props.className + ' ' + clazz;
        }

        return <div className={clazz}>
            {this.props.children}
        </div>;
    }

}
