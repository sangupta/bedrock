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
     * Show the badge using an ANCHOR tag.
     */
    asLink?: boolean;

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
        let Tag: any = this.props.asLink ? 'a' : 'span';

        const css: string = mergeCSS('badge', {
            'badge-': this.props.variant,
            'badge-pill': this.props.asPill
        }, this.props.className);

        const extra: any = getProps(this.props);
        if (this.props.asLink) {
            extra.onClick = this.handleClick;
        }

        return <Tag className={css} {...extra}>
            {this.props.children}
        </Tag>;
    }

}
