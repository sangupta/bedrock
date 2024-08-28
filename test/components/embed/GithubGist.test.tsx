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
import { render, screen } from '@testing-library/react';
import { GithubGist } from './../../../src'

describe('GithubGist component', () => {

    it('renders the gist with the correct ID', () => {
        render(<GithubGist gistID="123456" />);
        const iframe = screen.getByTestId('github-gist');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('data-gistid', '123456');
    });

});
