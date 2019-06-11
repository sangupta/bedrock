import * as React from 'react';

interface HBoxProps {

}

export default class HBox extends React.Component<HBoxProps, any> {

    render() {
        return <div className='d-flex flex-row'>
            {this.props.children}
        </div>;
    }
}
