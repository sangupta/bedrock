import React from 'react';
import { Gravatar } from '../../../src';

export default function GravatarDocs() {
    return <>
        <h1>Gravatar</h1>
        <p>
            The Gravatar component renders profile images from Gravatar.com based on email addresses. 
            It supports various sizes, rating levels, default images, and can work with either 
            email addresses or pre-computed MD5 hashes for privacy.
        </p>

        <h2>Usage</h2>

        <h3>Basic Gravatar</h3>
        <p>Simple Gravatar using an email address:</p>
        <div className='bedrock-docs-bar'>
            <Gravatar email="test@example.com" />
        </div>

        <h3>Different Sizes</h3>
        <p>Gravatars with various sizes:</p>
        <div className='bedrock-docs-bar d-flex align-items-center gap-3'>
            <div className="text-center">
                <Gravatar email="user1@example.com" size={30} />
                <p className="small mt-1">30px</p>
            </div>
            <div className="text-center">
                <Gravatar email="user2@example.com" size={50} />
                <p className="small mt-1">50px (default)</p>
            </div>
            <div className="text-center">
                <Gravatar email="user3@example.com" size={80} />
                <p className="small mt-1">80px</p>
            </div>
            <div className="text-center">
                <Gravatar email="user4@example.com" size={120} />
                <p className="small mt-1">120px</p>
            </div>
        </div>

        <h3>Different Default Images</h3>
        <p>Gravatars with various default image options when no Gravatar is found:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="nonexistent1@example.com" defaultImage="retro" size={80} />
                    <p className="small mt-2">retro (default)</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="nonexistent2@example.com" defaultImage="identicon" size={80} />
                    <p className="small mt-2">identicon</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="nonexistent3@example.com" defaultImage="monsterid" size={80} />
                    <p className="small mt-2">monsterid</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="nonexistent4@example.com" defaultImage="wavatar" size={80} />
                    <p className="small mt-2">wavatar</p>
                </div>
            </div>
        </div>

        <h3>Using MD5 Hash</h3>
        <p>Gravatar using pre-computed MD5 hash for privacy (example hash for test@example.com):</p>
        <div className='bedrock-docs-bar'>
            <Gravatar md5="55502f40dc8b7c769880b10874abc9d0" size={80} />
            <p className="small text-muted mt-2">
                Using MD5 hash instead of email for privacy protection
            </p>
        </div>

        <h3>Rating Levels</h3>
        <p>Gravatars with different rating restrictions:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="user@example.com" rating="g" size={60} />
                    <p className="small mt-2">G rated (default)</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="user@example.com" rating="pg" size={60} />
                    <p className="small mt-2">PG rated</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="user@example.com" rating="r" size={60} />
                    <p className="small mt-2">R rated</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <Gravatar email="user@example.com" rating="x" size={60} />
                    <p className="small mt-2">X rated</p>
                </div>
            </div>
        </div>

        <h3>User Profile Integration</h3>
        <p>Gravatars used in user profile contexts:</p>
        <div className='bedrock-docs-bar'>
            <div className="d-flex align-items-center mb-3">
                <Gravatar email="john.doe@example.com" size={60} className="rounded-circle me-3" />
                <div>
                    <h6 className="mb-0">John Doe</h6>
                    <p className="text-muted mb-0">Software Engineer</p>
                    <small className="text-muted">john.doe@example.com</small>
                </div>
            </div>

            <div className="d-flex align-items-center mb-3">
                <Gravatar email="jane.smith@example.com" size={50} className="rounded-circle me-3" />
                <div>
                    <h6 className="mb-0">Jane Smith</h6>
                    <p className="text-muted mb-0">Product Manager</p>
                </div>
            </div>

            <div className="d-flex align-items-center">
                <Gravatar email="bob.wilson@example.com" size={40} className="rounded-circle me-3" />
                <div>
                    <span className="fw-bold">Bob Wilson</span>
                    <span className="text-muted ms-2">Designer</span>
                </div>
            </div>
        </div>

        <h3>Comment System</h3>
        <p>Gravatars in a comment-style layout:</p>
        <div className='bedrock-docs-bar'>
            <div className="border rounded p-3 mb-3">
                <div className="d-flex">
                    <Gravatar email="commenter1@example.com" size={40} className="rounded-circle me-3" />
                    <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-1">
                            <strong>Alex Johnson</strong>
                            <small className="text-muted ms-2">2 hours ago</small>
                        </div>
                        <p className="mb-0">Great article! This really helped me understand the concepts better.</p>
                    </div>
                </div>
            </div>

            <div className="border rounded p-3 mb-3">
                <div className="d-flex">
                    <Gravatar email="commenter2@example.com" size={40} className="rounded-circle me-3" />
                    <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-1">
                            <strong>Sarah Chen</strong>
                            <small className="text-muted ms-2">1 day ago</small>
                        </div>
                        <p className="mb-0">Thanks for sharing this. Looking forward to more content like this.</p>
                    </div>
                </div>
            </div>
        </div>

        <h3>Team Members Grid</h3>
        <p>Gravatars in a team members layout:</p>
        <div className='bedrock-docs-bar'>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="text-center">
                        <Gravatar email="team1@example.com" size={100} className="rounded-circle mb-3" />
                        <h6>Emily Rodriguez</h6>
                        <p className="text-muted small">Lead Developer</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="text-center">
                        <Gravatar email="team2@example.com" size={100} className="rounded-circle mb-3" />
                        <h6>Michael Chang</h6>
                        <p className="text-muted small">UI/UX Designer</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="text-center">
                        <Gravatar email="team3@example.com" size={100} className="rounded-circle mb-3" />
                        <h6>Lisa Anderson</h6>
                        <p className="text-muted small">Project Manager</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="text-center">
                        <Gravatar email="team4@example.com" size={100} className="rounded-circle mb-3" />
                        <h6>David Kim</h6>
                        <p className="text-muted small">DevOps Engineer</p>
                    </div>
                </div>
            </div>
        </div>

        <h3>Navigation Bar Avatar</h3>
        <p>Gravatar used in navigation bar context:</p>
        <div className='bedrock-docs-bar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">My App</a>
                    <div className="navbar-nav ms-auto">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#profile" role="button">
                                <Gravatar email="current.user@example.com" size={32} className="rounded-circle me-2" />
                                <span>Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <h3>Custom Styling</h3>
        <p>Gravatars with custom styling and effects:</p>
        <div className='bedrock-docs-bar d-flex gap-4 align-items-center'>
            <Gravatar 
                email="styled1@example.com" 
                size={80} 
                className="rounded-circle border border-primary border-3" 
            />
            <Gravatar 
                email="styled2@example.com" 
                size={80} 
                className="rounded shadow-lg" 
            />
            <Gravatar 
                email="styled3@example.com" 
                size={80} 
                className="rounded-circle shadow-sm border border-success border-2" 
            />
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Renders as an Image component with Gravatar URL as source</li>
            <li>Supports both email addresses and pre-computed MD5 hashes</li>
            <li>Default size is 50x50 pixels</li>
            <li>Default rating is 'g' (suitable for all audiences)</li>
            <li>Default fallback image is 'retro' style when no Gravatar is found</li>
            <li>Uses HTTPS by default for secure image loading</li>
            <li>Can be styled with additional CSS classes via className prop</li>
            <li>Automatically generates proper Gravatar URLs with parameters</li>
            <li>Maintains aspect ratio and supports responsive sizing</li>
            <li>Privacy-friendly when using MD5 hashes instead of email addresses</li>
            <li>Compatible with all Image component styling options</li>
        </ul>
    </>
} 