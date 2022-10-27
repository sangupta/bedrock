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
