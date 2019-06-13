import * as React from 'react';

interface CodeProps {

}

export default class Code extends React.Component<CodeProps, any> {

    render() {
        return <code>{this.props.children}</code>;
    }

}
