import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "@/config/fonts";
import { ToolNavigation } from "../navigation";
import { ToolNavbarClasses as Classes } from "./classes";

export const ToolNavbar : FC = () => (
    <div 
        className={`${
            Classes.container.background
        } ${
            Classes.container.display
        } ${
            Classes.container.margin
        } ${
            Classes.container.overflow
        } ${
            Classes.container.position
        } ${
            Classes.container.radius
        }`}
    >
        <Link 
            href="/"
            className={Classes.brand.display}
        >
            <Image
                src="/images/logo.png"
                alt="logo"
                height={32}
                width={32}
                className="me-2"
            />
            <div className={`${Classes.brand.name} ${Montserrat.className}`}>
                IriTools
            </div>
        </Link>
        <ToolNavigation/>
    </div>
)