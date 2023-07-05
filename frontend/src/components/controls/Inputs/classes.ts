import { Color } from "@/config/classes/Colors";
import { Paddings } from "@/config/classes/Paddings";
import { Radius } from "@/config/classes/Radius";

export const BasicInputClasses = {
    container   : 'relative',
    border      : 'border border-primary hover:border-secondary focus:border-tertiary',
    display     : 'block peer',
    margin      : 'mb-3',
    outline     : 'focus:outline-primary/[.5]',
    padding     : Paddings.sm,
    placeholder : 'placeholder-transparent',
    radius      : Radius.normal.all,
    text        : 'text-base',
}

export const BasicLabelClasses = {
    color       : `${Color.dark} peer-placeholder-shown:text-slate-400 peer-focus:text-slate-700`,
    position    : 'absolute left-0 -top-3.5 peer-placeholder-shown:top-2 peer-focus:-top-3.5',
    size        : 'text-sm peer-placeholder-shown:text-base peer-focus:text-sm',
    transition  : 'transition-all',
}