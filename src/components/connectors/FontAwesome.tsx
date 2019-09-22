import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from '../../BedrockUtils';

interface FontAwesomeProps extends BaseProps {
    /**
     * The icon string to use from FontAwesome.
     */
    icon: string;
}

/**
 * Useful to render FontAwesome icons.
 * 
 * Ensure that you have included the FontAwesome CSS in your
 * page for this to work correctly.
 */
export default class FontAwesome extends React.Component<FontAwesomeProps, NoProps> {

    render() {
        const css = mergeCSS('fa-icon', this.props.icon, this.props.className);
        const extra:any = getProps(this.props);

        return <i {...extra} className={css}>{this.props.children}</i>
    }

}
