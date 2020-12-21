import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface BadgeProps extends BaseProps {
    /**
     * Element styling to be applied.
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Show the badge as a pill.
     */
    asPill?: boolean;

    /**
     * Method to call when the badge button is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;
}

export default class Badge extends React.Component<BadgeProps, any> {

    static defaultProps = {
        variant: 'primary',
        asPill: false,
        asLink: false
    }

    handleClick = (e: React.MouseEvent): void => {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    render() {
        const noHanlder:boolean = !!!this.props.onClick;
        const css: string = mergeCSS('badge', {
            'bg-': this.props.variant,
            'rounded-pill': this.props.asPill,
            'cursor-pointer': !noHanlder
        }, this.props.className);

        const extra: any = getProps(this.props);

        return <span className={css} {...extra} onClick={this.handleClick}>
            {this.props.children}
        </span>;
    }

}
