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

export function getByClassName(container: HTMLElement, className: string): HTMLCollectionOf<Element> {
    return container.getElementsByClassName(className);
}

export function getByTagName(container: HTMLElement, tagName: string): HTMLCollectionOf<Element> {
    return container.getElementsByTagName(tagName);
}

export function getFirstByTagName(container: HTMLElement, tagName: string): Element {
    const elements = container.getElementsByTagName(tagName);
    if (elements && elements.length > 0) {
        return elements[0];
    }

    return undefined;
}

export function getFirstByClassName(container: HTMLElement, className: string): Element {
    const elements = container.getElementsByClassName(className);
    if (elements && elements.length > 0) {
        return elements[0];
    }

    return undefined;
}
