import React from 'react';
import { asByteSize } from '../../Utils';

interface ByteSizeProps {
    bytes: any;
}

export default class ByteSize extends React.Component<ByteSizeProps> {

    render() {
        const formatted = asByteSize(this.props.bytes);
        return <span className='format-byte-size' title={'' + this.props.bytes}>{formatted}</span>
    }

}
