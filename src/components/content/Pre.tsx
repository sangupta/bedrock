import * as React from 'react';

interface PreProps {

}

export default class Pre extends React.Component<PreProps, any> {

    render() {
        return <pre>{this.props.children}</pre>;
    }

}
