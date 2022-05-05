import React from 'react';
import { getFileIcon } from '../../Utils';

interface FileIconProps {
    isFolder?: boolean;
    mimeType?: string;
    extension: string;
}

export default class FileIcon extends React.PureComponent<FileIconProps> {

    render() {
        const { isFolder, mimeType, extension } = this.props;
        const icon = getFileIcon(isFolder, mimeType, extension);
        return <i className={'format-file-icon ' + (icon || '')} />
    }

}
