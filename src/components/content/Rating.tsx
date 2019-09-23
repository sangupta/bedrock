import * as React from 'react';

interface RatingProps {

    /**
     * Maximum number of stars to display
     */
    max?: number;

    /**
     * Currently selected rating
     */
    rating?: number;

    /**
     * Function handler called when the rating changes
     */
    onChange?: Function;
}

export default class Rating extends React.Component<RatingProps, any> {

    static defaultProps = {
        max: 5
    }

    render() {
        return null;
    }

}
