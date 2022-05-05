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

interface NoAttributes {

}

/**
 * Usual variants that apply mostly across Bootstrap.
 */
type Variant = 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning' | 'light' | 'dark';

/**
 * Ways in which something can be aligned respective to
 * the container.
 */
type Alignment = 'start' | 'center' | 'end';

/**
 * Applicable text transformations
 */
type TextTransform = 'lowercase' | 'uppercase' | 'capitalize';

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 */
type FlexAlignContent =
    // positional
    Alignment | 'flex-start' | 'flex-end'

    // normal
    | 'normal'

    // baseline
    | 'baseline' | 'first baseline' | 'last baseline'

    // global values
    | 'inherit' | 'initial' | 'revert' | 'unset'

    // overflow alignment
    | 'safe center' | 'unsafe center'

    // distributed alignment
    | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

type FlexJustifyContent = FlexAlignContent | 'left' | 'right';

type FlexDirection = 'row' | 'column';

type BoxJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

type BoxAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

type ComponentSize = 'default' | 'small' | 'large';

/**
 * Refer https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 * for more details
 */
type ButtonType = 'reset' | 'submit' | 'button';

/**
 * Map where both key and value are strings.
 * 
 */
type MapStringString = { [key: string]: string };

type MapStringAny = { [key: string]: any };

type MapStringBoolean = { [key: string]: boolean };

type MapStringMapStringBoolean = { [key: string]: MapStringBoolean };

/**
 * Function called by form fields to update the form with
 * field name, value and validity status.
 */
type FormUpdator = (formName: string, propName: string, value: any, isValid: boolean) => void;

/**
 * Strongly type data that can be stored inside
 * the `context`.
 */
interface FormContextData {
    formName: string;
    updateForm: FormUpdator
}

/**
 * Defines a validator object. It includes a validator function
 * and a corresponding message.
 */
interface Validator<T> {
    test: (value: T) => boolean;

    errorMessage: string;
}

interface FormFieldPayload<T> {
    value: T;
    isValid: boolean;
    isRequired: boolean;
    errorMessage: string;
}

type DateTimeFormatType = 'date' | 'date-time' | 'time';

type DataColumnType = 'string' | 'bytes' | 'time-ago' | 'time-ago' | DateTimeFormatType | 'icon';

type ValueType = '' | 'seconds' | 'millis' | 'string' | 'number' | 'boolean';

interface DataColumnFormat {
    attributeName: string;

    title: string;

    formatAs?: DataColumnType;

    valueType?: ValueType;

    displayColumn?: (item: any) => boolean;

    className?: string;

    getValue?: (item: any) => any;
}