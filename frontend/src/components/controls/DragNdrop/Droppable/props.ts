import { ClickHandler, DragDropHandler } from "@/types/EventHandlers";
import { ReactNode } from "react";

export interface DroppableProps {
    onDrop?     : DragDropHandler,
    onDragEnter?: DragDropHandler,
    onDragLeave?: DragDropHandler,
    onDragOver? : DragDropHandler,
    onClick?    : ClickHandler,
    className?  : string,
    content?    : (dragging: boolean) => ReactNode,
}