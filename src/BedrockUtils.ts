/**
 * Basic properties every Bedrock component needs
 * to implement. These are the properties all HTML
 * elements possess and are not component specific.
 * 
 */
export interface BaseProps {
    /**
     * Custom CSS classes to be applied to the top-most HTML element
     * emitted out by the component.
     */
    className?: string;

    /**
     * Unique identifier to be added to the top-most HTML element
     * emitted out by the component.
     */
    id?: string;

    /**
     * Data attributes that can be passed to be added to the top-most
     * HTML element emitted out by the component. The attributes are
     * specified as an `object` where the key is prefixed with `data-`
     * keyword and the value is used as is. For example, `{ name : 'bedrock' }` 
     * which will render as `data-name='bedrock'`.
     */
    data?: any;
}

export function mergeCSS(...args: any[]): string {
    let final: string = '';
    for (let index = 0; index < args.length; index++) {
        let arg = args[index];

        // check if the argument is sane
        if(!arg) {
            continue;
        }

        // string CSS values are added as is
        if (typeof arg === 'string') {
            final += ' ' + arg;
            continue;
        }

        // if the value is an object, check for each key and
        // the boolean value associated with it
        if(typeof arg === 'object') {
            let keys = Object.keys(arg);
            for(let kindex = 0; kindex < keys.length; kindex++) {
                let key = keys[kindex]
                let value = arg[key];

                if(!value) {
                    continue;
                }

                final += ' ' + key;
            }
        }
    }

    return final;
}

export function invokeFn(fn: Function, thisRef: any = null, args: any = null) {
    if (fn && typeof fn === 'function') {
        fn.apply(thisRef, args);
    }
}
