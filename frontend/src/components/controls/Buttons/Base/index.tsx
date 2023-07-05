import { FC } from "react";
import { ButtonProps as Props } from "./props";
import { 
    ButtonClasses as Base, 
    VariantClasses as Classes
} from "./classes";

export const Button : FC<Props> = ({
    variant     = 'solid',
    color       = 'primary',
    className   = '',
    children,
    ...props
}) => (
    <button
        className={`${ 
            Base.padding 
        } ${ 
            Base.radius
        } ${
            Classes[variant].border
        } ${
            Classes[variant].color[color]
        } ${
            Classes[variant].hover[color]
        } ${ 
            variant == 'solid' ?
            Classes[variant].background[color]
            :
            Classes[variant].background
        } ${
            variant == 'outline' &&
            Classes[variant].borderColor[color]
        } ${ className }`}
        {...props}
    >
        {children}
    </button>
)