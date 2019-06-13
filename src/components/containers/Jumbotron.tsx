import * as React from 'react';

interface JumbotronProps {
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

        return <div className={clazz}>
            {this.props.children}
        </div>;
    }

}
