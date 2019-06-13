import * as React from 'react';

interface ProgressBarProps {
    min?: number;
    max?: number;
    value?: number;
    label?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    striped?: boolean;
    animated?: boolean;
}

export default class ProgressBar extends React.Component<ProgressBarProps, any> {

    render() {
        const max = this.props.max || 100;
        const min = this.props.min || 0;
        const value = this.props.value || 0;
        const variant = this.props.variant || 'primary';

        let percent: number = ((value - min) * 100 / (max - min));
        if (percent < 0) {
            percent = 0;
        }
        const width = '' + percent.toFixed(0) + '%';
        console.log('width: ', width);

        return <div className='progress'>
            <div className={'progress-bar bg-' + variant} role="progressbar" style={{ width: width }} aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}></div>
        </div>;
    }

}
