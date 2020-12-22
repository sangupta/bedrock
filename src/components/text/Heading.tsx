import * as React from 'react';
import { BaseProps, getProps, NoProps, mergeCSS } from '../../BedrockUtils';

interface HeadingProps extends BaseProps {

    /**
     * The size of heading between 1 and 6.
     */
    size?: 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * Enable display mode which renders larger opinionated heading style.
     */
    displayMode?: boolean;
}

export default class Heading extends React.Component<HeadingProps, NoProps> {

    static defaultProps = {
        size: 1,
        displayMode: false
    }

    render() {
        const dcss: string = this.props.displayMode ? 'display-' + this.props.size : '';
        const css: string = mergeCSS(this.props.className, dcss);
        const Element: any = 'h' + this.props.size;
        const extra: any = getProps(this.props);

        return <Element {...extra} className={css}>{this.props.children}</Element>
    }

}
