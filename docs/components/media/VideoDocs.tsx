import React from 'react';
import { Video } from '../../../src';

export default function VideoDocs() {
    return <>
        <h1>Video</h1>
        <p>
            The Video component provides an enhanced HTML video element with additional 
            props for controlling playback behavior, responsiveness, and modern video features 
            like picture-in-picture and remote playback controls.
        </p>

        <h2>Usage</h2>

        <h3>Basic Video</h3>
        <p>Simple video with default controls:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width={400}
                height={300}
            />
        </div>

        <h3>Responsive Video</h3>
        <p>Video that scales responsively with container:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                isResponsive
                width={800}
                height={450}
            />
        </div>

        <h3>Autoplay Video (Muted)</h3>
        <p>Video that starts playing automatically (muted for browser compliance):</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                width={400}
                height={300}
            />
        </div>

        <h3>Video with Poster</h3>
        <p>Video with a poster image shown before playback:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                poster="https://via.placeholder.com/400x300/6c757d/fff?text=Video+Poster"
                width={400}
                height={300}
                preload="none"
            />
        </div>

        <h3>Video without Controls</h3>
        <p>Video without default browser controls:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls={false}
                autoPlay
                muted
                loop
                width={300}
                height={200}
            />
            <p className="small text-muted mt-2">
                Note: Videos without controls typically need autoplay and muted for browsers to allow playback.
            </p>
        </div>

        <h3>Preload Options</h3>
        <p>Videos with different preload strategies:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-4">
                    <Video 
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        preload="none"
                        width={250}
                        height={180}
                    />
                    <p className="text-center small mt-2">Preload: none</p>
                </div>
                <div className="col-md-4">
                    <Video 
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        preload="metadata"
                        width={250}
                        height={180}
                    />
                    <p className="text-center small mt-2">Preload: metadata (default)</p>
                </div>
                <div className="col-md-4">
                    <Video 
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        preload="auto"
                        width={250}
                        height={180}
                    />
                    <p className="text-center small mt-2">Preload: auto</p>
                </div>
            </div>
        </div>

        <h3>Video with Custom Controls</h3>
        <p>Video with controlled list restrictions:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controlsList="nodownload"
                width={400}
                height={300}
            />
            <p className="small text-muted mt-2">
                This video has download disabled in the controls menu.
            </p>
        </div>

        <h3>Picture-in-Picture Disabled</h3>
        <p>Video with picture-in-picture functionality disabled:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                disablePip
                width={400}
                height={300}
            />
            <p className="small text-muted mt-2">
                Picture-in-picture is disabled for this video.
            </p>
        </div>

        <h3>Video in Cards</h3>
        <p>Videos integrated within card layouts:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <Video 
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            className="card-img-top"
                            style={{height: '200px', objectFit: 'cover'}}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Featured Video</h5>
                            <p className="card-text">
                                This is a sample video embedded within a card component.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Video with Description</h5>
                            <Video 
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                width={300}
                                height={200}
                                className="mb-3"
                            />
                            <p className="card-text">
                                Video content with accompanying description and information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3>Responsive Video Container</h3>
        <p>Video in a responsive container with aspect ratio:</p>
        <div className='bedrock-docs-bar'>
            <div className="ratio ratio-16x9">
                <Video 
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    isResponsive
                />
            </div>
        </div>

        <h3>Multiple Videos</h3>
        <p>Multiple videos with different configurations:</p>
        <div className='bedrock-docs-bar'>
            <div className="row g-3">
                <div className="col-lg-4">
                    <Video 
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        muted
                        loop
                        autoPlay
                        width={250}
                        height={180}
                    />
                    <p className="text-center small mt-2">Autoplay + Loop</p>
                </div>
                <div className="col-lg-4">
                    <Video 
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        poster="https://via.placeholder.com/250x180/28a745/fff?text=Click+to+Play"
                        width={250}
                        height={180}
                    />
                    <p className="text-center small mt-2">With Poster</p>
                </div>
                <div className="col-lg-4">
                    <Video 
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        controls={false}
                        muted
                        autoPlay
                        width={250}
                        height={180}
                    />
                    <p className="text-center small mt-2">No Controls</p>
                </div>
            </div>
        </div>

        <h3>Video Accessibility</h3>
        <p>Video with accessibility considerations:</p>
        <div className='bedrock-docs-bar'>
            <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width={400}
                height={300}
                title="Sample video demonstrating accessibility features"
                aria-label="Educational video about web development"
            >
                <p>
                    Your browser does not support the video tag. 
                    <a href="https://www.w3schools.com/html/mov_bbb.mp4">Download the video</a> instead.
                </p>
            </Video>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an HTML &lt;video&gt; element with enhanced functionality</li>
            <li>Requires src prop to specify the video source URL</li>
            <li>Controls are enabled by default for user interaction</li>
            <li>When isResponsive is true, applies embed-responsive-item class</li>
            <li>Autoplay requires muted=true in most modern browsers for compliance</li>
            <li>Supports picture-in-picture functionality (can be disabled with disablePip)</li>
            <li>playsInline is true by default for better mobile experience</li>
            <li>preload defaults to 'metadata' for optimal loading performance</li>
            <li>controlsList allows fine-tuning of native video controls</li>
            <li>Supports all standard video element attributes and events</li>
            <li>Can contain fallback content for browsers that don't support video</li>
            <li>Compatible with responsive design patterns and CSS frameworks</li>
        </ul>
    </>
} 