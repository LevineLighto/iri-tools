import { Background } from "@/config/classes/Backgrounds";
import { Paddings } from "@/config/classes/Paddings";
import { Radius } from "@/config/classes/Radius";

export const ToolNavbarClasses = {
    container: {
        background  : Background.transparent,
        display     : 'flex justify-between',
        margin      : 'mb-5',
        overflow    : 'overflow-y-auto lg:overflow-hidden',
        position    : 'relative',
        radius      : Radius.normal.bottom,
    },
    brand   : {
        display : 'flex items-center',
        name    : 'text-2xl font-light'
    }
}