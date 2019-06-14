import * as React from 'react';

interface PreProps {
    /**
     * Custom CSS classes to be applied to the element
     */
    className?: string;
}

export default class Pre extends React.Component<PreProps, any> {

    render() {
        return <pre className={this.props.className || ''}>{this.props.children}</pre>;
    }

}
