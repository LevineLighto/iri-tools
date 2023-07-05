import { ComponentPropsWithRef } from "react";

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'onChange'> {
    values      : ( string | number ) [],
    labels?     : ( string | number ) [],
    label?      : string,
    onChange?   : (value : string | number) => any,
}