import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface AccordionItemProps extends BaseProps {

    /**
     * The header title to use for the accordion panel.
     */
    title: string;

    isOpen?: boolean;
}

interface AccordionItemState {
    open: boolean
}

/**
 * Renders a single accordion item within the `Accordion` component.
 */
export default class AccordionItem extends React.Component<AccordionItemProps, AccordionItemState> {

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

        return <div className={css}>
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
