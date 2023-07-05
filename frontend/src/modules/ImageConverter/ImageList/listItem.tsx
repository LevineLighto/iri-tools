"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ListItemProps as Props } from "./types";
import { ItemListClasses as Classes} from "./classes";
import { FileDisplay, Icon } from "@/components/images";
import { useFetch } from "@/hooks/Fetch";
import { Button } from "@/components/controls/Buttons";
import { InputHandler, SubmitEventHandler } from "@/types/EventHandlers";
import { useDispatch, useSelector } from "react-redux";
import { isProcessing, isQueueFull, queueNumber } from "@/redux/reducers/Queue";
import { queue, setQueueCompleted } from "@/redux/reducers/Queue";
import { Select } from "@/components/controls/Inputs";
import { Store } from "@/redux/store/types";

export const ListItem : FC<Props> = ({
    file
}) => {
    const aborter = useRef<AbortController>();
    const [uploading, setUploading] = useState(false);
    const [result, setResult]       = useState<Blob>();
    const [error, setError]         = useState<Error>();
    const [queueId, setQueueId]     = useState<number>();
    const [ext, setExt]             = useState('webp');
    
    const formdata  = useRef<FormData>(new FormData);

    const num       = useSelector(queueNumber);
    const queueFull = useSelector(isQueueFull);
    const onProcess = useSelector((state : Store) => isProcessing(state, queueId));
    const dispatch  = useDispatch();

    const { Basic: Sender } = useFetch();


    useEffect(() => {
        return () => {
            aborter.current?.abort()
        };
    }, []);

    useEffect(() => {
        if(
            !onProcess 
            || 
            typeof result != 'undefined'
            ||
            typeof error != 'undefined'
        ) return;

        const data = formdata.current;
        data.append('file', file);

        aborter.current = Sender<Blob>({
            url         : 'image/convert',
            method      : 'post',
            data        : data,
            output      : 'blob',
            onComplete  : () => {
                setUploading(false);
                setTimeout(() => {
                    dispatch(setQueueCompleted(queueId as number));
                }, 1000)
            },
            onSuccess   : (data) => {
                setResult(data as Blob);
            },
            onFailed    : (error) => {
                setUploading(false);
                setError(error);

                setTimeout(() => {
                    dispatch(setQueueCompleted(queueId as number));
                }, 1000)
            }
        });
    }, [onProcess])

    const handleUpload = useCallback<SubmitEventHandler>(event => {
        event.preventDefault();
        if(uploading || queueFull) {
            return;
        }

        const id = num;
        setQueueId(id);
        dispatch(queue(id));

        const form = event.target as HTMLFormElement;

        formdata.current = new FormData(form);

        setUploading(true);
    }, [uploading, queueFull, num, dispatch]);

    const handleChange = useCallback<InputHandler>(extension => {
        setExt(extension as string);
    }, [])

    return (
        <div
            className="flex w-full justify-between items-center"
        >
            <div>
                <FileDisplay
                    image={file}
                />
                {file.name}
            </div>
            {
                (
                    !uploading 
                    && 
                    typeof result == 'undefined'
                    &&
                    typeof error == 'undefined'
                    &&
                    !queueFull
                ) ? (
                    <form
                        className="flex "
                        onSubmit={handleUpload}
                    >
                        <Select
                            name="format"
                            className="mr-1"
                            values={['webp', 'jpg', 'png']}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                        >
                            Convert
                        </Button>
                    </form>
                ) : uploading? (
                    <Icon
                        icon="Spinner"
                        className="animate-spin"
                    />
                ) : result ? (
                    <a
                        href={URL.createObjectURL(result)}
                        download={`${file.name}.${ext}`}
                        className={`${
                            Classes.download.background
                        } ${
                            Classes.download.color
                        } ${
                            Classes.download.padding
                        } ${
                            Classes.download.radius
                        }`}
                    >
                        <Icon
                            icon="Download"
                            className="me-2"
                            size="lg"
                        />
                        Download
                    </a>
                ) : queueFull? (
                    <div
                        className={`${
                            Classes.queueFull.background
                        } ${
                            Classes.queueFull.color
                        } ${
                            Classes.queueFull.padding
                        }`}
                    >
                        Queue full, max 5 requests per minute
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}