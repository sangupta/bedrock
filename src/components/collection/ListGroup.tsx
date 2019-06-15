import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface ListGroupProps extends BaseProps {
    /**
     * Set `flush={true}` to remove some borders and rounded corners to 
     * render list group items edge-to-edge in a parent container (e.g., cards).
     */
    flush?: boolean;

    /**
     * Set `horizontal={true}` to change the layout of list group items from 
     * vertical to horizontal across all breakpoints.
     */
    horizontal?: boolean;
}

export default class ListGroup extends React.Component<ListGroupProps, any> {

    static defaultProps = {
        flush: false,
        horizontal: false,
    }

    render() {
        let clazz = 'list-group';
        if (this.props.flush) {
            clazz += ' list-group-flush';
        }
        if(this.props.horizontal) {
            clazz += ' list-group-horizontal';
        }
        return <ul className={clazz}>
            {this.props.children}
        </ul>;
    }
}
