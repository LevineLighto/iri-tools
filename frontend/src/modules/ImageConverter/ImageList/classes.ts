import { Background, HoverBackground } from "@/config/classes/Backgrounds";
import { Color, HoverColor } from "@/config/classes/Colors";
import { Paddings } from "@/config/classes/Paddings";
import { Radius } from "@/config/classes/Radius";

export const ImageListClasses = {
    background  : Background.light,
    padding     : Paddings.sm,
    radius      : Radius.normal.all,
}

export const ItemListClasses = {
    download : {
        color       : `${Color.primary} ${HoverColor.white}`,
        background  : `${Background.transparent} ${HoverBackground.primary}`,
        padding     : Paddings.sm,
        radius      : Radius.normal.all,
    },
    queueFull : {
        background  : Background.light,
        color       : Color.dark,
        padding     : Paddings.sm,
    }
}