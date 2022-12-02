import { describe, expect, test } from '@jest/globals';
import { buildCss } from '../src/Utils';

describe('Test buildCss function', () => {

    test('with zero arguments', () => {
        expect(buildCss()).toBe('');
    });

    test('with basic string args', () => {
        expect(buildCss('a1', ' a2', ' a3 ')).toBe('a1 a2 a3');
    });

    test('with one undefined and one null arg', () => {
        expect(buildCss('a1', ' a2', undefined, null, ' a3 ')).toBe('a1 a2 a3');
    });

    test('with numbers as args', () => {
        expect(buildCss(1, 2, 3)).toBe('1 2 3');
    });

    test('with boolean as args', () => {
        expect(buildCss('a1', true, false, 'a2')).toBe('a1 true false a2');
    });

    test('with object as args', () => {
        expect(buildCss({})).toBe('');
    });

    test('with object as args', () => {
        expect(buildCss({ a1: true, b1: false, a2: '-primary' })).toBe('a1 a2-primary');
    });

});
