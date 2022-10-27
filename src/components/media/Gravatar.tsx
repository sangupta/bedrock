/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import React from 'react';
import Image from './Image';

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
    defaultImage?: string;

    /**
     * The URL scheme to use. Defaults to using `//` to make
     * work in accordance of client scheme.
     */
    scheme?: 'http' | 'https' | '//';
}

/**
 * React component for rendering a gravatar profile image.
 */
export default class Gravatar extends React.Component<GravatarProps> {

    static defaultProps = {
        rating: 'g',
        size: 50,
        defaultImage: 'retro',
        scheme: '//'
    }

    render(): React.ReactNode {
        const { className, children, email, md5, size, rating, defaultImage, scheme, ...extraProps } = this.props;
        const url: string = `https://www.gravatar.com/avatar/${md5}.jpg?s=${size}&r=${rating}&d=${defaultImage}`;

        return <Image {...extraProps}
            className={className}
            src={url} />;
    }

}
