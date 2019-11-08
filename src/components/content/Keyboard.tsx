import * as React from 'react';
import { BaseProps, getProps, mergeCSS } from './../../BedrockUtils';

interface KeyboardProps extends BaseProps {
    value: string;
    variant?: 'light' | 'dark';

    onClick?: (e: React.MouseEvent, eventID: string) => void;
}

export default class Keyboard extends React.Component<KeyboardProps, any> {

    static defaultProps = {
        value: '',
        variant: 'dark'
    }

    handleClick = (e: React.MouseEvent): void => {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    render() {
        const extra: any = getProps(this.props);

        if (this.props.onClick) {
            extra.onClick = this.handleClick;
        }

        return <kbd {...extra} className={mergeCSS({ 'kbd-': this.props.variant, 'cursor-pointer': this.props.onClick ? true : false }, this.props.className)}>
            {this.props.value}
        </kbd>;
    }

}
