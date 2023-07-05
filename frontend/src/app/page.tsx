import { BackgroundImage, Icon } from "@/components/images";
import { Headings } from "@/components/typography";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <BackgroundImage
                src="/images/backgrounds/tools"
            />
            <div className="flex min-h-[80vh] flex-col items-center justify-between text-white p-24">
                <div className="text-center">
                    <Headings
                        level={'title'}
                    >
                        { process.env.NEXT_PUBLIC_NAME }
                    </Headings>
                    <p>
                        Iri{"'"}s tool collection
                    </p>
                </div>
                    
                <Link
                    href={'https://unsplash.com/photos/CX8ooha2yLA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'}
                    target="_blank"
                    className="bg-gray-800/25 hover:bg-gray-800/50 px-3 py-2 rounded"
                >
                    Image by Edgar Castrejon @ Unsplash
                </Link>
            </div>
            <main className="bg-white rounded-t-3xl min-h-[20vh]">
                <div className="flex items-stretch justify-center py-5 divider-y">
                    <Link
                        href={'image-converter'}
                        className="flex items-center h-100 text-slate-400 px-5 py-3 hover:text-slate-600 hover:bg-slate-200 rounded-lg group"
                    >
                        <Icon
                            icon='Images'
                            size="2x"
                            className="me-2 text-primary group-hover:text-secondary"
                        />
                        <Headings
                            level={3}
                            className="text-center !mb-0"
                        >
                            Image Converter
                        </Headings>
                    </Link>
                </div>
            </main>
        </>
    )
}
