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
 * The following declaration takes care of eliminating
 * Typescript compiler warning around `window.crypto.randomUUID()`
 * not being available as a function.
 */
declare global {
    interface Crypto {
        randomUUID: () => string;
    }
}

/**
 * The following constants refer to size in bytes.
 */
const KB = 1024;
const MB = KB * KB;
const GB = KB * MB;
const TB = KB * GB;
const PB = KB * TB;

/**
 * Constants to define standard (and approximate) time intervals.
 */
const ONE_SECOND: number = 1000;
const ONE_MINUTE: number = 60 * ONE_SECOND;
const ONE_HOUR: number = 60 * ONE_MINUTE;
const ONE_DAY: number = 24 * ONE_HOUR;
const ONE_WEEK: number = 7 * ONE_DAY;
const ONE_MONTH: number = 30 * ONE_DAY;
const ONE_YEAR: number = 365 * ONE_DAY;

/**
 * English names for months
 */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const EXTENSION_MONACO_LANG_MAP: { [key: string]: string } = {
    'ts': 'typescript',
    'tsx': 'typescript',
    'js': 'javascript',
    'jsx': 'javascript',
    'go': 'go',
    'java': 'java',
    'xml': 'xml',
    'jsonl': 'json',
    'yaml': 'yaml',
    'swift': 'swift',
    'rb': 'ruby',
    'css': 'css'
}

/**
 * File icons mapped to the extension they should be used in.
 * 
 */
const ICON_EXTENSION_MAP: { [key: string]: Array<string> } = {
    'bi bi-file-zip': ['zip', 'rar', '7z', 'gz', 'war', 'ear', 'jar', 'asar', 'tar', 'tgz'],
    'bi bi-file-text': ['text', 'txt', 'log'],
    'bi bi-file-word': ['doc', 'docx'],
    'bi bi-file-ppt': ['ppt', 'pptx'],
    'bi bi-file-font': ['eot', 'ttf', 'woff', 'woff2'],
    'bi bi-file-pdf': ['pdf'],
    'bi bi-file-diff': ['diff'],
    'bi bi-file-code': [
        'java', 'c', 'cpp', 'swift', 'scala', 'py', 'json', 'xml', 'html', 'go', 'yml', 'properties', 'js', 'jsx', 'ts', 'tsx',
        'css', 'yaml'
    ],
    'bi bi-file-binary': ['bin', 'dat', 'dump', 'dylib', 'dll'],
    'bi bi-file-excel': ['xls', 'xlsx'],
    'bi bi-file-richtext': ['rtf'],
    'bi bi-file-spreadsheet': ['csv', 'tsv', 'delim'],
    'bi bi-file-play': ['mp4', 'mkv', 'flv'],
    'bi bi-file-music': ['mp3', 'm4a', 'wav'],
    'bi bi-file-lock': ['lock'],
    'bi bi-markdown': ['md'],
    'bi bi-hash': ['md5', 'sha', 'sha256'],
    'bi bi-journal-text': ['log'],
    'bi bi-file-image': ['png', 'gif', 'jpg', 'jpeg', 'ico', 'tiff', 'bmp', 'webp']
}

/**
 * Map of extension to it's file icon.
 */
const EXTENSION_ICON_MAP: MapStringString = reverseIconMap();

/**
 * Function that converts a map of <string, string[]>
 * into a map of <string, string> by reversing and expanding
 * it.
 * 
 * @returns 
 */
export function reverseIconMap(): MapStringString {
    const createdMap: MapStringString = {};

    const icons = Object.keys(ICON_EXTENSION_MAP);
    icons.forEach(icon => {
        const array = ICON_EXTENSION_MAP[icon];

        array.forEach(extension => {
            createdMap[extension] = icon;
        });
    });

    return createdMap;
}

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

