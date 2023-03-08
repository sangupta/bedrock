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
