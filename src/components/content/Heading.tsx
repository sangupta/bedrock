import * as React from 'react';

interface HeadingProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default class Heading extends React.Component<HeadingProps, any> {

    static defaultProps = {
        size : 1
    }

    render() {
        return <h1>{this.props.children}</h1>
    }

}
