import React, { Children } from 'react';
import { buildCss } from '../../Utils';

interface AccordionProps extends BaseProps {
    flushed?: boolean;
    selectedIndex?: number;
    source: Array<AccordionPaneData>
}

export default class Accordion extends React.Component<AccordionProps> {

    static defaultProps = {
        flushed: false
    }

    render() {
        const { className, flushed, selectedIndex = 0, source, children } = this.props;

        const css: string = buildCss('accordion', {
            'flushed': flushed
        }, className);

        const numChildren = React.Children.count(children);
        if (numChildren > 0) {
            return <div className={css}>
                {children}
            </div>
        }

        return source.map((data, index) => {
            return <AccordionItem title={data.title} isOpen={index === selectedIndex}>{data.component}</AccordionItem>
        });
    }

}

interface AccordionItemProps extends BaseProps {
    title: string;
    isOpen?: boolean;
}

export class AccordionItem extends React.Component<AccordionItemProps> {

    static defaultProps = {
        isOpen: false
    }

    renderBody(isOpen: boolean, children: React.ReactNode) {
        if (!isOpen) {
            return null;
        }

        return <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
            <div className="accordion-body">
                {children}
            </div>
        </div>
    }

    render() {
        const { title, className, isOpen, children } = this.props;
        const css: string = buildCss('accordion-item', className);

        return <div className={css}>
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" aria-controls="collapseOne">
                    {title}
                </button>
            </h2>
            {this.renderBody(isOpen, children)}
        </div>
    }

}
