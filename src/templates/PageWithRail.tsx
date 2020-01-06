import * as React from 'react';
import Link from '../components/text/Link';
import { mergeCSS, BaseProps } from '../BedrockUtils';

interface PageWithRailProps extends BaseProps {

    /**
     * Header to be displayed
     */
    header: React.ReactNode;

    /**
     * CSS classes to be added to the navigation bar as needed
     */
    navbarCss: string;

    /**
     * Content in the left rail to be displayed
     */
    rail: React.ReactNode;

    /**
     * Set to true if the rail is required to be hidden by default
     */
    hiddenRail?: boolean;

    /**
     * Placement of the toggle hamburger icon with respect to the navigation bar
     */
    togglePlacement?: 'left' | 'right';

    /**
     * Placement of the rail with respect to main container
     */
    railPlacement?: 'left' | 'right';

    /**
     * Function handler called when the rail is toggled
     */
    onRailToggle?: (visible: boolean, eventID: string) => void;
}

interface PageWithRailState {
    railHidden: boolean;
}

export default class PageWithRail extends React.Component<PageWithRailProps, PageWithRailState> {

    static defaultProps = {
        hiddenRail: false,
        railPlacement: 'left',
        togglePlacement: 'left'
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            railHidden: props.hiddenRail
        }
    }

    /**
     * Toggle the rail and call the callback handler, if present
     */
    toggleRail = (e) => {
        this.setState((state) => {
            return { railHidden: !state.railHidden }
        }, () => {
            if (this.props.onRailToggle) {
                this.props.onRailToggle(this.state.railHidden, this.props.eventID);
            }
        });
    }

    /**
     * Generate the side-rail
     */
    getSideRail = () => {
        if (this.state.railHidden) {
            return null;
        }

        return <nav className="col-md-3 d-md-block bg-light sidebar">
            {this.props.rail}
        </nav>;
    }

    /**
     * Get the main container
     */
    getMain = () => {
        const containerCss: string = this.state.railHidden ? 'col-md-12' : 'col-md-9';
        return <main role="main" className={containerCss}>
            {this.props.children}
        </main>;
    }

    /**
     * Get the toggle button
     */
    getToggle = () => {
        return <Link onClick={this.toggleRail} className='bedrock-rail-bars'><i className='fas fa-bars'></i></Link>;
    }

    render() {
        const navbarCSS: string = mergeCSS("navbar navbar-dark fixed-top flex-md-nowrap p-0", this.props.navbarCss);
        const leftAligned: boolean = 'left' === this.props.railPlacement;
        const toggleAligned: boolean = 'left' === this.props.togglePlacement;

        return <React.Fragment>
            <nav className={navbarCSS}>
                {toggleAligned ? this.getToggle() : null}
                {this.props.header}
                {toggleAligned ? null : this.getToggle()}
            </nav>
            <div className="container-fluid">
                <div className="row">
                    {leftAligned ? this.getSideRail() : null}
                    {this.getMain()}
                    {leftAligned ? null : this.getSideRail()}
                </div>
            </div>
        </React.Fragment>
    }

}
