import * as React from 'react';

interface StaticContentProps {

    /**
     * Force re-render the component. Note that if you are 
     * setting this to `true`, then, you might not want to use
     * this component.
     */
    forceUpdate?: boolean;

}

/**
 * Component that can be used over static content to prevent
 * unnecessary React reconcilation. This however should only be used
 * when one is sure that the content will never change.
 * 
 * This component can be leveraged when displaying read-only data
 * such as data tables, help pages, author information etc.
 */
export default class StaticContent extends React.Component<StaticContentProps, any> {

    static defaultProps = {
        forceUpdate: false
    }

    shouldComponentUpdate(nextProps: StaticContentProps): boolean {
        return !!nextProps.forceUpdate;
    }

    render() {
        return this.props.children;
    }

}
