import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface NavTreeItemProps extends BaseProps {

    /**
     * Label to display for the item
     */
    label: string;

    /**
     * Value to be passed to the onClick handler when the item
     * is clicked.
     */
    value?: string;

    /**
     * Icon to display alongside the item, if the item is not a branch
     */
    icon?: string;

    /**
     * Any badge to be displayed on the right hand side of the tree.
     */
    badge?: string;

    /**
     * Whether to display the tree branch as open or closed
     */
    open?: boolean;

    /**
     * Function handler called when the item is clicked
     */
    onClick?: (id: string, eventID: string) => void;

}

interface NavTreeItemState {
    open: boolean;
}

/**
 * Used to create a single leaf or a branch node in the form
 * of a navigation tree. A `NavTreeItem` is considered a `branch`
 * if it includes children, else it is considered a `leaf` node.
 */
export default class NavTreeItem extends React.Component<NavTreeItemProps, NavTreeItemState> {

    static defaultProps = {
        open: false
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: props.open
        }
    }

    handleClick = (e: React.MouseEvent): void => {
        e.preventDefault();

        if (this.props.onClick) {
            const val = this.props.value || this.props.label;
            this.props.onClick(val, this.props.eventID);
        }
    }

    handleChildClick = (id: string, eventID: string): void => {
        if (this.props.onClick) {
            this.props.onClick(id, eventID);
        }
    }

    getBranch = (children: any[]) => {
        if (!this.state.open) {
            return null;
        }

        let cloned = [];
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            let childProps = {
                onClick: this.handleChildClick
            };
            cloned.push(React.cloneElement(child, childProps, child.props.children));
        }

        return <ul className='bedrock-tree-branch'>
            {cloned}
        </ul>;
    }

    hideTree = () => {
        this.setState({ open: false });
    }

    openTree = () => {
        this.setState({ open: true });
    }

    getBranchIcon = () => {
        if (this.state.open) {
            return <i className='fas fa-chevron-down navtree-leaf-icon' onClick={this.hideTree}></i>
        }

        return <i className='fas fa-chevron-right navtree-leaf-icon' onClick={this.openTree}></i>
    }

    getLeafIcon = () => {
        if (this.props.icon) {
            return <i className={this.props.icon + ' navtree-leaf-icon'}></i>
        }

        return <i className='navtree-leaf-icon'></i>
    }

    render() {
        const children = React.Children.toArray(this.props.children);
        const isBranch: boolean = children && children.length > 0;

        return <React.Fragment>
            <li>
                {isBranch ? this.getBranchIcon() : this.getLeafIcon()}
                <a href='#' className='navtree-leaf' onClick={this.handleClick}>{this.props.label}</a>
            </li>
            {isBranch ? this.getBranch(children) : null}
        </React.Fragment>
    }

}
