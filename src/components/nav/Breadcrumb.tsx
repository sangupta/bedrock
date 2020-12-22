import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface BreadcrumbProps extends BaseProps {
    /**
     * CSS classes to be applied to parent `nav` element.
     * This is different from other components as the default
     * `className` attribute applies to actual `ol` element.
     */
    navCSS?: string;

    /**
     * Method to call when any breadcrumb link is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;
}

/**
 * Used to render a horizontal list of breadcrumbs.
 */
export default class Breadcrumb extends React.Component<BreadcrumbProps, NoProps> {

    handleClick = (e: React.MouseEvent, eventID: string): void => {
        if (this.props.onClick) {
            this.props.onClick(e, eventID);
        }
    }

    render() {
        const extra: any = getProps(this.props);

        const children: Array<React.ReactElement> = React.Children.toArray(this.props.children) as Array<React.ReactElement>;
        if (!children || children.length === 0) {
            return null;
        }

        let cloned = [];
        for (let index: number = 0; index < children.length; index++) {
            const child = children[index];
            let childProps = {
                onClick: this.handleClick
            };
            cloned.push(React.cloneElement(child, childProps, child.props.children));
        }

        return <nav {...extra} aria-label='breadcrumb' className={this.props.navCSS} >
            <ol className={mergeCSS('breadcrumb', this.props.className)}>
                {cloned}
            </ol>
        </nav>;
    }

}
