'use client';

import { ImageLoader as Loader } from "next/image";

export const ImageLoader : Loader = ({
    src,
    width,
    quality
}) => {
    if(width <= 640) {
        return `${src}-small.webp`;
    }

    if(width <= 1920) {
        return `${src}-medium.webp`;
    }

    if(width <= 2400) {
        return `${src}-large.webp`;
    }

    return `${src}-xl.webp`;
}