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
    data?:any;
}

export default class BedrockUtils {

    static invoke(fn: Function, thisRef: any = null, args: any = null) {
        if (fn && typeof fn === 'function') {
            fn.apply(thisRef, args);
        }
    }
}
