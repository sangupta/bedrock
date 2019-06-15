import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface HeadingProps extends BaseProps {

    /**
     * The size of heading between 1 and 6.
     */
    size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default class Heading extends React.Component<HeadingProps, any> {

    static defaultProps = {
        size: 1
    }

    render() {
        const Element: any = 'h' + this.props.size;
        return <Element>{this.props.children}</Element>
    }

}
