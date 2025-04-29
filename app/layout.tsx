// app/layout.tsx
import type { Metadata } from "next";
import StyledComponentsRegistry from "./styled-components-registry";

export const metadata: Metadata = {
    title: "Basic Link Generator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
