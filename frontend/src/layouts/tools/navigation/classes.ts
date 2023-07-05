import { Color, HoverColor } from "@/config/classes/Colors";
import { Paddings } from "@/config/classes/Paddings";

export const ToolNavigationClasses = {
    button: {
        display : 'lg:hidden z-50',
        cursor  : 'cursor-pointer',
        color   : {
            active  : Color.white,
            inactive: Color.black
        }
    },
    nav: {
        display     : 'flex flex-row items-center justify-center',
        index       : 'z-40',
        position    : 'relative',
        color       : `${Color.primary} ${HoverColor.secondary}`
    },
    navItem: {
        margin  : 'mx-2',
        padding : Paddings.xs,
        color   : {
            active  : Color.primary,
            inactive: '',
            hover   : HoverColor.secondary
        }
    },
}