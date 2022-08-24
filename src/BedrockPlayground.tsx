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
import Countdown from './components/content/Countdown';
import StockTicker from './components/content/StockTicker';
import Typewriter from './components/content/Typewriter';
import Form from './components/form/Form';
import NumberInput from './components/form/NumberInput';
import TextInput from './components/form/TextInput';
import TokenInput from './components/form/TokenInput';
import Heading from './components/typography/Heading';
import Para from './components/typography/Para';

function test() {

}

function handleFormSubmitParent(formData: any, valid: boolean): void {
    console.log('parent', JSON.stringify(formData), valid);
}

function handleFormSubmit(formData: any, valid: boolean): void {
    console.log('child', JSON.stringify(formData), valid);
}

function inputChange(...args) {
    console.log(args)
}

const playground = <>
    <StockTicker symbol='ADBE' currency='USD' currentPrice={412} prevClosingPrice={410} />
</>

// modify the structure below to test your component
const playground1 = <>
    <Heading data-test='bedrock' size={3} className='temp' asParagraph={true} displayHeading={true}>Hello World</Heading>
    <Para className='test-para' textAlign='center' wrapMode='wrap'>some text</Para>

    <Form name='parent' onUpdate={handleFormSubmitParent}>
    </Form>
    <Form name='child' onUpdate={handleFormSubmit}>
        <TextInput name='name' placeholder='name' required={true} maxLength={10} onChange={inputChange} />
        <br />
        <NumberInput name='age' placeholder='age' min={0} max={100} step={7} required={true} onChange={inputChange} />
        <br />
        <TokenInput numChars={4} onChange={inputChange} onSubmit={inputChange} maskInput={false} allowCharacters={false} />
    </Form>
    <Countdown start={0} stop={100} timeInMillis={150} />
    <br />
    <Typewriter message='Hello World!' timeInMillis={150} eraseMode={true} />
</>

// render the playground
ReactDOM.render(playground, document.getElementById('root'));
