import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface AccordionProps extends BaseProps {

    selected?: number;

}

/**
 * Accordion component allows a single child component to be open
 * at a given time. Clicking the title of another panel within
 * the accordion will hide the current panel, and open the clicked
 * panel.
 */
export default class Accordion extends React.Component<AccordionProps, any> {

    render() {
        const { children } = this.props;
        if (!children || children.length === 0) {
            return null;
        }

        const css: string = mergeCSS('accordion', this.props.className);
        const extra: any = getProps(this.props);

        return <div className={css} {...extra}>
            {this.props.children}
        </div>
    }

}
