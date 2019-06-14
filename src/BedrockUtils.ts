export default class BedrockUtils {
    static invoke(fn: Function, thisRef: any = null, args: any = null) {
        if (fn && typeof fn === 'function') {
            fn.apply(thisRef, args);
        }
    }
}
