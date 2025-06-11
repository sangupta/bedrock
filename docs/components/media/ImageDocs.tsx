import React from 'react';
import { Image } from '../../../src';

export default function ImageDocs() {
    return <>
        <h1>Image</h1>
        <p>
            The Image component provides enhanced functionality for displaying images with 
            built-in support for responsive sizing, thumbnail styling, and rounded corners. 
            It extends the standard HTML img element with Bootstrap styling capabilities.
        </p>

        <h2>Usage</h2>

        <h3>Basic Image</h3>
        <p>Simple image with default styling:</p>
        <div className='bedrock-docs-bar'>
            <Image 
                src="https://via.placeholder.com/300x200/007bff/fff?text=Basic+Image" 
                alt="Basic placeholder image"
            />
        </div>

        <h3>Responsive Image</h3>
        <p>Image that scales responsively with container:</p>
        <div className='bedrock-docs-bar'>
            <Image 
                src="https://via.placeholder.com/800x400/28a745/fff?text=Responsive+Image" 
                alt="Responsive placeholder image"
                responsive
            />
        </div>

        <h3>Thumbnail Image</h3>
        <p>Image with thumbnail styling (bordered appearance):</p>
        <div className='bedrock-docs-bar'>
            <Image 
                src="https://via.placeholder.com/200x200/dc3545/fff?text=Thumbnail" 
                alt="Thumbnail placeholder image"
                thumbnail
            />
        </div>

        <h3>Rounded Image</h3>
        <p>Image with rounded corners:</p>
        <div className='bedrock-docs-bar'>
            <Image 
                src="https://via.placeholder.com/250x250/ffc107/000?text=Rounded" 
                alt="Rounded placeholder image"
                rounded
            />
        </div>

        <h3>Combined Styles</h3>
        <p>Images combining multiple styling options:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <Image 
                        src="https://via.placeholder.com/300x200/17a2b8/fff?text=Responsive+%26+Rounded" 
                        alt="Responsive and rounded image"
                        responsive
                        rounded
                    />
                    <p className="text-center mt-2 small">Responsive + Rounded</p>
                </div>
                <div className="col-md-4 mb-3">
                    <Image 
                        src="https://via.placeholder.com/300x200/6f42c1/fff?text=Responsive+%26+Thumbnail" 
                        alt="Responsive and thumbnail image"
                        responsive
                        thumbnail
                    />
                    <p className="text-center mt-2 small">Responsive + Thumbnail</p>
                </div>
                <div className="col-md-4 mb-3">
                    <Image 
                        src="https://via.placeholder.com/300x200/e83e8c/fff?text=All+Styles" 
                        alt="All styles combined"
                        responsive
                        thumbnail
                        rounded
                    />
                    <p className="text-center mt-2 small">All Styles Combined</p>
                </div>
            </div>
        </div>

        <h3>Different Sizes</h3>
        <p>Images with various sizing:</p>
        <div className='bedrock-docs-bar d-flex align-items-center gap-3'>
            <Image 
                src="https://via.placeholder.com/50x50/fd7e14/fff?text=50px" 
                alt="50px image"
                thumbnail
            />
            <Image 
                src="https://via.placeholder.com/100x100/20c997/fff?text=100px" 
                alt="100px image"
                thumbnail
            />
            <Image 
                src="https://via.placeholder.com/150x150/6c757d/fff?text=150px" 
                alt="150px image"
                thumbnail
            />
        </div>

        <h3>Custom Styled Images</h3>
        <p>Images with additional CSS classes:</p>
        <div className='bedrock-docs-bar'>
            <Image 
                src="https://via.placeholder.com/300x200/198754/fff?text=Custom+Border" 
                alt="Image with custom border"
                className="border border-primary border-3"
                responsive
            />
        </div>

        <div className='bedrock-docs-bar'>
            <Image 
                src="https://via.placeholder.com/200x200/0d6efd/fff?text=Shadow" 
                alt="Image with shadow"
                className="shadow-lg"
                rounded
            />
        </div>

        <h3>Profile Images</h3>
        <p>Images commonly used for user profiles:</p>
        <div className='bedrock-docs-bar'>
            <div className="d-flex align-items-center gap-3">
                <Image 
                    src="https://via.placeholder.com/60x60/6f42c1/fff?text=User" 
                    alt="User profile"
                    className="rounded-circle"
                />
                <div>
                    <h6 className="mb-0">John Doe</h6>
                    <p className="text-muted mb-0">Software Developer</p>
                </div>
            </div>
        </div>

        <h3>Card Images</h3>
        <p>Images used within card components:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <Image 
                            src="https://via.placeholder.com/300x200/dc3545/fff?text=Card+Top" 
                            alt="Card top image"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card with Side Image</h5>
                            <div className="d-flex">
                                <Image 
                                    src="https://via.placeholder.com/80x80/ffc107/000?text=Side" 
                                    alt="Side image"
                                    className="me-3"
                                    thumbnail
                                />
                                <p className="card-text">Text content alongside the image.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3>Gallery Grid</h3>
        <p>Images arranged in a gallery layout:</p>
        <div className='bedrock-docs-bar'>
            <div className="row g-2">
                <div className="col-4">
                    <Image 
                        src="https://via.placeholder.com/200x200/007bff/fff?text=1" 
                        alt="Gallery image 1"
                        responsive
                        rounded
                    />
                </div>
                <div className="col-4">
                    <Image 
                        src="https://via.placeholder.com/200x200/28a745/fff?text=2" 
                        alt="Gallery image 2"
                        responsive
                        rounded
                    />
                </div>
                <div className="col-4">
                    <Image 
                        src="https://via.placeholder.com/200x200/dc3545/fff?text=3" 
                        alt="Gallery image 3"
                        responsive
                        rounded
                    />
                </div>
                <div className="col-4">
                    <Image 
                        src="https://via.placeholder.com/200x200/ffc107/000?text=4" 
                        alt="Gallery image 4"
                        responsive
                        rounded
                    />
                </div>
                <div className="col-4">
                    <Image 
                        src="https://via.placeholder.com/200x200/17a2b8/fff?text=5" 
                        alt="Gallery image 5"
                        responsive
                        rounded
                    />
                </div>
                <div className="col-4">
                    <Image 
                        src="https://via.placeholder.com/200x200/6f42c1/fff?text=6" 
                        alt="Gallery image 6"
                        responsive
                        rounded
                    />
                </div>
            </div>
        </div>

        <h3>Loading States</h3>
        <p>Images with loading indicators and error handling:</p>
        <div className='bedrock-docs-bar'>
            <div className="d-flex gap-3 align-items-start">
                <div className="text-center">
                    <div className="placeholder-glow">
                        <div className="placeholder" style={{width: '200px', height: '150px'}}></div>
                    </div>
                    <p className="small mt-2">Loading placeholder</p>
                </div>
                <div className="text-center">
                    <Image 
                        src="https://via.placeholder.com/200x150/6c757d/fff?text=Loaded" 
                        alt="Loaded image"
                        thumbnail
                    />
                    <p className="small mt-2">Lazy loaded image</p>
                </div>
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;img&gt; element with enhanced styling</li>
            <li>Requires src prop to specify the image source URL</li>
            <li>When responsive is true, applies img-fluid class for responsive scaling</li>
            <li>When thumbnail is true, applies img-thumbnail class for bordered appearance</li>
            <li>When rounded is true, applies rounded class for rounded corners</li>
            <li>All styling options can be combined for complex appearances</li>
            <li>Supports all standard img element attributes (alt, loading, etc.)</li>
            <li>Can be styled with additional CSS classes via className prop</li>
            <li>Compatible with Bootstrap's image utility classes</li>
            <li>Maintains accessibility features through proper alt text and attributes</li>
        </ul>
    </>
} 