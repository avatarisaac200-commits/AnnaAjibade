import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Ajibade | Senior Project Manager",
  description:
    "Senior-level project management for high-impact initiatives across education, youth development, leadership, and community engagement.",
  openGraph: {
    title: "Anna Ajibade | Senior Project Manager",
    description:
      "Senior-level project management for high-impact initiatives across education, youth development, leadership, and community engagement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem("theme");
                  var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  var theme = saved || (systemDark ? "dark" : "light");
                  document.documentElement.classList.toggle("dark", theme === "dark");
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
