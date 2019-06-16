import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface BreadcrumbProps extends BaseProps {
    /**
     * CSS classes to be applied to parent `nav` element.
     * This is different from other components as the default
     * `className` attribute applies to actual `ol` element.
     */
    navCSS?: string;
}

/**
 * Used to render a horizontal list of breadcrumbs.
 */
export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {

    render() {
        return <nav aria-label='breadcrumb' className={this.props.navCSS} >
            <ol className={mergeCSS('breadcrumb', this.props.className)}>
                {this.props.children}
            </ol>
        </nav>;
    }
}
