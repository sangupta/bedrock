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
import { render } from '@testing-library/react';
import { Video } from '../../../src';

describe('Video component', () => {

    it('default render', () => {
        const src = 'https://example.com/video.mp4';
        const type = 'video/mp4';
        const { container } = render(<Video src={src} type={type} />);
        const videoElement = container.querySelector('video');
        expect(videoElement).toBeDefined();
    });
    
});
