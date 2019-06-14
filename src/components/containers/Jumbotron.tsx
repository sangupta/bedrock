import * as React from 'react';

interface JumbotronProps {
    /**
     * Custom CSS classes to be applied to the element
     */
    className?: string;

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
