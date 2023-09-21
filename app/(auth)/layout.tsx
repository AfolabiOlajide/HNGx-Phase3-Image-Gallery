import { Metadata } from "next";
import { Lato } from "next/font/google";

// locals
import '../../app/globals.css'

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
        <body className={`${lato.className} bg-dark text-white flex items-center justify-center h-screen`}>
            <main className="bg-white/5 p-[1rem] backdrop-filter backdrop-blur-[4rem] rounded-md w-[90%] md:w-[40%] lg:w-[20%]">
                {children}
            </main>
        </body>
        </html>
    )
}
