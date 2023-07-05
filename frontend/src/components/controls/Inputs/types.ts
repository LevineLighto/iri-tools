import { ComponentPropsWithRef } from "react";

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
    label? : string,
}