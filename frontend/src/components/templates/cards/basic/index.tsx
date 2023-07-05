import { FC } from "react";
import { BasicCardProps as Props } from "./props";
import { BasicCardClasses as Classes } from "./classes";

export const BasicCard : FC<Props> = ({
    className,
    children,
    ...props
}) => (
    <div
        className={`${
            Classes.background
        } ${
            Classes.radius
        } ${
            Classes.shadow
        } ${
            Classes.text
        } ${
            Classes.padding
        } ${
            Classes.position
        } ${
            className
        }`}
        {...props}
    >
        { children }
    </div>
)