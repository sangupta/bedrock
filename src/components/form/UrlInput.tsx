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
 import { BaseProps, ComponentSize } from '../../types';
 import BaseInput from './BaseInput';
 import { FormFieldPayload } from './FormTypes';
 
 interface UrlInputProps extends BaseProps {
 
     /**
      * The initial value of the component 
      */
     value?: string;
 
     /**
      * The form to bind to, unless its the nearest ancestoral form
      */
     form?: string;
 
     /**
      * The attribute name to use when storing the value in `Form`
      */
     name: string;
 
     /**
      * Specify the role for the checkbox
      */
     role?: string;
 
     /**
      * Size for the component
      */
     size?: ComponentSize;
 
     /**
      * Handler invoked when value of this field changes
      */
     onChange?: (payload: FormFieldPayload<string>, e: React.ChangeEvent<HTMLInputElement>) => void;
 }
 
 /**
  * The `input type='date'` component.
  * 
  * @author sangupta
  */
 export default class UrlInput extends React.PureComponent<UrlInputProps> {
 
     static defaultProps = {
         value: ''
     }
 
     handleValueConversion(e: React.ChangeEvent<HTMLInputElement>): string {
         return e.target.value;
     }
 
     hasValue(value: string): boolean {
         return !!value;
     }
 
     render(): React.ReactNode {
         const { children, value, ...extraProps } = this.props;
 
         return <BaseInput<string>
             type='url'
             {...extraProps}
             valueConverter={this.handleValueConversion}
             value={value}
             hasValue={this.hasValue}>
             {children}
         </BaseInput>
     }
 
 }
 