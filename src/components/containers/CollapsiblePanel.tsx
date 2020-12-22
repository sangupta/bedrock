import * as React from 'react';
import { BaseProps, mergeCSS, getProps, Variant } from './../../BedrockUtils';

interface CollapsiblePanelProps extends BaseProps {

    /**
     * The header title to use for the collapsible panel.
     */
    title: string;

    /**
     * To display the panel in collapsed state or not
     */
    isOpen?: boolean;

    type?: 'link' | 'button';

    variant?: Variant;
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
        isOpen: false,
        type: 'link',
        variant: 'primary'
    }

    constructor(props: CollapsiblePanelProps, context: any) {
        super(props, context);

        this.state = {
            open: props.isOpen
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        });
    }

    render() {
        const css: string = mergeCSS('collapsible-panel', this.props.className);
        const bodyCss: string = mergeCSS('collapse', { show: this.state.open });
        const extra: any = getProps(this.props);
        
        let btnCss = 'btn';
        if(this.props.type === 'link') {
            btnCss += ' btn-link';
            btnCss += ' link-' + this.props.variant;
        } else {
            btnCss += ' btn-' + this.props.variant;
        }

        return <div className={css} {...extra}>
            <a className={btnCss} onClick={this.handleClick}>
                {this.props.title}
            </a>

            <div className={bodyCss}>
                <div className="card card-body">
                    {this.props.children}
                </div>
            </div>
        </div>
    }

}
