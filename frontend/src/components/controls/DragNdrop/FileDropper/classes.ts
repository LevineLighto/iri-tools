import { Background, HoverBackground } from "@/config/classes/Backgrounds";
import { Color, HoverColor } from "@/config/classes/Colors";
import { Paddings, PortraitPaddings } from "@/config/classes/Paddings";
import { Radius } from "@/config/classes/Radius";

export const FileDropperClasses = {
    action: {
        cursor  : 'cursor-pointer',
        position: {
            card: 'absolute end-0 top-0',
            list: 'flex-none',
        },
    },
    addButton: {
        background  : `${Background.white} ${HoverBackground.primary}`,
        color       : `${Color.dark} ${HoverColor.white}`,
        cursor      : 'cursor-pointer',
        display     : {
            card    : 'flex flex-col items-center',
            list    : 'block',
        },
    },
    input: 'hidden',
    empty: {
        align   : 'text-center',
        cursor  : 'cursor-pointer',
        dragging: 'opacity-50',
        hover   : 'hover:opacity-70',
        color   : Color.dark,
    },
    item : {
        background  : Background.white,
        position    : 'relative',
        radius      : Radius.normal.all,
        shadow      : 'shadow',
        display     : {
            card    : 'block',
            list    : 'flex w-full',
        },
        margin      : {
            card    : 'mx-1 mb-1',
            list    : 'mb-1 last:mb-0',
        },
        padding     : {
            card    : PortraitPaddings.xl,
            list    : Paddings.sm,
        },
    },
    itemContainer: {
        position: 'relative',
        padding : Paddings.sm,
        display : {
            list: 'block max-h-[75vh] overflow-y-auto',
            card: 'flex flex-wrap items-stretch justify-center',
        }
    },
    itemDetail: {
        flex    : 'flex-1',
    },
    overlay: {
        background  : Background.white,
        display     : 'flex justify-center items-center',
        opacity     : 'opacity-50',
        position    : 'absolute inset-0',
    }
}