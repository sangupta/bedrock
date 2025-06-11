/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import React from 'react';
import { BedrockComponent } from './BedrockComponents';
import ReactDOM from 'react-dom/client';
import DocsHeader from './DocsHeader';
import DocsSidebar from './DocsSidebar';
import DocsContentPane from './DocsContentPane';
import AccordionDocs from './components/content/AccordionDocs';



const DocsMain = () => {
    const [selectedComponent, setSelectedComponent] = React.useState<BedrockComponent | undefined>(undefined);

    const handleSelect = (component: BedrockComponent): void => {
        setSelectedComponent(component);
    }

    return <>
        <DocsHeader />
        <div className='content-wrapper'>
            <DocsSidebar onSelect={handleSelect} />
            <DocsContentPane component={selectedComponent} />
        </div>
    </>
}

// render the playground
const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<DocsMain />);
}
