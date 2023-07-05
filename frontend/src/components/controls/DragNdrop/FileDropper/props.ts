import { ReactNode } from "react";

export interface FileDropperProps {
    display?    : 'list' | 'card',
    onAdd?      : (files : File[]) => any,
    itemFormat? : (file : File, index : number) => ReactNode,
    onRemove?   : (index : number) => any,
    accept?     : string,
}