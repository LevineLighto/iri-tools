'use client';

import { FC, useMemo } from "react";
import { HeadingsProps as Props } from "./props";
import { HeadingsClasses as Classes } from "./classes";
import { Montserrat } from "@/config/fonts";

export const Headings : FC<Props> = ({
    level = 1,
    className,
    children,
    ...props
}) => {
    const classname = useMemo(() => {
        return `${
            Classes.base
        } ${
            Classes.levels[level]
        } ${
            className
        } ${
            Montserrat.className
        }`
    }, [level, className]);

    if (level == 2) {
        return (
            <h2 
                className={classname}
                {...props}
            >
                {children}
            </h2>
        )
    }

    if (level == 3) {
        return (
            <h3 
                className={classname}
                {...props}
            >
                {children}
            </h3>
        )
    }

    if (level == 4) {
        return (
            <h4 
                className={classname}
                {...props}
            >
                {children}
            </h4>
        )
    }

    if (level == 5) {
        return (
            <h5 
                className={classname}
                {...props}
            >
                {children}
            </h5>
        )
    }

    if (level == 6) {
        return (
            <h6 
                className={classname}
                {...props}
            >
                {children}
            </h6>
        )
    }

    return (
        <h1 
            className={classname}
            {...props}
        >
            {children}
        </h1>
    )
}