/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


/**
 * Function that allows us to build CSS using rules defined as:
 * 
 * 1. Any string argument is added to the list
 * 2. Any `undefined` or `null` argument is skipped
 * 3. A `number` is converted to `string` and then appended to class list
 * 4. A dictionary is parsed as under
 *   a) A value of type `boolean` type signifies if the `key` needs to be added or not
 *   b) A value of type `string` is suffixed along with `key` and added
 * 
 * @param args 
 * @returns 
 */
export function buildCss(...args: any[]): string {
    if (!args || args.length === 0) {
        return '';
    }

    let css = '';
    args.forEach((arg: any) => {
        // undefined/null values are skipped
        if (arg === undefined || arg === null) {
            return;
        }

        // a string is appended as is
        if (typeof arg === 'string') {
            arg = arg.trim();

            // only if not empty
            if (arg) {
                css += ' ' + arg;
            }
            return;
        }

        // number is added as is
        if (typeof arg === 'number') {
            css += ' ' + arg;
            return;
        }


        // boolean used as is
        if (typeof arg === 'boolean') {
            css += ' ' + arg;
            return;
        }

        // is a dictionary
        if (typeof arg === 'object') {
            const keys = Object.keys(arg);
            if (!keys || keys.length === 0) {
                return;
            }

            // run over all keys of the object
            keys.forEach((key: string) => {
                const value = arg[key];

                // if value is `boolean` and `true`, include the key
                if (typeof value === 'boolean') {
                    if (value) {
                        css += ' ' + key;
                        return;
                    }
                }

                // if value is `string` or `number`, use it as `suffix`
                if ((typeof value === 'string' && value !== '') || typeof value === 'number') {
                    css += ' ' + key + value;
                    return;
                }

                // not yet know how to handle this key, skip for now
            });
        }
    });

    return css.trim();
}

/**
 * Reduce a validity map of {formChild:boolean} to find out
 * if the entire form is valid or not.
 * 
 * @param map 
 * @returns 
 */
export function reduceValidityMap(map: MapStringBoolean): boolean {
    if (!map) {
        return true;
    }

    for (const [key, value] of Object.entries(map)) {
        if (!!!value) {
            return false;
        }
    }

    return true;
}

/**
 * Validate a field value against an array of validators.
 * 
 * @param value the value to validate
 * 
 * @param validators array of `Validator`s.
 * 
 * @returns `undefined` if all validators pass, else returns `Validator.errorMessage`
 */
export function validateField(value: any, validators: Array<Validator<any>>): string {
    if (!validators || validators.length === 0) {
        return undefined;
    }

    for (let index = 0; index < validators.length; index++) {
        const validator = validators[index];

        const isValid = validator.test(value);
        if (!isValid) {
            // test failed
            return validator.errorMessage;
        }
    }

    // all tests pass
    return undefined;
}

/**
 * Replace the character at index in a given string.
 * 
 * @param str the original string
 * 
 * @param index the index (0-based) for the character to remove
 * 
 * @param replacement usually single character to put in place.
 * 
 * @returns the updated string
 */
export function replaceAt(str: string, index: number, replacement: string): string {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

/**
 * Returns a unique string. Generates a UUID v4 with
 * optional prefix.
 * 
 * @returns 
 */
export function getUniqueString(prefix: string = ''): string {
    if (window.crypto && window.crypto.randomUUID) {
        return prefix + window.crypto.randomUUID();
    }

    return prefix + uuidv4();
}

/**
 * Generate a random UUID v4 using `crypto.getRandomValues()`
 * 
 * @returns 
 */
function uuidv4() {
    return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

/**
 * Check if the given string value is a single digit or not.
 * 
 * @param value the string character
 * 
 * @returns `true` when digit, `false` otherwise
 */
export function isDigit(value: string): boolean {
    if (value && value.length === 1) {
        return !isNaN(Number(value));
    }

    return false;
}
