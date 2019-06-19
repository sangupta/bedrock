import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface NavProps extends BaseProps {

    /**
     * Aligment for navigation items
     */
    align?: 'center' | 'right' | 'left' | 'justify';

    type?: 'default' | 'tabs' | 'pills'

    vertical?: boolean;

    fill?: boolean;
}

/**
 * Useful to display basic navigation.
 */
export default class Nav extends React.Component<NavProps, any> {

    static defaultProps = {
        align: 'left',
        vertical: false,
        type: 'default',
        fill: false
    }

    render() {
        const css: string = mergeCSS('nav', {
            'justify-content-center': this.props.align === 'center',
            'justify-content-end': this.props.align === 'right',
            'flex-column': this.props.vertical,
            'nav-justified': this.props.align === 'justify',
            'nav-tabs': this.props.type === 'tabs',
            'nav-pills': this.props.type === 'pills',
            'nav-fill': this.props.fill
        }, this.props.className);

        return <ul className={css}>
            {this.props.children}
        </ul>;
    }

}
