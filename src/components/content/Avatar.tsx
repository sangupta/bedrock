import React from 'react';
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';

export interface AvatarProps extends BaseProps {

    /**
     * Label to use if image is not available
     */
    label?: string;

    /**
     * Display the image for the user
     */
    imageSrc?: string;

    /**
     * Style for the avatar
     */
    style?: 'square' | 'round';

    size?: 'small' | 'medium' | 'large';
}

/**
 * The Avatar component is used to display user's profile
 * picture to indicate their participation in an activity.
 * The Avatar is usually circular (aka round), but can also
 * optionally be square.
 * 
 * @author sangupta
 */
export default class Avatar extends React.Component<AvatarProps> {

    static defaultProps = {
        style: 'round',
        label: '',
        size: 'medium'
    }

    render() {
        const { label, imageSrc, style, size } = this.props;
        const chr = label.length > 0 ? label.charAt(0) : '';

        const css = buildCss('avatar', 'avatar-' + style, 'avatar-' + size);
        return <div className={css}>
            {chr ? chr : ''}
            {imageSrc ? <img className='avatar-img' src={imageSrc} /> : ''}
        </div>
    }

}
