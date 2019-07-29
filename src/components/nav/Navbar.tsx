import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface NavbarProps extends BaseProps {

    theme?: 'light' | 'dark';

    background?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

}

/**
 * Useful to display a navigation bar.
 */
export default class Navbar extends React.Component<NavbarProps, any> {

    static defaultProps = {
        theme: 'light',
        background: 'light'
    }

    render() {
        const css: string = mergeCSS('navbar', {
            'navbar-': this.props.theme,
            'bg-': this.props.background
        }, this.props.className);

        const extra:any = getProps(this.props);
        
        return <nav {...extra} className={css}>
            {this.props.children}
        </nav>;
    }

}
