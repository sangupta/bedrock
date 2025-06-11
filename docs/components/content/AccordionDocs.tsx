import React from 'react';
import { Accordion, AccordionItem } from '../../../src';

export default function AccordionDocs() {
    return <>
        <h1>Accordion</h1>
        <p>
            A vertically stacked set of panels, only one of which can be expanded at a time.
        </p>
        <h2>Usage</h2>
        <h3>Using Accordion Item</h3>
        <Accordion source={[]}>
            <AccordionItem title="Panel 1">
                <p>
                    This is the content of panel 1.
                </p>
            </AccordionItem>
            <AccordionItem title="Panel 2">
                <p>
                    This is the content of panel 2.
                </p>
            </AccordionItem>
            <AccordionItem title="Panel 3">
                <p>
                    This is the content of panel 3.
                </p>
            </AccordionItem>
        </Accordion>
    </>
}
