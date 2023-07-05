'use client';

import { FC, useCallback, useRef, useState } from "react"
import { DroppableProps as Props } from "./props"
import { Icon } from "@/components/images";
import { DragDropHandler } from "@/types/EventHandlers";

export const Droppable : FC<Props> = ({
    onDragOver,
    onDrop,
    onClick,
    content,
    className = '',
}) => {
    const [inside, setInside] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    const handleDragOver = useCallback<DragDropHandler>(event => {
        event.preventDefault();

        if(typeof onDragOver == 'function') {
            onDragOver(event);
        }
        
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setInside(false);
        }, 200);

        if(inside) {
            return;
        }

        setInside(true);
    }, [onDragOver, timeout, inside]);

    const handleDrop = useCallback<DragDropHandler>(event => {
        event.preventDefault();
        if(typeof onDrop == 'function') {
            onDrop(event);
        }

        setInside(false);
    }, [onDrop]);

    return (
        <div
            onClick={onClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={className}
        >
            {
                typeof content == 'function' ?
                content(inside) :
                <Icon
                    icon={inside ? 'ArrowDown' : 'ArrowDownCircle'}
                    size="3x"
                />
            }
        </div>
    )
}