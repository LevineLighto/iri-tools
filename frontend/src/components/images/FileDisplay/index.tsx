'use client';

import { FC, useEffect, useRef, useState } from "react";
import { FileDisplayProps as Props } from "./props";
import { FileDisplayClasses as Classes} from "./classes";
import Image from "next/image";

export const FileDisplay : FC<Props> = ({
    image,
    className = ''
}) => {
    const [src, setSrc] = useState<string>('');

    const reader = useRef<FileReader>(new FileReader);

    useEffect(() => {
        reader.current.onload = event => {
            setSrc(reader.current.result as string);
        }
    }, [])

    useEffect(() => {
        reader.current.readAsDataURL(image);
    }, [image]);

    return (
        <div className={`${
            Classes.container.size
        } ${
            className
        }`}>
            {
                !!src && (
                    <Image 
                        src={src}
                        alt="file display"
                        fill={true}
                        className={Classes.image}
                    />
                )
            }
        </div>
    )
}