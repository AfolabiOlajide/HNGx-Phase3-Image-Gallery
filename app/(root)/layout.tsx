import '../globals.css'
import type { Metadata } from 'next'
import { Croissant_One } from 'next/font/google'

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
      <body className={croissant.className}>{children}</body>
    </html>
  )
}
