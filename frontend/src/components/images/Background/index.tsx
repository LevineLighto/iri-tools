'use client';

import { FC } from "react";
import { BackgroundImageProps as Props } from "./props";
import { BackgroundImageClasses as Classes } from "./classes";
import Image from "next/image";
import { ImageLoader } from "@/helpers/Image";

export const BackgroundImage : FC<Props> = ({
    src
}) => (
    <div 
        className={`${
            Classes.container.index
        } ${
            Classes.container.position
        } ${
            Classes.container.brightness
        }`}
    >
        <Image
            fill={true}
            src={src}
            alt="Background Image"
            loader={ImageLoader}
        />
    </div>
)