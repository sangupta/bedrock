import React from 'react';
import { BaseProps, ComponentSize } from '../../types';
import { buildCss } from '../../Utils';

export interface InputGroupProps extends BaseProps {
    /**
     * Size of the input group
     */
    size?: ComponentSize;
}

export default class InputGroup extends React.Component<InputGroupProps> {

    static defaultProps = {
        size: 'default'
    }

    render() {
        const { className, children, size } = this.props;
        const css = buildCss('input-group', className, {
            'input-group-sm': size === 'small',
            'input-group-lg': size === 'large'
        });

        return <div className={css}>{children}</div>
    }

}
