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

type BoxJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

type BoxAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';