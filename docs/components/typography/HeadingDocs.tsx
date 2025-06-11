import React from 'react';
import { Heading } from '../../../src';

export default function HeadingDocs() {
    return <>
        <h1>Heading</h1>
        <p>
            All HTML headings, &lt;h1&gt; to &lt;h6&gt;, are available. Allows style augmentation 
            on a &lt;p&gt; tag too. This component provides consistent styling and accessibility 
            features for hierarchical content structure.
        </p>

        <h2>Usage</h2>

        <h3>Standard Headings</h3>
        <p>Basic heading levels from h1 to h6:</p>
        <div className='bedrock-docs-bar'>
            <Heading level={1}>Heading 1</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={2}>Heading 2</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={3}>Heading 3</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={4}>Heading 4</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={5}>Heading 5</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={6}>Heading 6</Heading>
        </div>

        <h3>Display Headings</h3>
        <p>Larger, more prominent headings with display styling:</p>
        <div className='bedrock-docs-bar'>
            <Heading level={1} displayHeading>Display 1</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={2} displayHeading>Display 2</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={3} displayHeading>Display 3</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={4} displayHeading>Display 4</Heading>
        </div>

        <h3>Headings as Paragraphs</h3>
        <p>Heading styles applied to paragraph elements for semantic flexibility:</p>
        <div className='bedrock-docs-bar'>
            <Heading level={1} asParagraph>H1 styled paragraph</Heading>
            <Heading level={2} asParagraph>H2 styled paragraph</Heading>
            <Heading level={3} asParagraph>H3 styled paragraph</Heading>
        </div>

        <h3>Custom Styling</h3>
        <p>Headings with additional CSS classes:</p>
        <div className='bedrock-docs-bar'>
            <Heading level={2} className="text-primary">Primary Colored Heading</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={3} className="text-success">Success Colored Heading</Heading>
        </div>
        <div className='bedrock-docs-bar'>
            <Heading level={4} className="text-muted">Muted Heading</Heading>
        </div>

        <h3>In Context Usage</h3>
        <p>Headings used in typical content scenarios:</p>
        <div className='bedrock-docs-bar'>
            <article>
                <Heading level={1}>Article Title</Heading>
                <Heading level={2} className="text-muted">Subtitle or tagline</Heading>
                <p>This is some content that follows the headings...</p>
                
                <Heading level={3}>Section Heading</Heading>
                <p>More content under this section...</p>
                
                <Heading level={4}>Subsection</Heading>
                <p>Detailed content in the subsection...</p>
            </article>
        </div>

        <div className='bedrock-docs-bar'>
            <div className="card">
                <div className="card-body">
                    <Heading level={5} className="card-title">Card Title as Heading</Heading>
                    <Heading level={6} className="card-subtitle mb-2 text-muted" asParagraph>Card Subtitle</Heading>
                    <p className="card-text">Card content goes here...</p>
                </div>
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Default level is 1 (h1 element)</li>
            <li>Supports all heading levels from 1 to 6</li>
            <li>Display headings provide larger, more prominent styling</li>
            <li>When asParagraph is true, renders as &lt;p&gt; element with heading styles</li>
            <li>Includes proper ARIA attributes for accessibility (role="heading", aria-level)</li>
            <li>Can be styled with additional CSS classes via className prop</li>
            <li>Maintains semantic hierarchy when used in content structure</li>
            <li>Compatible with Bootstrap typography utilities</li>
        </ul>
    </>
} 