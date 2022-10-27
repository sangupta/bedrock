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

    render(): React.ReactNode {
        return <div className={"spinner-border text-" + this.props.variant} role="status">
            {this.props.ariaLabel ? <span className="visually-hidden">{this.props.ariaLabel}</span> : null}
        </div>
    }
}
