import * as React from 'react';

/**
 * Used to render a column inside a container.
 */
export default class Col extends React.Component<any, any> {
    render() {
        return <div className='col'>
            {this.props.children}
        </div>;
    }
}
