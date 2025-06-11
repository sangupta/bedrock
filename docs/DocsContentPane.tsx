import React from 'react';
import { BedrockComponent } from './BedrockComponents';

export interface DocsContentPaneProps {
    component?: BedrockComponent;
}

export default function DocsContentPane(props: DocsContentPaneProps) {
    const { component } = props;
    const Element = component?.component || 'div';

    return <main>
        <Element />
    </main>
}
