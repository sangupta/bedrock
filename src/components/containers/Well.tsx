import * as React from 'react';

export default class Well extends React.Component<any, any> {
    render() {
        return <div className='card card-body'>
            {this.props.children}
        </div>;
    }
}
