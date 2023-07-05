import { Background } from "@/config/classes/Backgrounds";
import { ComponentPropsWithoutRef } from "react";
import { VariantClasses } from "./classes";

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    color?  : keyof typeof Background,
    variant?: keyof typeof VariantClasses,
}