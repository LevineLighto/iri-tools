import { ImageList } from "@/ImageConverter/components";
import { Headings } from "@/components/typography";

export const metadata = {
    title: `Image Converter - ${ process.env.NEXT_PUBLIC_NAME }`,
    description: 'Convert image to jpg, png, & webp format',
}

const ImageConverter = () => (
    <>
        <Headings
                level={1}
            >
                Image Converter
            </Headings>
            <p className="mb-8">
                Convert your .jpg, .png, .webp images
            </p>
            <ImageList/>
    </>
)

export default ImageConverter;