"use client";

import { FileDropper } from "@/components/controls/DragNdrop";
import { FC, useEffect } from "react";
import { ListItem } from "./listItem";
import { useDispatch, useSelector } from "react-redux";
import { getQueue } from "@/redux/reducers/Queue";
import { clearQueue } from "@/redux/reducers/Queue";
import { ImageListClasses as Classes } from "./classes";

export const ImageList : FC = () => {
    const dispatch  = useDispatch();
    const queue     = useSelector(getQueue);

    useEffect(() => {
        if(!queue.queued.length) {
            return
        }

        const incomplete = queue.queued.filter(item => !item.completed).length;

        if(!!incomplete) {
            return;
        }

        const now = (new Date()).getTime();
        const difference = queue.expire - now;

        if(difference <= 0) {
            setTimeout(() => {
                dispatch(clearQueue());
            }, 60000);
        } else {
            setTimeout(() => {
                dispatch(clearQueue());
            }, difference);
        }
    }, [queue]);

    return (
        <div className={`${
            Classes.background
        } ${
            Classes.padding
        } ${
            Classes.radius
        }`}>
            <FileDropper
                accept=".jpg,.jpeg,.png,.webp"
                display="list"
                itemFormat={(file, index) => (
                    <ListItem
                        file={file}
                    />
                )}
            />
        </div>
    )
}