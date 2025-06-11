import React from 'react';
import { Code } from '../../../src';

export default function CodeDocs() {
    return <>
        <h1>Code</h1>
        <p>
            The code component is used for displaying inline code snippets and programming 
            elements within text. It provides semantic meaning and distinctive styling to 
            distinguish code from regular text content.
        </p>

        <h2>Usage</h2>

        <h3>Basic Inline Code</h3>
        <p>Simple inline code within text:</p>
        <div className='bedrock-docs-bar'>
            <p>
                To install the package, run <Code>npm install bedrock</Code> in your terminal.
            </p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>
                The <Code>useState</Code> hook is a fundamental part of React development.
            </p>
        </div>

        <h3>Code with Different Content Types</h3>
        <p>Various types of code content:</p>
        <div className='bedrock-docs-bar'>
            <p>HTML elements: <Code>&lt;div className="container"&gt;</Code></p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>CSS properties: <Code>background-color: #f8f9fa;</Code></p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>JavaScript functions: <Code>console.log('Hello World');</Code></p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>File paths: <Code>/src/components/typography/Code.tsx</Code></p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>Command line: <Code>git commit -m "Initial commit"</Code></p>
        </div>

        <h3>Styled Code Elements</h3>
        <p>Code elements with additional styling:</p>
        <div className='bedrock-docs-bar'>
            <p>
                Error message: <Code className="text-danger">TypeError: Cannot read property 'length' of undefined</Code>
            </p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>
                Success message: <Code className="text-success bg-success bg-opacity-10 p-1 rounded">Build completed successfully!</Code>
            </p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>
                Warning: <Code className="text-warning bg-warning bg-opacity-10 p-1 rounded">Deprecated API usage detected</Code>
            </p>
        </div>

        <h3>Code in Lists</h3>
        <p>Code elements within list contexts:</p>
        <div className='bedrock-docs-bar'>
            <h5>Installation Steps:</h5>
            <ol>
                <li>Run <Code>npm init -y</Code> to initialize the project</li>
                <li>Install dependencies with <Code>npm install react react-dom</Code></li>
                <li>Create your first component: <Code>touch src/App.js</Code></li>
                <li>Start the development server: <Code>npm start</Code></li>
            </ol>
        </div>

        <div className='bedrock-docs-bar'>
            <h5>Common React Hooks:</h5>
            <ul>
                <li><Code>useState</Code> - for managing component state</li>
                <li><Code>useEffect</Code> - for side effects and lifecycle</li>
                <li><Code>useContext</Code> - for consuming context values</li>
                <li><Code>useReducer</Code> - for complex state management</li>
            </ul>
        </div>

        <h3>API Documentation Style</h3>
        <p>Code elements in API documentation format:</p>
        <div className='bedrock-docs-bar'>
            <div className="border rounded p-3">
                <h6>Function Signature:</h6>
                <p><Code>buildCss(className?: string, ...conditions: object[]): string</Code></p>
                
                <h6>Parameters:</h6>
                <ul>
                    <li><Code>className</Code> (optional): Base CSS class name</li>
                    <li><Code>conditions</Code>: Additional conditional classes</li>
                </ul>
                
                <h6>Returns:</h6>
                <p>A <Code>string</Code> containing the combined CSS classes</p>
            </div>
        </div>

        <h3>Code in Tables</h3>
        <p>Code elements within tabular data:</p>
        <div className='bedrock-docs-bar'>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Code>variant</Code></td>
                        <td><Code>Variant</Code></td>
                        <td><Code>'primary'</Code></td>
                        <td>Color variant to use</td>
                    </tr>
                    <tr>
                        <td><Code>size</Code></td>
                        <td><Code>ComponentSize</Code></td>
                        <td><Code>undefined</Code></td>
                        <td>Size of the component</td>
                    </tr>
                    <tr>
                        <td><Code>disabled</Code></td>
                        <td><Code>boolean</Code></td>
                        <td><Code>false</Code></td>
                        <td>Whether component is disabled</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Code with Special Characters</h3>
        <p>Handling special characters and symbols:</p>
        <div className='bedrock-docs-bar'>
            <p>Regular expressions: <Code>{"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/"}</Code></p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>Template literals: <Code>Hello, $&#123;name&#125;! Welcome to our app.</Code></p>
        </div>

        <div className='bedrock-docs-bar'>
            <p>Object destructuring: <Code>const &#123; name, age, email &#125; = user;</Code></p>
        </div>

        <h3>Keyboard Shortcuts</h3>
        <p>Using code elements for keyboard shortcuts:</p>
        <div className='bedrock-docs-bar'>
            <p>
                Save file: <Code className="border border-secondary rounded px-1">Ctrl</Code> + <Code className="border border-secondary rounded px-1">S</Code>
            </p>
            <p>
                Copy: <Code className="border border-secondary rounded px-1">Ctrl</Code> + <Code className="border border-secondary rounded px-1">C</Code>
            </p>
            <p>
                Paste: <Code className="border border-secondary rounded px-1">Ctrl</Code> + <Code className="border border-secondary rounded px-1">V</Code>
            </p>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;code&gt; element for proper semantics</li>
            <li>Includes default monospace font styling for code readability</li>
            <li>Provides subtle background highlighting to distinguish from regular text</li>
            <li>Can be styled with additional CSS classes via className prop</li>
            <li>Works seamlessly within paragraphs, lists, and other text content</li>
            <li>Maintains proper semantic structure for accessibility and SEO</li>
            <li>Supports all standard HTML code element attributes</li>
            <li>Perfect for inline code snippets, variable names, and technical terms</li>
            <li>Preserves whitespace and formatting within the code content</li>
        </ul>
    </>
} 