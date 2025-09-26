import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maria Willem | Interior & Décor Designer",
  description: "Maria Willem's official portfolio. Specializing in elegant, personalized interior and décor design for homes and workspaces. Let's design a space that tells your story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}