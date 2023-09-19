import type { Metadata } from 'next'
import { Croissant_One } from 'next/font/google'

import '../globals.css'
import Nav from './components/Nav';

const croissant = Croissant_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: 'Image Gallery Application',
  description: 'A Drag and Drop Image Gallery Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${croissant.className} bg-dark text-white`}>
        <Nav />
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
