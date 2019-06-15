import * as React from 'react';
import Image from './../content/Image';
import { BaseProps } from './../../BedrockUtils';

interface GravatarProps extends BaseProps {
    /**
     * The email address for which gravatar needs to be shown.
     */
    email?: string;

    /**
     * The MD5 hash of the email address for which gravatar needs to be shown.
     * This is useful if the email address is not available on client due to
     * privacy concerns, in which case, the MD5 can be sent from server to the
     * client.
     */
    md5?: string;

    /**
     * The size of the gravatar image. Defaults to 50px square.
     */
    size?: number;

    /**
     * Rating value for the gravatar image to pull.
     * `g` is suitable for display on all websites with any audience type.
     * `pg` may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence.
     * `r` may contain such things as harsh profanity, intense violence, nudity, or hard drug use.
     * `x` may contain hardcore sexual imagery or extremely disturbing violence.
     */
    rating?: 'g' | 'pg' | 'r' | 'x';

    /**
     * The default image to display if gravatar is not found.
     */
    default?: string;

    /**
     * The URL scheme to use. Defaults to using `//` to make
     * work in accordance of client scheme.
     */
    scheme?: 'http' | 'https' | '//';
}

/**
 * React component for rendering a gravatar profile image.
 */
export default class Gravatar extends React.Component<GravatarProps, any> {

    static defaultProps = {
        rating: 'g',
        size: 50,
        default: 'retro',
        scheme: '//'
    }

    render() {
        return <Image src={`https://www.gravatar.com/avatar/${this.props.md5}.jpg?s=${this.props.size}&r=${this.props.rating}&d=${this.props.default}`} />;
    }
}
