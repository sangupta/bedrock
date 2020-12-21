import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface HBoxProps extends BaseProps {

    /**
     * Horizontal justification to use when aligning elements inside
     */
    halign?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

    /**
     * Vertical justification to use when aligning items
     */
    valign?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';

    /**
     * Reverse the arrangement of items inside this container
     */
    reverse?: boolean;

}

/**
 * Horizontal box container. All child elements are arranged in a horizontal
 * direction starting from left to right (default mode).
 */
export default class HBox extends React.Component<HBoxProps, NoProps> {

    static defaultProps = {
        justify: 'start',
        reverse: false
    };

    render() {
        const css: string = mergeCSS('d-flex', 'flex-row', {
            'flex-row-reverse': this.props.reverse,
            'justify-content-': this.props.halign,
            'align-items-': this.props.valign
        }, this.props.className);
        const extra: any = getProps(this.props);

        return <div {...extra} className={css}>
            {this.props.children}
        </div>;
    }
}
