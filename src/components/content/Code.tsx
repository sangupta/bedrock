import * as React from 'react';

interface CodeProps {
    /**
     * Custom CSS classes to be applied to the element
     */
    className?: string;
}

export default class Code extends React.Component<CodeProps, any> {

    render() {
        return <code className={this.props.className || ''}>{this.props.children}</code>;
    }

}
