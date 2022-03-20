/**
 * The usual `props` applied across all components.
 * 
 */
interface BaseProps {
    /**
     * Optional CSS class applied to the top-most element of
     * the component, unless, specified otherwise.
     */
    className?: string;
}

/**
 * Usual variants that apply mostly across Bootstrap
 */
type Variant = 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning' | 'light' | 'dark';
