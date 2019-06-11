import * as React from 'react';

interface VBoxProps {
    /**
     * Extra CSS classes that can be added to the parent DIV
     */
    className?: string;
}

export default class VBox extends React.Component<VBoxProps, any> {

    render() {
        let clazz: string = 'd-flex flex-column'
        if (this.props.className) {
            clazz += ' ' + this.props.className;
        }
        
        return <div className={clazz}>
            {this.props.children}
        </div>;
    }
}
