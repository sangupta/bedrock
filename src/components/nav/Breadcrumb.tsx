import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface BreadcrumbProps extends BaseProps {
}

/**
 * Used to render a horizontal list of breadcrumbs.
 */
export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {

    render() {
        return <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {this.props.children}
            </ol>
        </nav>;
    }
}
