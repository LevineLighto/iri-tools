import { Card } from "@/components/templates/cards";
import { Background } from "@/config/classes/Backgrounds";
import { PortraitPaddings } from "@/config/classes/Paddings";
import { ToolNavbar } from "@/layouts/tools";
import { FC, ReactNode } from "react";

const ToolLayout : FC<{children : ReactNode, [key: string] : any}> = ({
    children
}) => {
    return (
        <>
            <main 
                className={`min-h-screen relative ${PortraitPaddings.xl} ${Background.light}`}
            >
                <Card
                    className="container mx-auto"
                >
                    <ToolNavbar/>
                    {children}
                </Card>
            </main>
        </>
    )
}

export default ToolLayout;