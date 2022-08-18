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

interface HttpLoaderProps {
    httpCallInvoker: () => Promise<any>;

    /**
     * Rendered while data is loading
     */
    whenLoad: React.ReactNode | (() => React.ReactNode);

    /**
     * Rendered when we have an error loading data
     */
    whenError: React.ReactNode | ((e: any) => React.ReactNode);

    /**
     * Called when we have an error fetching data
     */
    onError?: (e: any) => void;

    /**
     * Rendered when we have success receiving data
     */
    whenSuccess: (data: any) => React.ReactNode;

    /**
     * Called when we have a success and receive data
     */
    onDataSuccess?: (data: any) => void;
}

interface HttpLoaderState {
    loading: boolean;
    error: boolean;
    errorData?: any;
    data?: any;
}

export default class HttpLoader extends React.Component<HttpLoaderProps, HttpLoaderState> {

    constructor(props: HttpLoaderProps) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            data: null
        }
    }

    componentDidMount = async () => {
        try {
            const result = await this.props.httpCallInvoker();
            this.setState({ loading: false, error: false, errorData: undefined, data: result });
            if (this.props.onDataSuccess) {
                this.props.onDataSuccess(result);
            }
        } catch (e) {
            this.setState({ loading: false, error: true, errorData: e, data: null });
            if (this.props.onError) {
                this.props.onError(e);
            }
        }
    }

    render(): React.ReactNode {
        const { loading, error, errorData, data } = this.state;

        if (loading) {
            if (typeof this.props.whenLoad === 'function') {
                return this.props.whenLoad();
            }

            return this.props.whenLoad;
        }

        if (error) {
            if (typeof this.props.whenError === 'function') {
                return this.props.whenError(errorData);
            }

            return this.props.whenError;
        }

        return this.props.whenSuccess(data);
    }

}
