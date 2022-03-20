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
                if(typeof value === 'boolean') {
                    if(value) {
                        css += ' ' + key;
                        return;
                    }
                }

                // if value is `string` or `number`, use it as `suffix`
                if(typeof value === 'string' || typeof value === 'number') {
                    css += ' ' + key + value;
                    return;
                }

                // not yet know how to handle this key, skip for now
            });
        }
    });

    return css.trim();
}
