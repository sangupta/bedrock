import * as React from 'react';
import { mergeCSS, BaseProps } from './../../BedrockUtils';

interface NavTreeProps extends BaseProps {

    /**
     * Function handler called when an item inside the
     * entire tree is clicked.
     */
    onClick?: (id: string, eventID: string) => void;

}

/**
 * Used to display a navigation tree, usually a list of categories
 * and sub-categories in left-rail. It supports collapsing of tree
 * nodes that have children.
 */
export default class NavTree extends React.Component<NavTreeProps, any> {

    handleClick = (id: string, eventID: string): void => {
        if (this.props.onClick) {
            this.props.onClick(id, eventID);
        }
    }

    render() {
        const children = React.Children.toArray(this.props.children);
        if (!children || children.length === 0) {
            return null;
        }

        let cloned = [];
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            let childProps = {
                onClick: this.handleClick
            };
            cloned.push(React.cloneElement(child, childProps, child.props.children));
        }

        // we do have children
        const css: string = mergeCSS('bedrock-navtree', this.props.className);
        return <ul className={css}>
            {cloned}
        </ul>;
    }

}
