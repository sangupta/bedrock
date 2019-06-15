import * as React from 'react';
import { BaseProps } from '../../BedrockUtils';

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
export default class FontAwesome extends React.Component<FontAwesomeProps, any> {
    render() {
        let clazz: string = 'fa-icon ' + this.props.icon;
        return <i className={clazz}>{this.props.children}</i>
    }
}
