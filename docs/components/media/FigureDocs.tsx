import React from 'react';
import { Figure } from '../../../src';

export default function FigureDocs() {
    return <>
        <h1>Figure</h1>
        <p>
            The Figure component provides a semantic way to display images with captions. 
            It combines an image with optional caption text, supporting responsive sizing 
            and rounded corners for enhanced visual presentation.
        </p>

        <h2>Usage</h2>

        <h3>Basic Figure</h3>
        <p>Simple figure with image and caption:</p>
        <div className='bedrock-docs-bar'>
            <Figure 
                imgSrc="https://via.placeholder.com/300x200/007bff/fff?text=Sample+Image" 
                alt="Sample placeholder image"
            >
                A simple figure with a caption describing the image content.
            </Figure>
        </div>

        <h3>Responsive Figure</h3>
        <p>Figure that scales responsively with container:</p>
        <div className='bedrock-docs-bar'>
            <Figure 
                imgSrc="https://via.placeholder.com/600x400/28a745/fff?text=Responsive+Image" 
                alt="Responsive placeholder image"
                responsive
            >
                This figure uses responsive sizing to adapt to different screen sizes.
            </Figure>
        </div>

        <h3>Rounded Figure</h3>
        <p>Figure with rounded corners:</p>
        <div className='bedrock-docs-bar'>
            <Figure 
                imgSrc="https://via.placeholder.com/300x300/dc3545/fff?text=Rounded+Image" 
                alt="Rounded placeholder image"
                rounded
            >
                A figure with rounded corners for a softer appearance.
            </Figure>
        </div>

        <h3>Responsive and Rounded</h3>
        <p>Figure combining both responsive sizing and rounded corners:</p>
        <div className='bedrock-docs-bar'>
            <Figure 
                imgSrc="https://via.placeholder.com/400x300/ffc107/000?text=Responsive+%26+Rounded" 
                alt="Responsive and rounded placeholder image"
                responsive
                rounded
            >
                This figure is both responsive and has rounded corners.
            </Figure>
        </div>

        <h3>Custom Caption Styling</h3>
        <p>Figure with custom-styled caption:</p>
        <div className='bedrock-docs-bar'>
            <Figure 
                imgSrc="https://via.placeholder.com/350x250/17a2b8/fff?text=Custom+Caption" 
                alt="Image with custom caption"
                captionClass="text-center text-primary fw-bold"
                responsive
            >
                This caption has custom styling applied through the captionClass prop.
            </Figure>
        </div>

        <h3>Different Caption Positions</h3>
        <p>Figures with various caption styling:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/300x200/6f42c1/fff?text=Left+Caption" 
                        alt="Left aligned caption"
                        captionClass="text-start"
                        responsive
                    >
                        Left-aligned caption text.
                    </Figure>
                </div>
                <div className="col-md-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/300x200/e83e8c/fff?text=Center+Caption" 
                        alt="Center aligned caption"
                        captionClass="text-center"
                        responsive
                    >
                        Center-aligned caption text.
                    </Figure>
                </div>
                <div className="col-md-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/300x200/fd7e14/fff?text=Right+Caption" 
                        alt="Right aligned caption"
                        captionClass="text-end"
                        responsive
                    >
                        Right-aligned caption text.
                    </Figure>
                </div>
            </div>
        </div>

        <h3>Rich Caption Content</h3>
        <p>Figure with rich HTML content in caption:</p>
        <div className='bedrock-docs-bar'>
            <Figure 
                imgSrc="https://via.placeholder.com/500x300/20c997/fff?text=Rich+Content" 
                alt="Image with rich caption content"
                responsive
                captionClass="text-center"
            >
                <strong>Figure 1:</strong> A detailed caption with <em>emphasis</em> and 
                <a href="#link" className="ms-1">additional links</a> for more context.
            </Figure>
        </div>

        <h3>Gallery Layout</h3>
        <p>Multiple figures in a gallery-style layout:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/250x200/007bff/fff?text=Photo+1" 
                        alt="Gallery photo 1"
                        responsive
                        rounded
                        captionClass="text-center small"
                    >
                        Gallery Image 1
                    </Figure>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/250x200/28a745/fff?text=Photo+2" 
                        alt="Gallery photo 2"
                        responsive
                        rounded
                        captionClass="text-center small"
                    >
                        Gallery Image 2
                    </Figure>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/250x200/dc3545/fff?text=Photo+3" 
                        alt="Gallery photo 3"
                        responsive
                        rounded
                        captionClass="text-center small"
                    >
                        Gallery Image 3
                    </Figure>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Figure 
                        imgSrc="https://via.placeholder.com/250x200/ffc107/000?text=Photo+4" 
                        alt="Gallery photo 4"
                        responsive
                        rounded
                        captionClass="text-center small"
                    >
                        Gallery Image 4
                    </Figure>
                </div>
            </div>
        </div>

        <h3>Article Integration</h3>
        <p>Figure used within article content:</p>
        <div className='bedrock-docs-bar'>
            <article className="p-3">
                <h4>Understanding Web Components</h4>
                <p>
                    Web components are a suite of different technologies allowing you to create 
                    reusable custom elements with their functionality encapsulated away from the 
                    rest of your code.
                </p>
                <Figure 
                    imgSrc="https://via.placeholder.com/600x300/6c757d/fff?text=Web+Components+Diagram" 
                    alt="Web components architecture diagram"
                    responsive
                    captionClass="text-center text-muted"
                >
                    Figure 1: The architecture of modern web components showing the relationship 
                    between custom elements, shadow DOM, and HTML templates.
                </Figure>
                <p>
                    The diagram above illustrates how these technologies work together to provide 
                    a powerful framework for building reusable UI components.
                </p>
            </article>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;figure&gt; element with &lt;img&gt; and &lt;figcaption&gt;</li>
            <li>Requires imgSrc prop to specify the image source URL</li>
            <li>When responsive is true, applies img-fluid class for responsive scaling</li>
            <li>When rounded is true, applies rounded class for rounded corners</li>
            <li>Caption content is passed as children and rendered in figcaption element</li>
            <li>captionClass prop allows custom styling of the caption</li>
            <li>Default role is 'img' for accessibility</li>
            <li>Supports all standard img element attributes via props</li>
            <li>Maintains semantic structure for screen readers and SEO</li>
            <li>Compatible with Bootstrap's figure and image utility classes</li>
        </ul>
    </>
} 