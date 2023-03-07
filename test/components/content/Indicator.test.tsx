import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Indicator } from './../../../src'

describe('<Indicator />', () => {

    test('Default render', () => {
        render(<Indicator data-testid='test' />)
        expect(screen.getByTestId('test')).toBeDefined();
    });

});

