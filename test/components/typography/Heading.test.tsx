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
import { Heading } from '../../../src';

describe('Heading component', () => {

    describe('when no heading level is specified', () => {
        it('renders a default level 1 heading with correct text', () => {
            const text = 'Default Heading Level 1';
            const { getByRole } = render(<Heading>{text}</Heading>);
            const heading = getByRole('heading', { level: 1 });
            expect(heading).toHaveTextContent(text);
        });

        it('renders as a paragraph with correct text', () => {
            const text = 'Default Heading Level 1';
            const { getByRole } = render(<Heading asParagraph={true}>{text}</Heading>);
            const heading = getByRole('heading');
            expect(heading).toHaveTextContent(text);
            expect(heading.tagName).toBe('P');
        });

        it('renders a level 1 heading with custom class name', () => {
            const text = 'Default Level 1 with Custom Class';
            const className = 'test-class';
            const { getByRole } = render(<Heading className={className}>{text}</Heading>);
            const heading = getByRole('heading', { level: 1 });
            expect(heading).toHaveTextContent(text);
            expect(heading).toHaveClass(className);
        });
    });

    describe('when heading level is specified', () => {
        it('renders a level 1 heading with correct text', () => {
            const text = 'Heading Level 1';
            const { getByRole } = render(<Heading level={1}>{text}</Heading>);
            const heading = getByRole('heading', { level: 1 });
            expect(heading).not.toHaveClass('display-1');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 2 heading with correct text', () => {
            const text = 'Heading Level 2';
            const { getByRole } = render(<Heading level={2}>{text}</Heading>);
            const heading = getByRole('heading', { level: 2 });
            expect(heading).not.toHaveClass('display-2');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 3 heading with correct text', () => {
            const text = 'Heading Level 3';
            const { getByRole } = render(<Heading level={3}>{text}</Heading>);
            const heading = getByRole('heading', { level: 3 });
            expect(heading).not.toHaveClass('display-3');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 4 heading with correct text', () => {
            const text = 'Heading Level 4';
            const { getByRole } = render(<Heading level={4}>{text}</Heading>);
            const heading = getByRole('heading', { level: 4 });
            expect(heading).not.toHaveClass('display-4');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 5 heading with correct text', () => {
            const text = 'Heading Level 5';
            const { getByRole } = render(<Heading level={5}>{text}</Heading>);
            const heading = getByRole('heading', { level: 5 });
            expect(heading).not.toHaveClass('display-5');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 6 heading with correct text', () => {
            const text = 'Heading Level 6';
            const { getByRole } = render(<Heading level={6}>{text}</Heading>);
            const heading = getByRole('heading', { level: 6 });
            expect(heading).not.toHaveClass('display-6');
            expect(heading).toHaveTextContent(text);
        });
    });

    describe('when heading level is specified, and is displayed as heading', () => {
        it('renders a level 1 heading with correct text', () => {
            const text = 'Heading Level 1';
            const { getByRole } = render(<Heading level={1} displayHeading={true}>{text}</Heading>);
            const heading = getByRole('heading', { level: 1 });
            expect(heading).toHaveClass('display-1');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 2 heading with correct text', () => {
            const text = 'Heading Level 2';
            const { getByRole } = render(<Heading level={2} displayHeading={true}>{text}</Heading>);
            const heading = getByRole('heading', { level: 2 });
            expect(heading).toHaveClass('display-2');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 3 heading with correct text', () => {
            const text = 'Heading Level 3';
            const { getByRole } = render(<Heading level={3} displayHeading={true}>{text}</Heading>);
            const heading = getByRole('heading', { level: 3 });
            expect(heading).toHaveClass('display-3');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 4 heading with correct text', () => {
            const text = 'Heading Level 4';
            const { getByRole } = render(<Heading level={4} displayHeading={true}>{text}</Heading>);
            const heading = getByRole('heading', { level: 4 });
            expect(heading).toHaveClass('display-4');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 5 heading with correct text', () => {
            const text = 'Heading Level 5';
            const { getByRole } = render(<Heading level={5} displayHeading={true}>{text}</Heading>);
            const heading = getByRole('heading', { level: 5 });
            expect(heading).toHaveClass('display-5');
            expect(heading).toHaveTextContent(text);
        });

        it('renders a level 6 heading with correct text', () => {
            const text = 'Heading Level 6';
            const { getByRole } = render(<Heading level={6} displayHeading={true}>{text}</Heading>);
            const heading = getByRole('heading', { level: 6 });
            expect(heading).toHaveClass('display-6');
            expect(heading).toHaveTextContent(text);
        });
    });
});
