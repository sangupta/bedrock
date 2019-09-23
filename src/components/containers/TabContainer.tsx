import * as React from 'react';

interface TabContainerProps {

    /**
     * Index of the tab which needs to be selected by default. If no
     * value is specified, the first tab is assumed selected. Also, if
     * the `selected` value is greater than number of tabs, the first
     * tab is selected.
     */
    selected?: number;

    /**
     * Handler invoked with the old and new indices when
     * tabs are changed.
     */
    onSelect?: Function;

}

interface TabContainerState {
    selected: number;
}

/**
 * A simple container that can be used to render tabs. Each child must have
 * a `title` property to render the respective tab title. The children of
 * the element are rendered depending on which tab is selected.
 */
export default class TabContainer extends React.Component<TabContainerProps, TabContainerState> {

    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected
        }
    }

    switchTab = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        const previous = this.state.selected;
        this.setState({
            selected: index
        });
        if (this.props.onSelect) {
            this.props.onSelect(previous, index);
        }
    }

    getChildren = (children, selected: number) => {
        let result = [];

        for (let index = 0; index < children.length; index++) {
            let child = children[index];
            let css = "nav-link";
            if (selected === index) {
                css += ' active';
            }

            result.push(<li key={child.props.name} className="nav-item">
                <a className={css} href='#' onClick={e => this.switchTab(e, index)}>{child.props.title}</a>
            </li>);
        }

        return result;
    }

    includeTabContent = (children, selected: number) => {
        let child = children[selected];
        if (child.props.children) {
            return child.props.children;
        }

        return null;
    }

    render() {
        if (!this.props.children) {
            return null;
        }

        const children = React.Children.toArray(this.props.children);

        let selected: number = this.state.selected || 0;
        if (selected >= children.length) {
            selected = 0;
        }

        return <React.Fragment>
            <ul className="nav nav-tabs">
                {this.getChildren(children, selected)}
            </ul>
            {this.includeTabContent(children, selected)}
        </React.Fragment>;
    }
}
