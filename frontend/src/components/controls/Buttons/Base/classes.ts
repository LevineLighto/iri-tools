import { Background, HoverBackground } from "@/config/classes/Backgrounds";
import { BorderColor, BorderSize } from "@/config/classes/Border";
import { Color, HoverColor } from "@/config/classes/Colors";
import { Paddings } from "@/config/classes/Paddings";
import { Radius } from "@/config/classes/Radius";

export const ButtonClasses = {
    padding : Paddings.sm,
    radius  : Radius.normal.all,
}

export const VariantClasses = {
    solid   : {
        border      : BorderSize.none,
        background  : Background,
        color       : {
            white       : Color.black,
            transparent : Color.black,
            primary     : Color.white,
            secondary   : Color.white,
            tertiary    : Color.white,
            light       : Color.dark,
            dark        : Color.white,
            red         : Color.white,
        },
        hover       : {
            white       : HoverBackground.light,
            transparent : '',
            primary     : `${HoverBackground.secondary} ${HoverColor.white}`,
            secondary   : HoverBackground.tertiary,
            tertiary    : '',
            light       : '',
            dark        : '',
            red         : '',
        }
    },
    outline : {
        border      : BorderSize.thin,
        borderColor : BorderColor,
        color       : Color,
        background  : Background.transparent,
        hover       : {
            white       : `${HoverBackground.white} ${HoverColor.black}`,
            transparent : HoverColor.black,
            primary     : `${HoverBackground.primary} ${HoverColor.tertiary}`,
            secondary   : `${HoverBackground.secondary} ${HoverColor.white}`,
            tertiary    : `${HoverBackground.tertiary} ${HoverColor.white}`,
            light       : `${HoverBackground.light} ${HoverColor.dark}`,
            dark        : `${HoverBackground.dark} ${HoverColor.white}`,
            red         : `${HoverBackground.red} ${HoverColor.white}`,
        }
    },
    text    : {
        border      : BorderSize.none,
        color       : Color,
        background  : Background.transparent,
        hover       : {
            white       : `${HoverBackground.white} ${HoverColor.black}`,
            transparent : HoverColor.black,
            primary     : `${HoverBackground.primary} ${HoverColor.tertiary}`,
            secondary   : `${HoverBackground.secondary} ${HoverColor.white}`,
            tertiary    : `${HoverBackground.tertiary} ${HoverColor.white}`,
            light       : `${HoverBackground.light} ${HoverColor.dark}`,
            dark        : `${HoverBackground.dark} ${HoverColor.white}`,
            red         : `${HoverBackground.red} ${HoverColor.white}`,
        }
    },
}