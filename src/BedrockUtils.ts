/**
 * An interface with no properties to signal
 * that a component either does not need a `prop`
 * or does not store a `state` or may be both.
 */
export interface NoProps {

}

export type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

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
     * Data attributes that to be added to the top-most HTML element 
     * emitted out by the component. The attributes are specified as 
     * an `object` where the key is prefixed with `data-` keyword and 
     * the value is used as is. For example, `{ name : 'bedrock' }` 
     * which will render as `data-name='bedrock'`.
     */
    data?: any;

    /**
     * Children for this component
     */
    children?: React.ReactNode;

    /**
     * A unique identifier that is sent back to the event handlers
     * when ever an event happens. This is particularly useful to have
     * generic event handlers bound to components when rendered as a
     * list.
     */
    eventID?: string;
}

/**
 * Copies given properties from component properties so that
 * any additional prop not part of parent can be applied on the
 * resulting HTML component.
 * 
 * The basic `id` property, if present is copied.
 * 
 * If no `names` are provided, the only `id` is copied.
 * 
 * For all names provided, each prop that matches in the `props`
 * is copied if the value is specified and is `truthy`.
 * 
 * @param props the React component properties: `this.props`
 * 
 * @param names the `string` based names to be copied from `props`
 */
export function getProps(props: any, names: string[] = []): any {
    const result: any = {};
    if (!props) {
        return result;
    }

    // copy the ID if present
    if (props.id) {
        result['id'] = props.id;
    }

    // check if names are available
    if (!names || names.length === 0) {
        return result;
    }

    // iterate over
    for (let index: number = 0; index < names.length; index++) {
        let name: string = names[index];
        let prop = props[name];
        if (prop) {
            result[name] = prop;
        }
    }

    return result;
}

/**
 * Convenience function to merge various CSS classname attributes
 * based on the values that are passed as arguments.
 * 
 * Will merge the CSS classname if one of the conditions below 
 * is met:
 * 
 * 1. The argument is a defined value
 * 2. The argument is not empty
 * 3. The argument is a vanilla string
 * 4. If the argument is an object, then:
 *   a) Add the key if the value is boolean
 *   b) Add the key with value, if the value is other than boolean
 * 
 * @param args 
 */
export function mergeCSS(...args: any[]): string {
    let final: string = '';
    for (let index = 0; index < args.length; index++) {
        let arg = args[index];

        // check if the argument is sane
        if (!arg) {
            continue;
        }

        // string CSS values are added as is
        if (typeof arg === 'string') {
            final += ' ' + arg;
            continue;
        }

        // if the value is an object, check for each key and
        // the boolean value associated with it
        if (typeof arg === 'object') {
            let keys = Object.keys(arg);
            for (let kindex = 0; kindex < keys.length; kindex++) {
                let key = keys[kindex]
                let value = arg[key];

                if (value) {
                    if (typeof value === 'boolean') {
                        final += ' ' + key
                    } else {
                        final += ' ' + key + value;
                    }
                }
            }
        }
    }

    return final;
}

// export function invokeFn(fn: Function, thisRef: any = null, args: any = null) {
//     if (fn && typeof fn === 'function') {
//         fn.apply(thisRef, args);
//     }
// }

/**
 * List of all coutnries that can be used in a
 * `Select` form element.
 */
export const COUNTRIES = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua & Deps',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Rep',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo {Democratic Rep}',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland {Republic}',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea North',
    'Korea South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar, {Burma}',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'St Kitts & Nevis',
    'St Lucia',
    'Saint Vincent & the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

export const ONE_SECOND: number = 1000;

export const ONE_MINUTE: number = 60 * 1000;

export const ONE_HOUR: number = 60 * ONE_MINUTE;

export const ONE_DAY: number = 24 * ONE_HOUR;

export const ONE_WEEK: number = 7 * ONE_DAY;

export const ONE_MONTH: number = 30 * ONE_DAY;

export const ONE_YEAR: number = 365 * ONE_DAY;
