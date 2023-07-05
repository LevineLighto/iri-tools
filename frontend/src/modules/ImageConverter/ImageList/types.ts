export interface OnGoingObject {
    file        : File,
    abort       : AbortController,
    completed   : boolean,
    result?     : Blob,
    error?      : Error,
}

export interface CompletedObject {
    file        : File,
    result?     : Blob,
    error?      : Error,
}

export interface ListItemProps {
    file        : File,
}