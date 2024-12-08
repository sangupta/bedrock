import React from 'react';
import { BaseProps, Variant } from '../../types';
import { buildCss } from '../../Utils';

export interface PulsarProps extends BaseProps {
    ariaLabel?: string;
    variant?: Variant;
}

export default class Pulsar extends React.Component<PulsarProps> {

    static defaultProps = {
        variant: 'primary'
    }

    render() {
        const { variant, className, ariaLabel } = this.props;
        const css = buildCss('pulsar', 'text-' + variant, className);
        return <div className={css} role='status'>
            {ariaLabel ? <span className="visually-hidden">{ariaLabel}</span> : null}
        </div>
    }

}
