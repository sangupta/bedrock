import React, { Children } from 'react';
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';

export interface LabelProps extends BaseProps {
    /**
     * The field name for which this label is being provided.
     */
    for: string;
}

/**
 * Label a form field.
 * 
 * @author sangupta
 */
export default class Label extends React.Component<LabelProps> {

    render() {
        const { className, children } = this.props;
        const htmlFor = this.props.for;
        const css: string = buildCss('form-label', className);
        return <label htmlFor={htmlFor} className={css}>{children}</label>
    }

}
