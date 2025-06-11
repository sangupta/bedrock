import React from 'react';
import { Para } from '../../../src';

export default function ParaDocs() {
    return <>
        <h1>Para</h1>
        <p>
            The paragraph component provides enhanced styling and formatting options 
            for text content. It supports various text styling variants, alignment options, 
            wrapping modes, and text transformations.
        </p>

        <h2>Usage</h2>

        <h3>Basic Paragraphs</h3>
        <p>Simple paragraphs with default styling:</p>
        <div className='bedrock-docs-bar'>
            <Para>
                This is a basic paragraph with default styling. It demonstrates the normal 
                text flow and appearance of the Para component.
            </Para>
        </div>

        <h3>Different Variants</h3>
        <p>Paragraphs with different color variants:</p>
        <div className='bedrock-docs-bar'>
            <Para variant="primary">This is a primary variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="secondary">This is a secondary variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="success">This is a success variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="danger">This is a danger variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="warning">This is a warning variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="info">This is an info variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="light">This is a light variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar' style={{backgroundColor: '#333', padding: '1rem'}}>
            <Para variant="light">Light text on dark background.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para variant="dark">This is a dark variant paragraph.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para className="text-muted">This is a muted paragraph using CSS class.</Para>
        </div>

        <h3>Lead Paragraphs</h3>
        <p>Prominent paragraphs that stand out from regular text:</p>
        <div className='bedrock-docs-bar'>
            <Para leadPara>
                This is a lead paragraph. It has larger text and stands out from 
                regular paragraphs, making it perfect for introductions or important statements.
            </Para>
            <Para>
                This is a regular paragraph that follows the lead paragraph. Notice the 
                difference in size and prominence.
            </Para>
        </div>

        <h3>Text Alignment</h3>
        <p>Paragraphs with different text alignment options:</p>
        <div className='bedrock-docs-bar'>
            <Para textAlign="start">This paragraph is aligned to the start (left in LTR languages).</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para textAlign="center">This paragraph is center-aligned.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para textAlign="end">This paragraph is aligned to the end (right in LTR languages).</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para className="text-justify">
                This paragraph is justified using CSS class. The text is aligned to both the left and right margins, 
                creating even edges on both sides. This can make text appear more formal and structured.
            </Para>
        </div>

        <h3>Text Wrapping</h3>
        <p>Different text wrapping behaviors:</p>
        <div className='bedrock-docs-bar'>
            <Para wrapMode="wrap">
                This paragraph uses wrap mode. Long lines of text will wrap normally to the next line 
                when they reach the container's edge.
            </Para>
        </div>
        <div className='bedrock-docs-bar' style={{width: '200px', border: '1px solid #ccc', padding: '10px'}}>
            <Para wrapMode="no-wrap">
                This paragraph uses no-wrap mode and will not wrap to the next line even in a narrow container.
            </Para>
        </div>

        <h3>Text Transformations</h3>
        <p>Various text transformation options:</p>
        <div className='bedrock-docs-bar'>
            <Para transform="lowercase">THIS TEXT WILL BE DISPLAYED IN LOWERCASE.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para transform="uppercase">this text will be displayed in uppercase.</Para>
        </div>
        <div className='bedrock-docs-bar'>
            <Para transform="capitalize">this text will have each word capitalized.</Para>
        </div>

        <h3>Combined Styling</h3>
        <p>Paragraphs combining multiple styling options:</p>
        <div className='bedrock-docs-bar'>
            <Para leadPara variant="primary" textAlign="center" transform="uppercase">
                Important Announcement
            </Para>
            <Para variant="secondary" textAlign="center">
                This combines lead paragraph styling with primary color, center alignment, and uppercase transformation.
            </Para>
        </div>

        <h3>In Context Usage</h3>
        <p>Paragraphs used in typical content scenarios:</p>
        <div className='bedrock-docs-bar'>
            <article>
                <Para leadPara variant="dark">
                    Welcome to our comprehensive guide on using the Para component effectively 
                    in your applications.
                </Para>
                <Para>
                    The Para component offers extensive customization options for text styling. 
                    You can control appearance, alignment, wrapping, and transformation to create 
                    the perfect text presentation for your content.
                </Para>
                <Para className="text-muted" textAlign="end">
                    — Documentation Team
                </Para>
            </article>
        </div>

        <div className='bedrock-docs-bar'>
            <div className="alert alert-info">
                <Para variant="info" className="mb-0">
                    <strong>Tip:</strong> Use lead paragraphs for introductions and muted variants 
                    for less important information.
                </Para>
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Default variant is 'primary' with standard text color</li>
            <li>Lead paragraphs have larger font size and weight for emphasis</li>
            <li>Text alignment affects the horizontal positioning of text within the paragraph</li>
            <li>Wrap modes control how text flows when it reaches container boundaries</li>
            <li>Text transformations are applied via CSS and don't modify the actual content</li>
            <li>All styling can be combined for complex text presentation needs</li>
            <li>Compatible with standard HTML paragraph attributes and events</li>
            <li>Supports Bootstrap text utility classes through className prop</li>
        </ul>
    </>
} 