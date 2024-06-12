import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Curriculum Vitae",
    description: "Curriculum Vitae Nicolas Gonot",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/Favicon.ico" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
