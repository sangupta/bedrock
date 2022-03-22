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

import React from 'react';
import { reduceValidityMap } from '../../Utils';

//
// FORM CONTEXT
// ------------------------------------------
// 

/**
 * Strongly type data that can be stored inside
 * the `context`.
 */
interface FormContextData {
    formName: string;
    updateForm: FormUpdator
}

/**
 * Default data to store in the `context`.
 */
const contextDefault: FormContextData = {
    formName: '',
    updateForm: (formName: string, propName: string, value: any, isValid: boolean) => { }
}

/**
 * The actual form context.
 */
export const FormContext = React.createContext(contextDefault);

//
// FORM COMPONENT
// ------------------------------------------
// 

/**
 * Props for the component.
 */
interface FormProps {
    onSubmit?: (data: any, isValid: boolean) => void;
    onUpdate?: (data: any, isValid: boolean) => void;
    name?: string;

    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoComplete?: string;
    noValidate?: boolean;
}

/**
 * The `form` component.
 * 
 */
export default class Form extends React.Component<FormProps> {

    /**
     * The name of the form as provided by user
     * or generated at runtime.
     */
    formName: string;

    /**
     * The payload to be used with context.
     */
    contextPayload: FormContextData;

    static formBuckets: MapStringAny = {}
    static fieldValidity: MapStringMapStringBoolean = {}
    static formComponents: MapStringAny = {}

    constructor(props: FormProps) {
        super(props);

        // define the form name that we will use throughout.
        // It does not change
        this.formName = props.name || 'form-' + Date.now();

        // create context data for this form
        this.contextPayload = {
            formName: this.formName,
            updateForm: this.updateFormData
        }

        // define buckets for this form
        Form.formBuckets[this.formName] = {};
        Form.fieldValidity[this.formName] = {};
        Form.formComponents[this.formName] = this.props.onUpdate;
    }

    componentWillUnmount() {
        delete Form.formBuckets[this.formName];
        delete Form.fieldValidity[this.formName];
        delete Form.formComponents[this.formName];
    }

    updateFormData = (formName: string, propertyName: string, value: any, isValid: boolean) => {
        // store data in correct bucket
        const bucket = Form.formBuckets[formName];
        bucket[propertyName] = value;

        // complete validity
        const validityBucket = Form.fieldValidity[this.formName] || {};
        Form.fieldValidity[this.formName] = validityBucket;
        validityBucket[propertyName] = isValid;

        // find the form handler to invoke onUpdate handler
        const handler = Form.formComponents[this.formName];
        if (handler && typeof handler === 'function') {
            handler(bucket, reduceValidityMap(validityBucket));
        }
    }

    handleFormSubmit = () => {
        if (this.props.onSubmit) {
            const payload = Form.formBuckets[this.formName];
            const validityBucket = Form.fieldValidity[this.formName] || {};
            this.props.onSubmit(payload, reduceValidityMap(validityBucket));
        }
    }

    render() {
        return <FormContext.Provider value={this.contextPayload}>
            <form name={this.formName} onSubmit={this.handleFormSubmit}
                autoCapitalize={this.props.autoCapitalize}
                autoComplete={this.props.autoComplete}
                noValidate={this.props.noValidate}>
                {this.props.children}
            </form>
        </FormContext.Provider>
    }

}
