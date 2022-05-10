interface Asset {
    id: string;
    name: string;
    extension: string;
    created: number;
    isFolder: boolean;
    isSymLink: boolean;
    mimeType?: string;
    modified: number;
    path: string;
    permissions?: string;
    size: number;
}
