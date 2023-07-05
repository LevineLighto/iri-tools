import { Icons } from "@/config/icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon' | 'fixedWidth'> {
    icon : keyof typeof Icons,
}