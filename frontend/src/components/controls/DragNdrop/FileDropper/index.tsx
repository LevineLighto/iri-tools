'use client';

import { FC, useCallback, useMemo, useRef, useState } from "react";
import { FileDropperProps as Props } from "./props";
import { Droppable } from "../Droppable";
import { ChangeHandler, ClickHandler, DragDropHandler } from "@/types/EventHandlers";
import { Icon } from "@/components/images";
import { Button } from "@/components/controls/Buttons";
import { FileDropperClasses as Classes } from "./classes";

export const FileDropper : FC<Props> = ({
    onAdd,
    onRemove,
    display = 'card',
    itemFormat,
    accept
}) => {
    const [files, setFiles]         = useState<File[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const allowed = useMemo(() => {
        if(!accept) return undefined;

        return accept.split(',');
    }, [accept]);

    const handleDrop = useCallback<DragDropHandler>(event => {
        const dataTransfer = event.dataTransfer;

        const dropped   = dataTransfer.files;

        const added : File[] = [];

        for (let i = 0; i < dropped.length; i++) {
            const file = dropped[i];
            
            if(typeof allowed == 'undefined') {
                added.push(file);
            }

            const namestring    = file.name.split('.');
            const extension     = `.${namestring[namestring.length - 1]}`;

            if(Array.isArray(allowed) && allowed.includes(extension)) {
                added.push(file);
            }
        }

        if(typeof onAdd == 'function') {
            onAdd(added);
        }

        setFiles([...files, ...added]);
    }, [onAdd, files, allowed]);

    const handleClick = useCallback<ClickHandler>(event => {
        if(!inputRef.current) return;
        inputRef.current.click();
    }, [inputRef]);

    const handleDelete = useCallback<(index: number) => ClickHandler<HTMLButtonElement>>(index => {
        return event => {
            if(typeof onRemove == 'function') {
                onRemove(index);
            }
            const modified = [...files];
            modified.splice(index, 1);

            setFiles(modified);
        }
    }, [files]);
    
    const handleSelect = useCallback<ChangeHandler>(event => {
        const input = event.target;
        const inputted = input.files;

        if(!inputted) return;

        const added = [];

        for (let index = 0; index < inputted.length; index++) {
            const file = inputted[index];
            added.push(file);
        }

        setFiles([...files, ...added]);
    }, [files, onAdd]);

    const content = () => {
        if(!files.length) {
            return (
                <div 
                    className={`${
                        Classes.empty.cursor
                    } ${
                        Classes.empty.hover
                    }`}
                    onClick={handleClick}
                >
                    <Droppable
                        onDrop={handleDrop}
                        content={(dragging) => (
                            <div className={`${
                                dragging && Classes.empty.dragging
                            } ${
                                Classes.empty.align
                            } ${
                                Classes.empty.color
                            }`}>
                                <Icon
                                    icon={dragging ? "ArrowDown" : "PlusCircle"}
                                    size="3x"
                                />
                                <div>
                                    Add file
                                </div>
                            </div>
                        )}
                    />
                </div>
            )
        }

        return (
            <Droppable
                onDrop={handleDrop}
                content={(dragging) => (
                    <div 
                        className={`${
                            Classes.itemContainer.display[display]
                        } ${
                            Classes.itemContainer.padding
                        } ${
                            Classes.itemContainer.position
                        }`}
                    >
                        {
                            files.map((file, index) => (
                                <div 
                                    key={`dropped-file-${index}`}
                                    className={`${
                                        Classes.item.background
                                    } ${
                                        Classes.item.display[display]
                                    } ${
                                        Classes.item.margin[display]
                                    } ${
                                        Classes.item.padding[display]
                                    } ${
                                        Classes.item.position
                                    } ${
                                        Classes.item.radius
                                    } ${
                                        Classes.item.shadow
                                    }`}
                                >
                                    <div 
                                        className={Classes.itemDetail.flex}
                                    >
                                        {
                                            typeof itemFormat == 'function' ? 
                                            itemFormat(file, index)
                                            :
                                            file.name
                                        }
                                    </div>
                                    <div 
                                        className={`${
                                            Classes.action.cursor
                                        } ${
                                            Classes.action.position[display]
                                        }`}
                                    >
                                        <Button
                                            onClick={handleDelete(index)}
                                            variant="text"
                                            color="red"
                                        >
                                            <Icon
                                                icon="Times"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                        <div 
                            className={`${
                                Classes.addButton.background
                            } ${
                                Classes.addButton.color
                            } ${
                                Classes.addButton.cursor
                            } ${
                                Classes.addButton.display[display]
                            } ${
                                Classes.item.margin[display]
                            } ${
                                Classes.item.padding[display]
                            } ${
                                Classes.item.position
                            } ${
                                Classes.item.radius
                            } ${
                                Classes.item.shadow
                            }`}
                            onClick={handleClick}
                        >
                            <Icon
                                icon={display == 'card' ? 'PlusCircle' : 'Plus'}
                                size={display == 'card' ? '2x' : 'lg'}
                            />
                            Add new files
                        </div>
                        {
                            dragging && (
                                <div 
                                    className={`${
                                        Classes.overlay.background
                                    } ${
                                        Classes.overlay.display
                                    } ${
                                        Classes.overlay.opacity
                                    } ${
                                        Classes.overlay.position
                                    }`}
                                >
                                    <Icon
                                        icon="ArrowDown"
                                    />
                                </div>
                            )
                        }
                    </div>
                )}
            />
        )
    }

    return (
        <>
            { content() }
            <input 
                onChange={handleSelect}
                type="file" 
                name="file"
                ref={inputRef}
                className={Classes.input}
                multiple={true}
                accept={accept}
            />
        </>
    )
}