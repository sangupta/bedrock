import * as React from 'react';

interface KeyboardProps {
    value: string;
    variant?: 'light' | 'dark';
}

export default class Keyboard extends React.Component<KeyboardProps, any> {

    static defaultProps = {
        value: '',
        variant: 'dark'
    }

    render() {
        return <kbd className={'kbd-' + this.props.variant}>{this.props.value}</kbd>;
    }
}
