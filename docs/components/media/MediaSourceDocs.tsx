import React from 'react';
import { MediaSource } from '../../../src';

export default function MediaSourceDocs() {
    return <>
        <h1>MediaSource</h1>
        <p>
            The MediaSource component provides a way to specify multiple sources for media elements 
            like images and videos. It's particularly useful for responsive images with different 
            formats or resolutions, and for providing fallback sources for media content.
        </p>

        <h2>Usage</h2>

        <h3>Basic Image Source</h3>
        <p>Simple picture element with MediaSource for different image formats:</p>
        <div className='bedrock-docs-bar'>
            <picture>
                <MediaSource 
                    type="image/webp" 
                    src="https://via.placeholder.com/400x300.webp" 
                />
                <MediaSource 
                    type="image/jpeg" 
                    src="https://via.placeholder.com/400x300.jpg" 
                />
                <img 
                    src="https://via.placeholder.com/400x300.jpg" 
                    alt="Responsive image with multiple sources"
                    className="img-fluid"
                />
            </picture>
        </div>

        <h3>Responsive Images with srcSet</h3>
        <p>MediaSource with different image sizes for responsive design:</p>
        <div className='bedrock-docs-bar'>
            <picture>
                <MediaSource 
                    type="image/webp" 
                    srcSet="https://via.placeholder.com/800x600.webp 800w, https://via.placeholder.com/400x300.webp 400w, https://via.placeholder.com/200x150.webp 200w"
                />
                <MediaSource 
                    type="image/jpeg" 
                    srcSet="https://via.placeholder.com/800x600.jpg 800w, https://via.placeholder.com/400x300.jpg 400w, https://via.placeholder.com/200x150.jpg 200w"
                />
                <img 
                    src="https://via.placeholder.com/400x300.jpg" 
                    alt="Responsive image with multiple resolutions"
                    className="img-fluid"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </picture>
        </div>

        <h3>Media Queries for Art Direction</h3>
        <p>MediaSource with media queries for different viewport sizes:</p>
        <div className='bedrock-docs-bar'>
            <picture>
                <MediaSource 
                    type="image/webp" 
                    src="https://via.placeholder.com/800x400/007bff/fff?text=Desktop+WebP"
                    mediaQuery="(min-width: 768px)"
                />
                <MediaSource 
                    type="image/jpeg" 
                    src="https://via.placeholder.com/800x400/007bff/fff?text=Desktop+JPEG"
                    mediaQuery="(min-width: 768px)"
                />
                <MediaSource 
                    type="image/webp" 
                    src="https://via.placeholder.com/400x600/28a745/fff?text=Mobile+WebP"
                    mediaQuery="(max-width: 767px)"
                />
                <MediaSource 
                    type="image/jpeg" 
                    src="https://via.placeholder.com/400x600/28a745/fff?text=Mobile+JPEG"
                    mediaQuery="(max-width: 767px)"
                />
                <img 
                    src="https://via.placeholder.com/400x600/28a745/fff?text=Fallback"
                    alt="Art directed responsive image"
                    className="img-fluid"
                />
            </picture>
        </div>

        <h3>High DPI Support</h3>
        <p>MediaSource providing different resolutions for high DPI displays:</p>
        <div className='bedrock-docs-bar'>
            <picture>
                <MediaSource 
                    type="image/webp" 
                    srcSet="https://via.placeholder.com/400x300.webp 1x, https://via.placeholder.com/800x600.webp 2x"
                />
                <MediaSource 
                    type="image/jpeg" 
                    srcSet="https://via.placeholder.com/400x300.jpg 1x, https://via.placeholder.com/800x600.jpg 2x"
                />
                <img 
                    src="https://via.placeholder.com/400x300.jpg" 
                    alt="High DPI responsive image"
                    className="img-fluid"
                    width="400"
                    height="300"
                />
            </picture>
        </div>

        <h3>Multiple Format Support</h3>
        <p>MediaSource supporting various modern and legacy image formats:</p>
        <div className='bedrock-docs-bar'>
            <picture>
                <MediaSource 
                    type="image/avif" 
                    src="https://via.placeholder.com/300x200/6f42c1/fff?text=AVIF" 
                />
                <MediaSource 
                    type="image/webp" 
                    src="https://via.placeholder.com/300x200/6f42c1/fff?text=WebP" 
                />
                <MediaSource 
                    type="image/jpeg" 
                    src="https://via.placeholder.com/300x200/6f42c1/fff?text=JPEG" 
                />
                <img 
                    src="https://via.placeholder.com/300x200/6f42c1/fff?text=PNG+Fallback"
                    alt="Multiple format support"
                    className="img-fluid"
                />
            </picture>
        </div>

        <h3>Video Sources</h3>
        <p>MediaSource used with video elements for format fallbacks:</p>
        <div className='bedrock-docs-bar'>
            <video controls width="400" height="300">
                <MediaSource 
                    type="video/webm" 
                    src="https://www.w3schools.com/html/mov_bbb.webm"
                />
                <MediaSource 
                    type="video/mp4" 
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                />
                <MediaSource 
                    type="video/ogg" 
                    src="https://www.w3schools.com/html/mov_bbb.ogg"
                />
                <p>Your browser doesn't support HTML video. <a href="https://www.w3schools.com/html/mov_bbb.mp4">Download the video</a> instead.</p>
            </video>
        </div>

        <h3>Complex Responsive Setup</h3>
        <p>MediaSource with complex responsive image setup combining format and size optimizations:</p>
        <div className='bedrock-docs-bar'>
            <picture>
                {/* Large screens - WebP */}
                <MediaSource 
                    type="image/webp" 
                    srcSet="https://via.placeholder.com/1200x800/dc3545/fff?text=Large+WebP 1200w, https://via.placeholder.com/800x600/dc3545/fff?text=Medium+WebP 800w"
                    mediaQuery="(min-width: 992px)"
                />
                
                {/* Large screens - JPEG fallback */}
                <MediaSource 
                    type="image/jpeg" 
                    srcSet="https://via.placeholder.com/1200x800/dc3545/fff?text=Large+JPEG 1200w, https://via.placeholder.com/800x600/dc3545/fff?text=Medium+JPEG 800w"
                    mediaQuery="(min-width: 992px)"
                />
                
                {/* Medium screens - WebP */}
                <MediaSource 
                    type="image/webp" 
                    srcSet="https://via.placeholder.com/600x400/ffc107/000?text=Medium+WebP 600w, https://via.placeholder.com/400x300/ffc107/000?text=Small+WebP 400w"
                    mediaQuery="(min-width: 576px)"
                />
                
                {/* Medium screens - JPEG fallback */}
                <MediaSource 
                    type="image/jpeg" 
                    srcSet="https://via.placeholder.com/600x400/ffc107/000?text=Medium+JPEG 600w, https://via.placeholder.com/400x300/ffc107/000?text=Small+JPEG 400w"
                    mediaQuery="(min-width: 576px)"
                />
                
                {/* Small screens - WebP */}
                <MediaSource 
                    type="image/webp" 
                    src="https://via.placeholder.com/300x200/17a2b8/fff?text=Small+WebP"
                />
                
                {/* Small screens - JPEG fallback */}
                <MediaSource 
                    type="image/jpeg" 
                    src="https://via.placeholder.com/300x200/17a2b8/fff?text=Small+JPEG"
                />
                
                <img 
                    src="https://via.placeholder.com/300x200/6c757d/fff?text=Ultimate+Fallback"
                    alt="Complex responsive image"
                    className="img-fluid"
                    sizes="(min-width: 992px) 50vw, (min-width: 576px) 75vw, 100vw"
                />
            </picture>
        </div>

        <h3>Gallery with Optimized Sources</h3>
        <p>Gallery layout using MediaSource for optimized loading:</p>
        <div className='bedrock-docs-bar'>
            <div className="row g-3">
                <div className="col-md-4">
                    <picture>
                        <MediaSource type="image/webp" src="https://via.placeholder.com/400x300/007bff/fff?text=Gallery+1+WebP" />
                        <img src="https://via.placeholder.com/400x300/007bff/fff?text=Gallery+1" alt="Gallery image 1" className="img-fluid rounded" />
                    </picture>
                </div>
                <div className="col-md-4">
                    <picture>
                        <MediaSource type="image/webp" src="https://via.placeholder.com/400x300/28a745/fff?text=Gallery+2+WebP" />
                        <img src="https://via.placeholder.com/400x300/28a745/fff?text=Gallery+2" alt="Gallery image 2" className="img-fluid rounded" />
                    </picture>
                </div>
                <div className="col-md-4">
                    <picture>
                        <MediaSource type="image/webp" src="https://via.placeholder.com/400x300/dc3545/fff?text=Gallery+3+WebP" />
                        <img src="https://via.placeholder.com/400x300/dc3545/fff?text=Gallery+3" alt="Gallery image 3" className="img-fluid rounded" />
                    </picture>
                </div>
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;source&gt; element for use within &lt;picture&gt; or &lt;video&gt; elements</li>
            <li>Requires type prop to specify the MIME type of the media resource</li>
            <li>Can use either src prop for single source or srcSet for multiple resolutions</li>
            <li>mediaQuery prop allows conditional loading based on viewport characteristics</li>
            <li>Browser automatically selects the best source based on support and conditions</li>
            <li>Supports modern formats like WebP and AVIF with fallbacks to legacy formats</li>
            <li>Essential for responsive images and progressive enhancement strategies</li>
            <li>Works with both static images and dynamic video content</li>
            <li>Helps optimize loading performance and bandwidth usage</li>
            <li>Maintains backward compatibility through proper fallback mechanisms</li>
        </ul>
    </>
} 