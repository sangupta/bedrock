import * as React from 'react';

interface ContainerProps {
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
        let clazz: string =  this.props.fluid ? 'container-fluid' : 'container';
        return <div className={clazz}>
            {this.props.children}
        </div>;
    }

}
