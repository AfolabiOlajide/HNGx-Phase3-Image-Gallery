import { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
    title:  "Sign In Page",
    description: "Sign In page for Image Gallery Application"
}

export default function layout(
    { children }:
    { children: React.ReactNode }
) {
    return (
        <html lang="en">
        <body className={`${lato.className}`}>
            {children}
        </body>
        </html>
    )
}
