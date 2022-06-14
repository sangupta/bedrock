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

import React from 'react'

interface SpinnerProps {
    ariaLabel?: string;
    variant?: Variant;
}

/**
 * Spinners can be used to show the loading state in your projects.
 * 
 * @author sangupta
 */
export default class Spinner extends React.Component<SpinnerProps> {

    static defaultProps = {
        variant: 'primary'
    }

    render() {
        return <div className={"spinner-border text-" + this.props.variant} role="status">
            {this.props.ariaLabel ? <span className="visually-hidden">{this.props.ariaLabel}</span> : null}
        </div>
    }
}
