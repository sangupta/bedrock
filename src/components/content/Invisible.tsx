import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface InvisibleProps extends BaseProps {

    /**
     * Whether the content is invisible or not.
     */
    invisible?: boolean;

}

/**
 * Control the visibility of elements, without modifying their display, with visibility utilities.
 */
export default class invisible extends React.Component<InvisibleProps, NoProps> {

    static defaultProps = {
        invisible: true
    }

    render() {
        const css: string = mergeCSS(this.props.invisible ? 'invisible' : 'visible', this.props.className);
        const extra: any = getProps(this.props);

        return <div {...extra} className={css}>
            {this.props.children}
        </div>
    }

}
