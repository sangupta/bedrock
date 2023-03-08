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
 
 export interface TelInputProps extends BaseProps {
 
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
      * Specify the role for the tel input
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
 export default class TelInput extends React.PureComponent<TelInputProps> {
 
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
             type='tel'
             {...extraProps}
             valueConverter={this.handleValueConversion}
             value={value}
             hasValue={this.hasValue}>
             {children}
         </BaseInput>
     }
 
 }
 