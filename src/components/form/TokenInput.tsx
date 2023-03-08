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

import React from 'react';
import { BaseProps } from '../../types';
import { buildCss, getUniqueString, isDigit } from '../../Utils';
import HBox from '../layout/HBox';

export interface TokenInputProps extends BaseProps {
    /**
     * The number of digits the token will contain
     */
    numChars: number;

    /**
     * Do we need to mask input?
     */
    maskInput?: boolean;

    /**
     * The masking character to be used. Only useful when
     * `maskInput` is set to `true`.
     */
    maskChar?: string;

    allowCharacters?: boolean;

    onSubmit: (token: string) => void;

    onChange?: (token: string, valid: boolean) => void;

}

interface TokenInputState {
    value: Array<string>;
    currentIndex: number;
}

export default class TokenInput extends React.PureComponent<TokenInputProps, TokenInputState> {

    static defaultProps = {
        allowCharacters: false
    }

    boxIds: Array<string>;

    constructor(props: TokenInputProps) {
        super(props);

        this.boxIds = [];
        for (let index = 0; index < props.numChars; index++) {
            this.boxIds.push(getUniqueString('id-'));
        }

        this.state = {
            value: new Array(props.numChars),
            currentIndex: -1
        }
    }

    handleDigitUpdate = (index: number, digit: string | number): void => {
        const { value } = this.state;
        value[index] = ('' + digit).trim();
        this.setState({ value: value, currentIndex: index });

        // set next box in focus
        this.setFocus(index);

        // check if all indexes have a value
        for (let index = 0; index < this.props.numChars; index++) {
            if (value[index] === '') {
                // not every index has a value
                return;
            }
        }

        // everything has a value
        if (this.props.onChange) {
            const finalValue = value.join('');
            this.props.onChange(finalValue, finalValue.length === this.props.numChars);
        }
    }

    setFocus = (index: number): void => {
        if (index <= 0) {
            index = 0;
        }

        if ((index + 1) < this.props.numChars) {
            document.getElementById(this.boxIds[index + 1])?.focus();
        }
    }

    render(): React.ReactNode {
        const { numChars, allowCharacters, maskInput } = this.props;
        if (numChars <= 0) {
            return null;
        }

        const { value, currentIndex } = this.state;

        const boxes = [];
        for (let index = 0; index < numChars; index++) {
            const digit = (value[index] || '').trim();
            const hasValue = digit !== '';

            boxes.push(<DigitBox key={'box' + index}
                id={this.boxIds[index]}
                focus={index === (currentIndex + 1)}
                index={index} allowChars={allowCharacters}
                onUpdate={this.handleDigitUpdate}
                value={maskInput ? (hasValue ? '*' : '') : digit} />)
        }

        const css = buildCss('token-input-container', this.props.className);

        return <HBox className={css}>
            {boxes}
        </HBox>
    }
}

interface DigitBoxProps {
    id: string;
    index: number;
    onUpdate: (index: number, digit: string) => void;
    allowChars: boolean;
    value: string;
    focus?: boolean;
}

class DigitBox extends React.PureComponent<DigitBoxProps> {

    static defaultProps = {
        focus: false
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            // delete the value
            this.props.onUpdate(this.props.index, '');
            return;
        }

        // value exists, parse and update
        const digit: string = this.props.allowChars ? value : (isDigit(value) ? value : '');
        if (digit === '') {
            // invalid value, behave as if nothing happened
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        this.props.onUpdate(this.props.index, digit);
    }

    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code !== 'Backspace') {
            // do nothing
            return;
        }

        // see if we have a value, if we have something delete it
        if (this.props.value === '') {
            console.log('delete previous box');
            return;
        }
    }

    render(): React.ReactNode {
        return <input type='text'
            className='token-input-box'
            id={this.props.id}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            autoComplete='false'
            autoCapitalize='false'
            value={this.props.value}
            maxLength={1}
            spellCheck={false} />
    }

}
