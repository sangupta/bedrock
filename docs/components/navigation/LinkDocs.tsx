import React from 'react';
import { Link } from '../../../src';

export default function LinkDocs() {
    return <>
        <h1>Link</h1>
        <p>
            The anchor or simple hyperlink component provides enhanced styling and 
            functionality for navigation links. It supports various color variants 
            and active states while maintaining semantic anchor element behavior.
        </p>

        <h2>Usage</h2>

        <h3>Basic Links</h3>
        <p>Simple links with default styling:</p>
        <div className='bedrock-docs-bar'>
            <Link href="#basic">Basic Link</Link>
        </div>

        <div className='bedrock-docs-bar'>
            <Link href="https://github.com/sangupta/bedrock" target="_blank" rel="noopener noreferrer">
                External Link to GitHub
            </Link>
        </div>

        <h3>Different Variants</h3>
        <p>Links with different color variants:</p>
        <div className='bedrock-docs-bar'>
            <Link variant="primary" href="#primary">Primary Link</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="secondary" href="#secondary">Secondary Link</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="success" href="#success">Success Link</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="danger" href="#danger">Danger Link</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="warning" href="#warning">Warning Link</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="info" href="#info">Info Link</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="light" href="#light">Light Link</Link>
        </div>
        <div className='bedrock-docs-bar' style={{backgroundColor: '#333', padding: '1rem'}}>
            <Link variant="light" href="#light-dark">Light Link on Dark Background</Link>
        </div>
        <div className='bedrock-docs-bar'>
            <Link variant="dark" href="#dark">Dark Link</Link>
        </div>

        <h3>Active State Links</h3>
        <p>Links with active state for current page indication:</p>
        <div className='bedrock-docs-bar'>
            <Link href="#normal" variant="primary">Normal Link</Link>
            {' | '}
            <Link href="#active" variant="primary" active>Active Link</Link>
        </div>

        <div className='bedrock-docs-bar'>
            <Link href="#normal-success" variant="success">Normal Success Link</Link>
            {' | '}
            <Link href="#active-success" variant="success" active>Active Success Link</Link>
        </div>

        <h3>Navigation Menu</h3>
        <p>Links used in navigation contexts:</p>
        <div className='bedrock-docs-bar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link href="#home" className="navbar-brand">Brand</Link>
                    <div className="navbar-nav">
                        <Link href="#home" className="nav-link" active>Home</Link>
                        <Link href="#about" className="nav-link">About</Link>
                        <Link href="#services" className="nav-link">Services</Link>
                        <Link href="#contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>

        <h3>Breadcrumb Navigation</h3>
        <p>Links in breadcrumb navigation:</p>
        <div className='bedrock-docs-bar'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="#home" variant="primary">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="#components" variant="primary">Components</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="#navigation" variant="primary">Navigation</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Link</li>
                </ol>
            </nav>
        </div>

        <h3>Inline Text Links</h3>
        <p>Links within text content:</p>
        <div className='bedrock-docs-bar'>
            <p>
                This is a paragraph with an <Link href="#inline" variant="primary">inline link</Link> that 
                demonstrates how links work within text content. You can also have 
                <Link href="#multiple" variant="success"> multiple </Link>
                <Link href="#links" variant="danger">links</Link> in the same paragraph.
            </p>
        </div>

        <h3>Button-style Links</h3>
        <p>Links styled as buttons for call-to-action purposes:</p>
        <div className='bedrock-docs-bar'>
            <Link href="#action" className="btn btn-primary me-2">Primary Action</Link>
            <Link href="#secondary" className="btn btn-outline-secondary me-2">Secondary Action</Link>
            <Link href="#success" className="btn btn-success">Success Action</Link>
        </div>

        <h3>Card Links</h3>
        <p>Links used within card components:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up 
                                the bulk of the card's content.
                            </p>
                            <Link href="#card1" className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="#card2" variant="dark">Linked Card Title</Link>
                            </h5>
                            <p className="card-text">
                                Card with a linked title. The entire title acts as a navigation link.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3>Footer Links</h3>
        <p>Links in footer sections:</p>
        <div className='bedrock-docs-bar'>
            <footer className="bg-light p-4">
                <div className="row">
                    <div className="col-md-3">
                        <h6>Company</h6>
                        <ul className="list-unstyled">
                            <li><Link href="#about" variant="secondary">About Us</Link></li>
                            <li><Link href="#careers" variant="secondary">Careers</Link></li>
                            <li><Link href="#contact" variant="secondary">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>Products</h6>
                        <ul className="list-unstyled">
                            <li><Link href="#features" variant="secondary">Features</Link></li>
                            <li><Link href="#pricing" variant="secondary">Pricing</Link></li>
                            <li><Link href="#support" variant="secondary">Support</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>Resources</h6>
                        <ul className="list-unstyled">
                            <li><Link href="#docs" variant="secondary">Documentation</Link></li>
                            <li><Link href="#blog" variant="secondary">Blog</Link></li>
                            <li><Link href="#community" variant="secondary">Community</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

        <h3>Custom Styled Links</h3>
        <p>Links with additional custom styling:</p>
        <div className='bedrock-docs-bar'>
            <Link href="#custom1" variant="primary" className="text-decoration-none fw-bold">
                Bold Link Without Underline
            </Link>
        </div>

        <div className='bedrock-docs-bar'>
            <Link href="#custom2" variant="success" className="border border-success rounded p-2">
                Bordered Link
            </Link>
        </div>

        <div className='bedrock-docs-bar'>
            <Link href="#custom3" variant="warning" className="badge bg-warning text-dark">
                Badge Link
            </Link>
        </div>

        <h3>Disabled Links</h3>
        <p>Links that appear disabled for inactive navigation:</p>
        <div className='bedrock-docs-bar'>
            <Link href="#disabled1" className="disabled" aria-disabled="true">Disabled Link</Link>
            {' | '}
            <Link href="#disabled2" className="text-muted" style={{pointerEvents: 'none'}}>
                Muted Disabled Link
            </Link>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;a&gt; element for proper navigation semantics</li>
            <li>Default variant is 'primary' with blue styling</li>
            <li>Default href is '#' if not specified</li>
            <li>Active state adds distinctive styling to indicate current page/section</li>
            <li>Supports all standard anchor element attributes (target, rel, etc.)</li>
            <li>Can be styled with additional CSS classes via className prop</li>
            <li>Works seamlessly with Bootstrap navigation components</li>
            <li>Maintains accessibility features like keyboard navigation and screen reader support</li>
            <li>Color variants follow Bootstrap's color system for consistency</li>
            <li>Compatible with external links, internal navigation, and anchor links</li>
        </ul>
    </>
} 