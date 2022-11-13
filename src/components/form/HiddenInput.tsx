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
 
 interface HiddenInputProps extends BaseProps {
 
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
 }
 
 /**
  * The `input type='color'` component.
  * 
  * @author sangupta
  */
 export default class HiddenInput extends React.PureComponent<HiddenInputProps> {
 
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
             type='hidden'
             {...extraProps}
             valueConverter={this.handleValueConversion}
             value={value}
             hasValue={this.hasValue}>
             {children}
         </BaseInput>
     }
 
 }
 