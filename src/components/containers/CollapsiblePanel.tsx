import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface CollapsiblePanelProps extends BaseProps {

    /**
     * The header title to use for the collapsible panel.
     */
    title: string;

    /**
     * To display the panel in collapsed state or not
     */
    isOpen?: boolean;
}

interface CollapsiblePanelState {
    open: boolean
}

/**
 * Renders a single panel that can be collapsed by clicking on the
 * title bar.
 */
export default class CollapsiblePanel extends React.Component<CollapsiblePanelProps, CollapsiblePanelState> {

    static defaultProps = {
        isOpen: false
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: props.isOpen
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                open : !state.open
            }
        });
    }

    render() {
        const css: string = mergeCSS('card', this.props.className);
        const bodyCss: string = mergeCSS('collapse', { show: this.state.open });
        const extra:any = getProps(this.props);

        return <div className={css} {...extra}>
            <div className="card-header">
                <h5 className="mb-0">
                    <button className="btn btn-link" aria-expanded="true" onClick={this.handleClick}>
                        {this.props.title}
                    </button>
                </h5>
            </div>

            <div className={bodyCss}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }

}
