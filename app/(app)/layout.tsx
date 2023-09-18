import { Metadata } from "next";
import { Croissant_One } from 'next/font/google'

const croissant = Croissant_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Image Galerry App",
    description: "Application for image gallery (Drag and Drop)"
}

export default function layout(
    { children }:
    { children: React.ReactNode }
) {
    return (
        <html lang="en">
        <body className={`${croissant.className}`}>
            <main>
                {children}
            </main>
        </body>
        </html>
    )
}
