import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

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
    onClick?: React.MouseEventHandler<any>;
}

export default class Badge extends React.Component<BadgeProps, any> {

    static defaultProps = {
        variant: 'primary',
        asPill: false,
        asLink: false
    }

    render() {
        let Tag: any = this.props.asLink ? 'a' : 'span';

        let css: string = 'badge badge-' + this.props.variant;
        if (this.props.asPill) {
            css += ' badge-pill';
        }

        let extra:any = {};
        if(this.props.asLink && this.props.onClick) {
            extra.onClick = this.props.onClick;
        }
        return <Tag className={css} {...extra}>
            {this.props.children}
        </Tag>;
    }

}
