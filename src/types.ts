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


/**
 * The usual `props` applied across all components.
 * 
 */
export interface BaseProps {
    /**
     * Optional CSS class applied to the top-most element of
     * the component, unless, specified otherwise.
     */
    className?: string;

    children?: React.ReactNode
}

/**
 * A simple interface to indicate that there are no
 * attributes to the type.
 */
export interface NoAttributes {

}

/**
 * Usual variants that apply mostly across Bootstrap.
 */
export type Variant = 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning' | 'light' | 'dark';

/**
 * Ways in which something can be aligned respective to
 * the container.
 */
export type Alignment = 'start' | 'center' | 'end';

/**
 * Applicable text transformations
 */
export type TextTransform = 'lowercase' | 'uppercase' | 'capitalize';

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 */
export type FlexAlignContent =
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

export type FlexJustifyContent = FlexAlignContent | 'left' | 'right';

export type FlexDirection = 'row' | 'column';

export type BoxJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type BoxAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type ComponentSize = 'default' | 'small' | 'large';

/**
 * Refer https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 * for more details
 */
export type ButtonType = 'reset' | 'submit' | 'button';

/**
 * Map where both key and value are strings.
 * 
 */
export type MapStringString = { [key: string]: string };

export type MapStringAny = { [key: string]: any };

export type MapStringBoolean = { [key: string]: boolean };

export type MapStringMapStringBoolean = { [key: string]: MapStringBoolean };

export type HtmlInputType = 'text' | 'password' | 'number' | 'checkbox' | 'color' | 'date' | 'email'
    | 'hidden' | 'url' | 'time' | 'tel' | 'range';
