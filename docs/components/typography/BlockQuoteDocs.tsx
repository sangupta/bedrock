import React from 'react';
import { BlockQuote } from '../../../src';

export default function BlockQuoteDocs() {
    return <>
        <h1>BlockQuote</h1>
        <p>
            The blockquote component is used for quoting blocks of content from another source. 
            It provides semantic meaning and distinctive styling to set quoted content apart 
            from regular text.
        </p>

        <h2>Usage</h2>

        <h3>Basic BlockQuote</h3>
        <p>Simple blockquote with default styling:</p>
        <div className='bedrock-docs-bar'>
            <BlockQuote>
                The only way to do great work is to love what you do.
            </BlockQuote>
        </div>

        <h3>BlockQuote with Citation</h3>
        <p>Blockquotes with proper attribution:</p>
        <div className='bedrock-docs-bar'>
            <BlockQuote>
                <p>The future belongs to those who believe in the beauty of their dreams.</p>
                <footer className="blockquote-footer">
                    Eleanor Roosevelt
                </footer>
            </BlockQuote>
        </div>

        <div className='bedrock-docs-bar'>
            <BlockQuote>
                <p>Innovation distinguishes between a leader and a follower.</p>
                <footer className="blockquote-footer">
                    Steve Jobs in <cite title="Interview">Various Interviews</cite>
                </footer>
            </BlockQuote>
        </div>

        <h3>Multi-paragraph BlockQuote</h3>
        <p>Blockquotes containing multiple paragraphs:</p>
        <div className='bedrock-docs-bar'>
            <BlockQuote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere 
                    erat a ante. Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium.
                </p>
                <p>
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo.
                </p>
                <footer className="blockquote-footer">
                    Classical Latin text from <cite title="De Finibus">De Finibus Bonorum et Malorum</cite>
                </footer>
            </BlockQuote>
        </div>

        <h3>Styled BlockQuotes</h3>
        <p>Blockquotes with additional styling:</p>
        <div className='bedrock-docs-bar'>
            <BlockQuote className="text-center">
                <p>Design is not just what it looks like and feels like. Design is how it works.</p>
                <footer className="blockquote-footer">
                    Steve Jobs
                </footer>
            </BlockQuote>
        </div>

        <div className='bedrock-docs-bar'>
            <BlockQuote className="border-start border-primary border-3 ps-3">
                <p className="text-primary">
                    The best way to predict the future is to create it.
                </p>
                <footer className="blockquote-footer text-primary">
                    Peter Drucker
                </footer>
            </BlockQuote>
        </div>

        <h3>BlockQuote in Context</h3>
        <p>Blockquotes used within articles and content:</p>
        <div className='bedrock-docs-bar'>
            <article>
                <h4>The Philosophy of Design</h4>
                <p>
                    Throughout history, great designers have emphasized the importance of 
                    simplicity and functionality in their work. This principle is beautifully 
                    captured in the following quote:
                </p>
                <BlockQuote>
                    <p>Simplicity is the ultimate sophistication.</p>
                    <footer className="blockquote-footer">
                        Leonardo da Vinci
                    </footer>
                </BlockQuote>
                <p>
                    This philosophy continues to influence modern design practices, where 
                    the focus is on creating clean, intuitive user experiences.
                </p>
            </article>
        </div>

        <h3>Different Sizes and Styles</h3>
        <p>Blockquotes with various size and style modifications:</p>
        <div className='bedrock-docs-bar'>
            <BlockQuote className="fs-6">
                <p>A small blockquote with reduced font size.</p>
                <footer className="blockquote-footer">
                    Small Quote Example
                </footer>
            </BlockQuote>
        </div>

        <div className='bedrock-docs-bar'>
            <BlockQuote className="fs-4 fst-italic">
                <p>A larger, italicized blockquote that stands out prominently.</p>
                <footer className="blockquote-footer">
                    Prominent Quote Example
                </footer>
            </BlockQuote>
        </div>

        <h3>Testimonials</h3>
        <p>Using blockquotes for customer testimonials:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-6">
                    <BlockQuote>
                        <p>
                            This product exceeded my expectations. The quality and attention 
                            to detail are remarkable.
                        </p>
                        <footer className="blockquote-footer">
                            Sarah Johnson, <cite title="Customer">Verified Customer</cite>
                        </footer>
                    </BlockQuote>
                </div>
                <div className="col-md-6">
                    <BlockQuote>
                        <p>
                            Outstanding service and support. I would definitely recommend 
                            this to others.
                        </p>
                        <footer className="blockquote-footer">
                            Michael Chen, <cite title="Customer">Happy Customer</cite>
                        </footer>
                    </BlockQuote>
                </div>
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;blockquote&gt; element for proper semantics</li>
            <li>Includes default Bootstrap blockquote styling with distinctive appearance</li>
            <li>Supports nested elements like paragraphs, footers, and citations</li>
            <li>Can be styled with additional CSS classes via className prop</li>
            <li>Works well with Bootstrap typography and utility classes</li>
            <li>Maintains proper semantic structure for accessibility and SEO</li>
            <li>Supports all standard HTML blockquote attributes</li>
            <li>Perfect for quotes, testimonials, and cited content</li>
        </ul>
    </>
} 