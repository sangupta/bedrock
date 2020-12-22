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

    constructor(props: AccordionItemProps) {
        super(props);

        this.state = {
            open: props.isOpen
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return { open: !state.open }
        });
    }

    render() {
        const css: string = mergeCSS('accordion-item', this.props.className);
        const bodyCss: string = mergeCSS('accordion-collapse', 'collapse', { show: this.state.open });

        return <div className={css}>
            <h2 className='accordion-header'>
                <button className={mergeCSS('accordion-button', { 'collapsed': !this.state.open })} type='button' onClick={this.handleClick}>
                    {this.props.title}
                </button>
            </h2>

            <div className={bodyCss}>
                <div className="accordion-body">
                    {this.props.children}
                </div>
            </div>
        </div>
    }

}
