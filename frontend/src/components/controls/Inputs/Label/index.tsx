import { FC } from "react";
import { LabelProps } from "./props";
import { BasicLabelClasses as Classes } from "../classes";

export const Label : FC<LabelProps> = ({
    type        = 'input',
    id          = '',
    name        = '',
    label       = '',
    className   = ''
}) => (
    <label
        htmlFor={`${type}-${name}-${id}`}
        className={`${
            Classes.color
        } ${
            Classes.position
        } ${
            Classes.size
        } ${
            Classes.transition
        } ${
            className
        }`}
    >
        {label}
    </label>
)