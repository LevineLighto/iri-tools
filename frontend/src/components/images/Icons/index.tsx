import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "./props";
import { Icons } from "@/config/icons";

export const Icon : FC<IconProps> = ({
    icon,
    ...props
}) => (
    <FontAwesomeIcon
        icon={Icons[icon]}
        fixedWidth={true}
        {...props}
    />
)