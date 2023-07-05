import { FC } from "react";
import Link from "next/link";
import { Icon } from "@/components/images";
import { ToolNavigationClasses as Classes } from "./classes";

const regex = /^\/+|\/+$/g

export const ToolNavigation : FC = () => {

    return (
        <>
            <nav
                className={`${
                    Classes.nav.display
                } ${
                    Classes.nav.index
                } ${
                    Classes.nav.position
                } ${
                    Classes.nav.color
                }`}
            >
                <Link 
                    href="/"
                >
                    <Icon
                        icon="Home"
                        size="lg"
                    />
                </Link>
            </nav>
        </>
    )
}