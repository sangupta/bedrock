import * as React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size?: string;
    icon?: string;
    title?: string;
    onClick?: React.MouseEventHandler;
}

export default class Button extends React.Component<ButtonProps, any> {

    render() {
        let classes: string = 'btn';
        if (this.props.variant) {
            classes += ' btn-' + this.props.variant;
        }
        if (this.props.size) {
            classes += ' btn-' + this.props.size;
        }

        if (this.props.icon) {
            return <a href='#' className={classes} onClick={this.props.onClick}>
                <i className={this.props.icon} />&nbsp;
            {this.props.title}
            </a>;
        }

        return <a href='#' className={classes} onClick={this.props.onClick}>
            {this.props.title}
        </a>;
    }
}
