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
 * Function called by form fields to update the form with
 * field name, value and validity status.
 */
export type FormUpdator = (formName: string, propName: string, value: any, isValid: boolean) => void;

/**
 * Strongly type data that can be stored inside
 * the `context`.
 */
export interface FormContextData {
    formName: string;
    updateForm: FormUpdator
}

/**
 * Defines a validator object. It includes a validator function
 * and a corresponding message.
 */
export interface FormValueValidator<T> {
    test: (value: T) => boolean;

    errorMessage: string;
}

export interface FormFieldPayload<T> {
    value: T;
    isValid: boolean;
    isRequired: boolean;
    errorMessage: string;
}