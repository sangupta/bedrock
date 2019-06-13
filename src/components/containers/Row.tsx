import * as React from 'react';

/**
 * Used to render a row inside a Container.
 */
export default class Row extends React.Component<any, any> {
    render() {
        return <div className='row'>
            {this.props.children}
        </div>;
    }
}
