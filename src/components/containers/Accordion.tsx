import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

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
        const css: string = mergeCSS('bedrock-accordion', this.props.className);

        return <div className={css}>
            {this.props.children}
        </div>;
    }

}
