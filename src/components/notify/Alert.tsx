import * as React from 'react';
import BedrockUtils from './../../BedrockUtils';
import { BaseProps } from './../../BedrockUtils';

interface AlertProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Is the alert open or hidden?
     */
    closed?: boolean;

    /**
     * Should the alert show the cross button to allow self-close. Note that
     * this does not remove the component from React tree, only hides the
     * content rendering. An event `onClose` is raised that the parent container
     * should catch and remove the element from the React tree.
     */
    closeable?: boolean;

    /**
     * Function called when the alert is closed via the `closeable` prop.
     */
    onClose?: Function;
}

interface AlertState {
    closed: boolean
}

export default class Alert extends React.Component<AlertProps, AlertState> {

    constructor(props) {
        super(props);

        this.state = {
            closed: this.props.closed
        }
    }

    static defaultProps = {
        variant: 'primary',
        closed: false,
        closeable: false
    }

    closeAlert = () => {
        this.setState({ closed: true });
        BedrockUtils.invoke(this.props.onClose);
    }

    getCrossButton = () => {
        if (!this.props.closeable) {
            return null;
        }

        return <button type="button" className="close" aria-label="Close" onClick={this.closeAlert}>
            <span aria-hidden="true">&times;</span>
        </button>;
    }

    render() {
        if (this.state.closed) {
            return null;
        }

        return <div className={'alert alert-' + this.props.variant} role="alert">
            {this.props.children}
            {this.getCrossButton()}
        </div>;
    }

}
