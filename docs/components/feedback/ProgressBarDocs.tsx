import React from 'react';
import { ProgressBar } from '../../../src';

export default function ProgressBarDocs() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 10;
                return next > 100 ? 0 : next;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <>
        <h1>ProgressBar</h1>
        <p>
            A progress bar component that visually represents the completion progress of a task. 
            It supports various styling options including different variants, stripes, 
            and animations to enhance user experience.
        </p>

        <h2>Usage</h2>

        <h3>Basic Progress Bars</h3>
        <p>Simple progress bars with different completion values:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={0} />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={25} />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={50} />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={75} />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={100} />
        </div>

        <h3>Different Variants</h3>
        <p>Progress bars with different color variants:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={60} variant="primary" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={60} variant="success" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={60} variant="info" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={60} variant="warning" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={60} variant="danger" />
        </div>

        <h3>With Labels</h3>
        <p>Progress bars displaying completion percentage or custom labels:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={25} label="25%" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={50} label="50% Complete" variant="success" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={75} label="Loading..." variant="info" />
        </div>

        <h3>Striped Progress Bars</h3>
        <p>Progress bars with striped styling:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={40} striped />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={60} striped variant="success" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={80} striped variant="warning" />
        </div>

        <h3>Animated Progress Bars</h3>
        <p>Progress bars with animated stripes:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={45} striped animated />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={65} striped animated variant="success" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar value={85} striped animated variant="danger" />
        </div>

        <h3>Custom Range</h3>
        <p>Progress bars with custom min and max values:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar min={0} max={200} value={50} label="50 of 200" />
        </div>
        <div className='bedrock-docs-bar'>
            <ProgressBar min={10} max={50} value={30} label="30/50" variant="info" />
        </div>

        <h3>Dynamic Progress</h3>
        <p>A progress bar that updates automatically:</p>
        <div className='bedrock-docs-bar'>
            <ProgressBar 
                value={progress} 
                label={`${progress}%`} 
                variant="primary" 
                striped 
                animated 
            />
            <small className="text-muted d-block mt-1">
                This progress bar updates every second
            </small>
        </div>

        <h3>Usage in Context</h3>
        <p>Progress bars used in typical scenarios:</p>
        <div className='bedrock-docs-bar'>
            <div className="mb-3">
                <label className="form-label">File Upload Progress</label>
                <ProgressBar value={73} label="73%" variant="success" />
            </div>
            <div className="mb-3">
                <label className="form-label">Memory Usage</label>
                <ProgressBar value={85} label="85% Used" variant="warning" />
            </div>
            <div className="mb-3">
                <label className="form-label">Task Completion</label>
                <ProgressBar value={100} label="Complete!" variant="success" />
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Progress is calculated as a percentage between min and max values</li>
            <li>Default range is 0 to 100, but can be customized with min and max props</li>
            <li>Values outside the min-max range are automatically clamped</li>
            <li>Striped styling adds diagonal stripes to the progress bar</li>
            <li>Animation makes the stripes move continuously (requires striped to be true)</li>
            <li>Labels can display percentage, custom text, or be omitted entirely</li>
            <li>Different variants provide color coding for different types of progress</li>
            <li>Includes proper ARIA attributes for accessibility (progressbar role, value attributes)</li>
        </ul>
    </>
} 