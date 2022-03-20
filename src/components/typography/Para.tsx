import React from 'react';
import { buildCss } from '../../Utils';

export default class Para extends React.PureComponent<BaseProps> {

    render(): React.ReactNode {
        const { className, children, ...extraProps } = this.props;
        const css = buildCss(className);

        return <p className={css} {...extraProps}>{children}</p>
    }

}
