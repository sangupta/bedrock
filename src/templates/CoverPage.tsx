import * as React from 'react';
import { mergeCSS, getProps, BaseProps, NoProps } from './../BedrockUtils';

/**
 * A simple cover page template based on Bootstrap
 * example at https://getbootstrap.com/docs/4.3/examples/cover/.
 * 
 * If no children are provided to the component, nothing shall
 * be rendered.
 * 
 * If only a single child is provided, header and footer are assumed to
 * be empty `div`s. If two child elements are provided, the footer is assumed
 * to be empty `div`. If more than three child elements are provided, the first
 * three elements are used as `header`, `main`, and `footer` respectively. 
 * Other child elements are ignored.
 */
export default class CoverPage extends React.Component<BaseProps, NoProps> {

    render() {
        const children: Array<any> = React.Children.toArray(this.props.children);
        if (!children || children.length === 0) {
            return null;
        }

        let header = null, main = null, footer = null;
        if (children.length === 1) {
            header = <div />;
            main = children[0];
            footer = <div />;
        } else if (children.length === 2) {
            header = children[0];
            main = children[1];
            footer = <div />;
        } else {
            header = children[0];
            main = children[1];
            footer = children[2];
        }

        const kids = [];

        // header first
        let headerClass: string = mergeCSS(header.props.className, 'mb-auto');
        header = React.cloneElement(header, { className: headerClass, key : 'header' }, header.props.children);
        kids.push(header);

        // main container
        kids.push(main);

        // footer next
        let footerClass: string = mergeCSS(footer.props.className, 'mt-auto');
        footer = React.cloneElement(footer, { className: footerClass, key : 'footer' }, footer.props.children);
        kids.push(footer);

        const css:string = mergeCSS('cover-container d-flex w-100 h-100 p-3 mx-auto flex-column', this.props.className);
        const extra:any = getProps(this.props);

        return <div {...extra} className={css}>
            {kids}
        </div>;
    }
}
