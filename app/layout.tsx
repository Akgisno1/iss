import type { Metadata } from "next";
import "./globals.css";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title: "ISS Club",
  description: "International Student Society Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            .font-mont {
              font-family: 'Montserrat', sans-serif;
            }
            .font-goudy {
              font-family: 'Sorts Mill Goudy', sans-serif;
            }
          `}
        </style>
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