export function buildProps(...args: any[]): object {
    const props = {};

    if (!args || args.length === 0) {
        return props;
    }

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
                props[arg] = arg;
            }
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
                        props[key] = value
                        return;
                    }
                }

                // if value is `string` or `number`, use it as `suffix`
                if ((typeof value === 'string' && value !== '') || typeof value === 'number') {
                    props[key] = value;
                    return;
                }

                // not yet know how to handle this key, skip for now
            });
        }
    });

    return props;
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
    if (window.crypto && window.crypto.randomUUID && typeof window.crypto.randomUUID === 'function') {
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

export function asTimeAgo(millis: number): string {
    const current: number = Date.now();
    const delta: number = current - millis;
    if (delta < 0) {
        return '' + millis;
    }

    if (delta < ONE_MINUTE) {
        return "moments ago";
    }

    if (delta < ONE_HOUR) {
        return formatAgo(delta, ONE_MINUTE, "minute");
    }

    if (delta < ONE_DAY) {
        return formatAgo(delta, ONE_HOUR, "hour");
    }

    if (delta < ONE_WEEK) {
        return formatAgo(delta, ONE_DAY, "day");
    }

    if (delta < ONE_MONTH) {
        return formatAgo(delta, ONE_WEEK, "week");
    }

    if (delta < ONE_YEAR) {
        return formatAgo(delta, ONE_MONTH, "month");
    }

    return formatAgo(delta, ONE_YEAR, "year");
}

export function formatAgo(delta: number, unit: number, suffix: string): string {
    const value = Math.floor(delta / unit);

    if (value <= 1) {
        if (suffix === 'hour') {
            return "an " + suffix + " ago";
        }
        return "a " + suffix + " ago";
    }

    return value + " " + suffix + "s ago";
}

/**
 * Convert a number representing bytes to a human readabale
 * form.
 * 
 * @param num the number of bytes
 * 
 * @returns human readable string form
 */
export function asByteSize(num: number): string {
    if (num < KB) {
        return num + ' bytes';
    }

    if (num < MB) {
        return roundedDecimal(num / KB) + ' KB';
    }

    if (num < GB) {
        return roundedDecimal(num / MB) + ' MB';
    }

    if (num < TB) {
        return roundedDecimal(num / GB) + ' GB';
    }

    if (num < PB) {
        return roundedDecimal(num / TB) + ' TB';
    }

    return roundedDecimal(num / PB) + ' PB'
}

export function roundedDecimal(num: number) {
    return Math.round(num * 10) / 10;
}

export function asDate(value: number): string {
    const date = new Date(value);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return MONTHS[month] + ' ' + pad(day, 2, '0') + ', ' + year;
}

export function asTime(value: number): string {
    const date = new Date(value);
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return pad(hour, 2, '0') + ':' + pad(min, 2, '0') + ':' + pad(sec, 2, '0');
}

export function asDateTime(value: number): string {
    const date = new Date(value);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return MONTHS[month] + ' ' + pad(day, 2, '0') + ', ' + year + ' ' + pad(hour, 2, '0') + ':' + pad(min, 2, '0') + ':' + pad(sec, 2, '0');
}

export function pad(str: string | number, length: number, fill: string): string {
    const value = '' + str;
    const delta = length - value.length;
    if (delta <= 0) {
        return value;
    }

    if (fill.length > 1) {
        fill = fill.charAt(0);
    }

    return fill.repeat(delta) + value;
}

export function getAssetIcon(asset: Asset): string {
    if (asset.isFolder) {
        return 'bi bi-folder-fill';
    }

    const mime = asset.mimeType;
    if (mime) {
        if (mime.startsWith('image/')) {
            return 'bi bi-file-image';
        }

        if (mime.startsWith('video/')) {
            return 'bi bi-file-play';
        }

        if (mime === 'text/plain') {
            return 'bi bi-file-text';
        }

        if (mime === 'text/csv') {
            return 'bi bi-file-spreasheet';
        }
    }

    const extension = asset.extension?.startsWith('.') ? asset.extension.substring(1) : (asset.extension || '')
    const lowerCaseExtension = extension.toLowerCase();
    return EXTENSION_ICON_MAP[lowerCaseExtension] || 'bi bi-file';
}

export function asChar(chr: number): string {
    if (chr === -1) {
        return '';
    }

    if (chr <= 32) {
        return '.';
    }

    return String.fromCharCode(chr);
}

export function decipherMonacoLanguage(extension: string, mimeType: string): string {
    let language = getMonacoLanguageByMimeType(mimeType);

    if (!language || language === 'text') {
        if (!extension) {
            return language;
        }

        if (extension.startsWith('.')) {
            extension = extension.substring(1);
        }

        const extLang = EXTENSION_MONACO_LANG_MAP[extension.toLowerCase()];
        if (extLang) {
            return extLang;
        }
    }

    return language;
}

export function getMonacoLanguageByMimeType(mimeType: string): string {
    if (!mimeType) {
        return '';
    }

    if (mimeType.startsWith('text/plain')) {
        return 'text';
    }

    if (mimeType.startsWith('application/json')) {
        return 'json';
    }

    if (mimeType.startsWith('text/css')) {
        return 'css';
    }

    return '';
}
