import './globals.css'
import { OpenSans } from '@/config/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Providers } from './providers'
config.autoAddCss = false


export const metadata = {
    title: 'IriTools',
    description: 'Tool Collection',
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={OpenSans.className}>
                <Providers>
                    { children }
                </Providers>
            </body>
        </html>
    )
}
