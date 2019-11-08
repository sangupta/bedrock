import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface SplitButtonProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Size of the button
     */
    size?: 'large' | 'small' | 'default';

    /**
     * Text label to display on the button, only, if children
     * to this component are not specified
     */
    label?: string;

    /**
     * Handler to be invoked when button is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;

    /**
     * Handler to be invoked when icon (the split-part of button) is clicked
     */
    onAction?: (e: React.MouseEvent, eventID: string) => void;

    /**
     * CSS classes to be applied to the split part.
     */
    splitClassName?: string;

    /**
     * CSS classes to be applied to the containing button group.
     */
    groupClassName?: string;
}

export default class SplitButton extends React.Component<SplitButtonProps, NoProps> {

    static defaultProps = {
        variant: 'primary'
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    handleAction = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.props.onAction) {
            this.props.onAction(e, this.props.eventID);
        }
    }

    render() {
        const css: string = mergeCSS('btn', 'btn-' + this.props.variant, {
            'btn-lg': this.props.size === 'large',
            'btn-sm': this.props.size === 'small'
        }, this.props.className);

        const extra: any = getProps(this.props);
        const splitCss: string = mergeCSS('btn', 'btn-' + this.props.variant, 'dropdown-toggle', this.props.splitClassName)

        return <div {...extra} className={mergeCSS("btn-group", this.props.groupClassName)}>
            <button type="button" className={css} onClick={this.handleClick}>{this.props.label}</button>
            <button type="button" className={splitCss} onClick={this.handleAction} />
        </div>;
    }
}