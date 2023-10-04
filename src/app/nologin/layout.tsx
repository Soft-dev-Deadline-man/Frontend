import React from "react";
import { NavbarNoLogin }  from "@/components/NavbarNoLogin";

export const metadata = {
    title: 'Roadtrip in CHON',
    description: 'The Tarvelling Website',
}

export default function NoLoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-state-800">
                <NavbarNoLogin />
                {children}

            </body>
        </html>
    );
}
