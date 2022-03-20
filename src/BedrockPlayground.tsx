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
 * This playground allows to test the components directly
 * in the browser as they are being developed. 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/typography/Heading';

function test() {
    alert('hello world');
}

// modify the structure below to test your component
const playground = <>
    <Heading data-test='bedrock' size={3} className='temp' asParagraph={true} displayHeading={true}>Hello World</Heading>
</>

// render the playground
ReactDOM.render(playground, document.getElementById('root'));
