import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

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
export default class Breadcrumb extends React.Component<BreadcrumbProps, NoProps> {

    render() {
        const extra:any = getProps(this.props);
        
        return <nav {...extra} aria-label='breadcrumb' className={this.props.navCSS} >
            <ol className={mergeCSS('breadcrumb', this.props.className)}>
                {this.props.children}
            </ol>
        </nav>;
    }
}
