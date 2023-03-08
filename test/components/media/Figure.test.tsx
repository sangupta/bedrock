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
import { Figure } from '../../../src';

describe('Figure component', () => {

    it('default render', () => {
        const imageSrc = 'https://example.com/image.png';
        const { getByRole } = render(<Figure imgSrc={imageSrc} />);
        const image = getByRole('img');
        expect(image).toHaveAttribute('src', imageSrc);
    });

});
