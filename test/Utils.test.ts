import { describe, expect, test } from '@jest/globals';
import { buildCss } from '../src/Utils';

describe('Test buildCss function', () => {

    test('with zero arguments', () => {
        expect(buildCss()).toBe('');
    });

});
